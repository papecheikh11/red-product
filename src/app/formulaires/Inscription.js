"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";

const InscriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: #555555;
`;

const Entete = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;

const EnteteIcon = styled.p`
  color: white;
  padding-top: 3px;
`;

const EnteteTitre = styled.p`
  margin-top: 15px;
  color: white;
  font-size: 20px;
  font-weight: 800;
`;

const Bas = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const BasText = styled.p`
  display: flex;
  gap: 20px;
  color: white;
`;

const BasLien = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 20px;
  color: #ffd964;
  text-decoration: none;
`;

const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 95%;
  margin: auto;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #55595c;
  background: transparent;
  outline: none;
`;

const InputCheckbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 6px;
  margin-bottom: 20px;
`;

const CheckText = styled.p`
  font-size: 13px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #555555;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const FormulaireInsc = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://red-product-api-36d7.onrender.com/api/auth/signup",
        formData
      );

      console.log(response.data);
      router.push("/connexion");
    } catch (error) {
      alert("echec lors de l'inscription");
      console.error(
        "Erreur lors de l'inscription :",
        error.response.data.error
      );
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <InscriptionContainer>
      <Entete>
        <EnteteIcon>
          <FaBookmark />
        </EnteteIcon>
        <EnteteTitre>RED PRODUCT</EnteteTitre>
      </Entete>
      <FormContainer>
        <Title>Inscrivez-vous en tant que Admin</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <CheckText>
            <InputCheckbox
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBoxChange}
            />
            Gardez-moi connecté
          </CheckText>
          <Button type="submit">S'inscrire</Button>
        </Form>
      </FormContainer>
      <Bas>
        <BasText>Vous avez déjà un compte ?</BasText>
        <Link href="/connexion">
          <BasLien>se connecter</BasLien>
        </Link>
      </Bas>
    </InscriptionContainer>
  );
};

export default FormulaireInsc;
