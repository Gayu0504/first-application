import FormatedMoney from './FormatedMoney';

function Datafunction(props) {
    return (
        <div>
            <h1> Data function</h1>
            Name is:{props.name}
            <br />
            <h2>Rollno:{props.item.Rollno}</h2>
            <h2>Name:{props.item.Name}</h2>
            <h2>percentage:{props.item.Percentage}</h2>
            < FormatedMoney value="1200.456"/>
        </div>
    )


}
export default Datafunction;