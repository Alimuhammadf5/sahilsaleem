import Image from "next/image";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import playIcon from "../../public/icon/play.svg";
import { mailState } from "../recoil/mailState";

const Landing: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ismailState, setMailState] = useRecoilState(mailState);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  console.log(videoRef.current?.paused);

  return (
    <div className=" flex w-full max-w-screen-lg flex-col items-center justify-center py-20 px-6">
      <h4 className="-z-10 text-center text-lg opacity-70 sm:text-2xl">
        Hello 👋, My name is Sahil Saleem
      </h4>
      <h1 className="-z-10 mt-7 text-center text-4xl font-black leading-tight tracking-wide opacity-90 sm:mt-4 sm:text-7xl sm:leading-tight md:text-8xl md:leading-tight">
        I CREATE WORLD CLASS VIDEO SOLUTIONS.
      </h1>
      <div className=" mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-7">
        <button
          onClick={() => {
            setMailState(true);
          }}
          className="h-12 w-44 rounded-md bg-gray-200 font-medium transition-colors duration-300 hover:bg-gray-300 sm:h-14"
        >
          Contact me
        </button>

        <Link href={"/Projects"}>
          <a className="flex h-12 w-44 items-center justify-center rounded-md bg-blue-600 font-medium text-white transition-colors duration-300 hover:bg-blue-800 sm:h-14">
            Projects
          </a>
        </Link>
      </div>

      <div className="items relative mt-14 flex aspect-video w-full max-w-screen-md items-center justify-center overflow-hidden rounded-lg bg-black bg-opacity-20 sm:mt-28">
        <video
          controls={isPlaying}
          ref={videoRef}
          className="h-full w-full"
          style={{ opacity: !isPlaying ? 0 : 1 }}
          src={process.env.NEXT_PUBLIC_HIGHLIGHT_VIDEO_LINK}
        />

        {!isPlaying && (
          <button
            onClick={() => {
              setIsPlaying(true);
              videoRef.current?.play();
            }}
            className="absolute z-10 opacity-30 transition-opacity duration-300 hover:opacity-100"
          >
            <Image src={playIcon} alt="play icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Landing;
