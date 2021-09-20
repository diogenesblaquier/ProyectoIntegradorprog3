import React, {Component} from "react"
import Card from '../Card/Card'
import Navbar from '../Navbar/Navbar';
import FilterField from "../FilterField/FilterField";
import "../Uikit/Uikit.css"

class Api extends Component {
constructor(){
    super ();
    this.state = {
        albumes:[],
        limit: 10,
        albumesEncontrados: [],
        filtrarPor:"",
    }
}

componentDidMount(){
    let url = ("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=" + this.state.limit.toString())

    fetch (url)
    .then(response => response.json())
    .then((data) => {
        console.log(data.data);
        this.setState({
            albumes: data.data,
            albumesEncontrados: data.data,
        })
    })
    .catch(error => console.log(error))
}
deleteCard(albumABorrar) {
    let albumsQueQuedan = this.state.albumes.filter(album => album.id !== albumABorrar);
    this.setState({
        albumes: albumsQueQuedan
    })
}

filtrarAlbum (albumAFiltrar){
    let albumesFiltrados = this.state.albumesEncontrados.filter(album =>{
        return album.title.toLowerCase().includes(albumAFiltrar.toLowerCase()) 
    } )
    this.setState({
        album: albumesFiltrados
    })
}


addMore(){
    let limitAnterior = this.state.limit
    this.setState({
            limit: limitAnterior + 10,
        },
        () => this.traerMas())   
}


    
    




traerMas() {
    let url = ("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=" + this.state.limit.toString())

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                albumes: data.data,
            })
            console.log(url);
        })
        .catch(function (e) {
            console.log(e);
        })
}

    render (){
        return( 
            <React.Fragment>
                
                        
              <main className="container">
                 <div>
                     <FilterField  filtrarAlbum = { (texto) => this.filtrarAlbum(texto) } />
                </div> 
            <section className="card-container">
             {this.state.albumes.map((album, idx) => <Card key={album.title + idx} dataAlbum={album} remove={(albumABorrar) => this.deleteCard(albumABorrar)} />)}

            </section>

          <div className="button-container">
             <button className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom" type="button" onClick={() => this.addMore()} >Cargar más tarjetas</button>
          </div>
        </main>
            </React.Fragment>
        ) 
    }
}
export default Api