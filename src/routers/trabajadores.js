const express = require ('express')
const router = express.Router()
const trabajador = require('../usecases/trabajador')
const Trabajador = require ('../models/trabajador')


router.get ('/add', (req,res)=> {
    res.render('partials/add.hbs')
})

router.post('/partials/add.hbs', async (req,res) =>{
    console.log(req.body);
    const {nombre, apellido, area, horasT, pagos, description} = req.body;
    const errors = [];

    if(!nombre) {
        errors.push({text: 'please write a name'});
    }

    if (!apellido){
        errors.push({text: 'please write a lastname'});
    }

    if (!area){
        errors.push ({text: 'please write a area'});
    }
    
    if (!horasT){
        errors.push ({text: 'please write a horaT'});
    }

    if (!pagos){
        errors.push ({ text: 'write pays'});
    } 

    if (!description){
        errors.push ({ text: 'please write a description'});
    }



    if (errors.length > 0) {
        res.render('partials/add.hbs', {
            errors,
            nombre,
            apellido,
            area,
            horasT,
            pagos,
            description
        });
    } else {
        const nuevoTrabajador= new Trabajador ({
            nombre,
            apellido,
            area,
            horasT,
            pagos,
            description
        })
       await nuevoTrabajador.save();
        res.redirect('/');
    }
});


router.get ('/', async (req,res) => {
    const trabajador = await Trabajador.find().sort({date: 'desc'})
    res.render('partials/all.hbs', {trabajador})
});  



// router.post ('/', async (req,res) => {
//     const {
//         nombre,
//         apellido,
//         area,
//         horasT,
//         pagos
//     } = req.body

//     const nuevoTrabajador = await trabajador.create ({
//         nombre,
//         apellido,
//         area,
//         horasT,
//         pagos
//     })

//     res.json ({
//         success:true,
//         message: 'trabajador creado',
//         data: {
//             trabajador: nuevoTrabajador
//         }
//     })
// })

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
        pagos,
        description
    } = req.body

    const modificarTrabajador = await trabajador.updateById(id, {
        nombre,
        apellido,
        area,
        horasT,
        pagos, 
        description
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