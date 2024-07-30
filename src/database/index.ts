import mongoose from 'mongoose'
// console.log(process.env.NUXT_MONGODB_URI)
export function connectDB (){
    return mongoose.connect(process.env.NUXT_MONGODB_URI,
        {
            dbName:process.env.NUXT_MONGODB_DBNAME
        }
    )
}
