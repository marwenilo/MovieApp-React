import React from 'react';
import Card from "./Card";

const CardList = ({movies}) => {
    return (
        
        <div className="movieApp">
            {movies.map(elm => (
                <Card e={elm} />
            ))}
        </div>
    )
}

export default CardList;
