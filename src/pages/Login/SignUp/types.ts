import { Dispatch, SetStateAction } from "react";
import { authType } from "../Login";

export interface ISignUpProps {
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  setSignMode: Dispatch<SetStateAction<authType>>;
}

export interface ISignUpObj {
  phone: string;
}
