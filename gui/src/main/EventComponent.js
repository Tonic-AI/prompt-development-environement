// src/main/EventComponent.js
const { BrowserWindow, ipcMain } = require('electron');
const BaseComponent = require('./BaseComponent');

// EventComponent class extends BaseComponent to handle event dispatching
class EventComponent extends BaseComponent {
    constructor(eventEmitter) {
        super(); // Call the constructor of the BaseComponent
        this.eventEmitter = eventEmitter;
    }

    // Send the event to all renderer processes
    sendEventToRenderer(channel, data) {
        // Retrieve all open BrowserWindow instances
        const windows = BrowserWindow.getAllWindows();

        // Iterate over each window and send the event to its renderer process
        windows.forEach((win) => {
            win.webContents.send(channel, data);
        });
    }

    // Send the event over IPC for the renderer process
    setupListenerFromRenderer(channel, callback) {
        ipcMain.on(channel, callback);
    }

    // Send the event within the main process
    sendEventToMain(eventName, data) {
        this.eventEmitter.emit(eventName, data); // Emit the event
    }

    // Set up a listener for events within the main process
    setupListenerFromMain(eventName, callback) {
        this.eventEmitter.on(eventName, callback); // Set up the listener
    }
}

module.exports = EventComponent; // Export EventComponent for use in other parts of the application
