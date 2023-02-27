import { Dialog, Transition } from "@headlessui/react";
import { Table, Tabs, Pagination } from "flowbite-react";
import { TimelineTime } from "flowbite-react/lib/esm/components/Timeline/TimelineTime";
import Papa, { ParseResult } from "papaparse";
import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

import heatmap from "@/assets/images/heatmap_(LGG_TCGA_[expression_data]).png";
import categorical_data from "@/assets/json/categorical_table1(LGG_TCGA_[expression_data]).json";
import numerical_data from "@/assets/json/numerical_table2(LGG_TCGA_[expression_data]).json";
import { Button } from "@/components/Elements/Button";
import {
  fakeDataset,
  highExpressed,
  lowExpressed,
  previewData,
} from "@/lib/mocks";

import { Expressed } from "./Expressed";

const { highly_expressed, lowly_expressed } = previewData.plots;

export const PreviewDatasetModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        className="text-accent1 border-accent1 hover:bg-accent1 focus:bg-accent1 ml-5 rounded-md border-2 px-4 py-1 outline-none transition-colors lg:ml-4 lg:text-sm sm:ml-0"
        onClick={openModal}
      >
        Preview
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
                <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="pb-4 text-lg font-medium leading-6 text-neutral-900"
                  >
                    Preview Dataset
                  </Dialog.Title> */}
                  <Tabs.Group aria-label="Default tabs" style="default">
                    <Tabs.Item active={true} title="Summary">
                      <Summary />
                    </Tabs.Item>
                    <Tabs.Item title="Clinical Data">
                      <Clinical />
                    </Tabs.Item>
                  </Tabs.Group>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const Summary = () => {
  const categorical_headers = Object.keys(categorical_data);
  const categorical_rowsCount = Object.keys(
    categorical_data["Variable"]
  ).length;

  const numerical_headers = Object.keys(numerical_data);
  const numerical_rowsCount = Object.keys(numerical_data["Variable"]).length;

  return (
    <div className="flex max-h-[600px] flex-row justify-center gap-10 overflow-scroll lg:flex-col">
      <div className="w-1/2">
        <div className="prose">
          <h3>{fakeDataset["Dataset"]}</h3>
          <p>{fakeDataset["Summary_general"]}</p>
          <p>{fakeDataset["Summary_Specific"]}</p>
        </div>
        <div className="mt-10 flex gap-2">
          <div>
            <Table hoverable={true} striped={true}>
              <Table.Head className="bg-gray-50">
                {categorical_headers.map((item, index) => (
                  <Table.HeadCell key={`${index}-headcell`}>
                    {item}
                  </Table.HeadCell>
                ))}
              </Table.Head>
              <Table.Body className="divide-y">
                {Array(categorical_rowsCount)
                  .fill(0)
                  .map((_, index) => (
                    <Table.Row
                      key={`${index}-priorty`}
                      className="odd:bg-white even:bg-gray-50 hover:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {categorical_headers.map((item, idx) => (
                        <Table.Cell
                          key={`${index}-${idx}-cell-cat`}
                          className="py-2"
                        >
                          {Object.values(categorical_data[item])[index]}
                        </Table.Cell>
                      ))}
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>

            <Table className="mt-10" hoverable={true} striped={true}>
              <Table.Head className="bg-gray-50">
                {numerical_headers.map((item, index) => (
                  <Table.HeadCell key={`${index}-head-num`}>
                    {item}
                  </Table.HeadCell>
                ))}
              </Table.Head>
              <Table.Body className="divide-y">
                {Array(numerical_rowsCount)
                  .fill(0)
                  .map((_, index) => (
                    <Table.Row
                      key={`${index}-row`}
                      className="odd:bg-white even:bg-gray-50 hover:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {numerical_headers.map((item, idx) => (
                        <Table.Cell
                          key={`${index}-${idx}-header-num`}
                          className="py-2"
                        >
                          {Object.values(numerical_data[item])[index]}
                        </Table.Cell>
                      ))}
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src={heatmap} />
        <Expressed titleExpress={highExpressed} express={highly_expressed} />
        <Expressed titleExpress={lowExpressed} express={lowly_expressed} />
        <Button className="mt-4">
          <div className="flex items-center gap-1">
            Download <AiOutlineDownload />
          </div>
        </Button>
      </div>
    </div>
  );
};

