import React from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
const HowTo: React.FC = () => {

  const { t } = useTranslation();
  return (
    <>
      <h1
        className="text-center font-bold text-2xl lg:text-[1.85rem] -mt-5 pb-10"
      >
        {t("howToUse")}
      </h1>
      <Box className="container mx-auto px-4 relative w-full lg:w-[74.9%] mt-5 lg:mt-11">
        <Box className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Box className="p-4 rounded flex flex-col gap-y-4">
            <Box className="font-bold text-amber-600 text-lg">{t("step1")}</Box>
            <Box className="font-normal text-base lg:text-lg">
              {t("step1Text")}
            </Box>
          </Box>
          <Box className="p-4 rounded flex flex-col gap-y-4">
            <Box className="font-bold text-amber-600 text-lg">{t("step2")}</Box>
            <Box className="font-normal text-base lg:text-lg">
              {t("step2Text")}
            </Box>
          </Box>
          <Box className="p-4 rounded flex flex-col gap-y-4">
            <Box className="font-bold text-amber-600 text-lg">{t("step3")}</Box>
            <Box className="font-normal text-base lg:text-lg">
              {t("step3Text")}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HowTo;