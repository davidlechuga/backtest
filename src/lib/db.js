const mongoose = require ('mongoose')

const uri = 'mongodb+srv://davidlechuga:1Diosasegur@trabajadores-xcjjl.mongodb.net/test'

module.exports = () => mongoose.connect(
    uri,
  {
    useNewUrlParser:true,
    useUnifiedTopology: true
  }
)