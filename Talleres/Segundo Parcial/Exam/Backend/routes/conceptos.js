const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createConcepto,
    getConcepto,
    getConceptos,
    updateConceptos,
    deleteConceptos
} = require('../controllers').Concepto;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getConceptos );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getConcepto );

 router.post('/',[
    check('descripcion', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createConcepto);


 router.put('/:id', updateConceptos);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteConceptos);



module.exports = router;