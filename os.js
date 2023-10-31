// MODULO OS 

// El módulo 'os' en Node.js proporciona métodos y propiedades que permiten interactuar con el sistema operativo del servidor donde se ejecuta la aplicación Node.js. 

const os =  require("os")

console.log(os.userInfo()); // informacion de la computadora (userName ,homedir,shell)
console.log(os.uptime()); // me dice cuanto tiempo llevo en la compu
console.log(os.platform()); // ejecuta Darwin 
console.log(os.totalmem()); // memoria total 
console.log(os.freemem()); // memoria libre o disponible 


// No Siempre tenemos que ocupar console.log podemos ocupar este tipo de console

// el (.table) hace que se imprima como en tabla 
console.table({ 
    os: os.platform(), // nombre de la plataforma
    version: os.release(), // nos da la versión del sistema
    totalMemory: os.totalmem() // total de memoria
});

