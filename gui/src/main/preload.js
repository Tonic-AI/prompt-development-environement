// src/main/preload.js
const { contextBridge, ipcRenderer } = require('electron');

// Securely expose IPC functionality to the renderer process
contextBridge.exposeInMainWorld('api', {
  // Send message from renderer to main process
  send: (channel, data) => {
    const validChannels = ['renderer-event']; // Channels allowed for sending
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data); // Send if channel is valid
    }
  },
  // Receive message from main to renderer process
  receive: (channel, func) => {
    const validChannels = ['main-event-response', 'main-event-renderer']; // Channels allowed for receiving
    if (validChannels.includes(channel)) {
      // Set up listener, stripping out the event object to prevent exposure of `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
});
