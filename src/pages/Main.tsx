import LanguageCard from "./../components/LanguageCard";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Logo from "@assets/ForeaTown_Logo.svg";
import * as Entity from "./../types/index";
import axios from "axios";
import rootUrl from "data/rootUrl";

const Main: React.FC = () => {
  const [languageList, setLanguageList] = useState<Entity.Language[]>([]);

  return (
    <MainContainer>
      <MainContentsWrapper>
        <MainControlSection>
          <MainInfoSection>
            {/* <Logo /> */}
            <MyPageButton></MyPageButton>
          </MainInfoSection>
        </MainControlSection>
        <ContentCardList>
          {languageList?.map((languageGroup, index) => (
            <LanguageCard key={index} languageGroup={languageGroup} />
          ))}
        </ContentCardList>
      </MainContentsWrapper>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 652px;
  height: 100vh;
  margin: 0 auto;
  padding: 2.2rem;
  background-color: #ffffff;
`;

const MainContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainControlSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const MainInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MyPageButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid gray;
  cursor: pointer;

  :hover {
    transform: scale(1.5);
    transition: 0.5s;
  }
`;

const ContentCardList = styled.div``;
