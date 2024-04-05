"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaBookmark } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ConnexionContainer = styled.div`
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
  padding-top: 8px;
`;

const EnteteTitre = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 800;
`;

const Lien = styled.a`
  margin-top: 30px;
  color: #ffd964;
  text-decoration: none;
`;

const Bas = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const BasText = styled.p`
  margin-top: 0px;
  display: flex;
  gap: 20px;
  color: white;
`;

const BasLien = styled.div`
  // margin-top: 15px;
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

const FormulaireLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, []);

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
        "https://red-product-api-36d7.onrender.com/api/auth/login",
        formData
      );
      localStorage.setItem("token", response.data.token);
      router.push("/dashboard");
    } catch (error) {
      alert("Mail ou mot de passe incorrect");
      console.error("Erreur lors de la connexion :", error.response.data.error);
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ConnexionContainer>
      <Entete>
        <EnteteIcon>
          <FaBookmark />
        </EnteteIcon>
        <EnteteTitre>RED PRODUCT</EnteteTitre>
      </Entete>
      <FormContainer>
        <Title>Connectez-vous en tant que Admin</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              id="password"
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
          <Button type="submit">Se connecter</Button>
        </Form>
      </FormContainer>
      <Link href="/password">
        <Lien>Mot de passe oublié ?</Lien>
      </Link>
      <Bas>
        <BasText>Vous n'avez pas de compte ?</BasText>
        <Link href="/inscription">
          <BasLien>s'inscrire</BasLien>
        </Link>
      </Bas>
    </ConnexionContainer>
  );
};

export default FormulaireLogin;
