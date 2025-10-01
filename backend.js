const express = require('express');
const app = express();

// Socket.io setup
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { pingInterval: 2000, pingTimeout: 5000 });

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const backEndPlayers = {};
const backEndProjectiles = {};

const SPEED = 5;
let projectileId = 0;
io.on('connection', (socket) => {
  console.log('a user connected');
  backEndPlayers[socket.id] = {
    x: 500 * Math.random(),
    y: 500 * Math.random(),
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    sequenceNumber: 0
  };

  io.emit('updatePlayers', backEndPlayers);

  socket.on('shoot', ({ x, y, angle, }) => {
    projectileId++;

    const velocity = {
      x: Math.cos(angle) * 5,
      y: Math.sin(angle) * 5
    };

    backEndProjectiles[projectileId] = {
      x,
      y,
      velocity,
      playerId: socket.id
    };

    // Handle shooting logic here if needed
    console.log(`Player ${socket.id} shot a projectile from (${x}, ${y}) with velocity ${velocity.x}, ${velocity.y}`);
  });

  socket.on('disconnect', (reason) => {
    delete backEndPlayers[socket.id];
    io.emit('updatePlayers', backEndPlayers);
  });

  socket.on('keydown', ({ keycode, sequenceNumber }) => {
    backEndPlayers[socket.id].sequenceNumber = sequenceNumber;

    switch (keycode) {
      case 'KeyW':
        backEndPlayers[socket.id].y -= SPEED;
        break;
      case 'KeyA':
        backEndPlayers[socket.id].x -= SPEED;
        break;
      case 'KeyS':
        backEndPlayers[socket.id].y += SPEED;
        break;
      case 'KeyD':
        backEndPlayers[socket.id].x += SPEED;
        break;
    }
  });
});

setInterval(() => {
  io.emit('updatePlayers', backEndPlayers);
}, 15);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log('server loaded successfully');
