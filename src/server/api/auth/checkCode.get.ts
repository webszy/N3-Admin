export default defineEventHandler(async (event) => {
    const {id} = getQuery(event)
    if(!id){
        return createError(`where your id to check?`)
    }
    return id
})