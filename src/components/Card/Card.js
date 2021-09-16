import React, {Component} from "react"

class Card extends Component {
constructor(props){
    super (props);
    this.state = {
        Albumes:[],
        viewMore: false,
        text: 'Ver más',
    }
}



render () {
    return(
             <article>
                  <section className="navigation">
                    <div>
                      <i className="fas fa-chevron-left"></i>
                      <i className="fas fa-chevron-right"></i>
                    </div>
                    <i className="far fa-window-close" id="borrar" onClick={() => this.props.remove(this.props.dataAlbum.id)} ></i>
                  </section>
                  <main>
                    <div className="image-container">
                      <img className="image" src={this.props.dataAlbum.cover_big} alt="" />
                    </div>
                      <h3>{this.props.dataAlbum.title}</h3>
                      <p className="description">{this.props.dataAlbum.record_type.toUpperCase()}</p>
                      <section className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>
                        <p>Artist:</p>
                        <div className="artist-data">
                          <img className="artist-img" src={this.props.dataAlbum.artist.picture_small} alt="" />
                          <p>{this.props.dataAlbum.artist.name}</p>
                        </div>
                      <p>Explicit content: {this.props.dataAlbum.explicit_lyrics ? 'Yes' : 'No'}</p>
                      </section>
                      <p className='view-more' onClick={()=>this.viewMore()}>{this.state.text}</p>
                  </main>
                </article>
            

    )
}


}

export default Card