const mongoose = require('mongoose');

// Esquema para las reseñas de los productos
const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // Referencia al modelo de Usuario
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Agrega campos automáticos de createdAt y updatedAt
});

// Esquema principal para los productos
const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // Referencia al modelo de Usuario que creó el producto
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema], // Array de reseñas, basado en el subesquema de reseña
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true // Agrega campos automáticos de createdAt y updatedAt
});

// Creación del modelo de Producto basado en el esquema
const Product = mongoose.model('Product', productSchema);

// Exportación del modelo de Producto
module.exports = Product;
