import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

import cloudDownload from "@/assets/images/SVG/cloud-download.svg";
import { Block } from "@/types";

import { useEdit } from "@/hooks";

type BlockProps = {
  block: Block;
  idx: number;
  onClose: any;
  visible: boolean;
};

export const BlockCard = ({ block, idx, onClose, visible }: BlockProps) => {
  const { editState } = useEdit();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return visible === true ? (
    <div key={block.id} ref={ref} className="border-t-2  bg-white">
      <div className="flex items-center gap-3 bg-white p-4 shadow-sm lg:my-8 lg:leading-8">
        <ChevronRightIcon className="h-6 w-6 text-neutral-400" /> {block.name}
        <div className="flex flex-1 justify-end px-2">
          {editState.isEdit ? (
            <button
              className="w-7 rounded-full border-2 border-[#EF4444] p-1 text-[#EF4444] hover:bg-[#EF4444] hover:text-white"
              onClick={() => {
                onClose(idx);
              }}
            >
              <XMarkIcon strokeWidth={4.0} />
            </button>
          ) : null}
        </div>
      </div>
      <div className="flex justify-between">
        {/* List Block */}
        {block.type == "list" && (
          <div className="relative flex w-full gap-4 px-5 py-5 text-center">
            <div className="h-full w-1/2 overflow-y-scroll font-mono">
              <p className="mt-3 flex flex-col gap-3">
                {/* TODO: convertListInputToList / v-for="list in convertListInputToList(block.content)"*/}
                {convertListInputToList(block.content).map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </p>
            </div>
            <div className="h-full w-1/2 font-mono text-xs">
              <CodeEditor
                value={block.code}
                language="py"
                padding={15}
                disabled
              />
            </div>
          </div>
        )}

        {/* Plot Block */}
        {block.type == "plot" && (
          // <div className="relative flex h-72 w-[420px] rounded-xl bg-white lg:h-64 lg:w-[310px] md:w-[290px] sm:w-full">
          <div className="relative flex w-full gap-4 px-5 py-5 text-center">
            <div className="h-full w-1/2">
              <img
                alt="Plot"
                className="w-full rounded-xl"
                src={block.content}
              />
              <div
                // className="absolute bottom-0 left-0 flex h-10 w-[420px] items-center justify-end opacity-70 transition-opacity group-hover:opacity-100 lg:w-[310px] md:w-[290px] sm:w-full"
                className="absolute bottom-0 left-0 flex h-10 w-1/2 items-center justify-end"
                v-if="!isEdit"
              >
                <a href="block.content" target="_blank">
                  <img
                    alt="Download from the cloud"
                    className="cursor-pointer px-2 py-1"
                    src={cloudDownload}
                  />
                </a>
              </div>
            </div>
            <div className="h-full w-1/2 font-mono text-xs">
              <CodeEditor
                value={block.code}
                language="py"
                padding={15}
                disabled
              />
            </div>
          </div>
        )}

        {/* Value Plot */}
        {block.type == "value" && (
          <div className="relative flex w-full justify-center rounded-xl p-5 font-mono text-2xl font-semibold">
            <p className="flex h-full w-1/2 flex-wrap content-center justify-center">
              {block.content}
            </p>
            <div className="h-full w-1/2 font-mono text-xs">
              <CodeEditor
                value={block.code}
                language="py"
                padding={15}
                disabled
              />
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

const convertListInputToList = (str: string) =>
  str.split("\n").filter((n) => n);
