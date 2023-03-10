import FileUploader from "../../components/FileUploader";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CountryDrop from "../../components/CountryDrop";
import LocationDrop from "../../components/LocationDrop";
// import RadioButtion from "../../components/RadioButton";
// import * as Entity from "../../types/index";

const AdditionalInfo: React.FC = () => {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [sexChecked, setSexChecked] = useState<string>("");
  const [buttonColor, setButtonColor] = useState<boolean>(false);
  //국가
  const [isCountryDrop, setIsCountryDrop] = useState<boolean>(false);
  const [countryValue, setCountryValue] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  //위치
  const [isLocationDrop, setIsLocationDrop] = useState<boolean>(false);
  const [locationValue, setLocationValue] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState();

  //프로필
  const [userImage, setUserImage] = useState<string>("");

  const nickNameValue = (e: ChangeEvent<HTMLInputElement>) =>
    setNickName(e.target.value);

  const ageValue = (e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value);

  const countryInput = (e: ChangeEvent<HTMLInputElement>) =>
    setCountryValue(e.target.value);

  const locationInput = (e: ChangeEvent<HTMLInputElement>) =>
    setLocationValue(e.target.value);

  const radioHandler = (radioName: string) => {
    setSexChecked(radioName);
    // console.log(e.target.value);
    console.log(sexChecked);
  };

  const locationHandler = () => {
    setIsLocationDrop(!isLocationDrop);
  };

  const countryHandler = () => {
    setIsCountryDrop(!isCountryDrop);
  };

  const userImageHandler = () => {};

  const signupHandler = async () => {
    if (!nickName) {
      alert("Please enter your nickName");
    }
    if (!age) {
      alert("Please enter your age");
    }
    if (!countryValue) {
      alert("Please enter your countryValue");
    }
    if (!locationValue) {
      alert("Please enter your locationValue");
    }
    setButtonColor(true);
    navigate("/");
  };

  useEffect(() => {
    if (nickName && age && countryValue && locationValue) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  }, [nickName, age, countryValue, locationValue]);

  return (
    <AdditionalInfoContainer>
      <AdditionalContentWrapper>
        <Title>Tell us more about you!</Title>
        <NicknameInput
          type="name"
          placeholder="Please enter your nickname"
          required
          onChange={nickNameValue}
        />
        <AgeInput
          type="text"
          placeholder="Please enter your age"
          required
          onChange={ageValue}
        />

        {/* 성별 */}
        <SexSelect>
          <Label id="Male">
            <SexRadioButton
              type="radio"
              value="Male"
              checked={sexChecked === "Male"}
              onChange={() => radioHandler("Male")}
            />
            Male
          </Label>
          <Label id="Female">
            <SexRadioButton
              type="radio"
              value="Female"
              checked={sexChecked === "Female"}
              onChange={() => radioHandler("Female")}
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
            value={selectedCountry}
          />
          {isCountryDrop && (
            <CountryDrop
              countryValue={countryValue}
              setSelectedCountry={setSelectedCountry}
            />
          )}
        </CountryWrapper>

        {/* 위치 */}
        <LocationWrapper onClick={locationHandler}>
          <LocationInput
            type="text"
            placeholder="Please enter your location"
            required
            onChange={locationInput}
            value={selectedLocation}
          />
          {isLocationDrop && (
            <LocationDrop
              locationValue={locationValue}
              setSelectedLocation={setSelectedLocation}
            />
          )}
        </LocationWrapper>

        {/* 프로필사진 */}
        <ProFileImageSection>
          <FileUploader userImage={userImage} />
        </ProFileImageSection>

        <DoneButton onClick={signupHandler} state={buttonColor}>
          Done
        </DoneButton>
      </AdditionalContentWrapper>
    </AdditionalInfoContainer>
  );
};

export default AdditionalInfo;

const AdditionalInfoContainer = styled.div`
  width: 412px;
  height: 706px;
  margin: 97px auto;
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
  /* display: inline-flex; */
  margin: 20px 0 0 40px;
  display: flex;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`;

const SexRadioButton = styled.input`
  width: 80%;
  display: none;
  /* visibility: hidden; */

  &:checked {
    padding: 8px 14px;
    font-size: 16px;
    color: black;
    background-color: #0d47a1;
  }

  /* &:checked + Label {
    background-color: #0d47a1;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
  } */
`;

const Label = styled.label`
  width: 100%;
  line-height: 40px;
  text-align: center;
  /* line-height: 20px; */
  cursor: pointer;
`;

const CountryWrapper = styled.div`
  width: 80%;
  position: relative;
  margin: 20px 0 0 40px;
  background-color: #f5f7fa;
  outline: none;
`;

const CountryInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  background-color: #f5f7fa;
  outline: none;
  border: none;
  border-radius: 4px;

  :focus {
    border: 1px solid #526dee;
    border-radius: 4px;
  }
`;

const LocationWrapper = styled.div`
  width: 80%;
  position: relative;
  margin: 20px 0 0 40px;
  background-color: #f5f7fa;
  outline: none;
`;

const LocationInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  background-color: #f5f7fa;
  outline: none;
  border: none;
  border-radius: 4px;

  :focus {
    border: 1px solid #526dee;
    border-radius: 4px;
  }
`;

const DoneButton = styled.button<{ state: boolean }>`
  width: 80%;
  height: 36px;
  margin: 20px 0 0 40px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: ${(props) => (props.state ? "#526dee " : "#C8D1E0")};
`;

const ProFileImageSection = styled.div`
  width: 100%;
  margin-top: 20px;
`;
