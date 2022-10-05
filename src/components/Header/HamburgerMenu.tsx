import Image from "next/image";
import React from "react";
import twitterIcon from "../../../public/icon/twitter.svg";
import youtubeIcon from "../../../public/icon/youtube.svg";
import gmailIcon from "../../../public/icon/gmail.svg";
import { motion, AnimatePresence } from "framer-motion";

const HamburgerMenu = () => {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <React.Fragment>
      <button
        onClick={() => {
          menuState ? setMenuState(false) : setMenuState(true);
        }}
        className="z-50 flex sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <AnimatePresence>
        {menuState && (
          <motion.div
            variants={{
              open: { opacity: 1, x: 0 },
              closed: { opacity: 0, x: "-100%" },
            }}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-white sm:hidden"
          >
            <ul className="z-50 flex flex-col items-center justify-center space-y-7">
              <a
                href={process.env.NEXT_PUBLIC_YOUTUBE_LINK}
                target="_blank"
                rel="noreferrer"
                className="scale-125"
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
                className="scale-125"
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
                    YouTude
                  </span>
                </li>
              </a>
              <li className="flex h-9 scale-125 cursor-pointer items-center space-x-2 rounded-md px-3 transition-colors duration-300 hover:bg-gray-100">
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
              <button className="h-9 w-24 scale-125 rounded-md bg-blue-600 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-800">
                Resume
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default HamburgerMenu;
