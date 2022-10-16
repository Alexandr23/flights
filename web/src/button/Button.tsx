import React from "react";

import classes from "./Button.module.css";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};
