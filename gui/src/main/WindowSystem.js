// src/main/WindowSystem.js
const { BrowserWindow } = require('electron');
const BaseSystem = require('./BaseSystem');

class WindowSystem extends BaseSystem {
    constructor() {
        super('WindowSystem');
    }

    createMainWindow(eventSystem) {
        const mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
                contextIsolation: true,
                enableRemoteModule: false,
                nodeIntegration: false,
            },
            show: false
        });

        mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
        mainWindow.once('ready-to-show', () => {
            mainWindow.show();
            eventSystem.test();
        });

        return mainWindow;
    }
}

module.exports = WindowSystem;
