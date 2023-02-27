import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password";
  placeholder?: string;
  className?: string;
  registration?: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
  const {
    type = "text",
    label,
    placeholder = "",
    className,
    registration,
    error,
  } = props;
  return (
    <FieldWrapper error={error} label={label}>
      <input
        className={clsx(
          "mt-0 block w-full border-0 border-b-2 border-neutral-200 px-0.5 placeholder-neutral-400 focus:border-indigo-500 focus:ring-0",
          className
        )}
        placeholder={placeholder}
        type={type}
        {...registration}
      />
    </FieldWrapper>
  );
};
