import { Project } from "@/features/projects/types/index";
import { axios } from "@/lib/axios";

export type deleteInfo = {
  id: Number;
};

export const getProjects = (): Promise<Array<Project>> => {
  return axios.get(`/api/projects`).then(({ data }) => {
    return data;
  });
};
