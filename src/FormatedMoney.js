import React from "react";

class FormatedMoney extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <span>{this.format(this.props.value)}</span>
        )
    }
    format(amount){
        return parseFloat(amount).toFixed(2);
    }
}

export default FormatedMoney;