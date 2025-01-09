// src/pages/Achievements.tsx

import React from "react";
import achievementsImageData from "../data/achievementsImageData";
import achievementsTextData from "../data/achievementsTextData";
import PersonCard from "../components/PersonCard";
import { ContactContainer } from "../styles/ContactStyles";

const Achievements: React.FC = () => {
  return (
    <ContactContainer>
      {achievementsTextData.map((achievements, index) => {
        const image = achievementsImageData.find(
          (img) => img.id === achievements.id
        );
        if (!image) return null;
        return (
          <PersonCard
            key={achievements.id}
            image={image}
            text={achievements}
            $reverse={index % 2 !== 0} // Odwracamy kolejność co drugi wiersz
          />
        );
      })}
    </ContactContainer>
  );
};

export default Achievements;
