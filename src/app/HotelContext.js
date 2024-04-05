"use client";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Création du contexte
const HotelContext = createContext();

// Création du fournisseur de contexte
export const HotelProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/meshotels");
        setHotels(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des hôtels :", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <HotelContext.Provider value={{ hotels }}>{children}</HotelContext.Provider>
  );
};

export default HotelContext;
