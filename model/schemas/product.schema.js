//packages
const mongoose = require("mongoose")
const validator = require("mongoose-unique-validator")

//Schema creation
const productSchema = new mongoose.Schema({
    id:{
        type:"String",
        required: true,
        unique: true
    },
    nombre:{
        type:"String",
        required: true,
        unique: true
    },
    precio:{
        type:"Number",
        required: true
    },
    existencia:{
        type: "String",
        required: true,
    },
    calificación:{
        type:"Number",
        required: true,
    },
    id_categoria:{
        type:"String",
        required: true
    },
    id_marca:{
        type:"String",
        required: true
    },
    descuento:{
        type:"Number",
        required: true
    },
    cantidad:{
        type:"String",
        required: true
    }
})

//Schema exportation
productSchema.plugin(validator)
module.exports = productSchema