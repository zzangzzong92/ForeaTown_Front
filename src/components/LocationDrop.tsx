import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Entity from "../types/index";

interface LocationDropProps {
  locationValue: string;
  setSelectedLocation: string;
}

const LocationDrop: React.FC<LocationDropProps> = ({
  locationValue,
  setSelectedLocation,
}) => {
  const [locationList, setLocationList] = useState<string[]>([]);

  useEffect(() => {
    axios.get("").then((location) => setLocationList(location.data));
  }, []);
  return (
    <LocationDropContainer>
      <LocationDropContentsWrapper>
        {locationList?.map((locationName: string, index) => (
          <LocationContent
            key={index}
            onclick={() => setSelectedLocation(locationName.name)}
          >
            {locationName.name}
          </LocationContent>
        ))}
      </LocationDropContentsWrapper>
    </LocationDropContainer>
  );
};

export default LocationDrop;

const LocationDropContainer = styled.div`
  width: 100%;
  height: 190px;
  position: absolute;
  margin: 1px 0 0 0;
  padding: 0.2rem;
  height: 100px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 5px;
  overflow-y: scroll;
  z-index: 1;
`;

const LocationDropContentsWrapper = styled.div`
  width: 100%;
`;

const LocationContent = styled.div`
  width: inherit;
  display: block;
  height: 100%;
  margin: 5px 0 5px 10px;
  font-size: 20px;
  cursor: pointer;

  :hover {
    background-color: gray;
    border-radius: 4px;
  }
`;
