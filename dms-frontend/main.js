import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const { app, BrowserWindow } = require('electron')

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadFile('dist/index.html');
})
