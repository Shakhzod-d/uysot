import React, { useState } from "react";

import { useSelector } from "react-redux";
import { TypeStore } from "../../store/store";
import LoginWithCode from "./components/Login/Login";
import SignUp from "./SignUp/SignUp";

import "./Login.css";

export type authType = `SIGN_UP` | `SIGN_IN`;

const Login = () => {
  const [signMode, setSignMode] = useState<authType>(`SIGN_UP`);
  const state = useSelector<TypeStore>((state) => state.auth);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");

  return (
    <div className="login_container">
      <div className="image_container"></div>
      <div className="login_form">
        <form action="">
          <p className="title">Xush kelibsiz!</p>
          <h2>Kirish</h2>

          {signMode === `SIGN_UP` && (
            <SignUp
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              setSignMode={setSignMode}
            />
          )}

          {signMode === `SIGN_IN` && (
            <LoginWithCode
              code={code}
              setCode={setCode}
              phoneNumber={phoneNumber}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
