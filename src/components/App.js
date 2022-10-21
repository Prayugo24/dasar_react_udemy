import React from "react";

// jsx adalah javascript xml, extensi javascript yang memungkinkan untuk menulis html falam javascript
// aturan menggunakan jsx hanya boleh menggunakan 1 root tag
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello Word</h1> 
                <p>test</p>
            </div>
            // <div></div>  tag ini lebih dari 1 tidak boleh dalam jsx
        )
    }
}

export default App;