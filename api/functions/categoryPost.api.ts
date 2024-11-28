
import { endpoints } from "../endPoints/endPoints";
import axiosInstance from "../axios/axios";
import { categoryPostProps } from "@/typeScript/cms.interface";

export const categoryPostAPICall = async (id: string) => {
    const res = await axiosInstance.get<categoryPostProps>(`${endpoints.blogs.categorypost}/${id}`)
    // console.log('categoryPost res', res);
    return res.data
}
