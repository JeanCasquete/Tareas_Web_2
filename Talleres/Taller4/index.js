const express = require('express')
const cors  =require('cors')

const PORT = 8000;

const app =  express();
app.use(cors()).use(express.json())
app.use('/public',  express.static(__dirname+'/public'))


let clientes =[
    { id: 1, nombre: 'Juan', apellido: 'Pérez', identificacion: '123456789' },
    { id: 2, nombre: 'María', apellido: 'González', identificacion: '987654321' }
  
]

// GET  -> Consulta de información
app.get('/clientes', (req, res)=>{
    res.status(200).send(clientes);
})
// GET INDIVIDUAL -> Consulta pero de un solo elemento
app.get('cliente/:identificacion', (req,res)=>{
    const {identificacion} =  req.params
    const studentsFilter =  clientes.filter(p=> p.identificacion.toString() === identificacion.toString())
    if (studentsFilter.length>0)
    {
        return res.status(200).send(studentsFilter[0])
    }
    res.status(403).send({
        message:'No pudo ser encontrado el recurso'
    })
    

})


app.listen(PORT, ()=>{
    console.log(`Server running in http://localhost${PORT}`);
})