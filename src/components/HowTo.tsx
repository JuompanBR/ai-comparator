import React from "react";
import { useTranslation } from "react-i18next";

const HowTo: React.FC = () => {

  const { t } = useTranslation();
  return (
    <>
      <h1
        className="text-center font-bold text-2xl lg:text-[1.85rem] text-slate-800 -mt-5 pb-10"
      >
        {t("howToUse")}
      </h1>
      <div className="container mx-auto px-4 relative w-full lg:w-[74.9%] mt-5 lg:mt-11">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="text-slate-700 p-4 rounded flex flex-col gap-y-4">
            <span className="font-bold text-amber-600 text-lg">{t("step1")}</span>
            <span className="font-normal text-base lg:text-lg">
              {t("step1Text")}
            </span>
          </div>
          <div className="text-slate-700 p-4 rounded flex flex-col gap-y-4">
            <span className="font-bold text-amber-600 text-lg">{t("step2")}</span>
            <span className="font-normal text-base lg:text-lg">
              {t("step2Text")}
            </span>
          </div>
          <div className="text-slate-700 p-4 rounded flex flex-col gap-y-4">
            <span className="font-bold text-amber-600 text-lg">{t("step3")}</span>
            <span className="font-normal text-base lg:text-lg">
              {t("step3Text")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowTo;