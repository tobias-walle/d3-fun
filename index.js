let express = require('express'),
    path = require('path'),
    morgan = require('morgan');

let app = express();

app.use(morgan('dev'));

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


let port = 7777;
app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});