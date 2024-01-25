//express declared
const express = require("express");

//running express on code 
const app = express();

//is host port
const PORT = 3333;
//Checks if the port is running
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

