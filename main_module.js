// Require nos permite poder extraer el valor desde exports

const web = require("./module/myModule")

console.log(web);



// 2.0 OTRA FORMA DE EXTRAER 
const {myArray} = require("./module/myModule")
console.log(myArray);