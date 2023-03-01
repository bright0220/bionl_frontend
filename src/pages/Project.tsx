// TODO: add react-toastify
// TODO: add Tailwind button

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { MainLayout } from "@/components";
import {
  BlockCard,
  ProjectHeader,
  PromptForm,
} from "@/features/projects/components";
import { blocks as fakeBlocks, fakeProject } from "@/lib/mocks";
import { Block } from "@/types";

import { useEdit } from "../hooks/useEdit";

const ProjectPage = () => {
  const { editState, setEditState } = useEdit();

  //  setEditState({ isEdit: true });

  const [blocks, setBlocks] = React.useState<Block[]>(fakeBlocks);

  let vArr = new Array<boolean>(fakeBlocks.length);
  vArr.fill(true);
  const [visibleArr, setVisibleArr] = React.useState<boolean[]>(vArr);

  const handleOnPromptSuccess = (block: Block) => {
    setBlocks((prev) => [...prev, block]);
  };

  const handleCloseBtnPress = (idx: number) => {
    vArr = [...visibleArr];
    vArr[idx] = false;
    setVisibleArr(vArr);
  };

  const handleOnSave = () => {};

  const handleOnDiscard = () => {
    debugger;
    vArr.fill(true);
    setVisibleArr(vArr);
  };

  const location = useLocation();
  const project = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className=" h-full min-h-screen overflow-scroll bg-neutral-100 pb-64">
        <div className="sm:min-w[300px] relative my-14 mx-auto max-w-5xl lg:my-12 lg:w-[640px] md:my-8 md:w-[600px] sm:w-[90%]">
          <div className="sticky top-0 z-10 w-full shadow-neutral-200 backdrop-blur-lg">
            <Link className="flex  items-center py-2 text-neutral-600 " to="/">
              <ArrowLeftIcon className="mr-2 h-5 w-5" /> Tasks
            </Link>
            <ProjectHeader
              project={project}
              onSave={handleOnSave}
              onDiscard={handleOnDiscard}
            />
          </div>

          {/* Blocks */}
          <div className="mt-20 flex flex-col gap-20">
            {blocks.map((block, index) => (
              <BlockCard
                key={`block-${block.id}`}
                block={block}
                idx={index}
                onClose={handleCloseBtnPress}
                visible={visibleArr[index]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Prompt */}
      <div className="sm:min-w[300px] z-5 fixed bottom-0 left-0 mx-auto ml-20 flex w-full justify-center border-t bg-neutral-100 bg-opacity-80 py-10 backdrop-blur-sm  lg:my-12 lg:w-[640px] md:my-8 md:w-[600px] sm:w-[90%]">
        <PromptForm project={project} onSuccess={handleOnPromptSuccess} />
      </div>
    </MainLayout>
  );
};

export { ProjectPage };
