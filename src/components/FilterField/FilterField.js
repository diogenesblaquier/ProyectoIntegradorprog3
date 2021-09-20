import React, {Component} from 'react';

class FilterField extends Component{
    constructor(props){
        super(props)
        this.state ={
            filtrarPor : ''
        }
    }
  //Aquí debemos crear el método que evite enviar el formulario
    evitarEnviar(evento){
        evento.preventDefault()
    }  
    //Aquí creamos el método para controlar los cambios en el formulario
    controlarCambios(evento){
        this.setState({
            filtrarPor : evento.target.value
        }, () => this.props.filtrarAlbum(this.state.filtrarPor))
    }
    render(){
        return(
            <React.Fragment>

<ul className="uk-subnav uk-subnav-divider" uk-margin>
    <li className="uk-active"><a href="#">   </a></li>
    <li><a href="#">ASC / DEC</a>  </li>
                <form onSubmit = {(e) => this.evitarEnviar(e) }>
                    <label for='nombre'></label>
                    <input  type='text' name='nombre' placeholder='Buscar..'  id='nombre' onChange= {(e) => this.controlarCambios(e) } value={this.state.filtrarPor } />
                </form>
</ul>
            </React.Fragment>
        )
    }

}
export default FilterField;