import React from "react";
import './Users.css';

class Users extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const lists = this.props.items.map((item)=>
        <tr key={item.Rollno}>
            <td>{item.Rollno}</td>
            <td>{item.Name}</td>
            <td>{item.Percentage}</td>
        </tr>
        )
        return(
            <table>
                <thead>
                    <tr>
                        <th>rollno</th>
                        <th>name</th>
                        <th>precentage</th>
                    </tr>
                </thead>
                <tbody>
                    {lists}
                </tbody>
            </table>
        )
        
    }
}


export default Users;