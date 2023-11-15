import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[var(--green)] mb-5">Hi, my name is</p>
        <h1 className="text-[var(--lightest-slate)] text-4xl sm:text-7xl font-bold">
          Shayan Abedi.
        </h1>
        <h2 className="text-[var(--slate)] text-4xl sm:text-7xl font-bold mt-4">
          I build things for the web.
        </h2>
        <p className="text-[var(--slate)] mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          perferendis, aliquid a odit, ut libero maxime sunt id neque quis
          dolorum animi? Nemo obcaecati distinctio sunt, tempore magnam illo
          similique.
        </p>
        <div>
          <button className="group flex items-center mt-10 hover:bg-red">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
