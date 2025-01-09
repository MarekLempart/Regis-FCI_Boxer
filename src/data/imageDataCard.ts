// src/data/imageDataCard.ts

import imgRegis_Card_01 from "../img/RunNoTheBridge-1.webp";
import imgRegis_Card_02 from "../img/Card-RegisOnTheBridge.webp";
import imgRegis_Card_03 from "../img/Card-RegisOnATrunk.webp";
import imgRegis_Card_04 from "../img/RunNoTheBridge-4.webp";
import imgRegis_Card_05 from "../img/RunNoTheBridge-5.webp";
import imgRegis_Card_06 from "../img/RunNoTheBridge-6.webp";
import imgRegis_Card_07 from "../img/RunNoTheBridge-7.webp";
import imgRegis_Card_08 from "../img/RunNoTheBridge-8.webp";
interface imageDataCard {
  id: string;
  src: string;
}

const imageRegisCard: imageDataCard[] = [
  { id: "Card_01", src: imgRegis_Card_01 },
  { id: "Card_02", src: imgRegis_Card_02 },
  { id: "Card_03", src: imgRegis_Card_03 },
  { id: "Card_04", src: imgRegis_Card_04 },
  { id: "Card_05", src: imgRegis_Card_05 },
  { id: "Card_06", src: imgRegis_Card_06 },
  { id: "Card_07", src: imgRegis_Card_07 },
  { id: "Card_08", src: imgRegis_Card_08 },
];

export default imageRegisCard;