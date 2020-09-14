import React, {Component} from 'react'
import NvPost from './NvPost/NvPost'
import PostModale from './PostModale/PostModale'
import './Blog.css'
import axios from 'axios'
import Post from "./Post/Post";

class Blog extends Component {

    state ={
        posts: [],
        selectPostId: null,
        /* Fermeture du pop up */
        toggle: false
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
               /* console.log(response)*/
                /* slice découpe le tableau pour afficher que quelques articles */
                const articles = response.data.slice(0,4);
                const postAuteur = articles.map (post => {
                    return {
                        ...post,
                        auteur: 'Hugo'
                    }
                })
                this.setState({posts: postAuteur})
                }

            )
    }

    selectId = id => {
        this.setState({selectPostId :id})
        this.setState({toggle: true})
    }

    /*fonction toggle*/
    toggleModale =()=>{
        this.setState({toggle: false});
    }

    render () {



        const posts = this.state.posts.map(post => {
            return <Post
                auteur={post.auteur}
                key={post.id}
                titre={post.title}
                /*Rendre le poste cliquable*/
                clicked= { () => this.selectId(post.id)}
            />
        })

        return (

            <div>
                <section>
                <NvPost />
                </section>
                <h2 className="text-center my-5">Choisissez un post ...</h2>
                <PostModale
                    id={this.state.selectPostId}
                    cache={this.toggleModale}
                    toggle={this.state.toggle}
                />
                <section className="Posts">
                    {posts}
                </section>

            </div>
        );
    }
}

export default Blog;