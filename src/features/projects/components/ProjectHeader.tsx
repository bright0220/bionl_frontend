import { Project } from "../types";

import { PreviewDatasetModal } from "./PreviewDatasetModal";
import { DeleteProjectModal } from "./DeleteProjectModal";

import { useEdit } from "@/hooks";

type ProjectHeaderProps = {
  project: Project;
  onSave: any;
  onDiscard: any;
};

export const ProjectHeader = ({
  project,
  onSave,
  onDiscard,
}: ProjectHeaderProps) => {
  const { editState, setEditState } = useEdit();

  return (
    <div className="mt-4 rounded-sm bg-white p-4 shadow-md shadow-neutral-200">
      <div className="flex items-center  justify-between lg:mt-10 sm:flex-col sm:items-start">
        <h2 className="text-accent1-font text-2xl">{project.name}</h2>
        <div className="ml-3 lg:ml-2 sm:mt-5 sm:ml-0 ">
          {editState.isEdit === false ? (
            <>
              <PreviewDatasetModal />

              <button
                className="ml-5 rounded-md border-2 border-neutral-600 px-4 py-1 text-neutral-600 outline-none transition-colors hover:bg-neutral-600 hover:text-white focus:bg-neutral-600 focus:text-white lg:ml-4 lg:text-sm"
                onClick={() => {
                  setEditState({ isEdit: true, isSave: true });
                }}
              >
                Edit
              </button>
              <DeleteProjectModal id={project.id} />
            </>
          ) : (
            <>
              <button
                className="ml-5 rounded-full border-2 border-neutral-400 px-4 py-1 text-neutral-600 outline-none transition-colors hover:bg-neutral-300 hover:text-neutral-600"
                onClick={() => {
                  setEditState({ isEdit: false, isSave: true });
                  onSave();
                }}
              >
                Save
              </button>
              <button
                className="ml-5 rounded-full border-2 border-red-400 px-4 py-1 text-red-600 outline-none transition-colors hover:bg-red-500 hover:text-white"
                onClick={() => {
                  setEditState({ isEdit: false, isSave: false });
                  onDiscard();
                }}
              >
                Discard
              </button>
            </>
          )}
        </div>
      </div>

      <hr className="mt-4 border-neutral-100 pb-4" />
      <p className="text-neutral-400">Dataset: [TODO: Selected dataset]</p>
    </div>
  );
};
