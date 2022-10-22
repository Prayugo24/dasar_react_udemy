import React from "react";
import ListItem from "./ListItem";

class List extends React.Component{
    render (){
        return(
            <div>
                {/* cara pemanggilan props */}
                <h3> {this.props.nameBooks}</h3>
                <p> {this.props.authors} </p>
                  {/* child component */}
                <ListItem/>
            </div>
        )
    }
}

export default List

// disini namanya less state component karenan hanya berisi pemnagggilan stae props