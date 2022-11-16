import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
  return (
    <section id="about" className="dark-bg">
      <div className="flex">
        <div className="flex-full">
          <AboutCard
            title="Pixel art artist"
            icon="/icons/paint.svg"
            description="I like to draw pixel arts for my games and not only."
          />
          <AboutCard
            title="Game developer"
            icon="/icons/code.svg"
            description="For now I developed 1 published and around 4 never finished games."
          />
          <AboutCard
            title="Web applications"
            icon="/icons/web.svg"
            description="Created web applications for my own purposes."
          />
        </div>

        <div className="flex-full about-text">
          <h5 className="gray">Introduce</h5>
          <h1 className="white">Hello, I'm Jacob/Jakub Szenk</h1>
          <p className="gray">
            I'm 18 years old and high school student, living in Poland.
            <br />
            <br />
            Coś do dodania
          </p>
        </div>
      </div>

      <div className="flex games-list justify-space">
        <GameCard
          title="Microwave Tournament"
          icon="/icons/web.svg"
          description="Created web applications for my own purposes."
          link="#"
        />
        <GameCard
          title="Ala"
          icon="/icons/web.svg"
          description="Created web applications for my own purposes."
          link="#"
        />
        <GameCard
          title="Ala"
          icon="/icons/web.svg"
          description="Created web applications for my own purposes."
          link="#"
        />
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
        <Image src={icon} width={300} height={200} alt={title} />
      </div>
      <p className="white">{description}</p>
      <button>
        <a href={link}>Download</a>
      </button>
    </div>
  );
}
