import type {ICommonResponse} from "~/types/http";
import {naiveMessage} from "~/composables/useNaiveAPI";
interface LoginOptions {
    password: string;
    username: string;
    autoLogin?: boolean;
}
type roleItem = {name:string,id:string}
type permissionItem = {id:string,type:'route'|'button',name:string}

type LoginResponse =  ICommonResponse<{
        token: string;
        userId:string;
        role:roleItem[];
        permissions:permissionItem[];

}>
export async function useLogin({username, password, autoLogin=false}: LoginOptions,sha256_secret) {
    return $fetch<LoginResponse>('/api/auth', {
        method: 'POST',
        body: {
            username,
            password,
            autoLogin
        }
    })
        .then(({data})=>{
            naiveMessage.success('Login success')
            localStorage.setItem('token', data.token)
        })

}
