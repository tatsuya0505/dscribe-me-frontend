import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center">
        <Image src="/avatar.svg" alt="avatar" width={80} height={80} />
        <div className="flex flex-col items-center">
          <span className="text-lg mt-2">Tsubaki</span>
          <span>@tsubaki</span>
          <span className="mt-2">
            Tokyo / Japanese : English / Work: Student
          </span>
          <div className="flex gap-2 mt-4">
            <div className="w-9 h-9 bg-white rounded-full"></div>
            <div className="w-9 h-9 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="-z-10 fixed w-screen h-screen bg-cover bg-center bg-[url('https://dl.airtable.com/.attachmentThumbnails/6c257595a2d73f0ea327f93076130637/4e35bbc0?ts=1658468407&userId=usrhRWnriBWm2aRGS&cs=c196f78c3bb5d473')]"></div>
    </div>
  );
};

export default Home;
