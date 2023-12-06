import { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, default as axios } from "axios";
import { transformCreateAccountRequest } from "./transformer/request";

function listenRequest(request: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> {
    const path = request.url?.toLowerCase();
    let config: InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> = request;
    switch (path) {
        case "/api/account/create":
            config = transformCreateAccountRequest(config);
            break;
        case "/api/account/verify":
            config = transformCreateAccountRequest(config);
            break;
        default:
            break;
    }
    return config;
}

function listenResponse(response: AxiosResponse<any, any>): AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> {
    const path = response.config.url?.toLowerCase();
    switch(path){
        case "/auth/activateMail".toLowerCase():
            
            break;
        default:
            break;
    }
}

export function inject(instance: AxiosInstance | null): InterceptorId {
    if (instance === null) {
        instance = axios;
    }
    const ret: InterceptorId = {
        request: instance.interceptors.request.use(listenRequest, function (error) {/*TODO*/return error; }),
        response: instance.interceptors.response.use()
    };
    return ret;

}

export function eject(instance: AxiosInstance | null, id: InterceptorId) {
    if (instance === null) {
        instance = axios;
    }
    instance.interceptors.request.eject(id.request);
    instance.interceptors.response.eject(id.response);
}

export interface InterceptorId {
    request: number,
    response: number
}