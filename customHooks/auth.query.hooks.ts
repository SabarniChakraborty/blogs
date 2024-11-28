
import { useMutation, UseMutationResult } from "@tanstack/react-query"
import { useGlobalHooks } from "./globalHooks/globalHooks"
import { Cookies } from "react-cookie"
import { registerFn } from "@/api/functions/register.api"
import { loginFn } from "@/api/functions/login.api"
import { loginProps, registerProps } from "@/typeScript/auth.interface"


// for login page
export const loginMutation = (): UseMutationResult<loginProps, unknown> => {
    const { queryClient } = useGlobalHooks()
    const cookie = new Cookies()
    return useMutation<loginProps, void, unknown>({
        mutationFn: loginFn,
        onSuccess: (res) => {
            const { token, status, message , user} = res || {}
            if (status === 200 && token) {
                cookie.set("token", token, { path: "/", secure: true })
                localStorage.setItem("user", JSON.stringify(user))
            }
            queryClient.invalidateQueries({ queryKey: ["USER"] })
        }
    })

}




// for register page
export const registerMutation = (): UseMutationResult<registerProps, unknown> => {
    const { queryClient } = useGlobalHooks()
    // const cookie = new Cookies()
    return useMutation<registerProps, void, unknown>({
        mutationFn: registerFn,
        onSuccess: (res) => {
            const { status, message } = res || {}
            if (status === 200) {
                // cookie.set("token", token, { path: "/", secure: true })
            }
            queryClient.invalidateQueries({ queryKey: ["REGISTER"] })
        }
    })
}