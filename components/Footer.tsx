import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="light-bg flex justify-space">
      <span className="white">
        Copyright © {year} <Link href="/">Drunkiel</Link> - All rights reserved.
      </span>
      <ul className="flex">
        <li>
          <a
            href="https://www.instagram.com/dru3kiel"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/instagram.svg"
              width={24}
              height={24}
              alt="instagram-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://pl.linkedin.com/in/jakub-szenk-8a5188241"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/linkedin.svg"
              width={24}
              height={24}
              alt="linkedin-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/drunkiel"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/github.svg"
              width={24}
              height={24}
              alt="github-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCK2vmsRmZu7SBOujaZEUCsQ"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/youtube.svg"
              width={24}
              height={24}
              alt="youtube-icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
