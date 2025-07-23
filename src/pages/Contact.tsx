// src/pages/Contact.tsx
import React from "react";
import personImageData from "../data/personImageData";
import personTextData from "../data/personTextData";
import PersonCard from "../components/PersonCard";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import {
  ContactContainer,
  ContactContainerForm,
} from "../styles/ContactStyles";

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      {personTextData.map((person, index) => {
        const image = personImageData.find((img) => img.id === person.id);
        if (!image) return null;
        return (
          <PersonCard
            key={person.id}
            image={image}
            text={person}
            $reverse={index % 2 !== 0} // Odwracamy kolejność co drugi wiersz
          />
        );
      })}
      <ContactContainerForm>
        <ContactDetails />
        <ContactForm />
      </ContactContainerForm>
    </ContactContainer>
  );
};

export default Contact;
