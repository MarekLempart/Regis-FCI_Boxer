// src/data/imageDataLogo.ts // remove it
import imgLogoZKwP from "../img/Logo_ZKwP.webp";
import imgLogoZKwPWw from "../img/Logo_ZKwPww.webp";

interface imageDataLogo {
  id: string;
  src: string;
  link: string;
}

const imageDataLogoKynological: imageDataLogo[] = [
  { id: "Logo_01", src: imgLogoZKwP, link: "https://www.zkwp.pl" },
  { id: "Logo_02", src: imgLogoZKwPWw, link: "https://zkwpwroclaw.pl" },
];

export default imageDataLogoKynological;
