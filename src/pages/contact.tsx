import { NextPage } from "next";
import Image from "next/image";
import twitterIcon from "../../public/icon/twitter.svg";
import youtubeIcon from "../../public/icon/youtube.svg";
import gmailIcon from "../../public/icon/gmail.svg";
import { useRecoilState } from "recoil";
import { mailState } from "../recoil/mailState";

const Contact: NextPage = (props) => {
  const [ismailState, setMailState] = useRecoilState(mailState);

  return (
    <div className="mx-auto flex w-screen max-w-screen-md flex-col items-center py-20 px-6">
      <h1 className="text-center text-3xl font-black leading-tight sm:text-6xl">
        Love to hear from you, Get in Touch
      </h1>

      <ul className="z-50 mt-12 flex scale-125 flex-col items-center sm:scale-150 sm:flex-row  sm:space-x-3 ">
        <a
          href={process.env.NEXT_PUBLIC_TWITTER_LINK}
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex h-9 cursor-pointer items-center space-x-1 rounded-md px-3 transition-colors duration-300 hover:bg-gray-100">
            <Image
              src={twitterIcon}
              alt=""
              objectFit="contain"
              height={24}
              width={28}
              className=" opacity-40"
            />
            <span className="flex items-center text-sm font-bold opacity-70 transition-colors duration-300 ">
              Twitter
            </span>
          </li>
        </a>
        <a
          href={process.env.NEXT_PUBLIC_YOUTUBE_LINK}
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex h-9 cursor-pointer items-center space-x-2 rounded-md px-3 transition-colors duration-300 hover:bg-gray-100">
            <Image
              src={youtubeIcon}
              alt=""
              objectFit="contain"
              height={20}
              width={24}
              className="opacity-40"
            />
            <span className="flex items-center text-sm font-bold opacity-70 transition-colors duration-300 ">
              YouTube
            </span>
          </li>
        </a>
        <li
          onClick={() => {
            setMailState(true);
          }}
          className="flex h-9 cursor-pointer items-center space-x-2 rounded-md px-3 transition-colors duration-300 hover:bg-gray-100"
        >
          <Image
            src={gmailIcon}
            alt=""
            objectFit="contain"
            height={16}
            width={24}
          />
          <span className="flex items-center text-sm font-bold opacity-70 transition-colors duration-300 ">
            Gmail
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
