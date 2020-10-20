import React from 'react';
import './NewInfo.css';
import PropTypes from 'prop-types';

const NewInfo = ({newInfo}) => {

    // Exctracting data
    const { urlToImage, url, title, description, source } = newInfo;

    const imagen = (urlToImage) 
    ? 
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div> 

    :null;
    return ( 
        <div className="col s12 m6 l4 marg-bottom">
            <div className="card">
                {imagen}

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>

            </div>
        </div>
     );
}
 
NewInfo.propTypes = {
    newInfo: PropTypes.object.isRequired
}
export default NewInfo;