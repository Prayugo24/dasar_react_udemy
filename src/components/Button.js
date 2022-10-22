import React from "react";
import PropTypes from "prop-types"

class Button extends React.Component{
    state = {
        name:"kodeakademia",
        text:""
    }
    // cara penggunaan event pada button, dan penggunaan set state
    // change = () =>{
    //     this.setState({
    //         name:"Herry poter"
    //     })
    // }

    // cara pengguanaan form handle
    click = () => {
         this.setState({
            name: this.state.text,
        })
        this.setState({
            text:""
        })
    }
    change = e => {
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <input type="text" value={this.state.text} onChange={this.change}/>
                <button onClick={this.click}>Click My App</button>
            </div>
        )
    }
}

// ini contoh penggunakan prop types
Button.propTypes = {
    color: PropTypes.string.isRequired
}

// untuk mengisi default props
Button.defaultProps = {
    color:"red"
}

// state set function dalam react yang digunakan untuk mengubah state di react kita tidak boleh mengibah state secara langsung

export default Button;