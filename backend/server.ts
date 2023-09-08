import express from 'express';
const app = express();
const PORT = 5000;

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