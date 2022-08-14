import React, { FC } from "react";
import { css } from "twin.macro";
import Image from "next/image";

type Props = {};

const PostItem: FC<Props> = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: auto;
        background: #ffffff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 12px;
        gap: 12px;
        display: flex;
        flex-direction: column;
        align-items: start;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 8px;
        `}
      >
        <Image
          css={css`
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background-size: cover;
            background-position: center;
            object-fit: cover;
            box-shadow: 0 0 0 1px #fff;
          `}
          alt=""
          height="26"
          width="26"
          src="/logo.svg"
        />
        <span
          css={css`
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #1d1d1d;
          `}
        >
          {"name"}
        </span>
        <span
          css={css`
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            color: #aaaaaa;
          `}
        >
          @{"userid"}
        </span>
      </div>
      <span
        css={css`
          font-size: 14px;
          line-height: 1.4;
          text-align: left;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        `}
      >
        {"text"}
      </span>
      <div
        css={css`
          display: flex;
          width: 100%;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 4px;
          `}
        >
          <i
            css={css`
              display: flex;
              width: 18px;
              height: 18px;
            `}
          ></i>
          <span
            css={css`
              font-size: 14px;
            `}
          >
            {"likeCount"}
          </span>
        </div>
        <span
          css={css`
            font-size: 12px;
            color: #aaa;
          `}
        >
          {"date"}
        </span>
      </div>
    </div>
  );
};

export default PostItem;
