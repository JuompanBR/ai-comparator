import { Link } from "react-router";
import { RulerDimensionLine } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <section
        id="landing-text"
        className="w-full flex justify-center items-center flex-col space-y-9 h-[59vh] relative text-center"
      >
        <span className="lg:text-[3.4rem] text-4xl font-bold text-yellow-600 flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-5  justify-center items-center">
          <RulerDimensionLine
            strokeWidth={1.5}
            size={75}
            className="text-yellow-600"
          />{" "}
          <span>AI-Comparator</span>
        </span>
        <p className="text-slate-600 text-lg lg:text-2xl font-normal leading-normal">
          The{" "}
          <span className="underline text-yellow-600 font-bold">Best tool</span>{" "}
          to find your best fit for all conversational <br /> SaaS AI products.
        </p>
        <br />
        <div className="w-full justify-center items-center flex space-x-11">
          <Link
            to="/compare"
            className="rounded-sm bg-[#e38716] py-1.5 px-3 lg:px-6 text-white text-base lg:text-lg font-bold hover:bg-[#e38716]/80 transition-all shadow-sm"
          >
            Compare now
          </Link>
          <a
            href="#how-to"
            className="rounded-sm py-1.5 px-3 lg:px-6 text-amber-700 text-base lg:text-lg font-bold bg-[#e38716]/20 hover:bg-[#e38716]/25 transition-all shadow-xs"
          >
            How does it work ?
          </a>
        </div>
      </section>
    </>
  );
};
