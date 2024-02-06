import React from "react";
import Product from "./products";


const Image = ({ url }) => {

    return (

        <div>
           <img  src={url}  alt="Image produit"/>
        </div>
    );
}


export default Image;