const { app, BrowserWindow } = require('electron');
const path = require('node:path');
const EventSystem = require('./EventSystem');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const eventSystem = new EventSystem();
eventSystem.test();

const createWindow = () => {
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
    //mainWindow.maximize();
    mainWindow.show();
  });

  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});