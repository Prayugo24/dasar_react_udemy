import React from "react"
import  ReactDOM  from "react-dom"
import App from "./components/App"

ReactDOM.render(
    // untuk memberikan warning pada react jika ada code / fitur yang sudah tidak di support lagi React stricmode
    <React.StrictMode> 
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
)