// Data struct for sms3

export interface CreateAccount3 {
    email: string
}

export enum House3 {
    GW = "GeWu",
    ZZ = "ZhiZhi",
    CY = "ChengYi",
    ZX = "ZhengXin",
    MD = "MingDe",
    HY = "HongYI",
    XJ = "XiJing",
    ZS = "ZhiShan",
    XM = "XinMin"
}

export interface VerifyActivateAccount3 {
    Activate: {
        email: string,
        name: string,
        id: number,
        phone: number
        house: House3 | null,
        organization: string | null,
        password: string
    }
}

export interface VerifyResetPassword3 {
    ResetPassword: {
        email: string,
        password: string
    }
}

export interface AbstractVerifyAccount3 {
    code: number,
    variant: any
}

export interface VerifyAccount3<D = VerifyActivateAccount3 | VerifyResetPassword3> extends AbstractVerifyAccount3 {
    variant: D
}