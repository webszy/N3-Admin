import captchaCodes from "~/database/schemas/CaptchaCodes";
import {defineWrappedResponseHandler} from "~/server/utils/transformers";

export default defineWrappedResponseHandler(async (event) => {
    const {code} = getQuery(event)
    const id = getCookie(event, "code_id")
    if(!code){
        return createError({
            message:`where your code to check?`,
            statusCode: 400,
            statusMessage: "Bad Request Parameters",
        })
    }
    if(!id){
        return createError({
            message:`illegal request, please try again.`,
            statusCode: 403,
            statusMessage: "Illegal Request",
        })
    }
    const {code:realCode} = await captchaCodes.findById(id)
    setResponseStatus(event,200)
    setCookie(event, "code_id", "", {maxAge: -1})
    return { result: code === realCode ? 'success':'failed' }
})
