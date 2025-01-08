// src/data/achievementsImageData.ts // remove it

import achievements1 from "../img/Achievements_Pedigree.webp";
import achievements2 from "../img/Achievements_PsychologicalTests.webp";
import achievements3 from "../img/Achievements_BreedingReview.webp";
import achievements4 from "../img/Achievements_PolishChampion.webp";

// Definicja typu dla kazdego elementu w tablicy obrazów
interface ImageItemAchievements {
  id: string;
  src: string;
}

const AchievementsImageData: ImageItemAchievements[] = [
  { id: "achievements1", src: achievements1 },
  { id: "achievements2", src: achievements2 },
  { id: "achievements3", src: achievements3 },
  { id: "achievements4", src: achievements4 },
];

export default AchievementsImageData;
