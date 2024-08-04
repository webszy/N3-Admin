import mongoose from 'mongoose'
global.dbIsOnline = false
export function connectDB (){
    const url = process.env.NUXT_MONGODB_URI  as string
    const options = {
        dbName:process.env.NUXT_MONGODB_DBNAME as string
    }
    const db = mongoose.createConnection(url,options)
    db.on('error',(err) => {
        if(err.message && err.message.includes('not connect')){
            global.dbIsOnline = false
        }
    })
    db.once('open', () => {
        console.log("MongoDB connection established")
        global.dbIsOnline= true
    })
}
