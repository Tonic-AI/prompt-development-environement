// src/main/preload.js
const { contextBridge, ipcRenderer } = require('electron');
const ChannelNames = require('./ChannelNames');
const EventData = require("./EventData");

// Securely expose IPC functionality to the renderer process
contextBridge.exposeInMainWorld('api', {
  // Send message from renderer to main process
  send: (channel, data) => {
    try {
      const validChannels = [
        ChannelNames.RENDERER_EVENT,
        ChannelNames.MAIN_EVENT_RESPONSE,
        ChannelNames.MAIN_EVENT_RENDERER
      ];
      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel, data);
      } else {
        throw new Error(`Invalid channel: ${channel}`);
      }
    } catch (error) {
      console.error('Error in IPC send:', error);
    }
  },

  // Receive message from main to renderer process
  receive: (channel, func) => {
    try {
      const validChannels = [
        ChannelNames.RENDERER_EVENT,
        ChannelNames.MAIN_EVENT_RESPONSE,
        ChannelNames.MAIN_EVENT_RENDERER
      ];
      if (validChannels.includes(channel)) {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      } else {
        throw new Error(`Invalid channel: ${channel}`);
      }
    } catch (error) {
      console.error('Error in IPC receive:', error);
    }
  }
});
