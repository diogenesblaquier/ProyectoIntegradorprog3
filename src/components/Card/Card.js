import React, {Component} from "react"
import "./Card.css"
import "../Uikit/Uikit.css"

class Card extends Component {
constructor(props){
    super (props);
    this.state = {
        Albumes:[],
        viewMore: false,
        text: 'Ver más',
    }
}
viewMore(){
  if(this.state.viewMore){
      this.setState({
          viewMore: false,
          text: 'Ver más'
      })
  } else {
      this.setState({
          viewMore: true,
          text: 'Ver menos'
      })            
  }
}


render () {
    return(
    <div class="Card-Container">
      <div class="uk-card uk-card-hover">
             <article>
                  <section className="navigation">
                    <button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom" onClick={() => this.props.remove(this.props.dataAlbum.id)}>ELIMINAR</button>
                  </section>
                  <main>
                    <div className="image-container">
                      <img className="image" src={this.props.dataAlbum.cover_big} alt="" />
                    </div>
                      <h3>{this.props.dataAlbum.title}</h3>
                      <p className="description">{this.props.dataAlbum.record_type.toUpperCase()}</p>
              
     <article className="uk-comment">
    <header className="uk-comment-header">
        <div class="uk-grid-medium uk-flex-middle" uk-grid>
                      
        <section className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>            
          <div className="uk-width-auto">
                          <img className="artist-img" src={this.props.dataAlbum.artist.picture_small} alt="" />
          </div>
          <div className="uk-width-expand">
                <h4 className="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{this.props.dataAlbum.artist.name}</a></h4>
                 <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                    <li><a href="#">Explicit content</a></li>
                    <li><a href="#"> {this.props.dataAlbum.explicit_lyrics ? 'Yes' : 'No'}</a></li>
                </ul>
          </div> 
                      </section>
           </div>
           </header>
           </article>
                      <button className="uk-button uk-button-secondary uk-width-1-1">
                      <p className='view-more' onClick={()=>this.viewMore()}>{this.state.text}</p>
                      </button>
                  </main>
                </article>
                </div>
                </div>
    )
}


}

export default Card