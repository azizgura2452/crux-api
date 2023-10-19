
const express = require('express');
const router = express.Router();
const api = require('../api/ChromeReport');

router.get('/', (req, res) => {
    res.write('Welcome to CrUX API')
    res.end();
})

router.post('/report', (req, res) => {
    const url = req.body?.url;
    api(url)
        .then(data => {
            console.log(data);
            res.json(data);
            res.end();
        })
        .catch(err => {
            console.error('Error:', err.message);
            res.status(400).json({ error: err.message });
        });
});


module.exports = router;