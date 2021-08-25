import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider, createTheme } from "@material-ui/core/styles"

import App from "./App.js"
import "./index.css"

const theme = createTheme({
  palette: {
    theme: "dark",
    primary: {
      main: "#232340"
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)