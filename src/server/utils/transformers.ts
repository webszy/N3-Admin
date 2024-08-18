import type {EventHandler, EventHandlerRequest} from 'h3'
import {connectDB} from "~/database";
import {getJwtInfo, verifyJwt} from "~/utils/jwt";

export const defineWrappedResponseHandler = <T extends EventHandlerRequest, D>(
    handler: EventHandler<T, D>
): EventHandler<T, D> =>
    defineEventHandler<T>(async event => {
        try {
            // 在路由处理程序之前执行某些操作
            if (!(global as any).MONGO_CONNECTED) {
                await connectDB()
            }
            const headers = getHeaders(event)
            if ('fish-authentication-v3' in headers) {
                const token = headers['fish-authentication-v3'] as string
                const valided = await verifyJwt(token)
                 if(!valided){
                     setResponseStatus(event, 403)
                     return {
                         status:'failed',
                         data:'unauthorized'
                     }
                 }
                (event as any).jwtInfo = getJwtInfo(token);
            }
            const response: any = await handler(event)
            const status = getResponseStatus(event)
            console.log(event.path, response)
            // 在路由处理程序之后执行某些操作
            // 判断返回值中是否有null，处理为空字符串
            Object.keys(response)
                .forEach(key => {
                    if (response[key] === null) {
                        response[key] = ''
                    }
                })
            return {
                status: status === 200 ? 'success' : 'failed',
                data: response
            }
        } catch (err) {
            // 错误处理
            return {status: 'failed', data: err}
        }
    })
