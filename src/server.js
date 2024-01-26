//express declared
const express = require("express");

//running express on code 
const app = express();

//route.params
app.get('/message/:id/:user', (request, response) => {
    const {id, user} = request.params;

    response.send(`
    ID Message: ${id}
    For user: ${user}`);
} )

// query.params
app.get('/user', (request, response) => {
    const {page, limit} = request.query;

    response.send(`
    page: ${page}. limit ${limit}`);

});

//is host port
const PORT = 3333;
//Checks if the port is running
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

