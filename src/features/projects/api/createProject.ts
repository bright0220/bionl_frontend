import { useMutation } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { fakeProject } from "@/lib/mocks";
import { MutationConfig, queryClient } from "@/lib/react-query";
import { Project } from "@/types";

export type CreateProjectDTO = {
  name: string;
  date_edited: string;
  ip: string;
  user: number;
  dataset: number;
};

export const createProject = ({
  name,
  date_edited,
  ip,
  user,
  dataset,
}: CreateProjectDTO): Promise<Project> => {
  // return new Promise((resolve) => setTimeout(() => resolve(fakeProject), 1000));
  return axios.post("/api/projects/", {
    name,
    date_edited,
    ip,
    user,
    dataset,
  });
};

type UseCreateProjectOptions = {
  config?: MutationConfig<typeof createProject>;
};

export const useCreateProject = ({ config }: UseCreateProjectOptions = {}) => {
  return useMutation({
    onMutate: async (newProject) => {
      await queryClient.cancelQueries(["projects"]);

      const previousProjects = queryClient.getQueryData<Project[]>([
        "projects",
      ]);

      queryClient.setQueryData(
        ["projects"],
        [...(previousProjects || []), newProject]
      );

      return { previousProjects };
    },
    onError: (_, __, context: any) => {
      if (context?.previousProjects) {
        queryClient.setQueryData(["projects"], context.previousProjects);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    },
    ...config,
    mutationFn: createProject,
  });
};
