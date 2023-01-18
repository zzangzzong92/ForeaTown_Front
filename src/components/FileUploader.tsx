import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

interface FileUploaderProps {
  userImage: Dispatch<SetStateAction<string>>;
}

const FileUploader: React.FC<FileUploaderProps> = () => {
  const [userImage, setUserImage] = useState<string>(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file: File = e.target.files[0];
      setUserImage(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <ImgInputWrapper>
        <LoaderMain type="file" onChange={uploadHandler} />
        <PicDiv className="preview">
          {userImage && <img src={userImage} alt="preview-img" />}
        </PicDiv>
      </ImgInputWrapper>
      <LoaderContainer></LoaderContainer>
    </>
  );
};

export default FileUploader;

const ImgInputWrapper = styled.div`
  z-index: 0;
`;

const LoaderContainer = styled.div`
  width: 150px;
  height: 165px;
  margin: 0 auto;
  margin-top: -170px;
  border-radius: 50%;
  background-color: #ebeff5;
`;

const LoaderMain = styled.input`
  width: 150px;
  height: 165px;
  margin-left: 115px;
  border-radius: 50%;
  opacity: 0;
  z-index: 0;
  cursor: pointer;
  border: 1px solid black;
`;

const PicDiv = styled.div`
  width: 150px;
  height: 165px;
  margin: 0 auto;
  margin-top: -160px;
  z-index: 0;
  content: "";

  img {
    width: 150px;
    height: 165px;
    margin-top: -5px;
    border-radius: 50%;
    text-align: center;
  }
`;
