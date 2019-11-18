import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
   // notice instead of an variable being passed on we've put
   // 'description, id, urls', this is called desctructuring
   // it is getting those specific key from the API's JSON
   const images = props.images.map(image => {
      // always put 'key' on the root element of a JSX expression
      return <ImageCard key={image.id} image={image} />;
   });
   return <div className="image-list">{images}</div>;
};

export default ImageList;
