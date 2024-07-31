import type { EventHandler, EventHandlerRequest } from 'h3'

export const defineWrappedResponseHandler = <T extends EventHandlerRequest, D> (
    handler: EventHandler<T, D>
): EventHandler<T, D> =>
    defineEventHandler<T>(async event => {
        try {
            // 在路由处理程序之前执行某些操作
            const response = await handler(event)
            const status = getResponseStatus(event)
            console.log(event.path, response)
            // 在路由处理程序之后执行某些操作
            // 判断返回值中是否有null，处理为空字符串
            Object.keys(response)
                .forEach(key => {
                if(response[key] === null){
                    response[key] = ''
                }
            })
            return {
                status:status === 200 ? 'success' : 'failed',
                data:response
            }
        } catch (err) {
            // 错误处理
            return { status:'failed',data:err }
        }
    })
