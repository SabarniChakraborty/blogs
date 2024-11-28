import { MutationFunction } from "@tanstack/react-query";
import { endpoints } from "../endPoints/endPoints";
import axiosInstance from "../axios/axios";
import { registerProps } from "@/typeScript/auth.interface";



export const registerFn: MutationFunction<registerProps> = async payload => {
  const res = await axiosInstance.post<registerProps>(
    endpoints.auth.register,
    payload
  );

  return res.data;
};
