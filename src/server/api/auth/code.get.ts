import Captcha from 'svg-captcha'
import { nanoid } from 'nanoid'

export default defineEventHandler(async (event) => {
    const svg = Captcha.create({
        size: 4,
        ignoreChars: "0o1iIl",
        noise: 3,
        color: true,
        background: "#fff",
        fontSize: 60
    })
    // setResponseHeader(event, "content-type", "image/svg+xml")
    //写入数据库
    const id = nanoid()
    return svg.data
})