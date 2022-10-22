import React from "react";
import PropTypes from "prop-types"

class Button extends React.Component{
    // cara penggunaan event pada button
    change = () =>{
        console.log("Ok")
    }
    render(){
        return(
            <div>
                <button onClick={this.change}>Click My App</button>
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

export default Button;