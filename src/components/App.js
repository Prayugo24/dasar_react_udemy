import React from "react";
// import Header from "./Header";
// import List from "./List";
// import Button from "./Button";
import "../style/App.css"


// jsx adalah javascript xml, extensi javascript yang memungkinkan untuk menulis html falam javascript
// aturan menggunakan jsx hanya boleh menggunakan 1 root tag

// styling component di react
// 1. inline style
// 2. external CSS
// 3. css preprocessor
// 4. library : syled component

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
            // penggunaan css inline
            // <div style={{ width:"100px", backgroundColor:"red"}}>

            // penggunaan css external
            <div className="box" >
                <h1 style={myStyle}>Hello</h1>

                {/* <Button color="biru"/> */}

                {/* parent component */}
                    {/* <Header/> */}
                    {/* ini cara mngrirm props */}
                    {/* <List nameBooks={ this.state.name } authors={ this.state.author }> 
                    </List> */}
                {/* parent component */}

                {/* ini state */}
                {/* <h3>Judul : { this.state.name }</h3>
                <p>author : { this.state.author }</p>
                <p>Price : { this.state.book.price }</p>
                { this.state.detail.map (item => 
                    <div>
                        <h3> {item} </h3>
                    </div>
                ) } */}
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

const myStyle = {
    color:"blue",
    fontSize: "50px"
}

export default App;

// state data yang bakal kita tampilin dalam component
// props adalah properti, yang digunakan untuk pengirim data/properti ke parent atau child

// container component untuk menampung data
// presentation component untuk tampilan 

// prop types digunakan untuk mengecek props yang masuk kedalam sebuah component
// 

// di apps ini namanya state full component karena terdapat data full state componentnya

// sebelum di react 16 untuk membuat state di reatct itu hanya bisa dilakukan di class saja, sedangkan di function tidak bisa