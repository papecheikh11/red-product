"use client";
import { MdOutlineEmail } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import NavbarPage from "./Navbar";
import styled from "styled-components";
import Carte from "./Carte";
import { MainContainer } from "./ListeDesHotels";
import { TbLetterP } from "react-icons/tb";

const BodyDashbord = styled.section`
  background: #f0f0f0;
  position: absolute;
`;

const ContainCardDashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const TitreRed = styled.p`
  margin-left: 40px;
  font-family: Roboto;
  font-size: 25px;
  font-weight: 300;
`;

const Description = styled.p`
  margin-left: 40px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
`;

const DashboardGlobal = (color) => {
  return (
    <BodyDashbord>
      <NavbarPage title="Dashboard" />
      <MainContainer>
        <TitreRed>Bienvenue sur RED Product</TitreRed>
        <Description>Lorem ipsum dolor sit amet consectetur</Description>
        <ContainCardDashboard>
          <Carte color="#A88ADD" icon={<MdOutlineEmail />}></Carte>
          <Carte color="#0CC2AA" icon={<TbLetterP />}></Carte>
          <Carte color="#FCC100" icon={<IoPeopleSharp />}></Carte>
          <Carte color="#F90000" icon={<MdOutlineEmail />}></Carte>
          <Carte color="#9C27B0" icon={<TbLetterP />}></Carte>
          <Carte color="#1565C0" icon={<IoPeopleSharp />}></Carte>
        </ContainCardDashboard>
      </MainContainer>
    </BodyDashbord>
  );
};

export default DashboardGlobal;
