import about from './About.module.css';
import copy from './copy.modele.css';

function About(){
    let style={
        color:'green',
        backgroundColor:'yellow',
    }
return(
    <div>
        <h1 className={about.cssstyle}>about component</h1>
        <h2 style={style}>
        this is the second heading
        </h2>
    </div>
    );

}

export default About;