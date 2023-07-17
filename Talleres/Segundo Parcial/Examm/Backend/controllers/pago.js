const { response } = require('express');
const { Pago } = require('../models');


const getProducts = async (req, res = response) => {
    const { limit = 10, since = 0 } = req.query;
    const query = {};
  
    const [sum, pagos] = await Promise.all([
      Pago.countDocuments(query),
      Pago.find(query)
        .skip(Number(since))
        .limit(Number(limit)),
    ]);
  
    res.json({
      sum,
      pagos,
    });
  };
  
const getProduct= async (req, res =  response)=>{
    const {id} = req.params
    const pago=  await Pago.findById(id).populate('concepto');
    res.json(pago);
}
const createProduct= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const existPago =  await Pago.findOne({nombre: body.nombre})

    if (existPago)
    {
        return res.status(400).json({
            msg:`El producto ${ existPago.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        nombre: body.nombre
    }

    const pago = new Pago(data);

    const newPago =  await pago.save();
    res.status(201).json(newPago);
}
const updateProduct= async (req, res=response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    // console.log(id,data)
    const updatedPago =  await Pago.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedPago);
}
const deleteProduct= async (req, res = response)=>{
    const {id} = req.params;
    const deletedPago =  await Pago.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedPago);
}


const getPagosInactivos= async (req, res = response )=>{

    const { limit = 10 , since=0 } =  req.query;
    const query = { status:false };

    const [ sum, pagos ] = await Promise.all([
        Pago.countDocuments(query),
        Pago.find(query)
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      pagos
    })
    
}

const getPagosActivos= async (req, res = response )=>{

    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, pagos ] = await Promise.all([
        Pago.countDocuments(query),
        Pago.find(query)
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      pagos
    })
    
}

module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getPagosInactivos,
    getPagosActivos
};