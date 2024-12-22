import { Game } from "@/types/game";
import getConfig from "next/config";
import { config } from "process";

const path: String = "/portfolio_webapp";

const gamesData: Game[] = [
  {
    id: 0,
    title: "Project N",
    price: "Free",
    paragraph:
      "This game will be based mainly on telling a story about a world threatened by a wizard corrupted by dark magic",
    link: "/",
    image: path + "/images/games/Crystalside_Icon.png",
    publishDate: "Unknown",
  },
  {
    id: 1,
    title: "Panda's sushi restaurant",
    price: "Free",
    paragraph:
      "Restaurant is a game in which you can fulfill your dream of running a sushi restaurant.",
    link: "https://drunkiel.itch.io/restaurant",
    image: path + "/images/games/Restaurant.png",
    publishDate: "Unknown",
  },
  {
    id: 2,
    title: "Microwave Tournament",
    price: "Free",
    paragraph: "A 'little' bugged game about the competition of microwaves.",
    link: "https://drunkiel.itch.io/microwave-tournament",
    image: path + "/images/games/MicrowaveTournament_Icon.png",
    publishDate: "Aug 25, 2022",
  },
  {
    id: 3,
    title: "Crystalside",
    price: "Free",
    paragraph:
      "Game about exploring planets and collecting rocks.",
    link: "/",
    image: path + "/images/games/Crystalside_Icon.png",
    publishDate: "Cancelled",
  },
  {
    id: 4,
    title: "Snake game",
    price: "Free",
    paragraph: "Open sourced game, requires rust-lang installed to play.",
    link: "https://github.com/Drunkiel/Snake-game-rust",
    image: path + "/images/games/Crystalside_Icon.png",
    publishDate: "May 15, 2023",
  },
];
export default gamesData;
