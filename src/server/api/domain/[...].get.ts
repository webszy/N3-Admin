import {connectDB} from "~/database";
import {defineWrappedResponseHandler} from "~/server/utils/transformers";
import DomainModel from "~/database/schemas/Domains";
const extractPathParams=(path:string,pattern:string)=>{
    const pathArr = path.split("?")[0].split("/");
    const patternArr = pattern.split("/");
    const params = new Map()
    if(pathArr.length!== patternArr.length){ return {} }

    for(let i=0;i<pathArr.length;i++){
        if(patternArr[i].startsWith(":")){
            const key = patternArr[i].replace(":","")
            if(!params.has(key)){
                params.set(key,pathArr[i])
            }
        }
    }
    return Object.fromEntries(params)
}
export default defineWrappedResponseHandler(async (event) => {
    const search = getQuery(event)
    const {pageNo, pageSize} = extractPathParams(event.path, "/api/domain/:pageNo/:pageSize")
    await connectDB();
    const records = await DomainModel
        .find(search)
        .skip((pageNo - 1) * pageSize)
        .limit(pageSize)
        .exec();
    const totalCount = await DomainModel.countDocuments(search);
    const hasNextPage = totalCount > pageNo*pageSize;
    return {
        records,
        pageNo,
        pageSize,
        totalCount,
        hasNextPage
    }
})
