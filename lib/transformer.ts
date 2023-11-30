import { InternalAxiosRequestConfig } from "axios";
import { AbstractVerifyAccount3, VerifyAccount3, VerifyActivateAccount3, VerifyResetPassword3 } from "./struct3";
import { FullUser2, ResetPasswordInfo2 } from "./struct2";

export function transformCreateAccountRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> {
    config.url = "/auth/activateMail";
    return config;
}

export function transformVerifyAccountRequest(config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> {
    const abstReq: AbstractVerifyAccount3 = config.data;
    switch (Object.keys(abstReq.variant)[0]) {
        case "Activate": {
            const req: VerifyAccount3<VerifyActivateAccount3> = config.data;
            const transformed: FullUser2 = {
                username: req.variant.Activate.id.toString(),
                password: req.variant.Activate.password,
                realName: req.variant.Activate.name,
                email: req.variant.Activate.email,
                sid: req.variant.Activate.id.toString(),
                // Reserved
                department: "01",
                captcha: req.code.toString()
            };
            config.url = "/auth/register";
            config.data = transformed;
            break;
        }
        case "ResetPassword": {
            const req: VerifyAccount3<VerifyResetPassword3> = config.data;
            const transformed: ResetPasswordInfo2 = {
                email: req.variant.ResetPassword.email,
                captcha: req.code.toString(),
                newPassword: req.variant.ResetPassword.password
            };
            config.url = "auth/resetPassword";
            config.data = transformed;
            break;
        }
        default:
            break;
    }
    return config;
}

export function transformLoginAccountRequest(config:InternalAxiosRequestConfig<any>):InternalAxiosRequestConfig<any>{
    config.url="/auth/login";
    return config;
    // TODO
}