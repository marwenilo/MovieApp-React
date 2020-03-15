import React from 'react'

// ★ ☆

const Rating = ({minRate, handleRate }) => {

    let stars = []
    for(let i = 0; i < 5; i++) {
        if(i < minRate) {
            stars.push(<span onClick={() => handleRate(i+1)} key={i}>★</span>)
        }
        else {
            stars.push(<span onClick={() => handleRate(i+1)} key={i}>☆</span>)
        }
    }
    return (
        <div className="movieRating">{stars}</div>
    )
}

export default Rating