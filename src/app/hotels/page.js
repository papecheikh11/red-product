"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../modal/Modal";
import Sidebar from "../Sidebar";
import NavbarPage from "../Navbar";
import {
  BouttonHotels,
  CardContainer,
  DivHaut,
  MainContainer,
  MesCards,
} from "../ListeDesHotels";
import { TitreRed } from "../Dashboard";
import { useRouter } from "next/navigation";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hotels, setHotels] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/connexion");
    }
    const fetchHotels = async () => {
      try {
        const response = await axios.get(
          "https://red-product-api-36d7.onrender.com/api/meshotels"
        );
        setHotels(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des hôtels :", error);
      }
    };

    fetchHotels();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.StrictMode>
      <Sidebar />
      <NavbarPage title="Liste des hotels" />
      <MainContainer>
        <DivHaut>
          <TitreRed>Hotels</TitreRed>
          <BouttonHotels onClick={toggleModal}>
            + Créer un nouveau hôtel
          </BouttonHotels>
        </DivHaut>
        <MesCards>
          {hotels.map((hotel, index) => (
            <CardContainer
              key={index}
              image={hotel.image}
              title={hotel.nom}
              description={hotel.adresse}
            />
          ))}
        </MesCards>
      </MainContainer>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h2>Modal Title</h2>
          <p>Contenu du modal...</p>
          <button onClick={toggleModal}>Fermer</button>
        </Modal>
      )}
    </React.StrictMode>
  );
};

export default Page;
