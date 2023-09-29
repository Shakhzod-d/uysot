import React, { FC, useState } from "react";
import PhoneNumberInput from "@components/PhoneNumberInput/PhoneNumberInput";
import { Button } from "@mui/material";

import { ISignUpObj, ISignUpProps } from "./types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { signUpUser } from "../../../store/reducers";

const SignUp: FC<ISignUpProps> = ({
  phoneNumber,
  setPhoneNumber,
  setSignMode,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const submit = () => {
    const phoneObj: ISignUpObj = {
      phone: phoneNumber,
    };

    dispatch(signUpUser(phoneObj))
      .unwrap()
      .then((originalPromiseResult) => {
        console.log(`originalPromiseResult`, originalPromiseResult);
        if (originalPromiseResult.status === 200) {
          setSignMode(`SIGN_IN`);
        }
      })
      .catch((rejectedValueOrSerializedError) => {
        // handle error here
        console.log(
          `rejectedValueOrSerializedError`,
          rejectedValueOrSerializedError
        );
      });
  };

  return (
    <div>
      <PhoneNumberInput
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />

      <Button
        onClick={submit}
        disabled={phoneNumber.length !== 13}
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

export default SignUp;
