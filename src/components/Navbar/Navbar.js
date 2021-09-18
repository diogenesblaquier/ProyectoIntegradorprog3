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
<nav class="uk-navbar uk-navbar-container uk-margin">
    <div class="uk-navbar-left">
        <a class="uk-navbar-toggle" href="#">
        <a href="" class="uk-icon-button" uk-icon="youtube"></a>
        <span class="uk-margin-small-left">Musica Online</span>
        </a>
    </div>
</nav>
</div>
            </React.Fragment>
        )
    }

}
export default Navbar;