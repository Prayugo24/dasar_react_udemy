import React from "react";
import ListItem from "./ListItem";

class List extends React.Component{
    render (){
        return(
            <div>
                <h2>Component List</h2>     
                  {/* child component */}
                <ListItem/>
            </div>
        )
    }
}

export default List