import { Game } from "@/types/game";

const gamesData: Game[] = [
  {
    id: 1,
    title: "Microwave Tournament",
    price: "Free",
    paragraph: "A 'little' bugged game about the competition of microwaves.",
    link: "https://drunkiel.itch.io/microwave-tournament",
    image: "/images/games/MicrowaveTournament_Icon.png",
    publishDate: "Aug 25, 2022",
  },
  {
    id: 2,
    title: "Crystalside",
    price: "Free",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    link: "/",
    image: "/images/games/Crystalside_Icon.png",
    publishDate: "Not published yet",
  },
  {
    id: 3,
    title: "Snake game",
    price: "Free",
    paragraph: "Open sourced game, requires rust-lang installed to play.",
    link: "/",
    image: "/images/games/Crystalside_Icon.png",
    publishDate: "May 15, 2023",
  },
];
export default gamesData;
