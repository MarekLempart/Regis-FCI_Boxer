// src/data/imageDataLogo.ts

// import imgLogoFCI from "../img/Logo_FCI.webp";
import imgLogoZKwP from "../img/Logo_ZKwP.webp";
import imgLogoZKwPWw from "../img/Logo_ZKwPww.webp";

interface imageDataLogo {
    id: string;
    src: string;
    link: string;
}

const imageDataLogoKynological: imageDataLogo[] = [
    // { id: "Logo_01", src: imgLogoFCI},
    // { id: "Logo_02", src: imgLogoZKwP},
    // { id: "Logo_03", src: imgLogoZKwPWw},

    // { id: "Logo_01", src: imgLogoFCI, link: "https://www.fci.be/en/" },
    { id: "Logo_02", src: imgLogoZKwP, link: "https://www.zkwp.pl" },
    { id: "Logo_03", src: imgLogoZKwPWw, link: "https://zkwpwroclaw.pl" },
];

export default imageDataLogoKynological;