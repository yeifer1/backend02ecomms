const express = require('express');
const userController = require('../controllers/users.Controllers');


const router = express.Router();
const {
    createUser,
    authenticateUser,
    getUser,
    updateUser,
    deleteUser,
    getAllUsers
} = require('../controllers/users.Controllers');

// Ruta para registrar un nuevo usuario
router.post('/register', createUser);

// Ruta para autenticar a un usuario
router.post('/login', authenticateUser);

// Ruta para obtener un usuario por su ID
// Asegúrate de agregar aquí tu middleware de autenticación si es necesario
router.get('/:id', getUser);

// Ruta para actualizar un usuario por su ID
// Asegúrate de agregar aquí tu middleware de autenticación si es necesario
router.put('/:id', updateUser);

// Ruta para eliminar un usuario por su ID
// Asegúrate de agregar aquí tu middleware de autenticación si es necesario
router.delete('/:id', deleteUser);

// Ruta para obtener la lista de todos los usuarios
// Asegúrate de agregar aquí tu middleware de autenticación si es necesario
router.get('/', getAllUsers);

module.exports = router;
