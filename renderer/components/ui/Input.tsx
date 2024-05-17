import React from "react";
import PropTypes from "prop-types";

export const Input = ({
  id,
  placeholder = "Input box",
  disabled = false,
  type = "text",
}: {
  id?: string;
  placeholder: string;
  disabled?: boolean;
  type?: string;
}) => {
  return (
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      disabled={disabled}
      className="min-w-[200px] py-10 px-24 gap-12 text-body rounded-in bg-transparent bg-fg-2 border border-stroke-2 shadow-fg-2 placeholder-text-subtle focus:bg-fg-2-active transition-colors duration-150 ease-out focus:text-text-1 focus:outline-none disabled:cursor-not-allowed disabled:bg-fg-2-disabled disabled:text-text-disabled"
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password", "url", "search"]),
};
