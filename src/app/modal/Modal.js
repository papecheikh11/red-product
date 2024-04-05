"use client";

import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputModal = styled.input`
  width: 250px;
  border: 0.5px solid gray;
  height: 30px;
  margin: 0 10px 10px 10px;
  border-radius: 10px;
  padding-left: 10px;
`;

const InputImage = styled.input`
  display: none;
`;

const ContentSave = styled.div`
  display: flex;
  justify-content: right;
`;

const Save = styled.button`
  width: 100px;
  height: 40px;
  background: gray;
  color: white;
  border-radius: 10px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const DivModal = styled.div`
  display: flex;
`;

const DivDuBas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px 10px 5px;
`;

const DivModalBas = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: center;
  border: 1px solid black;
  align-items: center;
  width: 90%;
  border-radius: 10px;
  margin: 0px 5px 10px 5px;
  display: flex;
  align-items: center;
`;

const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`;

const DefaultImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background: url("https://th.bing.com/th/id/OIP.8KLu2_AEKjF4pSQxEzzs3wAAAA?pid=ImgDet&w=182&h=102&c=7");
  background-size: cover;
`;

const ImageInsert = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin: 30px 0 30px 0;
  background-size: cover;
`;

const Modal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    nom: "",
    adresse: "",
    email: "",
    numero: "",
    prix: "",
    devise: "",
    image: null,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "https://red-product-api-36d7.onrender.com/api/meshotels",
        formDataToSend
      );
      console.log(response.data);
      setSelectedImage(null);
      setIsSuccess(true);
      setFormData({
        nom: "",
        adresse: "",
        email: "",
        numero: "",
        prix: "",
        devise: "",
        image: null,
      });
      onClose();
      alert("Hotel ajouté avec succés");
      window.location.reload();
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const inputRef = useRef(null);

  const handleImageChoice = () => {
    inputRef.current.click();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={handleClick}>
        <DivModal>
          <ColDiv>
            <p>Nom de l'hotel</p>
            <InputModal
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Nom de l'hotel"
            />
            <p>Email</p>
            <InputModal
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <p>Prix par nuit</p>
            <InputModal
              name="prix"
              value={formData.prix}
              type="number"
              onChange={handleChange}
              placeholder="Prix"
            />
          </ColDiv>
          <ColDiv>
            <p>Adresse</p>
            <InputModal
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              placeholder="Adresse"
            />
            <p>Numéro de telephone</p>
            <InputModal
              name="numero"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Telephone"
            />
            <p>Devise</p>
            <InputModal
              name="devise"
              value={formData.currency}
              onChange={handleChange}
              placeholder="Devise"
            />
          </ColDiv>
        </DivModal>
        <DivDuBas>
          <DivModalBas>
            <InputImage
              ref={inputRef}
              type="file"
              name="imageHotel"
              id="imageInput"
              onChange={handleImageChange}
              accept="image/*"
            />
            {formData.image ? (
              <ImageInsert
                onClick={handleImageChoice}
                src={URL.createObjectURL(formData.image)}
                alt="Image d'hôtel"
              />
            ) : (
              <DefaultImage onClick={handleImageChoice} />
            )}
          </DivModalBas>
        </DivDuBas>
        <ContentSave>
          <Save onClick={handleSubmit} disabled={isSuccess}>
            Enregistrer
          </Save>
        </ContentSave>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
