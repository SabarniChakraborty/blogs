// for login page
export interface IloginProps {
    email: string,
    password: string,
    name: string,
    photo: string,
    token: string,
    message: string,
    status: number
}
export interface loginProps extends IloginProps {
    user: IloginProps
}


// for register page
export interface IregisterProps {
    name: string,
    email: string,
    password: string,
    mobile: string,
    photo: File,
    message: string,
    status: number,
}
export interface registerProps extends IregisterProps {
    user: IregisterProps
}