import React from "react";
// import Header from "./Header";
// import List from "./List";


// jsx adalah javascript xml, extensi javascript yang memungkinkan untuk menulis html falam javascript
// aturan menggunakan jsx hanya boleh menggunakan 1 root tag
class App extends React.Component{
    state = {
        book : {
            price : 200000
        },
        detail : [
            "Description text",
            "have much price"
        ],
        name: "whose child is this",
        author: "Bil wilshon",
    }


    render(){
        return(
            // root component
            <div>
                {/* parent component */}
                    {/* <Header/>
                    <List/> */}
                {/* parent component */}


                <h1>Hello Word</h1> 
                {/* ini state */}
                <h3>Judul : { this.state.name }</h3>
                <p>author : { this.state.author }</p>
                <p>Price : { this.state.book.price }</p>
                { this.state.detail.map (item => 
                    <div>
                        <h3> {item} </h3>
                    </div>
                ) }
                {/* ini state */}
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

// state data yang bakal kita tampilin dalam component