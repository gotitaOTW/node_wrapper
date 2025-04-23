import axios from 'axios';
const APIKEY="aa5b854";
const URL="http://www.omdbapi.com/";

export async function buscarPorTitulo(titulo){
    let res = await axios.get(URL, 
        {
            params:
            {
                apikey:APIKEY,
                t:titulo
            }
        });
    return parsearRespuesta(res.data);
}

export async function buscarPorId(id){
    let res= await axios.get(URL,{
        params:{
            apikey:APIKEY,
            i:id
        }
    })
    return parsearRespuesta(res.data);

}

export async function buscarPorString(texto){
    let res=await axios.get(URL,{
        params:{
            apikey:APIKEY,
            s:texto
        }
    })
    return parsearRespuesta(res.data);
}

function parsearRespuesta(data) {
    if (!data || data.Response === 'False') {
      return { error: 'No se encontraron resultados o hubo un error.' };
    }
  
    return {
      nombre: data.Title,
      año: data.Year,
      genero: data.Genre,
      director: data.Director,
      actores: data.Actors,
      trama: data.Plot
    };
  }