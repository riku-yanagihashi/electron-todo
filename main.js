const { app, BrowserWindow } = require('electron');
let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
    });
    mainWindow.loadFile('./renderer/index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

app.on('window-all-closed', () => {
    app.quit();
});


