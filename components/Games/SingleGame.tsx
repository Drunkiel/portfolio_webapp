import { Game } from "@/types/game";
import Image from "next/image";
import Link from "next/link";

const SingleGame = ({ game }: { game: Game }) => {
  const { title, price, image, paragraph, link, publishDate } = game;
  return (
    <div
      className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
      data-wow-delay=".1s"
    >
      <Link href={link} className="relative block h-[420px] w-full">
        <Image src={image} alt="image" fill />
      </Link>
      <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
        <h3>
          <Link
            href={link}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {paragraph}
        </p>
        <div className="flex items-center">
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
              Publish date:
            </h4>
            <p className="text-xs text-body-color">{publishDate}</p>
          </div>
          <div className="ml-10 inline-block">
            <h4 className=" mb-1 text-sm font-medium text-dark dark:text-white">
              Price:
            </h4>
            <p className="text-xs text-body-color">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGame;
