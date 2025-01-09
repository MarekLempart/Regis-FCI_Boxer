// src/data/imageDataOnTrunk.ts

import imgRegis_OnATrunk_01 from "../img/RegisOnATrunk-01.webp";
import imgRegis_OnATrunk_02 from "../img/RegisOnATrunk-02.webp";
import imgRegis_OnATrunk_03 from "../img/RegisOnATrunk-03.webp";
import imgRegis_OnATrunk_04 from "../img/RegisOnATrunk-04.webp";
import imgRegis_OnATrunk_05 from "../img/RegisOnATrunk-05.webp";

interface ImageItemOnATrunk {
  id: string;
  src: string;
}

const imageRegisOnATrunk: ImageItemOnATrunk[] = [
  { id: "OnATrunk_01", src: imgRegis_OnATrunk_01 },
  { id: "OnATrunk_02", src: imgRegis_OnATrunk_02 },
  { id: "OnATrunk_03", src: imgRegis_OnATrunk_03 },
  { id: "OnATrunk_04", src: imgRegis_OnATrunk_04 },
  { id: "OnATrunk_05", src: imgRegis_OnATrunk_05 },
];

export default imageRegisOnATrunk;
