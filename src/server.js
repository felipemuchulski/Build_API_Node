require("express-async-error")

const migrationsRun = require("./database/postgresql/migrations/index");
//express declared
const express = require("express");

const AppError = require("./utils/AppError")


//import routes
const routes = require("./routes")
migrationsRun();


//running express on code 
const app = express();
app.use(express.json());

app.use(routes)




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
