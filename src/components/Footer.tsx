// src/components/Footer.tsx

import { FooterContainer, LogoContainer, Logo, FooterText, FooterTitle, LogoKynological, LogoAssociation } from '../styles/FooterStyles'
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import ImageCard from './ImageCard';
import imageDataLogoKynological from '../data/imageDataLogo';

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
            <LogoKynological>
                <LogoAssociation>
                    <a href="https://www.zkwp.pl" target="_blank" rel="noopener noreferrer">
                        <ImageCard image={imageDataLogoKynological[1]} />
                    </a>
                </LogoAssociation>
                {/* <LogoAssociation>
                    <a href="https://www.fci.be/en/" target="_blank" rel="noopener noreferrer">
                        <ImageCard image={imageDataLogoKynological[0]} />
                    </a>
                </LogoAssociation> */}
                <LogoAssociation>
                    <a href="https://zkwpwroclaw.pl" target="_blank" rel="noopener noreferrer">
                        <ImageCard image={imageDataLogoKynological[2]} />
                    </a>
                </LogoAssociation>
            </LogoKynological>            
        </FooterContainer>
    );
}

export default Footer;