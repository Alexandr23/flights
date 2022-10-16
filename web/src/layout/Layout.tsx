import React from "react";

import classes from "./Layout.module.css";

type LayoutProps = {
  header?: React.ReactNode;
  body?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ header, body }) => {
  return (
    <div className={classes.layout}>
      <div className={classes.header}>
        <div className={classes.content}>{header}</div>
      </div>

      <div className={classes.body}>
        <div className={classes.content}>{body}</div>
      </div>
    </div>
  );
};
