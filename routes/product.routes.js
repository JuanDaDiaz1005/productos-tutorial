const controller = require("../controller/logic/product.controller")

module.exports = (app) =>{
    app.get("/product", (req, res, next) =>{
        controller.getAll(req, res, next)
    })

    app.get("/product/bycode/:code", (req, res, next) =>{
        controller.getByCode(req, res, next)
    })
    
    app.post("/product", (req, res, next) =>{
        controller.createproduct(req, res, next)
    })

    app.put("/product", (req, res, next) =>{
        controller.updateproduct(req, res, next)
    })

    app.delete("/product", (req, res, next) =>{
        controller.deleteproduct(req, res, next)
    })
}