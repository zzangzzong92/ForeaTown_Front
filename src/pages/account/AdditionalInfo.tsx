import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const AdditionalInfo: React.FC = () => {
  const [nickName, setNickName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [sexChecked, setSexCheck] = useState([]);

  const nickNameValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const ageValue = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  return (
    <AdditionalInfoContainer>
      <AdditionalContentWrapper>
        <Title>Tell us more about you!</Title>
        <NicknameInput
          type="name"
          placeholder="Please enter your kickname"
          required
          onChange={nickNameValue}
        ></NicknameInput>
        <AgeInput
          type="text"
          placeholder="Please enter your age"
          required
          onChange={ageValue}
        ></AgeInput>

        {/* 성별 */}
        <SexSelect>
          <SexRadioButton
            type="radio"
            value="Male"
            name="maleRadio"
            id="maleRadio"
          ></SexRadioButton>
          <Label className="radio__label" htmlFor="maleRadio">
            Male
          </Label>

          <SexRadioButton
            type="radio"
            value="Female"
            name="FemaleRadio"
            id="FemaleRadio"
          ></SexRadioButton>
          <Label htmlFor="FemaleRadio">Female</Label>
        </SexSelect>

        {/* 위치 */}
        <LocationSelect>
          <LocationContent></LocationContent>
        </LocationSelect>
        {/* 국가 input 삽입 */}
      </AdditionalContentWrapper>
    </AdditionalInfoContainer>
  );
};

export default AdditionalInfo;

const AdditionalInfoContainer = styled.div`
  width: 412px;
  height: 506px;
  margin: 127px auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  user-select: none;
`;

const AdditionalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  border: 1px solid black;
`;

const Title = styled.span`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const NicknameInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin: 10px 0 0 40px;
  background-color: #f5f7fa;
  outline: none;
  border: none;

  :focus {
    border-bottom: 1px solid #526dee;
  }
`;

const AgeInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin: 20px 0 0 40px;
  background-color: #f5f7fa;
  outline: none;
  border: none;

  :focus {
    border-bottom: 1px solid #526dee;
  }
`;

const SexSelect = styled.div`
  width: 80%;
  display: inline-flex;
  /* justify-content: space-around; */
  overflow: hidden;
  margin: 20px 0 0 40px;
  display: flex;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  border: 1px solid black;
`;

const SexRadioButton = styled.input.attrs({ type: "radio" })`
  display: none;

  & + label {
    padding: 8px 14px;
    font-size: 16px;
    color: black;
    background-color: #fff;
    /* transition: background 0.1s; */
    cursor: pointer;
  }

  &:checked + Label {
    background-color: #0d47a1;
    color: #fff;
  }

  /* &.before {
    content: "";
    border-radius: 4px;
    position: absolute;
    top: -2px;
    left: -2px;
    width: 30%;
    height: 10%;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  }

  &:checked:before {
    content: "";
    border-radius: 4px;
    position: absolute;
    top: -2px;
    left: -2px;
    width: 30%;
    height: 20px;
    background-color: #0d47a1;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  } */
`;

const Label = styled.label`
  width: 100%;
  text-align: center;
  line-height: 40px;
`;

const LocationSelect = styled.ul``;

const LocationContent = styled.li`
  display: flex;
`;
