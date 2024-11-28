import { MutationFunction } from "@tanstack/react-query";
import { endpoints } from "../endPoints/endPoints";
import axiosInstance from "../axios/axios";
import { addStudentProps } from "@/typeScript/crud.interface";



export const addStudentFn: MutationFunction<addStudentProps> = async payload => {
  const res = await axiosInstance.post<addStudentProps>(
    endpoints.crud.addstudents,
    payload
  );

  return res.data;
};
