


    export const getGifs = async ( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=O73qq3nqENFA2FYm7tIU3utHtTekye3k&limit=10`;
        
        const respuesta = await fetch(url);
        const { data } = await respuesta.json();

        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        return gifs;
    };