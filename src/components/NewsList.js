import React from 'react';
import NewInfo from './NewInfo';
import PropTypes from 'prop-types';

const NewsList = ({news}) => (

        <div className="row">

            {news.map( newInfo => (
                <NewInfo 
                    key={newInfo.url}
                    newInfo={newInfo}
                />
            ))}

        </div>

);

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}

 
export default NewsList;