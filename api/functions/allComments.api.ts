import { commentProps } from "@/typeScript/cms.interface";
import { endpoints } from "../endPoints/endPoints";
import axiosInstance from "../axios/axios";

export const allCommentsAPICall = async (id: string) => {
    const res = await axiosInstance.get<commentProps>(`${endpoints.blogs.showcomment}/${id}`)
    console.log('allComments res', res);
    return res.data
}
