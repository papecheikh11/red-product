"use client";

import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
  margin-left: 250px;
  width: calc(100% - 260px);
`;

export const MesCards = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const BouttonHotels = styled.button`
  margin-top: 28px;
  width: 220px;
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
`;

export const DivHaut = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardsPerso = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 275px;
  border-radius: 10px;
  background: #ffffff;
`;

const MonImg = styled.img`
  width: 250px;
  height: 180px;
  border-radius: 10px;
`;

const TitleImg = styled.p`
  font-size: 12px;
  color: red;
`;

const Description = styled.p`
  font-size: 16px;
  color: black;
`;

export const CardContainer = ({ image, title, description }) => {
  return (
    <CardsPerso>
      <MonImg src={image} alt={title} />
      <TitleImg>{title}</TitleImg>
      <Description>{description}</Description>
    </CardsPerso>
  );
};
