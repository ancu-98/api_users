//? Dependencies
const router = require('express').Router();

//? File Imports
const userServices = require('./users.services');

//? Agregar servicios a rutas
router.get('/users', userServices.getAllUsers);
router.post('/users', userServices.postNewUser);

router.get('/users/random', userServices.getRandomUser);

router.get('/users/:id', userServices.getUserById);

module.exports = router;