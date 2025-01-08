// src/data/imageDateRunBridge.ts // remove it

import imgRegis_RunBridge_01 from "../img/RunNoTheBridge-1.webp";
import imgRegis_RunBridge_02 from "../img/RunNoTheBridge-2.webp";
import imgRegis_RunBridge_03 from "../img/RunNoTheBridge-3.webp";
import imgRegis_RunBridge_04 from "../img/RunNoTheBridge-4.webp";
import imgRegis_RunBridge_05 from "../img/RunNoTheBridge-5.webp";
import imgRegis_RunBridge_06 from "../img/RunNoTheBridge-6.webp";
import imgRegis_RunBridge_07 from "../img/RunNoTheBridge-7.webp";
import imgRegis_RunBridge_08 from "../img/RunNoTheBridge-8.webp";

// Definicja typu dla kazdego elementu w tablicy obrazów
interface ImageItemRunBridge {
  id: string;
  src: string;
}

// Tworzenie tablicy obrazów z typu 'ImageItemRunBridge[]'
const imageRegisRunBridge: ImageItemRunBridge[] = [
  { id: "RunBridge_01", src: imgRegis_RunBridge_01 },
  { id: "RunBridge_02", src: imgRegis_RunBridge_02 },
  { id: "RunBridge_03", src: imgRegis_RunBridge_03 },
  { id: "RunBridge_04", src: imgRegis_RunBridge_04 },
  { id: "RunBridge_05", src: imgRegis_RunBridge_05 },
  { id: "RunBridge_06", src: imgRegis_RunBridge_06 },
  { id: "RunBridge_07", src: imgRegis_RunBridge_07 },
  { id: "RunBridge_08", src: imgRegis_RunBridge_08 },
];

export default imageRegisRunBridge;
