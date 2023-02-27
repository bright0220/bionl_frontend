import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import { deleteProject } from "../api/deleteProject";

import { Button } from "@/components";
import { DeleteProjectResponse } from "@/features/projects/types/index";

import { toast } from "react-toastify";

type IDProps = {
  id: number;
};

export const DeleteProjectModal = ({ id }: IDProps) => {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
    setStep(0);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function handleDeleteProject() {
    setIsLoading(true);
    deleteProject({ id })
      .then((res: DeleteProjectResponse) => {
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.response.data.detail);
      })
      .finally(() => {
        setIsLoading(false);
        setIsOpen(false);
      });
  }

  return (
    <>
      <button
        className="ml-5 rounded-md border-2 border-red-500 px-4 py-1 text-red-500 outline-none transition-colors hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white lg:ml-4 lg:text-sm"
        type="button"
        onClick={openModal}
      >
        Delete
      </button>

      <Transition appear as={Fragment} show={isOpen}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[400px] max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="pb-4 text-lg font-medium leading-6 text-neutral-900"
                  >
                    Delete Project
                  </Dialog.Title>
                  Do you want really delete this project?
                  <div className="mt-4 flex justify-end gap-3">
                    <Button
                      className="border bg-blue-500 text-gray-800 hover:bg-indigo-300 focus:border focus:border-blue-600 "
                      onClick={closeModal}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-red-500 hover:bg-red-600 focus:ring-red-400"
                      isLoading={isLoading}
                      size="sm"
                      onClick={handleDeleteProject}
                    >
                      Delete
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
