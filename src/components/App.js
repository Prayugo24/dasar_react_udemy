import React from "react";
import Header from "./Header";
import List from "./List";


// jsx adalah javascript xml, extensi javascript yang memungkinkan untuk menulis html falam javascript
// aturan menggunakan jsx hanya boleh menggunakan 1 root tag
class App extends React.Component{
    render(){
        return(
            // root component
            <div>
                {/* parent component */}
                    <Header/>
                    <List/>
                {/* parent component */}
                <h1>Hello Word</h1> 
                <p>test</p>
            </div>
            // root component


            // <div></div>  tag ini lebih dari 1 root component tidak boleh dalam jsx
        )
    }
}

// // function component
// const App = () => {
//     return(
//         <div>
//             <h1>Hello Word</h1>
//         </div>
//     )
// }

export default App;