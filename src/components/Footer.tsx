// src/components/Footer.tsx
import {
  FooterContainer,
  LogoContainer,
  Logo,
  FooterText,
  ContactSection,
  ContactLine,
  LogoKynological,
  LogoAssociation,
} from "../styles/FooterStyles";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import tsLogo from "../assets/typescript.svg";
import ImageCard from "./ImageCard";
import imageDataLogoKynological from "../data/imageDataLogo";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <FooterContainer>
      {/* Sekcja projektanta */}
      <ContactSection>
        <ContactLine>Web Application Designer & Developer:</ContactLine>
        <ContactLine>Marek Lempart</ContactLine>
        <ContactLine>
          <a href="tel:+48664174400">
            <FiPhoneCall /> +48 664 174 400
          </a>
        </ContactLine>
      </ContactSection>

      {/* Loga technologii */}
      <LogoContainer>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <Logo src={reactLogo} alt="React logo" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src={tsLogo} alt="TypeScript logo" />
        </a>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <Logo src={viteLogo} alt="Vite logo" />
        </a>
      </LogoContainer>

      {/* Sekcja fotografa */}
      <ContactSection>
        <ContactLine>Photographer:</ContactLine>
        <ContactLine>Marta Matczuk-Pisarek</ContactLine>
        <ContactLine>
          <a href="tel:+48603758565">
            <FiPhoneCall /> +48 603 758 565
          </a>
        </ContactLine>
      </ContactSection>

      {/* Logo fotografa */}
      {/* <PhotographerLogo>
                <img src="placeholder-for-logo.png" alt="Photographer logo" />
            </PhotographerLogo> */}

      {/* Loga związków kynologicznych */}
      <LogoKynological>
        {imageDataLogoKynological.map((image, index) => (
          <LogoAssociation key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <ImageCard image={image} />
            </a>
          </LogoAssociation>
        ))}
      </LogoKynological>

      {/* Informacje na dole */}
      <FooterText>&copy; 2024 Template Vite - React/TS</FooterText>
    </FooterContainer>
  );
};

export default Footer;
