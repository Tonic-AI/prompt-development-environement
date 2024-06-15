// src/main/EventComponent.js
const { BrowserWindow, ipcMain } = require('electron');
const BaseComponent = require('./BaseComponent');
const ChannelNames = require('./ChannelNames');
const EventData = require('./EventData');

// EventComponent class extends BaseComponent to handle event dispatching
class EventComponent extends BaseComponent {
    constructor(emitter, registry) {
        super();
        this.eventEmitter = emitter;
        this.registry = registry;
    }

    // Send the event to all renderer processes
    sendEventToRenderer(eventType, data) {
        const windows = BrowserWindow.getAllWindows();
        windows.forEach((win) => {
            win.webContents.send(ChannelNames.MAIN_EVENT_RENDERER, EventData.serialize(eventType, data));
        });
    }

    // Send the event within the main process
    sendEventToMain(eventType, data) {
        this.eventEmitter.emit(ChannelNames.MAIN_EVENT, EventData.serialize(eventType, data));
    }

    // Send the event over IPC for the renderer process
    setupListenerFromRenderer(callback) {
        ipcMain.on(ChannelNames.RENDERER_EVENT, callback);
    }

    // Set up a listener for events within the main process
    setupListenerFromMain(callback) {
        this.eventEmitter.on(ChannelNames.MAIN_EVENT, callback);
    }
}

module.exports = EventComponent;
