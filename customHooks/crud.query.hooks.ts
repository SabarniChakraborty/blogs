
//for all students//
import { allStudentAPICall } from "@/api/functions/allStudent.api";
import { addStudentProps, allStudentProps } from "@/typeScript/crud.interface";
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";
import { useGlobalHooks } from "./globalHooks/globalHooks";
import { addStudentFn } from "@/api/functions/addStudent.api";

export const allStudentQuery = (): UseQueryResult<allStudentProps, unknown> => {
    return useQuery({
      queryKey: ["ALL-COURSES"],
      queryFn: allStudentAPICall
    });
  };



 
// for add student //
export const addStudentMutation = (): UseMutationResult<addStudentProps, unknown> => {
    const { queryClient } = useGlobalHooks()
    // const cookie = new Cookies()
    return useMutation<addStudentProps, void, unknown>({
        mutationFn: addStudentFn,
        onSuccess: (res) => {
            const { success, msg } = res || {}
            if (success === true) {
                // cookie.set("token", token, { path: "/", secure: true })
            }
            queryClient.invalidateQueries({ queryKey: ["ADD-STUDENT"] })
        }
    })
} 