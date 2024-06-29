// src/main/main.js
const { app } = require('electron');
const EventSystem = require('./EventSystem');
const MainSystem = require('./MainSystem');
const WindowSystem = require('./WindowSystem');
const log = require('electron-log');

// Custom isDev check
const isDev = process.env.NODE_ENV === 'development' || process.argv.includes('--dev');

// Configure electron-log to store logs in the .betterprompts/logs directory
log.transports.file.fileName = 'gui-log.log';
log.transports.file.level = 'info';
log.transports.console.level = 'debug';

// Exit if launched by installer on Windows
if (require('electron-squirrel-startup')) app.quit();

// Initialize systems
const eventSystem = new EventSystem();
const mainSystem = new MainSystem();
const windowSystem = new WindowSystem();

// Function to create the main window
const createWindow = () => {
	const mainWindow = windowSystem.createMainWindow(eventSystem);
	mainSystem.runInitializeScript(isDev);
};

// Create window when Electron app is ready
app.whenReady().then(createWindow);

// Re-create window on macOS when clicked on dock icon and no other windows open
app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// Quit app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
