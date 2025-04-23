import parsearUrlValidado from "./modules/parseUrl.js"

let url="https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2216939/tp01-node";

let objUrl = parsearUrlValidado(url);
if(objUrl!=null){
    console.log(objUrl);
}
else{
    console.log("Url inválida");
}
