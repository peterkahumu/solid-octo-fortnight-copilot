// Create web server
const express = require('express');
const app = express();
const port = 3000;

// allow cross origin resource sharing
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// get comments
app.get('/comments', (req, res) => {
    res.json([
        {
            id: 1,
            content: 'Hello World!'
        },
        {
            id: 2,
            content: 'Goodbye World!'
        }
    ]);
});

// start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});