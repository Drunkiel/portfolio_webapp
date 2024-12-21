import Link from "next/link";
import socialData from "./socialData";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[160px] xl:pb-[160px] 2xl:pt-[270px] 2xl:pb-[275px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[1000px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Welcome!
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Hi! My name is Jakub (Jacob), I’m {new Date().getFullYear() - 2004} years old, and I’m passionate about creating video games. I graduated from a technical school with a focus on programming, and now I work on developing games that I would love to play myself. My work is not only my passion, but also a way for me to continuously improve my skills in game development and programming.
                  <br></br>
                  <br></br>
                  In my free time, I enjoy playing various video games, which help me unwind and also provide inspiration for my own projects. I’m always looking for ways to make my games as engaging as possible and to give players the same fun I get when playing.
                  <br></br>
                  <br></br>
                  If you're interested in the world of games and technology, feel free to check out my projects!
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  {socialData.map((social) => (
                    <Link
                      key={social.id}
                      href={social.link}
                      className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                    >
                      {social.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
