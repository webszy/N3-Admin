interface IAuthPostBody {
    username: string;
    password: string;
    autoLogin?: boolean;
}
export default defineEventHandler(async (event) => {
    const {username, password,autoLogin} = await readBody<IAuthPostBody>(event)
    return {username, password,autoLogin}
})
