import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
  return (
    <section id="about" className="dark-bg">
      <div className="flex">
        <div className="flex-full">
          <AboutCard
            title="Game developer"
            icon="/icons/code.svg"
            description="For now I developed and published one game called MicrowaveTournament."
          />
          <AboutCard
            title="Web applications"
            icon="/icons/web.svg"
            description="Created web applications for my own purposes."
          />
          <AboutCard
            title="Pixel art artist"
            icon="/icons/paint.svg"
            description="I like to draw pixel arts for my games and not only."
          />
        </div>

        <div className="flex-full about-text">
          <h5 className="gray">Introduce</h5>
          <h1 className="white">Hello, I'm Jakub</h1>
          <p className="gray">
            I'm 18 years old. I attend a high school with a programming profile.
            I am currently living in poland.
            <br />
            <br />
            My interests revolve around computer games, creating games, testing
            them, etc. I have always been interested in this and would like to
            develop myself in this direction.
          </p>
        </div>
      </div>

      <div id="games" className="games-list">
        <h1 className="white center">Games I've made:</h1>
        <div className="flex justify-space">
          <GameCard
            title="Microwave Tournament"
            icon="/games_Icons/MicrowaveTournament.png"
            description="Multiplayer game about microwaves. Inspired by game called Toasterball"
            link="https://drunkiel.itch.io/microwave-tournament"
          />
        </div>
      </div>
    </section>
  );
}

type Props = {
  title: string;
  icon: string | StaticImageData;
  description: string;
};

function AboutCard({ title, icon, description }: Props) {
  return (
    <div className="light-bg about-card">
      <div className="flex justify-space">
        <h3 className="blue">{title}</h3>
        <Image src={icon} width={28} height={28} alt={title} />
      </div>
      <p className="white">{description}</p>
    </div>
  );
}

type GameCards = {
  title: string;
  icon: string | StaticImageData;
  description: string;
  link: string;
};

function GameCard({ title, icon, description, link }: GameCards) {
  return (
    <div className="light-bg about-card games-card">
      <div className="justify-space">
        <h3 className="blue">{title}</h3>
        <Image
          src={icon}
          width={250}
          height={250}
          alt={title}
          className="image"
        />
      </div>
      <p className="white">{description}</p>
      <button>
        <a href={link} target="_blank">
          More
        </a>
      </button>
    </div>
  );
}
