// Data struct for sms2


// Currently not needed, reserved
export interface Email2 {
    email: string
}

export interface FullUser2 {
    username: string,
    password: string,
    realName: string,
    email: string,
    // student id
    sid: string,
    department: string,
    captcha: string
}

export interface PasswordPair2 {
    newPassword: string,
    oldPassword: string
}

export interface Result2<D = any> {
    code: number,
    message: string,
    data: D,
    timeStamp: number
}

export interface SimpleUser2 {
    username: string,
    password: string
}

export interface SimpleUserInfo2 {
    token: string,
    username: string,
    sid: string,
    id: number,
    expiredAt: number
}

export interface ResetPasswordInfo2 {
    email: string,
    captcha: string,
    newPassword: string
}

export interface SimpleDraft2 {
    title: string,
    startDate: string,
    endDate: string,
    description: string,
    fileName: string[],
    // target screen
    screenId: string
}