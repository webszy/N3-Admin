import mongoose from 'mongoose'
import { nextTick } from 'node:process'
export function connectDB (){
    const url = process.env.NUXT_MONGODB_URI
    const options = {
        dbName:process.env.NUXT_MONGODB_DBNAME
    }
    const db = mongoose.createConnection(url,options)
    db.on('error',(err) => {
        if(err.message && err.message.includes('not connect')){
            nextTick(()=>{
                db.open(url,options).catch(()=>{})
            })
        }
    })
    db.once('open', () => {
        console.log("MongoDB connection established")
    })
}
