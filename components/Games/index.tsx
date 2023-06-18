import SectionTitle from "../Common/SectionTitle";
import SingleGame from "./SingleGame";
import gameData from "./gamesData";

const Games = () => {
  return (
    <section id="blog" className="bg-primary/5 py-5 md:py-8 lg:py-10">
      <div className="container">
        <SectionTitle title="My projects" center />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {gameData.map((game) => (
            <div key={game.id} className="w-full">
              <SingleGame game={game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
