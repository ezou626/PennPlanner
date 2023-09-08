import express from 'express';
import { Client } from 'pg';

const app = express();
const PORT = 5000;

//establish db connection
const client = new Client();
await client.connect();
console.log("Connected!");

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