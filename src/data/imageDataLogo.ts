// src/data/imageDataLogo.ts

import imgLogoFCI from "../img/logo_FCI.png";
import imgLogoZKwP from "../img/Logo_ZKwP.webp";
import imgLogoZKwPWw from "../img/Logo_ZKwPww.webp";

interface imageDataLogo {
    id: string;
    src: string;
}

const imageDataLogoKynological: imageDataLogo[] = [
    { id: "Logo_01", src: imgLogoFCI},
    { id: "Logo_02", src: imgLogoZKwP},
    { id: "Logo_03", src: imgLogoZKwPWw},
];

export default imageDataLogoKynological;