// MODULO HTTPS
const http = require ("http")

http.createServer((request,response)=>{

   /* El código está verificando el valor de la propiedad request.url. Si el valor es "/about", significa que el usuario está solicitando la página "acerca de". En ese caso, el servidor escribirá "acerca de" en la respuesta y la finalizará. Si el valor no es "/about", el servidor escribirá "hello world" en la respuesta y la finalizará.*/
    console.log(request.url);
    if(request.url === "/about"){
        response.write("acerca de ")
        return response.end()
    }
    
    response.write("hello world")
    response.end()
}).listen(3000) // El método listen se utiliza para iniciar el servidor y hacer que escuche en el puerto 3000. Esto significa que el servidor podrá recibir solicitudes entrantes en el puerto 3000 y responder a ellas según corresponda.


console.log("servidor escuchando en el puerto 3000");

