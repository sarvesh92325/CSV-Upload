const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const assetsPath = path.join(__dirname, 'assets');
app.use('/assets', express.static(assetsPath));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', require('./routes'));

app.listen(8000, (err) => {
    if (err) {
        console.log("Error Connecting to server!!");
        return;
    }
    console.log("Successfully Connected to Server, 8000!!");
});
