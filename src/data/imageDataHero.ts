// src/data/imageDataHero.ts

import imgRegis_01_mobile from "../img/RegisCapture-1_mobile.webp";
import imgRegis_01_tablet from "../img/RegisCapture-1_tablet.webp";
import imgRegis_01_desktop from "../img/RegisCapture-1_desktop.webp";
import imgRegis_02_mobile from "../img/RegisCapture-2_mobile.webp";
import imgRegis_02_tablet from "../img/RegisCapture-2_tablet.webp";
import imgRegis_02_desktop from "../img/RegisCapture-2_desktop01.webp";
import imgRegis_03_mobile from "../img/RegisCapture-3_mobile.webp";
import imgRegis_03_tablet from "../img/RegisCapture-3_tablet.webp";
import imgRegis_03_desktop from "../img/RegisCapture-3_desktop.webp";
interface ImageItem {
  id: string;
  srcMobile: string;
  srcTablet: string;
  srcDesktop: string;
}

const imageRegisHero: ImageItem[] = [
  {
    id: "Regis_01",
    srcMobile: imgRegis_01_mobile,
    srcTablet: imgRegis_01_tablet,
    srcDesktop: imgRegis_01_desktop,
  },
  {
    id: "Regis_02",
    srcMobile: imgRegis_02_mobile,
    srcTablet: imgRegis_02_tablet,
    srcDesktop: imgRegis_02_desktop,
  },
  {
    id: "Regis_03",
    srcMobile: imgRegis_03_mobile,
    srcTablet: imgRegis_03_tablet,
    srcDesktop: imgRegis_03_desktop,
  },
];

export default imageRegisHero;
