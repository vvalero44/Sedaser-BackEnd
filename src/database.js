/*
Aqui realizamos la conexion a la base de datos a traves de mongoose
*/

import mongoose from "mongoose";

const URI = `mongodb+srv://victor:Abril2002@cluster0.c7yiq.mongodb.net/NuevoBackend_0?retryWrites=true&w=majority`

//conectamos a la base de datos
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(db=>console.log('db esta conectado'))
.catch(err=>console.log('Error', err))