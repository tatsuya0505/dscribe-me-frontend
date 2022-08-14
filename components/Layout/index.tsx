import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