const sampleData = `
Model,mpg,cyl,disp,hp,drat,wt,qsec,vs,am,gear,carb
Mazda RX4,21,6,160,110,3.9,2.62,16.46,0,1,4,4
Mazda RX4 Wag,21,6,160,110,3.9,2.875,17.02,0,1,4,4
Datsun 710,22.8,4,108,93,3.85,2.32,18.61,1,1,4,1
Hornet 4 Drive,21.4,6,258,110,3.08,3.215,19.44,1,0,3,1
Hornet Sportabout,18.7,8,360,175,3.15,3.44,17.02,0,0,3,2
Valiant,18.1,6,225,105,2.76,3.46,20.22,1,0,3,1
Duster 360,14.3,8,360,245,3.21,3.57,15.84,0,0,3,4
Merc 240D,24.4,4,146.7,62,3.69,3.19,20,1,0,4,2
Merc 230,22.8,4,140.8,95,3.92,3.15,22.9,1,0,4,2
Merc 280,19.2,6,167.6,123,3.92,3.44,18.3,1,0,4,4
Merc 280C,17.8,6,167.6,123,3.92,3.44,18.9,1,0,4,4
Merc 450SE,16.4,8,275.8,180,3.07,4.07,17.4,0,0,3,3
Merc 450SL,17.3,8,275.8,180,3.07,3.73,17.6,0,0,3,3
Merc 450SLC,15.2,8,275.8,180,3.07,3.78,18,0,0,3,3
Cadillac Fleetwood,10.4,8,472,205,2.93,5.25,17.98,0,0,3,4
Lincoln Continental,10.4,8,460,215,3,5.424,17.82,0,0,3,4
Chrysler Imperial,14.7,8,440,230,3.23,5.345,17.42,0,0,3,4
Fiat 128,32.4,4,78.7,66,4.08,2.2,19.47,1,1,4,1
`;

const Clinical = () => {
  const [csvData, setcsvData] = useState<any[]>([]);
  const commonConfig = { delmiter: "," };

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Papa.parse("/clinical(LGG_TCGA_[expression_data]).csv", {
      ...commonConfig,
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: (result: any) => {
        setcsvData(result.data);
      },
    });
  }, []);

  const clinical_headers = csvData.length !== 0 ? Object.keys(csvData[0]) : [];
  const clinical_rowsCount = csvData.length;
  const totalPages =
    csvData.length % 10
      ? Math.floor(csvData.length / 10) + 1
      : csvData.length / 10;

  return (
    <>
      <div className="h-[600px] overflow-auto" id="clinical">
        <Table className="mt-0" hoverable={true} striped={true}>
          <Table.Head className="bg-gray-50">
            {clinical_headers.map((item, index) => (
              <Table.HeadCell key={`${index}-head-csv`}>{item}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {Array(clinical_rowsCount)
              .fill(0)
              .map((_, index) => {
                if (
                  index >= 10 * currentPage - 10 &&
                  index < 10 * currentPage
                ) {
                  return (
                    <Table.Row
                      key={`${index}-row`}
                      className="odd:bg-white even:bg-gray-50 hover:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {clinical_headers.map((item, idx) => (
                        <Table.Cell
                          key={`${index}-${idx}-header`}
                          className="py-2"
                        >
                          {csvData[index][item]}
                        </Table.Cell>
                      ))}
                    </Table.Row>
                  );
                }
              })}
          </Table.Body>
        </Table>
      </div>
      <div className="flex items-center justify-center text-center">
        <Pagination
          currentPage={currentPage}
          layout="pagination"
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
          showIcons={true}
          totalPages={totalPages}
          previousLabel="Go back"
          nextLabel="Go forward"
        />
      </div>
    </>
  );
};
