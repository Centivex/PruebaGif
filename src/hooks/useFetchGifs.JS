import { useEffect, useState } from "react";
import getGif from "../helpers/GetGif";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=>{
        const newImages = await getGif(category);
        setImages(newImages);
        setIsLoading(false);
    }

    //codigo que se ejecuta y entre [] cuando se ejecuta si lo dejas en blaco se ejecutara al crear el compoente
    useEffect(()=>{
        getImages();
    }, [])
  
    //si se llama igual no hace falta poner a que variable hace referencia
    return{
        images:images,
        isLoading
    }
}

