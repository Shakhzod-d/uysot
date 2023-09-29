import React, { Dispatch, FC, SetStateAction } from "react";
import { Button, TextField } from "@mui/material";

import { useDispatch } from "react-redux";
import { loginUser } from "../../../../store/reducers";
import { AppDispatch } from "../../../../store/store";

export interface ILoginWithCodeProps {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
  phoneNumber: string;
}

const LoginWithCode: FC<ILoginWithCodeProps> = ({
  code,
  setCode,
  phoneNumber,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const submit = () => {
    const verificationCode = {
      phone: phoneNumber,
      sms_code: code,
    };

    dispatch(loginUser(verificationCode));
    console.log(verificationCode);
  };

  const formatCode = (input: string): string => {
    const phoneNumber = input.replace(/\D/g, "");

    if (phoneNumber.length >= 10) {
      const formattedPhoneNumber = `${phoneNumber.slice(
        0,
        3
      )}${phoneNumber.slice(3, 5)}${phoneNumber.slice(5, 8)}${phoneNumber.slice(
        8,
        10
      )}${phoneNumber.slice(10, 12)}`;
      return formattedPhoneNumber;
    }

    return phoneNumber;
  };

  return (
    <div>
      <TextField
        label="Enter sms code below"
        variant="outlined"
        fullWidth
        value={code}
        onChange={(e) => setCode(() => formatCode(e.target.value))}
        placeholder="9999"
      />
      <Button
        onClick={submit}
        // disabled={code.length !== 4}
        sx={{
          margin: "8px 0",
          backgroundColor: "#6021A3",
          "&:hover": {
            backgroundColor: "#4B1683",
          },
        }}
        fullWidth
        variant="contained"
      >
        Kirish
      </Button>
    </div>
  );
};

export default LoginWithCode;
