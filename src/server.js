//express declared
const express = require("express");

//running express on code 
const app = express();
app.use(express.json());

//route.params
// app.get('/message/:id/:user', (request, response) => {
//     const {id, user} = request.params;

//     response.send(`
//     ID Message: ${id}
//     For user: ${user}`);
// } )

// query.params
// app.get('/user', (request, response) => {
//     const {page, limit} = request.query;

//     response.send(`
//     page: ${page}. limit ${limit}`);

// });

//method post 
app.post('/users', (request, response) => {
    const { name, email, password } = request.body;

    response.json({name, email, password})

    //or
    // response.send(`Username: ${name} e-mail: ${email}, `)
    // response.send("You call post")
})

//is host port
const PORT = 3333;
//Checks if the port is running
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

