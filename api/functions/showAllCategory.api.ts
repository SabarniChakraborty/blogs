
import { endpoints } from "../endPoints/endPoints";
import axiosInstance from "../axios/axios";
import { showAllCategoryProps } from "@/typeScript/cms.interface";

export const showAllCategoryAPICall = async () => {
    const res = await axiosInstance.get<showAllCategoryProps>(endpoints.blogs.showAllCategory) 
    // console.log('showAllCategory res', res);
    return res.data
}
