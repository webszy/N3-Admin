

type TCreateJwtOptions = {
    name:string;
    roles:Array<string>;
}
/*
*   @description
* */
export function createJwt (info:TCreateJwtOptions): any {}
export function verifyJwt (token:string): any {}
export function getJwtInfo (token: string): any {
    return {
        username: ''
    }
}