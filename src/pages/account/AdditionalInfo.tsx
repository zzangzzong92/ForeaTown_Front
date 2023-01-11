import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import CountryDrop from "../../components/CountryDrop";
import * as Entity from "../../types/index";
// import LocationDrop from "../../components/LocationDrop";

const AdditionalInfo: React.FC = () => {
  const [nickName, setNickName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [sexChecked, setSexCheck] = useState<string>();
  //국가
  const [isCountryDrop, setIsCountryDrop] = useState<boolean>(false);
  const [countryValue, setCountryValue] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  //위치
  const [isLocationDrop, setIsLocationDrop] = useState<boolean>(false);
  const [locationValue, setLocationValue] = useState<string>("");

  const nickNameValue = (e: ChangeEvent<HTMLInputElement>) =>
    setNickName(e.target.value);

  const ageValue = (e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value);

  const countryInput = (e: ChangeEvent<HTMLInputElement>) =>
    setCountryValue(e.target.value);

  const locationInput = (e: ChangeEvent<HTMLInputElement>) =>
    setLocationValue(e.target.value);

  const radioHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSexCheck(e.target.value);
    console.log(sexChecked);
  };

  const locationHandler = () => {
    setIsLocationDrop(!isLocationDrop);
  };

  const countryHandler = () => setIsCountryDrop(!isCountryDrop);

  // useEffect(() => {
  //   const radioHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //     e.preventDefault();
  //     setSexCheck(e.target.value);
  //     console.log(sexChecked);
  //   };

  // }, []);

  return (
    <AdditionalInfoContainer>
      <AdditionalContentWrapper>
        <Title>Tell us more about you!</Title>
        <NicknameInput
          type="name"
          placeholder="Please enter your nickname"
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
          <Label id="male">
            <SexRadioButton
              type="radio"
              value="Male"
              name="gender"
              onChange={radioHandler}
            />
            Male
          </Label>
          <Label id="female">
            <SexRadioButton
              type="radio"
              value="Female"
              name="gender"
              onChange={radioHandler}
            />
            Female
          </Label>
        </SexSelect>

        {/* 국가 */}
        <CountryWrapper onClick={countryHandler}>
          <CountryInput
            type="text"
            placeholder="Please enter your country"
            required
            onChange={countryInput}
          >
            {selectedCountry}
          </CountryInput>
        </CountryWrapper>
        {isCountryDrop && (
          <CountryDrop
            countryValue={countryValue}
            setSelectedCountry={setSelectedCountry}
          />
        )}

        {/* 위치 */}
        <LocationWrapper onClick={locationHandler}>
          <LocationInput
            type="text"
            placeholder="Please enter your location"
            required
            onChange={locationInput}
          >
            {/* {locationValue} */}
          </LocationInput>
          {/* 여기서 locationList를 map돌려서  */}
          {/* {isLocationDrop && <LocationDrop locationState={locationState} />} */}
          {isLocationDrop && <div>위치정보가 쫘라락 나와야함</div>}
        </LocationWrapper>

        <DoneButton>Done</DoneButton>
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
`;

const Title = styled.span`
  font-size: 30px;
  text-align: center;
  margin: 20px 0 20px 0;
`;

const NicknameInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin: 10px 0 0 40px;
  background-color: #f5f7fa;
  outline: none;
  border: none;
  border-radius: 4px;

  :focus {
    border: 1px solid #526dee;
    border-radius: 4px;
  }
`;

const AgeInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin: 20px 0 0 40px;
  background-color: #f5f7fa;
  outline: none;
  border: none;
  border-radius: 4px;

  :focus {
    border: 1px solid #526dee;
    border-radius: 4px;
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
`;

const SexRadioButton = styled.input.attrs({ type: "radio" })`
  width: 80%;
  display: none;

  input:checked {
    padding: 8px 14px;
    font-size: 16px;
    color: black;
    background-color: #fff;
    /* transition: background 0.1s; */
  }
`;

const Label = styled.label`
  width: 100%;
  text-align: center;
  line-height: 40px;
  cursor: pointer;

  &:checked + Label {
    background-color: #0d47a1;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
  }
`;

const LocationWrapper = styled.div`
  width: 80%;
  margin: 20px 0 0 40px;
  background-color: #f5f7fa;
  outline: none;
  border: 1px solid black;
`;

const LocationInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  background-color: #f5f7fa;
  outline: none;
  border: none;
  border-radius: 4px;
`;

const CountryWrapper = styled.div`
  width: 80%;
  position: relative;
  margin: 20px 0 0 40px;
  background-color: #f5f7fa;
  outline: none;
  border: 1px solid black;
`;

const CountryInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  background-color: #f5f7fa;
  outline: none;
  border: none;
  border-radius: 4px;
`;

const DoneButton = styled.button`
  width: 80%;
  height: 36px;
  margin: 20px 0 0 40px;
  border: none;
  border-radius: 4px;
  color: #fff;
`;
