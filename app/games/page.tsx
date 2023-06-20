"use client";
import SingleGame from "@/components/Games/SingleGame";
import gameData from "@/components/Games/gamesData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";

const Games = () => {
  const numberOfPages: number = Math.ceil(gameData.length / 3);
  const [currentPage, setCurrentPage] = React.useState(1);

  function prevPage() {
    if (currentPage - 1 <= 0) setCurrentPage(numberOfPages);
    else setCurrentPage(currentPage - 1);
  }

  function nextPage() {
    if (currentPage + 1 > numberOfPages) setCurrentPage(1);
    else setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <Breadcrumb pageName="My projects" description="Alamakota" />

      <section className="bg-primary/5 pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {gameData
              .slice((currentPage - 1) * 3, currentPage * 3)
              .map((game) => (
                <div
                  key={game.id}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                  <SingleGame game={game} />
                </div>
              ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <button
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    onClick={prevPage}
                  >
                    Prev
                  </button>
                </li>
                <li className="mx-1">
                  <p className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition">
                    {currentPage}
                  </p>
                </li>
                <li className="mx-1">
                  <button
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    onClick={nextPage}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Games;
