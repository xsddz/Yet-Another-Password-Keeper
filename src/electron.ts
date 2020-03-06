const { app, BrowserWindow, systemPreferences } = require('electron')

function createWindow() {
    // This user consent was not required on macOS 10.13 High Sierra or lower 
    // so this method will always return granted. macOS 10.14 Mojave or higher 
    // requires consent for microphone and camera access. macOS 10.15 Catalina 
    // or higher requires consent for screen access.
    console.log("=======getMediaAccessStatus(camera): " + systemPreferences.getMediaAccessStatus("camera"))
    console.log("=======getMediaAccessStatus(screen): " + systemPreferences.getMediaAccessStatus("screen"))

    // 创建浏览器窗口
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 520,
        center: true,
        resizable: false,
        minimizable: true,
        maximizable: false,
        fullscreenable: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // 并且为你的应用加载index.html
    mainWindow.loadFile('dist/index.html')

    // 打开开发者工具
    // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。
// In the renderer process.
