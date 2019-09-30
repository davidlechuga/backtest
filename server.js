const express = require ('express')
const router = require ('./src/routers/trabajadores')
const path = require('path');
const exphbs = require ('express-handlebars');
const methodOverride = require ('method-override');
const session = require ('express-session');

// initializacion
const app = express();


//middle
app.use (express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
secret:'mysecretapp',
resave:true,
saveUninitialized: true
}));

//settings
app.use(express.json())
app.set('views', path.join(__dirname,'src/views'));
app.engine('.hbs', exphbs ({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//static Files
app.use(express.static(path.join(__dirname , 'src/public')));
// router . methods
app.use('/trabajadores', router)

app.get ('/', (req,res) =>{
    res.json({
        message: "hola"
    })
})



module.exports = app