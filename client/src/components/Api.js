import openSocket from 'socket.io-client';
export const socket = openSocket('http://localhost:3000/italian');
export const subscribeToMessages = callback => socket.on('broadcast', message => callback(message));
