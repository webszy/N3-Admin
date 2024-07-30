import HmacSHA512 from 'crypto-js/hmac-sha512';
import sha1 from 'crypto-js/sha1';

import encHex from 'crypto-js/enc-hex';
export function useLogin({username, password}) {
    const config = useRuntimeConfig()
    const secret = sha1(config.public.sha256_secret)

    const hashedPassword = HmacSHA512(password, secret).toString(encHex);
    debugger
}
