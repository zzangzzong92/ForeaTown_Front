import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import rootUrl from "../../data/rootUrl";
import * as Entity from "../../types/index";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const formData = new FormData();
  const [signInFormData, setSignInFormData] = useState<Entity.SignIn>({
    email: "",
    password: "",
  });
  const [buttonColor, setButtonColor] = useState<boolean>(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInFormData({ ...signInFormData, [e.target.name]: e.target.value });
  };

  console.log(signInFormData.email);
  console.log(signInFormData.password);

  const signUpHandler = () => {
    navigate("/signup");
  };

  // const clickSignIn = async () => {
  //   if (!signInFormData.email) {
  //     alert("Please enter your email");
  //   } else if (!signInFormData.password) {
  //     alert("Please check your password");
  //   } else {
  //     try {
  //       const signInResponse = await axios.post(
  //         `${rootUrl}/users/login`,
  //         {
  //           body: signInFormData,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       if (signInResponse.status === 200) {
  //         alert("Welcome! You have successfully signed");
  //         navigate("/main");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };
  const submitHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log("click");

    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", signInFormData.email);
      formData.append("password", signInFormData.password);

      const response = await axios.post(`${rootUrl}/users/login`, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (response.status === 200) {
        alert("Welcome! You have successfully signed in");
        navigate("/main");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (formData.values.name) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  }, [formData.values.name]);

  return (
    <SignInContainer>
      <SignInForm onSubmit={submitHandler}>
        <ForeaLogo>ForeaTown</ForeaLogo>
        <EmailInput
          type="email"
          name="email"
          placeholder="Please enter your email address"
          required
          autoComplete="true"
          value={signInFormData.email}
          onChange={onChangeHandler}
        />
        <PasswordInput
          type="password"
          name="password"
          placeholder="Please enter your password"
          required
          value={signInFormData.password}
          onChange={onChangeHandler}
        />
        <SignInButton type="submit">Signin</SignInButton>
        <InduceSignUp onClick={signUpHandler}>
          Don't you have an account?
        </InduceSignUp>
        <Horizontal />
        <KakaoSignInButton>Signin with kakao</KakaoSignInButton>
      </SignInForm>
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

const SignInForm = styled.form`
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

const SignInButton = styled.button`
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
  /* background: ${(state) => (state ? "#526dee" : "#C8D1E0")}; */
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
