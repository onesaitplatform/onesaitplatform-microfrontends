import axios, { AxiosError } from "axios";

type TokenType = string;

const createAxiosInstance = (baseUrl: string, token: TokenType): any => {
  const axiosInstance = axios.create({
    baseURL: `${baseUrl}`,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  axiosInstance.interceptors.response.use(
    (response: any) => response,
    (error: AxiosError) => {
      throw error;
    }
  );

  return axiosInstance;
};
export default createAxiosInstance;
