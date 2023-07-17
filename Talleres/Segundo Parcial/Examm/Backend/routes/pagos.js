const { Router } = require('express')
const { check } =  require('express-validator')

const { createProduct,
     getProduct, 
     getProducts,
     updateProduct,
     deleteProduct,
    getActivePayments } = require('../controllers').Pago;

const { validateFields } = require('../middlewares');
const { getPagosInactivos, getPagosActivos } = require('../controllers/pago');

const router = Router();

///     https://localhost:3000/api/v1/products/

router.get('/', getProducts);

router.get('/activos', getPagosActivos);
router.get('/inactivos', getPagosInactivos);



router.get('busca/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getProduct);

router.post('/',[
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createProduct)

router.put('/:id', updateProduct)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteProduct)

module.exports = router;