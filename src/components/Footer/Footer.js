import React from "react";
//import react from "react";
import './Footer.css';

function Footer(){
    return(
        <React.Fragment>
            <footer>
                <ul className="team bg-success">
                    <li>Diogenes Blaquier</li>
                    <li>Felipe de Aramburu</li>
                    <li>Juan Huidobro</li>
                </ul>
            </footer>      
        </React.Fragment>
    )
}
export default Footer;