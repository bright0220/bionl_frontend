import {
  BeakerIcon,
  Cog8ToothIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "@/assets/images/SVG/bionl-logo.svg";
import LogoCircle from "@/assets/images/SVG/logo-circle.svg";

type SideNavigationItem = {
  name: string;
  to: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  disabled?: boolean;
};

type MainLayoutProps = {
  children: React.ReactNode;
};

const SideNavigation = () => {
  const navigation = [
    { name: "Home", to: ".", icon: Squares2X2Icon },
    {
      name: "Datasets",
      to: "./datasets",
      icon: BeakerIcon,
      disabled: true,
    },
    {
      name: "Tools",
      to: "./tools",
      icon: WrenchScrewdriverIcon,
      disabled: true,
    },
    {
      name: "Support",
      to: "./support",
      icon: QuestionMarkCircleIcon,
      disabled: true,
    },
    {
      name: "Settings",
      to: "./settings",
      icon: Cog8ToothIcon,
      disabled: true,
    },
  ].filter(Boolean) as SideNavigationItem[];

  return (
    <ul className="flex flex-col gap-6">
      {navigation.map((item, index) => (
        <li key={item.name}>
          <NavLink
            className={clsx(
              "flex flex-col items-center gap-2 rounded-md px-2 py-2 text-center text-base font-medium text-neutral-400 hover:text-primary-500",
              item.disabled && "cursor-not-allowed"
            )}
            end={index === 0}
            to={item.to}
            onClick={(e) => {
              if (item.disabled) {
                e.preventDefault();
              }
            }}
          >
            <item.icon
              aria-hidden="true"
              className={clsx(" h-8 w-8 flex-shrink-0")}
            />
            <span className="font-normal">{item.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 z-10 h-screen w-40 bg-white px-4 py-16 shadow-md lg:w-40 md:py-7 sm:w-36 sm:py-5">
      <div className="z-10 flex flex-col items-center">
        <Link className="flex w-full justify-center" to="/">
          <img alt="Bionl App Logo" height="36" src={Logo} width="100" />
        </Link>

        <div className="mt-20">
          <SideNavigation />
        </div>
      </div>
    </div>
  );
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen overflow-auto bg-neutral-100">
      <Sidebar />
      <div className="ml-52 w-full">{children}</div>
    </div>
  );
};
