import React, { useState } from "react";
import styled from "styled-components";

const MyPage: React.FC = () => {
  return (
    <MyPageContainer>
      <MyPageTopSection></MyPageTopSection>
      <MyPageContentSection></MyPageContentSection>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div``;

const MyPageTopSection = styled.div``;

const MyPageContentSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
