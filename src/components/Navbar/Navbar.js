import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{
    constructor(){
        super();
        this.state ={

        }
    }
    render(){
        return(
            <React.Fragment>
                <header className='encabezado bg-success text-white p-2 '>
                        <h1>Musica Online</h1>
                        
                </header>
            </React.Fragment>
        )
    }

}
export default Navbar;