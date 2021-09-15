import React, {Component} from "react"
import Card from '../Card/Card'
import Header from '../Navbar/Navbar'

class Api extends Component {
constructor(){
    super ();
    this.state = {
        albumes:[],
        limit: 10,
    }
}
componentDidMount(){
    let url = ("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=" + this.state.limit.toString())

    fetch (url)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        this.setState({
            albumes: data.data,
        })
    })
    .catch(error => console.log(error))
}
}
export default Api