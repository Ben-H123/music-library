const express = require('express')
const createArtist = require('../controllers/artist')

const router = express.Router()

router.post('/', createArtist.post)

module.exports = router