import mongoose from 'mongoose'
import type {ConnectOptions} from 'mongoose'
function setValue(flag = false ){
    (global as any).MONGO_CONNECTED = flag
}
export function connectDB (){
    const url = process.env.NUXT_MONGODB_URI  as string
    const options:ConnectOptions = {
        dbName:process.env.NUXT_MONGODB_DBNAME as string
    }
    return mongoose.connect(url, options)
        .then(res=>{
            console.log(res)
            setValue( true)
        })
        .catch(err=>{
            setValue( false)
        })
}
