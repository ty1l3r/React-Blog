import React, {Component} from 'react'
import Axios from "axios";
import './PostModale.css'


class PostModale extends Component {

    state = {
        loadedPost: null
    }

    componentDidUpdate() {


        /* Cherche l'id du post cliqué */
        if (this.props.id) {
            /* un if dans le if pour éviter la boucle infinie avec une double condition :
            * 1°) Est ce que le state est false ? "!this.state.loadedPost" => chargement du poste qui passe en True
            * 2°) Le state est true "this.state.loadedPost" ET on clique sur un article différent :
            *       "this.state.loadedPost.id !== this.props.id"*/

            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                Axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => {
                        /*console.log(response)*/
                        this.setState({
                            loadedPost: response.data
                        })
                    })
            }
        }
    }

    render() {
        return (
            this.state.loadedPost && this.props.toggle?
                <div className="PostComplet">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>

                    <button className="btn btn-danger my-3 btnPost"
                            onClick={this.props.cache}

                    >Fermer</button>
                </div>
                : null
        )


    }
}

export default PostModale;
