const electron = require('electron');
const app: Electron.App = electron.app
const BrowserWindow: typeof Electron.BrowserWindow = electron.BrowserWindow;

class MyApplication {
    mainWindow: Electron.BrowserWindow = null

    constructor() {
        app.on('window-all-closed', this.onWindowAllClosed);
        app.on('ready', this.onReady);
    }

    onWindowAllClosed() {
        if (process.platform != 'darwin') {
            app.quit();
        }
    }

    onReady() {
        this.mainWindow = new BrowserWindow({
            width: 800,
            height: 400,
            minWidth: 500,
            minHeight: 200,
            acceptFirstMouse: true,
            titleBarStyle: 'hidden'
        });

        this.mainWindow.loadURL('file://' + __dirname + `/index.html`)

        this.mainWindow.on('closed', () => {
            this.mainWindow = null;
        })
    }
}

const myapp = new MyApplication();
