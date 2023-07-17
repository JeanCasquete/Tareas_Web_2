const { response } = require('express');
const { Concepto} = require('../models');


const getConceptos = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, conceptos ] = await Promise.all([
        Concepto.countDocuments(query),
        Concepto.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);;
  
    res.json({
      sum, 
      conceptos
    })
}

const getConcepto = async (req, res= response)=>{
    const {id} = req.params
    const concepto=  await Concepto.findById(id);
    res.json(concepto);
}
const createConcepto = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existeConcepto =  await Concepto.findOne({descripcion: body.descripcion})

    if (existeConcepto)
    {
        return res.status(400).json({
            msg:`El concepto ${ existeConcepto.descripcion } ya existe`
        })
    }

    const data = {
        ...body,
        descripcion: body.descripcion
    }

    const concepto = new Concepto(data);

    const newConcepto =  await concepto.save();
    res.status(201).json(newConcepto);
}
const updateConceptos = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const UpdateConcepto =  await Concepto.findByIdAndUpdate(id,data, {new: true} )
    res.json(UpdateConcepto);
}
const deleteConceptos =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedConcepto =  await Concepto.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedConcepto);
}

 module.exports ={
    createConcepto,
    getConcepto,
    getConceptos,
    updateConceptos,
    deleteConceptos
 }