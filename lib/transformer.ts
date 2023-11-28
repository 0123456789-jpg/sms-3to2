import { InternalAxiosRequestConfig } from "axios";

export function transformCreateAccountRequest(config: InternalAxiosRequestConfig):InternalAxiosRequestConfig<any>{
    config.url="/auth/activateMail";
    return config;
}

export function transformVerifyAccountRequest(config: InternalAxiosRequestConfig<any>):InternalAxiosRequestConfig<any>{
    // TODO
    return config;
}