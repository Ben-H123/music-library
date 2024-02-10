const db = require("../db/index.js")

const createAlbum = async (req, res) => {
  const { name, year } = req.body
  const { id } = req.params

  try {
    const { rows: [ album ] } = await db.query(`INSERT INTO Album (name, year, artistId) VALUES ($1, $2, $3) RETURNING *`, [name, year, id])
    res.status(201).json(album)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.message)
  }
}

module.exports = { createAlbum }