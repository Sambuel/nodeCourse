
// MODULO FS (SYNC)

const fs = require("fs")

const firstOne = fs.readFileSync("./fsModuleExample/first.txt")// este metodo readFileSync lee un archivo si yo le paso la ruta---(en este const aparece lo del buffer )
console.log(firstOne);

const first1 = fs.readFileSync("./fsModuleExample/first.txt", "utf-8")// y en este const aparece ya interpretado
console.log(first1); 

// 1.0  Al momento de ejecutarlo en la terminal aparece un Buffer (que es el dato es decir como formato crudo sin conversiones no lo esta interpretando)


// pero si lo queremos intepretar como en fomato string ocupamos el (utf-8) 


// hay otra manera de convertir en un tipo string que es esta 
const second = fs.readFileSync("./fsModuleExample/second.txt")

console.log(second.toString()); // y asi ya no ocupamos poner el utf-8

////////////////////////////////////////////////////////

// METODO writeFileSync 
// sirve para crear un archivo nuevo

fs.writeFileSync("./fsModuleExample/third.txt","este es un tercer archivo")


// tambien se puede hacer de esta cierta manera 

const tittle = "este es el contenido del archivo"

fs.writeFileSync("./fsModuleExample/fourth.txt",tittle) 
_________________________________



const fs = require("fs")

fs.readFile("./fsModuleExample/first.txt",(error,data)=>{
    if(error){
        console.log(error);
    }
    console.log(data.toString());
})

// Ejemplo de callBack
// CallBack : Funcion dentro de otra funcion 

fs.readFile("./fsModuleExample/first.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    console.log(data);
    
    fs.readFile("./fsModuleExample/second.txt","utf-8",(error,data)=>{
        if(error){
            console.log(error);
        }
        console.log(data);
        
        fs.writeFile("./fsModuleExample/newFile.txt","archivo creado desde fs ",(error,data)=>{
            console.log(error);
            console.log(data);
        })
        
    })
    
})
