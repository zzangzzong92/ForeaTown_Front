import React, { useState } from "react";
import styled from "styled-components";
import * as Entity from "./../types/index";

interface LanguageProps {
  languageGroup: Entity.Language;
}

const LanguageCard: React.FC<LanguageProps> = () => {
  return (
    <LanguageCardContainer>
      <TypeSection>
        <TypeLanguage>🔤 Language</TypeLanguage>
        <HeartButton></HeartButton>
      </TypeSection>
      <TypeInfoSection>
        <GroupTitle>
          Looking for language exchange!
          <br />
          Spanish(me)-Korean(you)
        </GroupTitle>
        <CreateAt>📅 2023-01-23</CreateAt>
        <OnOffLineAndLocation>서울숲</OnOffLineAndLocation>
      </TypeInfoSection>
      <MemberAndMasterSection>
        <GroupMember>👥 2</GroupMember>
        <GroupMaster>👤 짱쫑</GroupMaster>
      </MemberAndMasterSection>
    </LanguageCardContainer>
  );
};

export default LanguageCard;

const LanguageCardContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  border-radius: 5px;
  background-color: #fff;
`;

const TypeSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TypeLanguage = styled.div`
  width: 110px;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  color: #fff;
  border-radius: 25px;
  background-color: #8977ad;
`;

const HeartButton = styled.div``;

const TypeInfoSection = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  border-bottom: 1px solid black;
`;

const GroupTitle = styled.div``;

const CreateAt = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #c8d1e0;
`;

const OnOffLineAndLocation = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #c8d1e0;
`;

const MemberAndMasterSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

const GroupMember = styled.div`
  font-size: 14px;
  color: #c8d1e0;
`;

const GroupMaster = styled.div`
  font-size: 14px;
  color: #c8d1e0;
`;
