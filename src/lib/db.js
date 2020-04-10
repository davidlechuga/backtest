const mongoose = require ('mongoose')

const uri = ''

module.exports = () => mongoose.connect(
    uri,
  {
    useNewUrlParser:true,
    useUnifiedTopology: true
  }
)
