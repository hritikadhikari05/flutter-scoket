const io = require('socket.io')();

io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for chat messages
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);

    // Emit the message to all connected clients
    io.emit('chat message', msg);
  });

  // Disconnect event
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const port = 3000;
io.listen(port);
console.log('listening on port ', port);
