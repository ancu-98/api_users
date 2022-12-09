//? Import dependencies
const express = require('express');

//? Import Routers
const userRouter = require('./users/users.router');

//? Initial Config
const port = 8000;
const app = express();

//? JSON request available
app.use(express.json());

//? Verificar servidor
app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'});
});

//? API v1 Routes
app.use('/api/v1', userRouter);

//? start server
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

