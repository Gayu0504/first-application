import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent';
import About from './About';
import Data from './Data';
import Datafunction from './Datafunction';
import User from './Users';
function App() {
let name="gayatri";

let item ={Rollno:35,Name:"gayatri",Percentage:80};

let Users=[{Rollno:35,Name:"gayatri",Percentage:83},
          {Rollno:32,Name:"abhi",Percentage:85},
          {Rollno:33,Name:"ram",Percentage:86},
          {Rollno:31,Name:"kavita",Percentage:88}





];

let add= function(a,b){
  return a+b;
}







  return (
    <div className="App">
      <h1>welcome {name} to react app</h1>
        <p>addition of 10,20:{add(10,20)}</p>
        <MyFirstComponent />
        <About />
        <hr />
        <Data name="react" item={item}/>
        <hr/>
        <Datafunction  item={item} />
      <User items={Users}/>
        
    </div>
  );
}


export default App;
