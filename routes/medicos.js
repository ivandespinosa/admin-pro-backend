/**
    /api/medicos
*/

const { Router, request } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');


const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico
} = require('../controllers/medicos');

const router = Router();

router.get( '/', getMedicos );

router.post( '/', 
    [
        validarJWT,
        check('nombre','El nombre del médico es necesario').not().isEmpty(),
        validarCampos
    ],
    crearMedico 
);

router.put( '/:id', 
    [
        validarJWT,
        check('nombre','El nombre del médico es necesario').not().isEmpty(),
        check('hospital','El hospital id debe ser válido').isMongoId(),
        validarCampos
    ],
    actualizarMedico
);

router.delete( '/:id', 
    borrarMedico 
);

module.exports = router;