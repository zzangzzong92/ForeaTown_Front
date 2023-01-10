import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState<string>();
  const [passwordValue, setPasswordValue] = useState<string>();
  const [buttonColor, setButtonColor] = useState<boolean>(false);

  const emailInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const passwordInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const clickSignUp = () => {
    navigate("/signup");
  };

  useEffect(() => {
    if (emailValue && passwordValue) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  }, [emailValue, passwordValue]);
  return (
    <SignInContainer>
      <SignInContentWrapper>
        <ForeaLogo>ForeaTown</ForeaLogo>
        <EmailInput
          type="email"
          placeholder="Please enter your email address"
          required
          autoComplete="true"
          onChange={emailInputHandler}
        ></EmailInput>
        <PasswordInput
          type="password"
          placeholder="Please enter your password"
          required
          onChange={passwordInputHandler}
        ></PasswordInput>
        <SignInButton state={buttonColor}>Signin</SignInButton>
        <InduceSignUp onClick={clickSignUp}>
          Don't you have an account?
        </InduceSignUp>
        <Horizontal></Horizontal>
        <KakaoSignInButton>Signin with kakao</KakaoSignInButton>
      </SignInContentWrapper>
    </SignInContainer>
  );
};

export default SignIn;

const SignInContainer = styled.div`
  width: 568px;
  height: 488px;
  padding: 2.5rem;
  margin: 156px auto;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const SignInContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ForeaLogo = styled.div`
  width: 80%;
  margin: 30px auto;
  font-size: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const EmailInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin-bottom: 20px;
  background-color: #f5f7fa;
  outline: none;
  border: none;
  border-radius: 4px;

  :focus {
    border: 1px solid #526dee;
  }
`;

const PasswordInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  background-color: #f5f7fa;
  outline: none;
  border: none;
  border-radius: 4px;

  :focus {
    border: 1px solid #526dee;
  }
`;

const SignInButton = styled.button<{ state: boolean }>`
  width: 80%;
  height: 36px;
  margin: 20px auto;
  background: #c8d1e0;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 36px;
  background: ${(state) => (state ? "#526dee" : "#C8D1E0")};
  color: #ffffff;
  cursor: pointer;
`;

const InduceSignUp = styled.span`
  text-align: center;
  font-size: 14px;
  text-decoration: underline;
  color: #c8d1e0;
  cursor: pointer;
`;

const Horizontal = styled.div`
  width: 80%;
  height: 1px;
  margin: 20px auto;
  background-color: gray;
`;

const KakaoSignInButton = styled.button`
  width: 80%;
  height: 52px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 4px;
`;
