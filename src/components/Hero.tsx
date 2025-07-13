import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import { RulerDimensionLine } from "lucide-react";
import { ROUTES } from '../routes';

const Hero: React.FC = () => {

  const app_name = import.meta.env.VITE_APPLICATION_NAME;
  const navigate = useNavigate();

  return (
    <>
      <section
        id="landing-text"
        className="w-full flex justify-center items-center flex-col space-y-9 h-[63vh] relative text-center"
      >
        <span className="lg:text-[3.4rem] text-4xl font-bold text-yellow-600 flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-5  justify-center items-center">
          <RulerDimensionLine
            strokeWidth={1.5}
            size={75}
            className="text-yellow-600"
          />{" "}
          <span>{app_name}</span>
        </span>
        <p className="text-slate-600 text-lg lg:text-2xl font-normal leading-normal">
          The{" "}
          <span className="underline text-yellow-600 font-bold">Best tool</span>{" "}
          to find your best fit for all conversational <br /> SaaS AI products.
        </p>
        <br />
        <div className="w-full justify-center items-center flex">
          <Button onClick={() => navigate(ROUTES.compare)} variant="contained" className="!bg-[#e38716] hover:!bg-[#e38716]/80 lg:!text-lg !me-9 lg:!me-11">
            Compare now
          </Button>
          
          <a href="#how-to" className="rounded-sm py-1.5 px-3 lg:px-6 text-amber-700 text-base lg:text-lg font-bold bg-[#e38716]/20 hover:bg-[#e38716]/25 transition-all shadow-xs">
            How does it work ?
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
