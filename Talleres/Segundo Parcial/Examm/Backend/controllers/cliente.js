const { response } = require('express');
const { Cliente} = require('../models');


const getClientes = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, clientes ] = await Promise.all([
        Cliente.countDocuments(query),
        Cliente.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);;
  
    res.json({
      sum, 
      clientes
    })
}

const getCliente = async (req, res= response)=>{
    const {id} = req.params
    const cliente=  await Cliente.findById(id);
    res.json(cliente);
}
const createCliente = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existeCliente =  await Cliente.findOne({identificacion: body.identificacion})

    if (existeCliente)
    {
        return res.status(400).json({
            msg:`El cliente de ientificacion ${ existeCliente.identificacion } ya existe`
        })
    }

    const data = {
        ...body,
        identificacion: body.identificacion
    }

    const cliente = new Cliente(data);

    const newCliente =  await cliente.save();
    res.status(201).json(newCliente);
}
const updateCliente = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const clienteUpdate =  await Cliente.findByIdAndUpdate(id,data, {new: true} )
    res.json(clienteUpdate);
}
const deleteCliente =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedCliente =  await Cliente.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedCliente);
}

 module.exports ={
    createCliente,
    getCliente,
    getClientes,
    updateCliente,
    deleteCliente
 }