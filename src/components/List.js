import React from "react";
import ListItem from "./ListItem";

class List extends React.Component{
    render (){
        return(
            <div>
                {/* cara pemanggilan props */}
                <h1> { this.props.children }</h1>
                <h3>  {this.props.name} </h3>
                <h4> {this.props.myBook }</h4>
                <h3>  {this.props.test} </h3>
                  {/* child component */}
                <ListItem/>
            </div>
        )
    }
}

export default List