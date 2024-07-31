import Captcha from 'svg-captcha-fixed'
import CaptchaModel from "@/database/schemas/CaptchaCodes";

export default defineEventHandler(async (event) => {
    const svg = Captcha.create({
        size: 4,
        ignoreChars: "0o1iIl",
        noise: 3,
        color: true,
        background: "#fff",
        fontSize: 60
    })
    setResponseHeader(event, "content-type", "image/svg+xml")
    const data = await CaptchaModel.create({
        code: svg.text,
        ts: Date.now()
    })
    const _id = data._id.toString().valueOf()
    if(_id){
        setResponseStatus(event, 200)
        setCookie(event,'code_id',_id)
        return svg.data
    }
    setResponseStatus(event, 400)
    return undefined
})
