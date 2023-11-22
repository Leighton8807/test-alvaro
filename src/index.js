import app from './app.js'//creamos el import para nombrar app en nuestro index
//creamos el puerto del servidor 
const port = 3000


app.listen(port)
console.log(`server listening on port ${port}`);