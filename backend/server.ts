import express from 'express';
import bodyParser from 'body-parser';
import { Client, Pool } from 'pg';
import { config } from 'dotenv';

config();

const app = express();
app.use(bodyParser.json());
const PORT = 5000;

//establish elephantsql db connection
const client = new Pool({connectionString: process.env.PG_URL, max: 5});
await client.connect();
console.log("Connected to DB!");

//create database and table
await client.query('CREATE TABLE PennData (name varchar(1000), email varchar(1000), data varchar(8000))');

app.post('/user', async (req, res, next) => {
    let body = req.body;

    if (body.secret != process.env.API_SECRET) {
        res.send({completed: false})
        return;
    }

    //check if exists
    const checkQuery = {
        text: `SELECT * FROM PennData WHERE name = ${body.name} AND email = ${body.email};`
    }

    const exists = await client.query(checkQuery);

    if (!exists.rows[0]) {
        const createQuery = {
            text: `INSERT INTO PennData (name, email, data) VALUES (${body.name}, ${body.email}, []);`
        }
        await client.query(createQuery);
        res.send({created: true});
    } else {
        res.send({created: false});
    }
})

app.get('/data', async (req, res, next) => {
    let body = req.body;

    if (body.secret != process.env.API_SECRET) {
        res.send({completed: false})
        return;
    }

    //check if exists
    const checkQuery = {
        text: `SELECT data FROM PennData WHERE name = ${body.name} AND email = ${body.email};`
    }

    const data = await client.query(checkQuery);

    res.send({data: JSON.parse(data.rows[0])});

})

app.post('/semester', async (req, res, next) => {
    let body = req.body;

    if (body.secret != process.env.API_SECRET) {
        res.send({completed: false})
        return;
    }

    //get data
    const getQuery = {
        text: `SELECT data FROM PennData WHERE name = ${body.name} AND email = ${body.email};`
    }
    const data = await client.query(getQuery);
    const semesters = JSON.parse(data.rows[0]);

    semesters.push([]);

    //update data
    const newData = JSON.stringify(semesters);
    const updateQuery = {
        text: `UPDATE PennData SET data = ${newData} WHERE  name = ${body.name} AND email = ${body.email};`
    }
    await client.query(updateQuery);

    res.send({completed: true});
})

app.delete('/semester/:index', async (req, res, next) => {
    let body = req.body;

    if (body.secret != process.env.API_SECRET) {
        res.send({completed: false})
        return;
    }

    //get data
    const getQuery = {
        text: `SELECT data FROM PennData WHERE name = ${body.name} AND email = ${body.email};`
    }
    const data = await client.query(getQuery);
    const semesters = JSON.parse(data.rows[0]) as string[][];

    semesters.splice(body.index, 1);

    //update data
    const newData = JSON.stringify(semesters);
    const updateQuery = {
        text: `UPDATE PennData SET data = ${newData} WHERE  name = ${body.name} AND email = ${body.email};`
    }
    await client.query(updateQuery);

    res.send({completed: true});
})

//needs semesterIndex, courseName
app.post('/course', async (req, res, next) => {
    let body = req.body;

    if (body.secret != process.env.API_SECRET) {
        res.send({completed: false})
        return;
    }

    //get data
    const getQuery = {
        text: `SELECT data FROM PennData WHERE name = ${body.name} AND email = ${body.email};`
    }
    const data = await client.query(getQuery);
    const semesters = JSON.parse(data.rows[0]) as string[][];

    semesters[body.semesterIndex].push(body.courseName);

    //update data
    const newData = JSON.stringify(semesters);
    const updateQuery = {
        text: `UPDATE PennData SET data = ${newData} WHERE  name = ${body.name} AND email = ${body.email};`
    }
    await client.query(updateQuery);

    res.send({completed: true});
})

app.delete('/course/:index', async (req, res, next) => {
    let body = req.body;

    if (body.secret != process.env.API_SECRET) {
        res.send({completed: false})
        return;
    }

    //get data
    const getQuery = {
        text: `SELECT data FROM PennData WHERE name = ${body.name} AND email = ${body.email};`
    }
    const data = await client.query(getQuery);
    const semesters = JSON.parse(data.rows[0]) as string[][];

    semesters[body.semesterIndex].splice(body.courseIndex, 1);

    //update data
    const newData = JSON.stringify(semesters);
    const updateQuery = {
        text: `UPDATE PennData SET data = ${newData} WHERE  name = ${body.name} AND email = ${body.email};`
    }
    await client.query(updateQuery);

    res.send({completed: true});
})

app.listen(PORT, () => {
    console.log( `server started at http://localhost:${PORT}` );
});