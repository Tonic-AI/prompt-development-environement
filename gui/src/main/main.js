const { app, BrowserWindow } = require('electron');
const EventSystem = require('./EventSystem');

// Exit if launched by installer on Windows
if (require('electron-squirrel-startup')) app.quit();

// Initialize event system and run test
const eventSystem = new EventSystem();
eventSystem.test();

// Function to create the main window
const createWindow = () => {
  // Create the browser window with specified options
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
    show: false // Start hidden to show later for smooth UI
  });

  // Load the app's index page
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Once ready, show the window and dispatch an event
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Open DevTools for debugging
  mainWindow.webContents.openDevTools();
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
