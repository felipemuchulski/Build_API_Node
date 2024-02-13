require("express-async-error")

const database = require("./database/postgresql/index.js");
//express declared
const express = require("express");

const AppError = require("./utils/AppError")


//import routes
const routes = require("./routes")


//running express on code 
const app = express();
app.use(express.json());

app.use(routes)
database();


app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    return response.status(500).json({
        stauts: "error",
        message: 'Internal server error'
    })
})


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
