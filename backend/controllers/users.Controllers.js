const User = require('../models/users.Models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Controlador para crear un nuevo usuario
exports.createUser = async (req, res) => {
    try {
        const { name, lastName, email, password, age } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, lastName, email, password: hashedPassword, age });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).send('Error interno del servidor XD');
    }
};

// Controlador para autenticar un usuario
exports.authenticateUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).send('Credenciales inválidas');
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({ user, token });
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
};

// Controlador para obtener un usuario por su ID
exports.getUser = async (req, res) => {
    // ... el resto del código permanece igual
};

// Controlador para actualizar un usuario por su ID
exports.updateUser = async (req, res) => {
    // ... el resto del código permanece igual
};

// Controlador para eliminar un usuario por su ID
exports.deleteUser = async (req, res) => {
    // ... el resto del código permanece igual
};

// Controlador para obtener la lista de usuarios (sin autenticación)
exports.getAllUsers = async (req, res) => {
    // ... el resto del código permanece igual
};
