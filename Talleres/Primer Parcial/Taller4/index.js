const express = require('express')
const cors = require('cors')

const PORT = 8000;

const app = express();
app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname + '/public'))


let clientes = [
  { id: 1, nombre: 'Juan', apellido: 'Pérez', identificacion: '123456789' },
  { id: 2, nombre: 'María', apellido: 'González', identificacion: '987654321' }
]

// GET  -> Consulta de información
app.get('/clientes', (req, res) => {
  res.status(200).send(clientes);
})

// GET INDIVIDUAL -> Consulta pero de un solo elemento
app.get('/cliente/:identificacion', (req, res) => {
  const { identificacion } = req.params
  const studentsFilter = clientes.filter(p => p.identificacion.toString() === identificacion.toString())
  if (studentsFilter.length > 0) {
    return res.status(200).send(studentsFilter[0])
  }
  res.status(403).send({
    message: 'No pudo ser encontrado el recurso'
  })
})

// POST -> Insertar información
app.post('/agregar-cliente', (req, res) => {
  const { body } = req
  clientes.push(body);
  res.status(201).send({
    message: 'Dato insertado correctamente',
    response: body
  })
})

// PATCH OR PUT   -> Actualizar información
app.put('/actualizar-cliente/:identificacion', (req, res) => {
  const { identificacion, nombre, apellido } = req.body;
  let cliente = clientes.filter(p => p.identificacion === identificacion)[0] || {}
  cliente.nombre = nombre;
  cliente.apellido = apellido;

  res.status(202).send({
    message: 'Dato modificado correctamente',
    response: cliente
  })
})

// DELETE -> Eliminar algún elemento de la lista
app.delete('/eliminar/:identificacion', (req, res) => {
  const { identificacion } = req.params
  clientes = clientes.filter(p => p.identificacion.toString() !== identificacion.toString())
  res.status(200).send({
    message: 'Se eliminó el elemento correctamente'
  })
})

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
})
