import { latestPostProps } from "@/typeScript/cms.interface";
import axiosInstance from "../axios/axios";
import { endpoints } from "../endPoints/endPoints";

export const latestPostsAPICall = async () => {
    const res = await axiosInstance.get<latestPostProps>(endpoints.blogs.letestPost)
    // console.log('allBlogsAPICall res', res);
    return res.data
}
