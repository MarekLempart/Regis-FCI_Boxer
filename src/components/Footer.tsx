// src/components/Footer.tsx

import { FooterContainer, LogoContainer, Logo, FooterText, FooterTitle } from '../styles/FooterStyles'
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>&copy; 2024 Template Vite - React/TS</FooterText>
            <LogoContainer>
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                    <Logo src={viteLogo} alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <Logo src={reactLogo} className="react" alt="React logo" />
                </a>
            </LogoContainer>
            <FooterTitle>Vite + React</FooterTitle>
        </FooterContainer>
    );
}

export default Footer;