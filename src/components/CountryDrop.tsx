import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface CountryDropProps {
  countryValue: string;
  setSelectedCountry: string;
}

const CountryDrop: React.FC<CountryDropProps> = ({
  countryValue,
  setSelectedCountry,
}) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.foreatown.com/users/country/list?name=`)
      .then((list) =>
        // console.log(typeof list.data.name, list.data.name)
        setCountryList(list.data)
      );
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.foreatown.com/users/country/list?name=${countryValue}}`)
      .then((list) =>
        // console.log(list)
        setCountryList(list.data)
      );
  }, [countryValue]);

  return (
    <CountryDropContainer>
      <CountryDropContentsWrapper>
        {countryList?.map((countryName: string, index) => (
          <CountryContent
            key={index}
            onClick={() => setSelectedCountry(countryName.name)}
          >
            {countryName.name}
          </CountryContent>
        ))}
      </CountryDropContentsWrapper>
    </CountryDropContainer>
  );
};

export default CountryDrop;

const CountryDropContainer = styled.div`
  width: 80%;
  height: 150px;
  position: relative;
  margin: 1px 0 0 40px;
  padding: 0.2rem;
  height: 100px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 5px;
  overflow-y: scroll;
  z-index: 1;
`;

const CountryDropContentsWrapper = styled.div`
  width: 100%;
`;

const CountryContent = styled.div`
  width: 80%;
  display: block;
  height: 100%;
  margin: 5px 0 5px 10px;
  font-size: 20px;
  cursor: pointer;

  :hover {
    background-color: gray;
  }
`;
