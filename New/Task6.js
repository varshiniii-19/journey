const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secret = 'abc123';
// Generate token
app.get('/login', (req, res) => {
    const token = jwt.sign({ name: 'Rahul' }, secret);
    res.send(token);
});
// Authorized endpoint
app.get('/home', (req, res) => {
    const token = req.headers.authorization;
    jwt.verify(token, secret, (err) => {
        if (err) 
            return res.send('Access Denied');
        res.send('Access Granted');
    });
});

app.listen(3000, () => console.log('Server started'));