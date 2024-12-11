// src/data/personImageData.ts

import person1 from "../img/Person01_Regis.webp";
import person2 from "../img/Person02_Marta.webp";
import person3 from "../img/Person03_Marek.webp";

// Definicja typu dla kazdego elementu w tablicy obrazów
interface ImageItemPerson {
    id: string;
    src: string;
}

const personImageData: ImageItemPerson [] = [
  { id: "person1", src: person1 },
  { id: "person2", src: person2 },
  { id: "person3", src: person3 },
];

export default personImageData;
