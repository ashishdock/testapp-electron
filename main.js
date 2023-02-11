const electron = require('electron');
const path = require('path');
const { app, BrowserWindow, ipcMain } = electron;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1299,
    height: 900,
    // webPreferences: { preload: path.join(__dirname, 'preload.js') },
    webPreferences: { preload: path.join(__dirname, 'preload.js') },
  });
  ipcMain.handle('ping', () => 'pon̥g');
  win.loadFile('index.html');
  const contents = win.webContents;
  console.log(contents);
  console.log('Where is this getting printed????');

  // open chrome dev tools
  contents.openDevTools();
  console.log('Node version: ', process.version);
  console.log('Chrome Version: ', process.versions.chrome);
  console.log('Electron version: ', process.versions.electron);
  console.log('HTTP parser version', process.versions.http_parser);
  console.log('Modules version: ', process.versions.modules);
  console.log('Node version: ', process.versions.node);
  console.log('Open SSL version', process.versions.openssl);
  console.log('UV version: ', process.versions.uv);
  console.log('V8 version', process.versions.v8);
  console.log('Z lib version', process.versions.zlib);
};

// app.on('ready', () => {
//   createWindow();
//   console.log('App is ready');
// });

app.on('window-all-closed', async () => {
  console.log('Alert!!! Are you sure you want to exit?');

  console.log('Window Closed');
  if (process.platform !== 'darwin') app.quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
