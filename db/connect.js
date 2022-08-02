const mongoose = require('mongoose')

// const connectionString =
//  'mongodb+srv://isacc:MlW7E67BoqyooIPE@nodeexpressprojects.mep5zwp.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) =>{
    return mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
 })
}

module.exports = connectDB
 
//  .then(() => console.log('CONNECTED TO THE DB.....'))
//  .catch((err) => console.log(err))
            