console.log(concatenarEInvertir("RO","MA"));

function concatenarEInvertir(texto1, texto2){
    let resultado=texto1+texto2;
    return resultado.split("").reverse().join("");
}