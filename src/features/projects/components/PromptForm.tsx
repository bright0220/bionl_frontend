import React from "react";

import { Spinner } from "@/components";
import { Block, Project } from "@/types";

import { useCreatePrompt } from "../api";

type PromptFormProps = {
  project: Project;
  onSuccess?: (block: Block) => void;
};

export const PromptForm = ({ project, onSuccess }: PromptFormProps) => {
  const [prompt, setPrompt] = React.useState<string>("");

  const { isLoading, mutate } = useCreatePrompt({
    onSuccess: () => {
      setPrompt("");
      onSuccess?.({
        content:
          "https://firebasestorage.googleapis.com/v0/b/bionl-vue.appspot.com/o/uploads%2Fblocks%2F8b50463b-1067-4569-a7b6-56669606a69c%2Fbp-4a309e15-03d2-4922-bbfb-3fc3031e52cd?alt=media&token=4e546355-5a77-4ed7-a8fa-c13ceff9bace",
        userId: "Id8HuHJZkRcHV8GY1yG2ZfI017f2",
        projectId: "8b50463b-1067-4569-a7b6-56669606a69c",
        name: "Plot A1Bg",
        type: "plot",
        code: "sns.displot(expression_data.loc['A1BG', :], kde=True)\nplt.show()\n\n",
        id: "4a309e15-03d2-4922-bbfb-3fc3031e52cd",
      });
    },
  });

  const submitPrompt = () => {
    mutate({ prompt: "test", projectId: project.id });
  };

  return (
    <form
      className="z-20 w-full max-w-xl"
      onSubmit={(e) => {
        e.preventDefault();
        submitPrompt();
      }}
    >
      <div className="relative z-10 flex h-16 justify-between overflow-hidden rounded-xl shadow-xl">
        <input
          className="basis-full border-none bg-white px-4 text-lg shadow-md outline-none transition focus:shadow-lg"
          placeholder="Ask me anything? (TODO: Change placeholder)"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className="flex basis-2/12 items-center justify-center bg-indigo-600 text-center text-lg text-white shadow-lg transition-colors hover:bg-indigo-600 "
          disabled={prompt.length === 0}
          type="submit"
        >
          {isLoading ? <Spinner /> : "Send"}
        </button>
      </div>
    </form>
  );
};
