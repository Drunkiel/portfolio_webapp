import SectionTitle from "../Common/SectionTitle";
import SingleGame from "./SingleGame";
import gameData from "./gamesData";

const reversedData = [...gameData].reverse();

const Games = () => {
  return (
    <section id="games" className="bg-primary/5 py-5 md:py-8 lg:py-10">
      <div className="container">
        <SectionTitle title="Newest projects" center />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {reversedData.slice(0, 3).map((game) => (
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
