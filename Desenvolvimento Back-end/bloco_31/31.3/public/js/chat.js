const socket = window.io();

const from = document.querySelector('from');
const inputMessage = document.querySelector('#messageInput');

from.addEventListener('submit', (e) => {
  e.preventDefault();
  socket.emit('clientMessage', inputMessage.value);
  inputMessage.value = '';
  return false;
});
