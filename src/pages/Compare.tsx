import { Header, Footer, CompareSection } from "../components";
import { useTranslation } from "react-i18next";

const Compare: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen flex flex-col container mx-auto overflow-x-hidden fadeIn">
      <Header />
      <main className="w-full flex-1">
        <br />
        <h1 className="text-2xl lg:text-3xl font-bold text-center mt-8">
          {t("comparisonFormTitle")}
        </h1>
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
