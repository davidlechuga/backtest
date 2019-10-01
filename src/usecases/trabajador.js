const Trabajador = require ('../models/trabajador')

function create ({nombre, apellido, area, horasT, pagos, description}){
    const nuevoTrabajador= new Trabajador ({
        nombre,
        apellido,
        area,
        horasT,
        pagos,
        description
    })
    return nuevoTrabajador.save()
}


function getAll() {
    const allTrabajadores = Trabajador.find()
    return allTrabajadores
}

async function deleteById(id) {
    const trabajador = await Trabajador.findById(id)
    const deleteTrabajador= await Trabajador.deleteOne(trabajador)
    return deleteTrabajador
}


async function updateById (id, { nombre, apellido, area, horasT, pagos}) {
    const trabajador = await Trabajador.findById(id)
    const updateTrabajador = await Trabajador.updateOne(trabajador, {
        nombre,
        apellido,
        area,
        horasT,
        pagos,
        description

    })
    return updateTrabajador
}

module.exports = {
    create,
    getAll,
    deleteById,
    updateById,
}