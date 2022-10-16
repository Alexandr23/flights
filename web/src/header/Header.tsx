import React from "react";

import { Logo } from "../icons";

import classes from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <Logo />
    </div>
  );
};
