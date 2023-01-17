import React from "react";
import styled from "styled-components";

interface RadioProps {
  id: string;
  label: string;
  name: string;
}

const RadioButtion: React.FC<RadioProps> = ({ id, label, name }) => {
  return (
    <RadioButtionContainer>
      <input type="radio" id={id} name={name} />
      <label htmlFor={id}>{label}</label>
    </RadioButtionContainer>
  );
};

export default RadioButtion;

const RadioButtionContainer = styled.div`
  input[type="radio"] {
    display: none;
  }

  input[type="radio"] + label {
    cursor: pointer;
  }

  input[type="radio"]:checked + label {
    color: #526dee;
  }

  input[type="radio"] + label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 2px solid #ccc;
    border-radius: 50%;
  }

  input[type="radio"]:checked + label::before {
    content: "";
    background-color: blue;
    border-color: blue;
  }
`;
