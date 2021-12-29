    // getGifs es un afuncion asincrona
    export const getGifs = async( category ) => {
        // encodeURI se encarga de convertir a category en caracteres entendibles por la API
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=oWl64BAby3cnbGP2avqX65iinvUeXltX`;
        // Espera a recibir la promesa
        const resp = await fetch ( url );
        // Toma el .json de resp
        const { data } = await resp.json();
        //Extraigo la informaciób necesaria de data
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        });

        return gifs;
    }