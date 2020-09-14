import React from 'react'

import './Post.css'

const post = (props) => (


    <article    className="Post"
                /*Rendre le post cliquable*/
                onClick={props.clicked}
    >
        <h1>{props.titre}</h1>
        <div>
            <div className="Auteur">{props.auteur}</div>
        </div>
    </article>
);

export default post;