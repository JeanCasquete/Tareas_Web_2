const { model, Schema } = require('mongoose');

const PagoSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'nombre para el pago es necesario'],
        },
        cliente:{
            type: String,
            ref:'Cliente',
            required: false,
        },
        concepto:{
            type: String,
            ref:'Concepto',
            required: false,
        },
        Fecha:{
            type: String,
            default:'2023'
        },
        Hora:{
            type: String,
            default:'15:30'
        },
        valor:{
            type: Number,
            default:150
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }

    }
);

PagoSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Pago', PagoSchema );