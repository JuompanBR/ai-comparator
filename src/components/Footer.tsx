import { t } from "i18next";
import { Trans } from "react-i18next";

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto px-4 text-center mt-12 py-9">
      <p className="text-sm">
        {t("footerText")}{" "}<a
      href="https://www.linkedin.com/in/juompan-bill"
      target="_blank"
      className="text-red-600 underline"
      rel="noreferrer"
    >
      Bill Juompan
    </a>
      </p>
    </footer>
  );
};

export default Footer;
