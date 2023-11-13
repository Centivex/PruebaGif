const getGif = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=qsrBpjncKaB5Rg4QaGgJ2t7kimOgPM8u&q=${category}&limit=10`;
    const resp = await fetch (url);
    const {data} = await resp.json();

    const gif =data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    //console.log(gif)
    return gif;
}

export default getGif