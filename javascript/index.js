var express = require("express");
const res = require("express/lib/response");
var cors = require('cors')
var app = express();

app.use(cors())

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

// Simples routes for simple lessons =D

app.get("/getUsers", (request, response, next) => {
    response.json(["Vinicius", "Wendley", "Islan", "Almofadinhas", "Rabicho", "Aluadinho", "Carlos Felino"])
})

app.get("/getUserEmails", (request, response, next) => {
    response.json([
        "vinicius.mocci@hotmail.com", 
        "wendley.zago@gmail.com", 
        "islan.gomes@hotmail.com", 
        "almofadinhas@hp.com",
        "rabicho@hp.com",
        "aluadinho@hp.com",
        "carlos.felino@astrodorock.com"
    ])
})