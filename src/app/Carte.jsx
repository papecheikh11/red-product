"use client";
import styled from "styled-components";
import React from "react";
// import { FaEnvelopeOpen } from "react-icons/fa6";

const Conteneur = styled.div`
  display: flex;
  justify-content: start;
  padding: 15px;
  gap: 15px;
  align-items: center;
  width: 305px;
  height: 55px;
  margin-top: 30px;
  background-color: white;
  box-shadow: 0px 2.6662580966949463px 2.6662580966949463px 0px #00000008;
  border-radius: 15px;
`;
const Icon = styled.div`
  font-size: 28px;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 20px;
  height: 20px;
  align-items: center;
  background-color: ${(props) => props.color || "#a88add"};
  color: white;
  border-radius: 50%;
`;
const Inf = styled.div`
  display: flex;
  justify-content: start;
  gap: 5px;
`;
const Chiffre = styled.h1`
  font-size: 22px;
  font-weight: 200;
`;
const Titre = styled.h5`
  font-size: small;
  font-weight: 300;
  padding-top: 10px;
`;
const Desc = styled.h5`
  font-size: 12px;
  font-weight: 300;
  margin-right: 30px;
`;

const TitreDesc = styled.div``;

const Carte = ({ icon, color }) => {
  return (
    <Conteneur>
      <Icon color={color}>{icon}</Icon>
      <div>
        <Inf>
          <Chiffre>125</Chiffre>
          <TitreDesc>
            <Titre> formulaires</Titre>
            <Desc>Je ne sais pas quoi mettre</Desc>
          </TitreDesc>
        </Inf>
      </div>
    </Conteneur>
  );
};

export default Carte;
