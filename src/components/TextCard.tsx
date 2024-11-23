// src/components/TextCard.tsx

// import React from "react";
// import { TextCardContainer, StyledText } from "../styles/TextCardStyles";
// import { TypeAnimation } from "react-type-animation";

// interface TextCardProps {
//   text: string[];
// }

// const TextCard: React.FC<TextCardProps> = ({ text }) => {
//   return (
//     <TextCardContainer>
//       <StyledText>
//         <TypeAnimation
//           sequence={[...text.flatMap((t) => [t, 1000])]} // Animacja tekstów z przerwą
//           speed={50} // Prędkość pisania
//           wrapper="h3" // Nagłówek HTML
//           repeat={Infinity} // Powtarzanie animacji
//         />
//       </StyledText>
//     </TextCardContainer>
//   );
// };

// export default TextCard;

import React, { useState } from "react";
import { TextCardContainer, StyledText } from "../styles/TextCardStyles";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";

interface TextCardProps {
  text: string[];
}

const TextCard: React.FC<TextCardProps> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Deklaracja typu dla `useInView`
  const { ref, inView } = useInView({
    threshold: 0.5, // Procent widoczności komponentu przed aktywacją
    triggerOnce: true, // Uruchamia tylko raz
    onChange: (inView: boolean) => {
      if (inView) {
        setIsVisible(true);
      }
    },
  });

  return (
    <TextCardContainer ref={ref}>
      {isVisible && (
        <StyledText>
          <TypeAnimation
            sequence={[...text.flatMap((t) => [t, 1000])]} // Animowany tekst i pauza
            speed={50} // Prędkość "pisania"
            wrapper="h3" // Nagłówek HTML
            repeat={0} // Animacja tylko raz
          />
        </StyledText>
      )}
    </TextCardContainer>
  );
};

export default TextCard;
