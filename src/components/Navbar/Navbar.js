import React, {Component} from 'react';
import '../Uikit/Uikit.css';

class Navbar extends Component{
    constructor(){
        super();
        this.state ={

        }
    }
    render(){
        return(
            <React.Fragment>

<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
<nav className="uk-navbar uk-navbar-container uk-margin">
    <div className="uk-navbar-left">
        <a class="uk-navbar-toggle" href="#">
        <a href="" className="uk-icon-button" uk-icon="youtube"></a>
        <span className="uk-margin-small-left">Musica Online</span>
        </a>
    </div>
</nav>
</div>
            </React.Fragment>
        )
    }
}
export default Navbar;