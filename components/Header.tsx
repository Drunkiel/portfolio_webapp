import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <NavBar />
      <div className="header flex light-bg">
        <div>
          <button>Junior game developer</button>
          <h1 className="white">
            I create games, write code <br />
            and paint pixel arts.
          </h1>
          <p className="gray">Looking for some inspiration.</p>
        </div>
        <Image
          src="/images/drunkiel.png"
          width={500}
          height={500}
          alt="drunkiel pixel art"
          className="image"
        />
      </div>
    </header>
  );
}
