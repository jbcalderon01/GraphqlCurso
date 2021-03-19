
const connectDB = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
   Query: {
        getUsers: async () => {
            let db
            let usuarios=[]
            try {
                db = await connectDB()
                usuarios= await db.collection('usuarios').find().toArray()
            } catch (error) {
                console.error(error) 
                }
                return usuarios
        },
    getUser: (args)=> console.log(args.nombre)
    }
}