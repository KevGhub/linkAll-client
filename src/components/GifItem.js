import React from 'react';

const GifItem = (image) => {
    return (
        <li>
            <img src={image.gif.images.fixed_height_small_still.url} />

        </li>
    )
};

export default GifItem;
