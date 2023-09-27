
const exress = require("express")

const server = exress()
const author  = require("./authors.js")
const book  = require("./books.js")
const bookstore  = require("./bookstores.js")




server.use(exress.json());

server.use("/api" , author)
server.use("/api" , book)
server.use("/api" , bookstore)



module.exports = server