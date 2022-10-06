import { FC } from "react";
import { useRecoilState } from "recoil";
import { mailState } from "../recoil/mailState";

const MailModel: FC = (props) => {
  const [ismailState, setMailState] = useRecoilState(mailState);

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 m-auto flex flex-col items-center justify-center bg-white bg-opacity-50 text-black backdrop-blur-xl"
      style={{ zIndex: 60 }}
    >
      <h1 className="mt-10 font-semibold" style={{ fontSize: "7vw" }}>
        SahilSaleem006@gmail.com
      </h1>

      <button
        onClick={() => {
          setMailState(false);
        }}
        className="absolute top-10 right-10"
      >
        Close
      </button>
    </div>
  );
};

export default MailModel;
