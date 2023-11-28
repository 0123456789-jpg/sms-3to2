import { AxiosInstance, InternalAxiosRequestConfig, default as axios } from "axios";
import { transformCreateAccountRequest } from "./transformer";

function listenRequest(request: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> {
    if (request.method?.toLowerCase() === ("post" || "get")) {
        const path = request.url?.toLowerCase();
        const config = request;
        switch (path) {
            case "/api/account/create":
                transformCreateAccountRequest(config);
                break;
            case "/api/account/verify":
            default:
                break;
        }
        return config;
    }
    return request;
}

export function inject(instance: AxiosInstance | null) {
    if (instance === null) {
        instance = axios;
    }
    instance.interceptors.request.use(listenRequest, function (error) {/*TODO*/return error; });
}