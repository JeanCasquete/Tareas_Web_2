const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createCliente,
    getCliente,
    getClientes,
    updateCliente,
    deleteCliente
} = require('../controllers').Cliente;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getClientes );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getCliente );

 router.post('/',[
    check('identificacion', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createCliente);


 router.put('/:id', updateCliente);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteCliente);



module.exports = router;