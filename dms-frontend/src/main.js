//import { createApp } from 'vue'
//import App from './App.vue'
//import router from './router'
//
//createApp(App).use(router).mount('#app')

import { app, BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';


let mainWindow = null;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'dms-frontend/dist/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

console.log(app);

app.on('ready', createMainWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createMainWindow();
    }
})
