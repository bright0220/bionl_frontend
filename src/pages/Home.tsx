// TODO: add react-toastify
// TODO: add Tailwind button

import {
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { formatDistance } from "date-fns";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";
import ReactLoading from "react-loading";

import { MainLayout } from "../components";
import CreateProjectModal from "../features/projects/components/CreateProjectModal";

import { useAuth } from "../hooks/useAuth";

import { getProjects } from "../features/projects/api/getProjects";
import { Project } from "@/features/projects/types";

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const HomePage = () => {
  const { authState, logout } = useAuth();

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(1);

  const [projects, setProjects] = useState(Array<Project>);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const token = window.localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt(token as string);

  const fetchProject = () => {
    getProjects()
      .then((res: Array<Project>) => {
        setProjects(res);
        setIsLoading(0);
      })
      .catch((e) => {})
      .finally(() => {
        setIsLoading(0);
      });
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <MainLayout>
      <div className="w-full p-10">
        <section className="flex h-16 w-full justify-between gap-4">
          <div className="flex h-10 w-full max-w-2xl items-center overflow-hidden border border-neutral-200 bg-white focus-within:border-indigo-500">
            <div className="px-2">
              <MagnifyingGlassIcon className="w-5 text-neutral-500" />
            </div>
            <input
              className="h-10 w-full border-none px-2 placeholder:font-light placeholder:text-neutral-400 focus:border-none focus:ring-0"
              placeholder="Search.."
              type="text"
              value={search}
              onChange={handleSearchChange}
            />
            {search && (
              <button className="h-full px-2  " onClick={() => setSearch("")}>
                <XMarkIcon className="w-5" />
              </button>
            )}
          </div>
          <div>
            {/* TODO: Proper handle the name of the user */}
            <h5 className="font-medium">{authState?.user?.name}</h5>
            <button
              className="flex items-center gap-1 text-neutral-500 underline"
              onClick={logout}
            >
              Logout
              <ArrowRightOnRectangleIcon className="w-5" />
            </button>
          </div>
        </section>
        <h2 className="text-3xl">Create Proejct</h2>
        <CreateProjectModal onCreateProject={fetchProject} />

        <div className="mt-10">
          <h3 className="text-3xl">My Projects</h3>
          {isLoading === 1 ? (
            <div className="mt-40 flex w-full justify-center">
              <ReactLoading
                type="spinningBubbles"
                color="#A9A9A9"
                height={30}
                width={60}
                className="text-center"
              />
            </div>
          ) : (
            <ul className="mt-4 grid w-full grid-cols-3 gap-4 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
              {projects.map((project) => (
                <li key={project.id}>
                  <Link to={`/projects/${project.id}`} state={project}>
                    <div className="flex cursor-pointer flex-col gap-2 rounded-md border-t-4 border-indigo-500 bg-white p-4 shadow-md transition hover:shadow-lg">
                      <h4 className="text-lg font-medium">{project?.name}</h4>
                      <p className="text-neutral-600">
                        {
                          /*project?.geneExpression | */ "This is geneExpression"
                        }
                      </p>
                      <div>
                        {"No Entries"}
                        {/*project.entries == 0
                        ? "No Entires"
            : `${project?.entries} Entries`*/}
                      </div>
                      <div className="mt-2 flex gap-5 text-sm text-neutral-500">
                        <p className="flex flex-col">
                          {/* <span> */}
                          {formatDistance(
                            Date.parse(project?.date_created),
                            new Date(),
                            {
                              addSuffix: true,
                            }
                          )}{" "}
                          by Ahmad
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export { HomePage };
