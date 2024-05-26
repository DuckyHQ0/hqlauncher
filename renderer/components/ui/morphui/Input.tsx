import React, { forwardRef } from "react";
import PropTypes from "prop-types";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      placeholder = "Input box",
      disabled = false,
      type = "text",
      required,
      maxLength,
      ...rest
    },
    ref
  ) => {
    return (
      <input
        {...rest}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        ref={ref}
        className="min-w-[200px] py-10 px-24 gap-12 text-body rounded-in bg-transparent bg-fg-2 border border-stroke-2 shadow-fg-2 placeholder-text-subtle focus:bg-fg-2-active transition-colors duration-150 ease-out focus:text-text-1 text-text-1 focus:outline-none disabled:cursor-not-allowed disabled:bg-fg-2-disabled disabled:text-text-disabled"
      />
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password", "url", "search"]),
};
