//? Creamos base de datos fictisia
const usersBD = [];
let id = 1;

//? Definimos estructura del user
// {
// 	id: 1,
// 	first_name: 'string',
// 	last_name: 'string',
// 	email: 'string',
// 	password: 'string',
// 	birthday: 'YYYY/MM/DD'
// }

//? Obtener todos los usuarios
const findAllUsers = () => usersBD;

//? Crear un nuevo usuario
const createNewUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name ? obj.last_name : 'last_name Unknown',     //Valor opcional
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday || 'birthday Unknown'    //Valor opcional
    };
    usersBD.push(newUser);
    return newUser;
}

//? Obtener user según id
const findUserById = (id) => {
    const findUser = usersBD.find(user => user.id = id);
    return findUser;
}

//? Obtener usuario aleatorio
const findRandomUser = () => {
    const randomUser = Math.floor(Math.random() * usersBD.length);
    return usersBD[randomUser]
}

//? Exportar funciones
module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
    findRandomUser
}