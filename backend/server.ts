import express from 'express';
import { Client, Pool } from 'pg';
import { config } from 'dotenv';

config();

const app = express();
const PORT = 5000;

//establish elephantsql db connection
const client = new Pool({connectionString: process.env.PG_URL, max: 5});
await client.connect();
console.log("Connected to DB!");

app.post('/user', (req, res, next) => {
    res.send('Hello World!');
})

app.get('/data', (req, res, next) => {
    res.send('Hello World!');
})

app.post('/semester', (req, res, next) => {
    res.send('Hello World!');
})

app.delete('/semester', (req, res, next) => {
    res.send('Hello World!');
})

app.post('/course', (req, res, next) => {
    res.send('Hello World!');
})

app.delete('/course', (req, res, next) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log( `server started at http://localhost:${PORT}` );
});