import Image from "next/image";
import { FC } from "react";
import twitterIcon from "../../../public/icon/twitter.svg";
import youtubeIcon from "../../../public/icon/youtube.svg";
import gmailIcon from "../../../public/icon/gmail.svg";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="sticky z-50 flex h-20 w-screen items-center justify-center bg-white px-6 backdrop-blur-lg">
      <nav className="flex w-screen max-w-screen-xl items-center justify-between">
        <Link href={"/"}>
          <h1 className="z-50 cursor-pointer text-2xl font-bold">
            Sahil.Saleem
          </h1>
        </Link>

        <ul className="z-50 hidden items-center space-x-3 sm:flex">
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
          <li className="flex h-9 cursor-pointer items-center space-x-2 rounded-md px-3 transition-colors duration-300 hover:bg-gray-100">
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
          <button className="h-9 w-24 rounded-md bg-blue-600 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-800">
            Resume
          </button>
        </ul>

        {/* hamburger menu */}
        <HamburgerMenu />
      </nav>
    </header>
  );
};

export default Header;
