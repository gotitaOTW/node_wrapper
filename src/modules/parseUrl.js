const parsearUrl=(url)=>{
    const objUrl=new URL(url);
    return objUrl;
}

function parsearUrlValidado(url){
    try{
      const objUrl=new URL(url);
      return objUrl;
    }
    catch(error){
        console.log(`Error: ${error.message}`);
        return {};
    }
}