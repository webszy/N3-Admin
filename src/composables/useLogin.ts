import HmacSHA512 from 'crypto-js/hmac-sha512';
import sha1 from 'crypto-js/sha1';
import encHex from 'crypto-js/enc-hex';
import type {CommonResponse} from "~/types/http";
interface LoginOptions {
    password: string;
    username: string;
    autoLogin?: boolean;
}
type roleItem = {name:string,id:string}
type permissionItem = {id:string,type:'route'|'button',name:string}

type LoginResponse =  CommonResponse<{
        token: string;
        userId:string;
        role:roleItem[];
        permissions:permissionItem[];

}>
export async function useLogin({username, password, autoLogin=false}: LoginOptions,sha256_secret) {
    const secret = sha1(sha256_secret)
    const hashedPassword = HmacSHA512(password, secret).toString(encHex);
    return $fetch<LoginResponse>('/api/auth', {
        method: 'POST',
        body: {
            username,
            password: hashedPassword,
            autoLogin
        }
    })

}
