"use client";

import React, { useState } from "react";
import { FaHotel } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import Link from "next/link";
import styled from "styled-components";

const SideBarGlobal = styled.section`
  top: 0;
  left: 0;
  width: 260px;
  display: block;
  z-index: 2;
  transition: transform 0.3s ease-in-out;
  position: fixed;
`;

const TitreSidebar = styled.h3`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  margin-left: 15px;
`;

const ParaSidebar = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  margin-left: 15px;
`;

const SideBarBody = styled.div`
  background: #494c4f;
  color: white;
  height: 100vh;
  overflow: hidden;
`;

const UnOrderList = styled.ul`
  margin-top: 50px;
  position: relative;
  list-style: none;
  padding: 0;
  display: block;
  transition: all 0.5s ease;
`;

const MesLiens = styled.li`
  display: flex;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: ${({ isactive }) => (isactive ? "white" : "none")};

  a {
    text-decoration: none;
    color: ${({ isactive }) => (isactive ? "black" : "#ffffff")};
    display: flex;
    align-items: center;
  }

  &:hover {
    background: ${({ isactive }) =>
      isactive
        ? "#ffffff"
        : "#666666"}; /* couleur de fond en fonction de l'état */
  }

  svg {
    margin-right: 10px;
  }
`;

const MotSidebar = styled.span`
  /* styles du texte */
`;

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActiveLink = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <SideBarGlobal>
      <SideBarBody>
        <TitreSidebar>RED PRODUCT</TitreSidebar>
        <ParaSidebar>Principal</ParaSidebar>
        <UnOrderList>
          <MesLiens
            isactive={activeLink === "dashboard"}
            onClick={() => handleSetActiveLink("dashboard")}
          >
            <Link href="/dashboard">
              <MdSpaceDashboard />
              <MotSidebar>Dashboard</MotSidebar>
            </Link>
          </MesLiens>
          <MesLiens
            isactive={activeLink === "hotels"}
            onClick={() => handleSetActiveLink("hotels")}
          >
            <Link href="/hotels">
              <FaHotel />
              <MotSidebar>Liste des hotels</MotSidebar>
            </Link>
          </MesLiens>
        </UnOrderList>
      </SideBarBody>
    </SideBarGlobal>
  );
};

export default Sidebar;
