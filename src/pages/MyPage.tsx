import React, { useState } from "react";
import styled from "styled-components";

const MyPage: React.FC = () => {
  return (
    <MyPageContainer>
      <MyPageTopSection>
        <MyPageTitle>My Town</MyPageTitle>
      </MyPageTopSection>
      <MyPageContentSection></MyPageContentSection>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  width: 652px;
  height: 100vh;
  margin: 0 auto;
  padding: 2.2rem;
  background-color: #ffffff;
`;

const MyPageTopSection = styled.div`
  width: 100%;
`;

const MyPageTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const MyPageContentSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
