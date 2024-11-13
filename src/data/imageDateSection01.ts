// src/data/imageDateSection01.ts

import imgRegis_Position_01 from "../img/Position-1.webp";
import imgRegis_Position_02 from "../img/Position-2.webp";
import imgRegis_Position_03 from "../img/Position-3.webp";
import imgRegis_Position_04 from "../img/Position-4.webp";
import imgRegis_Position_05 from "../img/Position-5.webp";
import imgRegis_Position_06 from "../img/Position-6.webp";
import imgRegis_Position_07 from "../img/Position-7.webp";
import imgRegis_Position_08 from "../img/Position-8.webp";
import imgRegis_Position_09 from "../img/Position-9.webp";
import imgRegis_Position_10 from "../img/Position-10.webp";
import imgRegis_Position_11 from "../img/Position-11.webp";
import imgRegis_Position_12 from "../img/Position-12.webp";
import imgRegis_Position_13 from "../img/Position-13.webp";
import imgRegis_Position_14 from "../img/Position-14.webp";

// Definicja typu dla kazdego elementu w tablicy obrazów
interface ImageItemPosition {
    id: string;
    src: string;
}

// Tworzenie tablicy obrazów z typu 'ImageItemPosition[]'
const imageRegisPosition: ImageItemPosition[] = [
    { id: "Position_01", src: imgRegis_Position_01},
    { id: "Position_02", src: imgRegis_Position_02},
    { id: "Position_03", src: imgRegis_Position_03},
    { id: "Position_04", src: imgRegis_Position_04},
    { id: "Position_05", src: imgRegis_Position_05},
    { id: "Position_06", src: imgRegis_Position_06},
    { id: "Position_07", src: imgRegis_Position_07},
    { id: "Position_08", src: imgRegis_Position_08},
    { id: "Position_09", src: imgRegis_Position_09},
    { id: "Position_10", src: imgRegis_Position_10},
    { id: "Position_11", src: imgRegis_Position_11},
    { id: "Position_12", src: imgRegis_Position_12},
    { id: "Position_13", src: imgRegis_Position_13},
    { id: "Position_14", src: imgRegis_Position_14},   
];

export default imageRegisPosition;