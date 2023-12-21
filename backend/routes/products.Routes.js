const express = require('express');
const productsRoutes = require('../routes/users.Routes');

const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products.Controllers');

// Ruta para obtener todos los productos
router.get('/', getAllProducts);

// Ruta para obtener un producto por su ID
router.get('/:id', getProductById);

// Ruta para crear un nuevo producto
// Asegúrate de agregar aquí tu middleware de autenticación si es necesario
router.post('/', createProduct);

// Ruta para actualizar un producto por su ID
// Asegúrate de agregar aquí tu middleware de autenticación si es necesario
router.put('/:id', updateProduct);

// Ruta para eliminar un producto por su ID
// Asegúrate de agregar aquí tu middleware de autenticación si es necesario
router.delete('/:id', deleteProduct);

module.exports = router;
