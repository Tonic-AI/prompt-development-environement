// src/main/EventSystem.js
const { ipcMain } = require('electron');

class EventSystem {
    constructor() {
        console.log("[EVENT-SYSTEM] created");
        this.initializeIpcListeners();
    }

    initializeIpcListeners() {
        ipcMain.on('renderer-event', (event, arg) => {
            console.log('[EVENT-SYSTEM] Received message from renderer:', arg);
            event.reply('main-event-response', 'Response from main process');
        });
    }

    test() {
        console.log('[EVENT-SYSTEM] test function executed');
    }
}

module.exports = EventSystem;
