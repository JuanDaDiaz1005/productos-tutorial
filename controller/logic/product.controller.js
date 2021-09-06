//Dto
const productDto = require("../../model/dto/product.dto")
const config = require("config")

exports.createStudent = (req, res, next) => {
    let product = {
        id: req.body.id,
        nombre: req.body.nombre,
        precio: req.body.precio,
        existencia: req.body.existencia,
        calificacion: req.body.calificacion,
        id_categoria: req.body.id_categoria,
        id_marca: req.body.id_marca,
        descuento: req.body.descuento,
        cantidad: req.body.cantidad
    }
    productDto.create(product, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        console.log("Se ha añadido el producto con éxito.")
    })
}

exports.updateStudent = (req, res, next) => {
    let product = {
        id: req.body.id,
        nombre: req.body.nombre,
        precio: req.body.precio,
        existencia: req.body.existencia,
        calificacion: req.body.calificacion,
        id_categoria: req.body.id_categoria,
        id_marca: req.body.id_marca,
        descuento: req.body.descuento 
    }
    productDto.update({ _id: req.body.id }, product, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.status(201).json({
            info: data
        })
        console.log("Se ha actualizado el producto con éxito.")
    })
}

exports.getAll = (req, res, next) => {
    productDto.getAll({},(err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json({
            info: data
        })
        console.log("Se obtuvieron los productos con éxito.")
    })
}

exports.getByCode = (req, res, next) => {
    productDto.getByCode({code: req.params.code},(err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json({
            info: data
        })
        console.log("Se obtuvo el producto con éxito.")
    })
}

exports.deleteStudent = (req, res, next) => {
    productDto.delete({_id: req.body.id},(err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json()
        console.log("Se ha eliminado el producto con éxito.")
    })
}