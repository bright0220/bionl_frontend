import { LoginResponse } from "@/features/auth";
import { axios } from "@/lib/axios";

export type loginInfo = {
  email: string;
  password: string;
};

export const userLogin = ({
  email,
  password,
}: loginInfo): Promise<LoginResponse> => {
  //   return new Promise((resolve) => setTimeout(() => resolve(fakeProject), 1000));
  const data = {
    username: email,
    password: password,
  };

  return axios.post("/authenticate", data).then(({ data }) => {
    return data;
  });
};
