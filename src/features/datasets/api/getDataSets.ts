import { Dataset } from "../types";
import { axios } from "@/lib/axios";

export const getDataSets = (): Promise<Array<Dataset>> => {
  return axios.get(`/api/datasets`).then(({ data }) => {
    return data;
  });
};
