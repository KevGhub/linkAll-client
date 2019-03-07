import React from 'react';

const GifItem = ({ gif, onGifSelect }) => {
    return (
        <li className="gif-item" onClick={() => onGifSelect(gif)}>
            <img src={gif.images.fixed_height_small_still.url}/>

        </li>

    )
};

export default GifItem;
