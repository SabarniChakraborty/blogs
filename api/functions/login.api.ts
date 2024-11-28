import { MutationFunction } from "@tanstack/react-query";
import { endpoints } from "../endPoints/endPoints";
import axiosInstance from "../axios/axios";
import { loginProps } from "@/typeScript/auth.interface";


export const loginFn: MutationFunction<loginProps> = async payload => {
  const res = await axiosInstance.post<loginProps>(
    endpoints.auth.login,
    payload
  );

  return res.data;
};
