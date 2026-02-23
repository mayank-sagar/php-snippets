const { app, BrowserWindow } = require("electron");

function createMainWindow() {
  const main = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Image Shrink",
  });
  main.loadURL(`file://${__dirname}/public/index.html`);
}

app.on("ready", createMainWindow);
