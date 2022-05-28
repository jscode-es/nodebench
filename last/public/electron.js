const path = require('path')

const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const server = require('./server')

function createWindow() {

    // Create the browser window.
    const win = new BrowserWindow({
        height: 600,
        width: 800,
        center: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
        },
    })

    // and load the index.html of the app.
    // win.loadFile("index.html");

    win.webContents.session.webRequest.onBeforeSendHeaders(
        (details, callback) => {
            callback({ requestHeaders: { Origin: '*', ...details.requestHeaders } })
        }
    )

    win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                'Access-Control-Allow-Origin': ['*'],
                // We use this to bypass headers
                'Access-Control-Allow-Headers': ['*'],
                ...details.responseHeaders,
            }
        })
    })

    const URL = 'http://localhost:3000'
    const FILE = `file://${path.join(__dirname, '../build/index.html')}`

    server({ win })

    win.loadURL(isDev ? URL : FILE)

    // Open the DevTools.
    if (isDev) win.webContents.openDevTools({ mode: 'detach' })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})