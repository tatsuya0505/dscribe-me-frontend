import type { NextPage } from "next";
import Image from "next/image";
import { css } from "twin.macro";
import PostItem from "@components/PostItem";

const Home: NextPage = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
      `}
    >
      <header
        css={css`
          width: 100%;
          height: 64px;
          padding: 0 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Image alt="Dscribe.me logo" height="18" width="100%" src="/logo.svg" />
      </header>
      <div
        css={css`
          margin-top: 100px;
          background: rgba(255, 255, 255, 0.9);
          width: 100%;
          min-height: 1000px;
          border-radius: 20px 20px 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          css={css`
            margin-top: -40px;
          `}
        >
          <Image
            css={css`
              border-radius: 50%;
              background-size: cover;
              background-position: center;
              object-fit: cover;
              box-shadow: 0 0 0 1px #fff;
            `}
            src="/avatar.svg"
            alt="avatar"
            width={80}
            height={80}
          />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <span
            css={css`
              font-style: normal;
              font-weight: 700;
              font-size: 18px;
              line-height: 18px;
              margin-top: 10px;
              color: #1d1d1d;
            `}
          >
            Tsubaki
          </span>
          <span
            css={css`
              font-style: normal;
              font-weight: 500;
              font-size: 12px;
              line-height: 12px;
              color: #aaaaaa;
              margin-top: 4px;
            `}
          >
            @tsubaki
          </span>
          <span
            css={css`
              font-weight: 400;
              font-size: 13px;
              line-height: 16px;
              margin-top: 12px;
            `}
          >
            Tokyo / Japanese : English / Work: Student
          </span>
          <div
            css={css`
              display: flex;
              margin-top: 16px;
              gap: 8px;
            `}
          >
            <div
              css={css`
                display: flex;
                background: #ffffff;
                box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
                border-radius: 50%;
                width: 36px;
                height: 36px;
              `}
            ></div>
            <div
              css={css`
                display: flex;
                background: #ffffff;
                box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
                border-radius: 50%;
                width: 36px;
                height: 36px;
              `}
            ></div>
          </div>
        </div>

        <section
          css={css`
            display: flex;
            flex-direction: column;
            align-items: start;
            width: 100%;
            padding: 0 20px;
            margin-top: 20px;
          `}
        >
          <h2
            css={css`
              font-weight: 700;
              font-size: 16px;
            `}
          >
            My Dscriptions
          </h2>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              width: 100%;
              margin-top: 20px;
              gap: 20px;
            `}
          >
            <PostItem></PostItem>
          </div>
        </section>
      </div>
      <div
        css={css`
          position: fixed;
          width: 100vw;
          height: 100vh;
          background-size: cover;
          background-position: center;
          background-color: #000;
          z-index: -1;
          filter: brightness(70%);
        `}
        className="bg-[url('https://dl.airtable.com/.attachmentThumbnails/6c257595a2d73f0ea327f93076130637/4e35bbc0?ts=1658468407&userId=usrhRWnriBWm2aRGS&cs=c196f78c3bb5d473')]"
      ></div>
    </div>
  );
};

export default Home;
