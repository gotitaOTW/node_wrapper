const fs = require("fs");

function copiarDataDeTxtAOtro(nombreArchivoOriginal){
    fs.readFile(nombreArchivoOriginal,"utf8",(err,data)=>{
        if(err){
            console.error("Error:", err);
            return;
        }
        console.log("contenido del archivo original leído.");
        console.log(data);
        return guardarDataEnTxt(data,"copia.txt");
    })
}

function guardarDataEnTxt(data, nombreArchivoNuevo){
    fs.writeFile(nombreArchivoNuevo, data,(err)=>{
        if(err){
            console.error("Error:",err);return;
        }
        console.log("data guardada en el nuevo archivo con éxito");
    })
    return nombreArchivoNuevo;
}