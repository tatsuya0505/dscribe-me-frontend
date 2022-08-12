import React, { FC } from "react";
import Image from "next/image";
import { css } from "twin.macro";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header>
        <Image alt="Dscribe.me logo" height="18" width="100%" src="/logo.svg" />
      </header>
      <main
        css={css`
          padding: 8px 16px;
          border: 1px solid #e5e5e6;
          box-sizing: border-box;
          border-radius: 4px;
        `}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
