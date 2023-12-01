import { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, default as axios } from "axios";
import { transformCreateAccountRequest } from "./transformer/request";

function listenRequest(request: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> {
    if (request.method?.toLowerCase() === ("post" || "get")) {
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
    return request;
}

function listenResponse(response: AxiosResponse<any, any>): AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> {
    const path=response.config.url?.toLowerCase();
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

export interface InterceptorId {
    request: number,
    response: number
}