import React from "react";
import styled from "styled-components";

const Main: React.FC = () => {
  return (
    <MainContainer>
      <MainNavSection></MainNavSection>
      <ContentCardList></ContentCardList>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div``;

const MainNavSection = styled.div``;

const ContentCardList = styled.div``;
