import express from 'express';
import { Client } from 'pg';
import { config } from 'dotenv';

config();

const app = express();
const PORT = 5000;

//establish db connection
const client = new Client({password: process.env.PG_PASS});
await client.connect();
console.log("Connected!");

app.post('/add-user', (req, res, next) => {
    res.send('Hello World!');
})

app.get('/get-saved-data', (req, res, next) => {
    res.send('Hello World!');
})

app.post('/add-semester', (req, res, next) => {
    res.send('Hello World!');
})

app.post('/remove-semester', (req, res, next) => {
    res.send('Hello World!');
})

app.post('/add-course', (req, res, next) => {
    res.send('Hello World!');
})

app.post('/remove-course', (req, res, next) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log( `server started at http://localhost:${PORT}` );
});