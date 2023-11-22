import  express  from "express"; //importamos express
import  {v4}     from"uuid" //importamos la libreria uuid para generar un id 

//llamamos a expres por medio de una variabla para iniciar el servidor
const app = express()

//usamos esta ruta para usar uuid
app.use(express.json())

//creamos nuestras rutas para el test
app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/tasks', (req, res, next)=>{
    res.json([]);
})

app.post('/tasks',(req,res) => {
    const{tittle,description}= req.body
    res.json({
        tittle,
        description,
        id:v4()
    });
})
//exportamos el archivo app.js 
export default app;