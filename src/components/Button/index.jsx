import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[20px]" };
const variants = { white: { white_A700: "bg-white-A700 text-light_blue-800" }, blue: { white_A700: "bg-light_blue-800 text-white-A700" }};
const sizes = { xs: "p-[21px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  onClick,
  shape = "round",
  size = "xs",
  variant = "white",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["white", "blue"]),
  color: PropTypes.oneOf(["white_A700"]),
};



export { Button };
