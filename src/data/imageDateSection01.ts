// src/data/imageDateSection01.ts
import imgRegis_Position_01 from "../img/RegisInTheLeaves-01.webp";
import imgRegis_Position_02 from "../img/RegisInTheLeaves-02.webp";
import imgRegis_Position_03 from "../img/RegisInTheLeaves-03.webp";
import imgRegis_Position_04 from "../img/RegisInTheLeaves-04.webp";
import imgRegis_Position_05 from "../img/RegisInTheLeaves-05.webp";
import imgRegis_Position_06 from "../img/RegisInTheLeaves-06.webp";
import imgRegis_Position_07 from "../img/RegisInTheLeaves-07.webp";

interface ImageItemPosition {
  id: string;
  src: string;
}

const imageRegisPosition: ImageItemPosition[] = [
  { id: "Position_01", src: imgRegis_Position_01 },
  { id: "Position_02", src: imgRegis_Position_02 },
  { id: "Position_03", src: imgRegis_Position_03 },
  { id: "Position_04", src: imgRegis_Position_04 },
  { id: "Position_05", src: imgRegis_Position_05 },
  { id: "Position_06", src: imgRegis_Position_06 },
  { id: "Position_07", src: imgRegis_Position_07 },
];

export default imageRegisPosition;
