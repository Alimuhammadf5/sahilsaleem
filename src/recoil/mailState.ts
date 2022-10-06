import { atom } from "recoil";

const mailState = atom({
  key: "mailState",
  default: false,
});

export { mailState };
