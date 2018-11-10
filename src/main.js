import { app, BrowserWindow } from "electron"

import url from "url"
import path from "path"

import store from "./store"

let applicationURL = null

if (process.env.NODE_ENV === "development") {
  applicationURL = "http://localhost:8080/"
} else {
  applicationURL = url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file",
    slashes: true
  })
}

app.on("ready", () => {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    show: false,
    titleBarStyle: "hiddenInset",
    backgroundColor: "#fff"
  })

  window.loadURL(applicationURL)

  window.once("ready-to-show", () => {
    window.show()
  })

  window.on("close", () => {
    app.quit()
  })

  // Example of usage of Vuex Store from the main process
  // Results of action will be automatically passed to all renderer processes
  setInterval(() => {
    store.dispatch("increment")
  }, 5000)
})
