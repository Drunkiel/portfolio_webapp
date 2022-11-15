import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <NavBar />
      <div className="header flex light-bg">
        <div>
          <button>Game developer</button>
          <h1 className="white">Talk is cheap.</h1>
          <h1 className="white">I create games, write code and paint pixel arts.</h1>
          <p className="gray">
            I create games, write code and paint pixel arts.
          </p>
          {/* <a className="green" href="mailto:contact@blaiti.com">
            Let&#39;s chat!
          </a> */}
        </div>
        <Image src="/images/drunkiel.png" width={500} height={500} alt="drunkiel pixel art" className="pixel-art-image"/>
      </div>
    </header>
  );
}
