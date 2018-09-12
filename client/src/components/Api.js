import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3000');

const subscribeToTimer = (callback) => {
  socket.on('timer', timestamp => callback(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

export default subscribeToTimer