import { Header, Footer, CompareSection } from "../components";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const Compare: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen flex flex-col container mx-auto overflow-x-hidden fadeIn">
      <Header />
      <main className="w-full flex-1">
        <br />
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mt-8">
            {t("comparisonFormTitle")}

          </h1>
          <span className="text-center text-sm lg:text-base opacity-80">
            <Trans
              i18nKey="comparisonFormHelperText"
              components={{
                br: <br />
              }} />
          </span>
        </div>
        <br className="hidden lg:block" />
        <div className="w-full relative block flex-1">
          <CompareSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Compare;
