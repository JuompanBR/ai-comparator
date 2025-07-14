import { Header, Footer, CustomDivider, Hero, HowTo } from "../components";
import { Link } from "react-router";
import { MoveRight } from "lucide-react";
import React from "react";
import { useTranslation, Trans } from "react-i18next";

const Home: React.FC = () => {

  const { t } = useTranslation();
  
  return (
    <>
      <div className="w-full min-h-screen flex flex-col container mx-auto overflow-x-hidden fadeIn">
        <Header />
        <main className="items-center justify-center flex-1 px-4 lg:p-6 pb-8 lg:pb-22 text-gray-800 relative">
          <Hero />
          <br />
          <div id="how-to" className="lg:h-2 w-full relative block">

          </div>
          <CustomDivider />
          <HowTo />
          <br className="hidden md:block"/>
          <hr className="block md:hidden text-gray-200 mt-22 mb-12"/>
          <div className="w-full lg:w-[70%] mx-auto flex flex-col justify-center items-center bg-[#fff1e3] py-12 md:mt-24 mb-22 rounded-xl gap-y-5 text-center">
            <span className="text-xl lg:text-[2.21rem] my-5 font-bold text-amber-700 leading-relaxed">
              <Trans 
              i18nKey="jumbotronHeader"
              components={{
                0: <br />
              }}
              />
            </span>
            <Link
              to="/compare"
              className="shadow-xs rounded-md bg-white py-1.5 px-6 text-amber-600 text-base lg:text-lg font-medium flex justify-center items-center gap-x-3"
            >
              {t("jumbotronButton")}
              <MoveRight className="arrow block relative" strokeWidth={1.5} />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;