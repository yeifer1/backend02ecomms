require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./backend/routes/products.Routes');
const userRoutes = require('./backend/routes/users.Routes');
const { errorHandler } = require('./backend/middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.DB_URI)
.then(() => console.log('Base de datos conectada'))
.catch((error) => console.error('Error al conectar a la base de datos:', error));


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
