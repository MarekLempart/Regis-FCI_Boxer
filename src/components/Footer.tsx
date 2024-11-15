// src/components/Footer.tsx

import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const Footer = () => {
    return (
        <>
            <p>&copy; 2024 Template Vite-TS</p>
            <div>
                <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h4>Vite + React</h4>
        </>
    );
}

export default Footer;