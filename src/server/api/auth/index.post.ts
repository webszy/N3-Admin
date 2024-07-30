import {connectDB} from "~/database";
import UserModel from "~/database/schemas/User";
import {defineWrappedResponseHandler} from "~/server/utils/transformers";
interface IAuthPostBody {
    username: string;
    password: string;
    autoLogin?: boolean;
}

export default defineWrappedResponseHandler(async (event) => {
    const {username, password, autoLogin} = await readBody<IAuthPostBody>(event)
    await connectDB()
    const user = await UserModel.findOne({id:username})
    if(!user){
        return createError({
            statusCode:401,
            statusMessage: "Unauthorized",
            message: "Invalid username or password"
        })
    }
    if(process.env.NODE_ENV === 'production' && password!== user.password){
        return createError({
            statusCode:403,
            statusMessage: "Unauthorized",
            message: "Invalid username or password"
        })
    }
    setResponseStatus(event,200)
    const {id,name} = user
    return {
        status:'success',
        token:'test',
        id,
        name
    }

})
