
const myWebAddress = "faztweb.com"

module.exports = myWebAddress

console.log(module);

// El require esta exportando lo de la carpeta module que adentro esta el myModule.js esta exportando un string pero puede exportar numbers,objetos,arreglos


// Pero para poder exportar varias constantes podemos hacer esto 

const myNumber = 30 
const myArray = [20,30,30]
const user = {
    name : "adam",
    lastName : "figueroa"
}

// Creamos un objeto con todas las constantes que queremos exportar 
const group = {
    myWebAddress : myWebAddress,
    myNumber : myNumber,
    myArray : myArray,
    user : user 
}

module.exports = group

// 2.0 ( O para mas corto se puede exportar tambien asi )

const myNumberr = 30 
const myArrayy = [20,30,30]
const userr = {
    name : "adam",
    lastName : "figueroa"
}

module,exports = {
    myWebAddress,
    myNumber,
    myArray,
    user,
}

