// src/components/TextCard.tsx // remove it

import React, { useState } from "react";
import {
  PositionTextContainer,
  TextCardContainer,
  StyledText,
} from "../styles/TextCardStyles";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";

interface TextCardProps {
  text: string[];
}

const TextCard: React.FC<TextCardProps> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Deklaracja typu dla `useInView`
  const { ref } = useInView({
    threshold: 0.5, // Procent widoczności komponentu przed aktywacją
    triggerOnce: true, // Uruchamia tylko raz
    onChange: (inView: boolean) => {
      if (inView) {
        setIsVisible(true);
      }
    },
  });

  return (
    <PositionTextContainer>
      <TextCardContainer ref={ref}>
        {isVisible && (
          <StyledText>
            <TypeAnimation
              sequence={[...text.flatMap((t) => [t, 1000])]} // Animowany tekst i pauza
              speed={50} // Prędkość "pisania"
              wrapper="h3" // Nagłówek HTML
              repeat={0} // Animacja tylko raz
              cursor={false}
            />
          </StyledText>
        )}
      </TextCardContainer>
    </PositionTextContainer>
  );
};

export default TextCard;
