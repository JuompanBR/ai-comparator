import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import { RulerDimensionLine } from "lucide-react";
import { ROUTES } from '../routes';
import { useTranslation, Trans } from "react-i18next";

const Hero: React.FC = () => {

  const app_name = import.meta.env.VITE_APPLICATION_NAME;
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          />{" "}
          <span>{t("appName")}</span>
        </span>
        <p className="text-lg lg:text-2xl font-normal leading-normal">
          <Trans
            i18nKey="headline"
            components={{
              "span": <span className='underline text-yellow-600 font-bold' />,
              "br": <br />
            }}
          />
        </p>
        <br />
        <div className="w-full justify-center items-center flex">
          <Button onClick={() => navigate(ROUTES.compare)} variant="contained" className="!bg-[#e38716] hover:!bg-[#e38716]/80 !text-base lg:!text-lg !me-7 lg:!me-11">
            {t("compareNowButton")}
          </Button>
          
          <a href="#how-to" className="rounded-sm py-1.5 px-3 lg:px-6 text-amber-700 text-base lg:text-lg font-bold bg-[#e38716]/20 hover:bg-[#e38716]/25 transition-all shadow-xs">
            {t("howDoesItWork")}
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
