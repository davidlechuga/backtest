const mongoose = require ('mongoose');
const trabajadorSchema = new mongoose.Schema ({

    nombre: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },

    apellido: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },

    area: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },

    horasT: {
        type: Number,
        min: 1,
        required: true
    },
    
    pagos: {
        type: Number,
        min: 1,
        required: true
    },

    description: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true

    }
})


 
module.exports = mongoose.model('Trabajador', trabajadorSchema)