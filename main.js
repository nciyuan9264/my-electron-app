const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    icon: path.join(__dirname, "fiddle.png"),
  });
  if (process.platform === "darwin") {
    app.dock.setIcon(path.join(__dirname, "fiddle.png"));
  }
  win.loadFile("index.html");
  //   win.loadURL('https://wl.nobook.com/index.html#/guidPost/4100?classId=54&className=NOBOOK-%E6%88%90%E9%95%BF%E8%90%A5&class_no=1655910943157073&grade=2&mapId=888&postId=new')
  //   win.webContents.openDevTools({ mode: "right" }),
  //   const contents = win.webContents;
  //   console.log(contents);
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
