import { InternalAxiosRequestConfig } from "axios";

export function transformCreateAccount():Promise<InternalAxiosRequestConfig<any>>{
    return Promise.reject("No need in sms2");
}

//function transformVerifyAccount(config: InternalAxiosRequestConfig<any>):InternalAxiosRequestConfig<any>{}