// src/data/imageDataHero.ts

import imgRegis_01_mobile from "../img/RegisInTheLeaves-1_mobile.webp";
import imgRegis_01_tablet from "../img/RegisInTheLeaves-1_tablet.webp";
import imgRegis_01_desktop from "../img/RegisInTheLeaves-1_desktop.webp";
import imgRegis_02_mobile from "../img/RegisPosture-2_mobile.webp";
import imgRegis_02_tablet from "../img/RegisPosture-2_tablet.webp";
import imgRegis_02_desktop from "../img/RegisPosture-2_desktop.webp";

// Definicja typu dla kazdego elementu w tablicy obrazów
interface ImageItem {
    id: string;
    srcMobile: string;
    srcTablet: string;
    srcDesktop: string;
}

// Tworzenie tablicy obrazów z typu 'ImageItem[]'
const imageRegisHero: ImageItem[] = [
    { id: "Regis_01", srcMobile: imgRegis_01_mobile, srcTablet: imgRegis_01_tablet, srcDesktop: imgRegis_01_desktop},
    { id: "Regis_02", srcMobile: imgRegis_02_mobile, srcTablet: imgRegis_02_tablet, srcDesktop: imgRegis_02_desktop},
]

export default imageRegisHero;