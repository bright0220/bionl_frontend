import { axios } from "@/lib/axios";

export type signUpInfo = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  organization: string;
  country: string;
};

export const userSignup = ({
  email,
  password,
  first_name,
  last_name,
  organization,
  country,
}: signUpInfo): Promise<any> => {
  //   return new Promise((resolve) => setTimeout(() => resolve(fakeProject), 1000));

  return axios
    .post("/api/register/", {
      email,
      password,
      first_name,
      last_name,
      organization,
      country,
    })
    .then(({ data }) => {
      return data;
    });
};
