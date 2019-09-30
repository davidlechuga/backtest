const express = require ('express')
const router = express.Router()
const trabajador = require('../usecases/trabajador')

router.get ('/add', (req,res)=> {
    res.render('partials/add.hbs')
})


router.get ('/', async (req,res) => {
  
    res.render('partials/all.hbs')
})  


router.post ('/', async (req,res) => {
    const {
        nombre,
        apellido,
        area,
        horasT,
        pagos
    } = req.body

    const nuevoTrabajador = await trabajador.create ({
        nombre,
        apellido,
        area,
        horasT,
        pagos
    })

    res.json ({
        success:true,
        message: 'trabajador creado',
        data: {
            trabajador: nuevoTrabajador
        }
    })
})

router.delete('/:id', async (req,res) => {
    const {id} = req.params
    const borrarTrabajador = await trabajador.deleteById(id)

    res.json({
        success:true,
        message: 'trabajador borrado',
        data: {
            trabajador: borrarTrabajador
        }
    })
})

router.patch ('/:id', async (req,res) => {
    const {id} = req.params
    const {
        nombre,
        apellido,
        area,
        horasT,
        pagos
    } = req.body

    const modificarTrabajador = await trabajador.updateById(id, {
        nombre,
        apellido,
        area,
        horasT,
        pagos
    })

    res.json ({
        success:true,
        message: "trabajador modificado",
        data : {
            trabajador: modificarTrabajador
        }
    })
})

module.exports = router