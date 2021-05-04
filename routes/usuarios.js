/*

    Ruta: /api/usuarios

 */

const { Router, request } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } = require('../controllers/usuarios');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get( '/', validarJWT, getUsuarios );

router.post( '/', 
        [
            check('nombre', 'el nombre es obligatorio').not().isEmpty(),
            check('password', 'la contraseña es obligatoria').not().isEmpty(),
            check('email', 'el email es obligatorio').isEmail(),
            validarCampos
        ],
        crearUsuario 
);

router.put( '/:id', 
        [
            validarJWT,
            check('nombre', 'el nombre es obligatorio').not().isEmpty(),
            check('email', 'el email es obligatorio').isEmail(),
            check('role', 'el rol es obligatorio').not().isEmpty(),
            validarCampos
        ],
        actualizarUsuario
);

router.delete( '/:id', 
        validarJWT,
        borrarUsuario );

module.exports = router;