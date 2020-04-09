const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const url = require('url');

const { PassDB } = require('./modules/passdb')

const documentPath = app.getPath("documents")
const appStoragePath = documentPath + "/" + app.name

const passDB = new PassDB(appStoragePath)

function createWindow() {
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
            nodeIntegration: true,
        },
        show: false,
    })

    // 并且为你的应用加载index.html
    // mainWindow.loadFile('dist/index.html')
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file',
        slashes: true,
    }));
    mainWindow.once("ready-to-show", () => { mainWindow.show() })

    // 打开开发者工具
    // mainWindow.webContents.openDevTools()

    // ipc on
    ipcMain.on("addPassRecord", function(evt, data) {
        // console.log("=======addPassRecord:")
        // console.log(evt)
        // console.log(data)

        passDB.AddPassRecord(data).then(function (result) {
            // console.log("=====addrecord: " + result)
        });
    })
    ipcMain.on("updatePassRecord", function(evt, data) {
        // console.log("=======updatePassRecord:")
        // console.log(evt)
        // console.log(data)

        let updateRecordID = data["id"]
        let updateRecordInfo = {
            "title": data["title"],
            "site_or_app": data["site_or_app"],
            "login_name": data["login_name"],
            "login_pass": data["login_pass"],
            "remarks": data["remarks"],
        }
        passDB.UpdatePassRecordByID(updateRecordInfo, updateRecordID).then(function(result) {
            // console.log("========update record: " + result)
        })
    })
    ipcMain.on("listPassRecord", function (evt, search) {
        // console.log("=======listPassRecord:")
        // console.log(evt)
        // console.log(search)

        passDB.SearchPassRecord(search).then(function (rows) {
            // console.log("=====searchrecord: ")
            // console.log(rows)

            mainWindow.webContents.send("passlist", rows);
        });
    });
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
