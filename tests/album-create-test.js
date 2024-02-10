/* eslint-disable no-undef */
const { expect } = require('chai');
const request = require('supertest');
const db = require('../src/db');
const app = require('../src/app');


describe('create album', () => {
  describe('/albums', () => {
    describe('POST', () => {
      it('creates a new album in the database', async () => {
        const {rows} = await db.query('INSERT INTO Artists (name, genre) VALUES ($1, $2) RETURNING *', ['Taylor Swift', 'pop'])
        const id = rows[0].id
        const { status, body } = await request(app).post(`/albums/${id}`).send({
          name: 'Michael Jackson',
          year: 1983,
         });

        expect(status).to.equal(201);
        expect(body.name).to.equal('Michael Jackson');
        expect(body.year).to.equal(1983);

        const {
          rows: [albumData],
        } = await db.query(`SELECT * FROM Album WHERE id = ${body.id}`);
        expect(albumData.name).to.equal('Michael Jackson');
        expect(albumData.year).to.equal(1983);
       });
     });
   });
 });
