const jwt = require('jsonwebtoken');
const User = require('../models/users.Models');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Obtener el token del encabezado
            token = req.headers.authorization.split(' ')[1];

            // Verificar el token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Obtener el usuario del token
            req.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            console.error(error);
            res.status(401).send('No autorizado, token fallido');
        }
    }

    if (!token) {
        res.status(401).send('No autorizado, no hay token');
    }
};

module.exports = { protect };
