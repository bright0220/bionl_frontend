import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowRightIcon,
  ArrowUpCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import ReactLoading from "react-loading";
import { toast } from "react-toastify";

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

import { Select, TextInput } from "flowbite-react";
import { Fragment, useEffect, useState } from "react";

import { Button } from "@/components";
import { datasets, datasetsV2 } from "@/lib/mocks";

import { useCreateProject } from "../api";
import { getDataSets } from "@/features/datasets/api/getDataSets";
import { Dataset } from "@/features/datasets/types";

type CreateProjectProps = {
  onCreateProject: () => void;
};

export default function CreateProjectModal({
  onCreateProject,
}: CreateProjectProps) {
  const createProject = useCreateProject();
  const [step, setStep] = useState(0);
  const [selectedDataset, setSelectedDataset] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [ipAddr, setIPAddr] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    setStep(0);
    setProjectName("");
    setIPAddr("");
  }

  const handleOnDatasetSelected = (datasetId: number) => {
    setSelectedDataset(datasetId);
  };

  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const handleIPAddrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIPAddr(e.target.value);
  };

  return (
    <>
      <button
        className="text-accent1 mt-16 flex h-48 w-80 cursor-pointer items-center justify-center rounded-md bg-white p-5 text-6xl text-primary-500 shadow-md transition hover:-translate-y-1 hover:shadow-lg lg:mt-10 lg:h-48 lg:w-[300] lg:text-5xl md:mt-8 md:h-40 md:w-60 sm:mx-auto sm:h-44 sm:w-[94%] sm:max-w-xs"
        type="button"
        onClick={openModal}
      >
        <PlusIcon height={72} width={72} />
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
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="pb-4 text-lg font-medium leading-6 text-neutral-900"
                  >
                    {step === 0 ? "Create Project" : "Select Dataset"}
                  </Dialog.Title>

                  <form>
                    {step === 0 && (
                      <div>
                        <TextInput
                          required
                          className="mt-2"
                          placeholder="Project name"
                          value={projectName}
                          onChange={handleProjectNameChange}
                        />
                        <TextInput
                          required
                          className="mt-2"
                          placeholder="IP Address"
                          value={ipAddr}
                          onChange={handleIPAddrChange}
                        />
                      </div>
                    )}
                    {step === 1 && (
                      <DatasetSeelection
                        onDatasetSelected={handleOnDatasetSelected}
                      />
                    )}

                    <div className="mt-4 flex justify-end gap-3">
                      {step === 1 && (
                        <Button
                          className="mr-auto cursor-not-allowed text-neutral-400"
                          disabled={true}
                          size="sm"
                          startIcon={<ArrowUpCircleIcon width={20} />}
                          variant="inverse"
                          style={{ backgroundColor: "cadetblue" }}
                        >
                          Upload Your Own
                        </Button>
                      )}
                      <Button
                        className="bg-red-500 hover:bg-red-600 focus:ring-red-400"
                        onClick={closeModal}
                      >
                        Cancel
                      </Button>
                      {step === 0 && (
                        <Button
                          endIcon={<ArrowRightIcon width={18} />}
                          isLoading={createProject.isLoading}
                          size="sm"
                          onClick={() =>
                            projectName && ipAddr ? setStep(1) : null
                          }
                          type="submit"
                        >
                          Select dataset
                        </Button>
                      )}
                      {step === 1 && (
                        <Button
                          disabled={!selectedDataset}
                          isLoading={createProject.isLoading}
                          size="sm"
                          onClick={() => {
                            const dto = new Date();
                            const dateString = new Date(
                              dto.getTime() - 21600000
                            ).toISOString();
                            createProject
                              .mutateAsync({
                                name: projectName,
                                date_edited: dateString,
                                ip: ipAddr,
                                user: 1,
                                dataset: selectedDataset,
                              })
                              .then((res) => {
                                setIsOpen(false);
                                onCreateProject();
                                toast.success(
                                  "Create new project successfully!"
                                );
                              });
                          }}
                        >
                          Create Project
                        </Button>
                      )}
                    </div>
                  </form>
                  {step == 1 && (
                    <div className="mt-2 text-sm text-gray-500">
                      These datasets only include tumer data.
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

type DatasetSelectionProps = {
  onDatasetSelected: (datasetId: number) => void;
};
const DatasetSeelection = ({ onDatasetSelected }: DatasetSelectionProps) => {
  const [search, setSearch] = useState("");
  const [dataSource, setDataSource] = useState("");
  const [dataType, setDataType] = useState("");
  const [Tissue_code, setTissueCode] = useState("");
  const [filteredDatasets, setFilteredDatasets] = useState(Array<Dataset>);

  useEffect(() => {
    getDataSets()
      .then((res: Array<Dataset>) => {
        setFilteredDatasets(res);
      })
      .catch((e: string) => console.log(e))
      .finally(() => {});
  }, []);

  // useEffect(() => {
  //   const filteredDatasets = datasetsV2
  //     .filter((dataset) => {
  //       return dataset.Tissue_source.toLowerCase()
  //         .trim()
  //         .includes(search.toLowerCase().trim());
  //     })
  //     .filter((dataset) => dataset.Dataset.includes(dataSource))
  //     .filter((dataset) => dataset.Tissue_source.includes(dataType))
  //     .filter((dataset) => dataset.Tissue_code.includes(Tissue_code));
  //   setFilteredDatasets(filteredDatasets);
  // }, [search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleDataTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataType(e.target.value);
  };

  const handleDataSourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataSource(e.target.value);
  };

  const handleTissueCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTissueCode(e.target.value);
  };

  return (
    <div>
      <div className="-mx-1 flex max-h-[600px] gap-3 overflow-auto py-1 px-1">
        <TextInput
          placeholder="Search..."
          type="text"
          onChange={handleSearchChange}
        />

        <Select id="dataSource" onChange={handleDataSourceChange}>
          <option value="Data source">Data source</option>
          {datasetsV2
            .filter((value, index, self) => {
              return (
                self.findIndex((v) => v.Dataset === value.Dataset) === index
              );
            })
            .map((dataset) => (
              <option key={dataset.Dataset} value={dataset.Dataset}>
                {dataset.Dataset}
              </option>
            ))}
        </Select>

        <Select id="Tissue_code" onChange={handleTissueCodeChange}>
          <option value="Tissue type">Tissue type</option>
          {datasetsV2
            .filter((value, index, self) => {
              return (
                self.findIndex((v) => v.Tissue_code === value.Tissue_code) ===
                index
              );
            })
            .map((dataset) => (
              <option key={dataset.Tissue_code} value={dataset.Tissue_code}>
                {dataset.Tissue_code}
              </option>
            ))}
        </Select>

        <Select id="dataType" onChange={handleDataTypeChange}>
          <option value="Data type">Data type</option>
          {datasetsV2
            .filter((value, index, self) => {
              return (
                self.findIndex((v) => v.Dataset === value.Dataset) === index
              );
            })
            .map((dataset) => (
              <option
                key={dataset.Dataset}
                value={dataset.Dataset.replace(" ", "")}
              >
                {dataset.Dataset}
              </option>
            ))}
        </Select>
      </div>

      <ul className="mt-5 grid max-h-[600px]  w-full grid-cols-1 gap-5 overflow-auto">
        {filteredDatasets.map((dataset, i) => (
          <li key={`${i} – ${dataset.tissue_source.replace(" ", "")}`}>
            <input
              required
              className="peer hidden"
              id={dataset.tissue_source}
              name="dataset"
              type="radio"
              value={dataset.tissue_source}
              onChange={() => onDatasetSelected(dataset.id)}
            />
            <label
              className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-200 bg-white p-2 text-neutral-800 hover:bg-neutral-100 hover:text-neutral-600 peer-checked:border-indigo-600 peer-checked:text-indigo-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:peer-checked:text-indigo-500"
              htmlFor={dataset.tissue_source}
            >
              <div className="block">
                <div className="w-full text-sm font-semibold">
                  {dataset.tissue_code} – {dataset.tissue_source} [
                  {dataset.data_type} ]
                </div>

                <ul className="mt-1 flex w-full flex-row gap-3 text-xs text-neutral-400">
                  <li className="flex gap-1">
                    <p className="font-medium">Data source: </p>{" "}
                    {dataset.tissue_source}
                  </li>

                  <li className="flex gap-1">
                    <p className="font-medium">Tissue type: </p>{" "}
                    {dataset.tissue_code}
                  </li>
                  <li className="flex gap-1">
                    <p className="font-medium">Data type: </p> {dataset.name}
                  </li>
                </ul>
              </div>
            </label>
          </li>
        ))}
      </ul>
      {filteredDatasets.length === 0 && (
        <div className="flex h-64 items-center justify-center text-lg font-light text-neutral-500">
          <ReactLoading
            type="spinningBubbles"
            color="#A9A9A9"
            height={30}
            width={60}
            className="text-center"
          />
        </div>
      )}
    </div>
  );
};
