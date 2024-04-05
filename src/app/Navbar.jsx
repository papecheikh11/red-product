// NavbarPage.js
"use client";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import styled from "styled-components";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { MainContainer } from "./ListeDesHotels";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const TitreDashboard = styled.p`
  margin-left: 40px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
`;

const Recherche = styled.input`
  width: 200px;
  height: 25px;
  border-radius: 10px;
  border: 1px solid;
`;

const Me = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Boutton = styled.button`
  border: none;
  cursor: pointer;
`;

const NavbarPage = ({ title }) => {
  // const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/connexion");
  };

  const router = useRouter();
  return (
    <MainContainer>
      <Navbar>
        <TitreDashboard>{title}</TitreDashboard>
        <NavbarRight>
          <Recherche placeholder="Recherche" />
          <IoNotificationsOutline />
          <Me>me</Me>
          <Boutton onClick={handleLogout}>
            <FaArrowRightFromBracket />
          </Boutton>
        </NavbarRight>
      </Navbar>
    </MainContainer>
  );
};

export default NavbarPage;
