import React from "react";
import styled from "styled-components";
import * as Entity from "../types/index";

interface LocationDropProps {
  locationState: string;
}

const LocationDrop: React.FC<LocationDropProps> = ({ locationState }) => {
  return (
    <LocationDropContainer>
      <LocationName></LocationName>
    </LocationDropContainer>
  );
};

export default LocationDrop;
const LocationDropContainer = styled.div`
  display: flex;
`;

const LocationName = styled.div`
  width: 100%;
`;
