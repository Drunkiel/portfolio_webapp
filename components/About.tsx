import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
  return (
    <section id="about" className="dark-bg">
      <div className="flex">
        <div className="flex-full">
          <AboutCard
            title="Pixel art creator"
            icon="/icons/design.svg"
            description="I like to draw pixel arts for my games and not only."
          />
          <AboutCard
            title="Game developer"
            icon="/icons/code.svg"
            description="For now I developed 1 realesed game and around 4 never finished games."
          />
          <AboutCard
            title="Web aplications"
            icon="/icons/phone.svg"
            description="Created web aplications for my own purposes."
          />
        </div>

        <div className="flex-full about-text">
          <h5 className="gray">Introduce</h5>
          <h1 className="white">Hello, I'm Jakub/Jacob Szenk</h1>
          <p className="gray">
            I'm 18 years old and high school student, living in Poland.
            <br />
            <br />
            Coś do dodania
          </p>
        </div>
      </div>

      <div className="flex partners justify-space">
        {/* <Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty" />
                <Image src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy" /> */}
        {/* Tutaj mają być tweety coś z api */}
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
        <h3 className="green">{title}</h3>
        <Image src={icon} width={28} height={28} alt={title} />
      </div>
      <p className="white">{description}</p>
    </div>
  );
}
