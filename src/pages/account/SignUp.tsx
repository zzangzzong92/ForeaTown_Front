import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import rootUrl from "../../data/rootUrl";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [pwInput, setPwInput] = useState<string>("");
  const [pwCheckInput, setPwCheckInput] = useState<string>("");
  const [buttonColor, setButtonColor] = useState<boolean>(false);

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPwInput(e.target.value);
  };

  const passwordCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPwCheckInput(e.target.value);
  };

  // 클릭핸들러
  const onClickSignInHanlder = () => {
    navigate("/");
  };

  const clickSignUpHandler = async () => {
    if (!nameInput) {
      alert("Please enter your name");
    }
    if (!emailInput) {
      alert("Please enter your email");
    }
    if (!pwInput || !pwCheckInput) {
      alert("Please check your password");
    }
    if (pwInput !== pwCheckInput) {
      alert("Do not match password");
    }
    try {
      const signUpResponse = await axios.post(
        `${rootUrl}/users/signup`,
        {
          name: nameInput,
          email: emailInput,
          password1: pwInput,
          password2: pwCheckInput,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (signUpResponse.status === 201) {
        alert(`${nameInput}, Welcome to the membership!`);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (nameInput && emailInput && pwInput && pwCheckInput) {
      setButtonColor(true);
    } else if (pwInput !== pwCheckInput) {
      setButtonColor(false);
    }
  }, [nameInput, emailInput, pwInput, pwCheckInput]);

  return (
    <SignUpLayout>
      <Title>Sign up</Title>
      <Form>
        <NameInput
          type="text"
          placeholder="Please enter your name"
          required
          onChange={nameHandler}
        />
        <EmailInput
          type="email"
          placeholder="Please enter your email"
          required
          onChange={emailHandler}
        />
        <PasswordInput
          type="password"
          placeholder="Please enter your password"
          required
          onChange={passwordHandler}
        />
        <PasswordCheckInput
          type="password"
          placeholder="Please enter your password again"
          required
          onChange={passwordCheckHandler}
        />
      </Form>
      <ConfirmButton state={buttonColor} onClick={clickSignUpHandler}>
        Signup
      </ConfirmButton>
      <InduceLogin>
        <AlreadyAccount>Do you have an account?</AlreadyAccount>
        <GotoSignIn onClick={onClickSignInHanlder}>Signin</GotoSignIn>
      </InduceLogin>
    </SignUpLayout>
  );
};

export default SignUp;

const SignUpLayout = styled.div`
  width: 412px;
  height: 506px;
  margin: 127px auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  user-select: none;
`;

const Title = styled.div`
  width: fit-content;
  font-size: 30px;
  margin: 60px 0 10px 40px;
`;

const Form = styled.form``;

const NameInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin: 20px 0 20px 40px;
  background-color: #f5f7fa;
  outline: none;
  border: none;
  border-radius: 4px;

  :focus {
    border: 1px solid #526dee;
    border-radius: 4px;
  }
`;

const EmailInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin: 0 0 20px 40px;
  background-color: #f5f7fa;
  outline: none;
  border: none;
  border-radius: 4px;

  :focus {
    border: 1px solid #526dee;
    border-radius: 4px;
  }
`;

const PasswordInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin: 0 0 20px 40px;
  background-color: #f5f7fa;
  outline: none;
  border: none;
  border-radius: 4px;

  :focus {
    border: 1px solid #526dee;
    border-radius: 4px;
  }
`;

const PasswordCheckInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin: 0 0 0 40px;
  background-color: #f5f7fa;
  outline: none;
  border: none;
  border-radius: 4px;

  :focus {
    border: 1px solid #526dee;
    border-radius: 4px;
  }
`;

const ConfirmButton = styled.div<{ state: boolean }>`
  width: 320px;
  height: 36px;
  margin: 40px auto;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  border-radius: 24px;
  background-color: ${(props) => (props.state ? "#526dee" : "#C8D1E0")};
  cursor: pointer;
`;

const InduceLogin = styled.div`
  width: 80%;
  text-align: center;
  display: flex;
`;

const AlreadyAccount = styled.span`
  margin-left: 112px;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #58606e;
`;

const GotoSignIn = styled.span`
  margin-left: 15px;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #58606e;
  cursor: pointer;
`;
