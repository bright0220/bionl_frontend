import { DeleteProjectResponse } from "@/features/auth";
import { axios } from "@/lib/axios";

export type deleteInfo = {
  id: Number;
};

export const deleteProject = ({
  id,
}: deleteInfo): Promise<DeleteProjectResponse> => {
  const data = {};

  return axios.delete(`/api/projects/${id}`, data).then(({ data }) => {
    return data;
  });
};
