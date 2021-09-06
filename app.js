//packages
const express = require("express")
const config = require("config")
// const bodyParser = require("body-parser")

//App configuration

const app = express()
const port = config.get("server-port")
// const jsonParser = bodyParser.json()
// const urlEncodedParser = bodyParser.urlencoded(
//     {extended:true}
// )

// app.use(jsonParser)
// app.use(urlEncodedParser)

// const ipFn = require("./middleware/getIpAddress")
// app.use("*", ipFn)

//Methods

app.get("/", (req,res,next) => {
    res.send("Hola")
})

const producctRoutes = require("./routes/product.routes")
producctRoutes(app)

app.listen(port, () => {
    console.log("Server is runing")
})