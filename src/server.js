
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.listen(4000);
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.write('Welcome to CrUX API')
    res.end();
});

const mainRouter = require('./routes/Main');

app.use('/crux', mainRouter);