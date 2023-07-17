const { model, Schema } = require('mongoose');

const ClienteSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del cliente es necesario'],
            unique:true
        },
        identificacion:{
            type: String,
            required: [ true, 'La identificacion del cliente es necesaria'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);


module.exports = model('Cliente', ClienteSchema );