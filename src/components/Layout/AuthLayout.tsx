import React from "react";

import Logo from "@/assets/images/SVG/bionl-logo.svg";
import LogoCircle from "@/assets/images/SVG/logo-circle.svg";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="relative flex w-3/4 flex-col items-center overflow-hidden rounded-3xl bg-gray-100 py-20 shadow-2xl lg:w-11/12 md:w-full md:rounded-none md:shadow-none">
        <img
          alt="Logo"
          className="absolute -top-[9%] -left-[6%] w-60 opacity-75 lg:w-48 sm:hidden"
          height="292"
          src={LogoCircle}
          width="289"
        />

        <img alt="Bionl App Logo" height="36" src={Logo} width="150" />

        <h1 className="mt-8 text-lg">
          Next Generation Biomedical Research Platform
        </h1>

        {children}
      </div>
    </div>
  );
};
