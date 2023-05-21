
import React from "react";

class Data extends React.Component{
    constructor(props){
        super(props);
    }




render()
{
    return(
        <div>
            Name is:{this.props.name}
            <br/>
        <h2>Rollno:{this.props.item.Rollno}</h2>
        <h2>Name:{this.props.item.Name}</h2>
        <h2>percentage:{this.props.item.Percentage}</h2>
        </div>
    );
}
}



export default Data;