import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs.JS";



export const GifGrid = ({category}) => {


    const {images, isLoading} = useFetchGifs(category);

    return(
        <>
        <h1>{category}</h1>
        {
            isLoading?(<h2>cargando....</h2>):null
        }
        <div className="card-grid">
            {images.map((image) =>(
                <GifItem key={image.id} { ...image}/>
            ) )}
        </div>
        </>
    )
}
