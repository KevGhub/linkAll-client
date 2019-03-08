import React from "react";
import GifItem from "./GifItem";

const GifList = props => {
  const gifs = props.gifs;

<<<<<<< HEAD
  const gifItems = gifs.slice(gifs, 9).map(image => {
=======
const GifList = (props) => {
    const gifs = props.gifs;  
   
    console.log("please......", gifs)
    const gifItems = gifs
        // .slice((gifs), 9)
        .map((image) => {
        return <GifItem 
        key={image.id} 
        gif={image}
        onGifSelect={props.onGifSelect} />
    });

>>>>>>> fb0eaddef4b7666ff4384dd243d5cb4aff344b94
    return (
      <GifItem key={image.id} gif={image} onGifSelect={props.onGifSelect} />
    );
  });

  return <ul className="gif-list">{gifItems}</ul>;
};

export default GifList;
