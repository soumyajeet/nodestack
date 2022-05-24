const express = require('express');
const app = express();
// const server = require('http').createServer(app);
// const WebSocket = require('ws');

// const wss = new WebSocket.Server({server});

app.use('/api',require('./index'));

const PORT = process.env.PORT || 8083;

app.listen(PORT, 
    console.log(`Server is running on ${PORT}`)
);