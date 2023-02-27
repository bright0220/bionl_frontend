import { useMutation } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { fakeProject } from "@/lib/mocks";
import { MutationConfig, queryClient } from "@/lib/react-query";
import { Project } from "@/types";

export type SubmitPromptDTO = {
  projectId: string;
  prompt: string;
};

export const submitPrompt = ({ prompt }: SubmitPromptDTO): Promise<Project> => {
  return new Promise((resolve) => setTimeout(() => resolve(fakeProject), 1000));
  // return axios.post('/projects', data);
};

type UseSubmitPromptOptions = MutationConfig<typeof submitPrompt>;

export const useCreatePrompt = (config: UseSubmitPromptOptions = {}) => {
  return useMutation({
    onError: (_, __, _context: any) => {
      alert("Error submitting a prompt");
    },

    onSuccess: (project) => {
      queryClient.setQueryData(["project", project.id], project);
    },

    ...config,

    mutationFn: submitPrompt,
  });
};
