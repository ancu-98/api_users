//? File imports
const userControllers = require('./users.controllers');

//? Obtener todos los usuarios
const getAllUsers = (req, res) => {
    const data = userControllers.findAllUsers();
    return res.status(200).json(data);
}

//? Crear un nuevo usuario
const postNewUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;

    if (first_name && email && password) {
        //? Existen propiedades obligatorias
        const data = userControllers.createNewUser({first_name,last_name,email,password,birthday});
        res.status(201).json(data);
    } else {
        //! error
        res.status(400).json({
            message: 'Invalid Data',
            fields: {
                first_name: 'string*',
                last_name: 'string',
                email: 'string*',
                password: 'string*',
                birthday: 'YYYY/MM/DD'
            }
        });
    };
};

//? Obtener user según id
const getUserById = (req, res) => {
    const id = req.params.id;
    const data = userControllers.findUserById(id);

    if (data) {
        //? data existe
        res.status(200).json(data);
    } else {
        //! error
        res.status(404).json({ message: 'Invalid ID' });
    };
};

//? Obtener usuario de manera aleatoria
const getRandomUser = (req,res) => {
    const data = userControllers.findRandomUser();

    if(data){
        //? data existe
        res.status(200).json(data);
    } else {
        //! error
        res.status(400).json({
            message: 'DB is empty'
        });
    };
};

//? Exportar funciones
module.exports = {
    getAllUsers,
    postNewUser,
    getUserById,
    getRandomUser
}
