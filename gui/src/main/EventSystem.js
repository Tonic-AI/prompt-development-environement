// src/main/EventSystem.js
const { ipcMain } = require('electron');
const BaseSystem = require('./BaseSystem');

class EventSystem extends BaseSystem {
    constructor() {
        super('EVENT-SYSTEM');
        this.initializeIpcListeners();
    }

    initializeIpcListeners() {
        ipcMain.on('renderer-event', (event, arg) => {
            this.log('Received message from renderer: ' + arg);
            event.reply('main-event-response', 'Response from main process');
        });
    }

    test() {
        this.log('test function executed');
    }
}

module.exports = EventSystem;
