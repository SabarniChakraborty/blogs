
import { endpoints } from "../endPoints/endPoints";
import axiosInstance from "../axios/axios";
import { allStudentProps } from "@/typeScript/crud.interface";

export const allStudentAPICall = async () => {
    const res = await axiosInstance.get<allStudentProps>(endpoints.crud.allstudents)
    // console.log('allStudent res', res);
    return res.data
}
