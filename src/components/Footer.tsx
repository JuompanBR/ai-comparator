import { t } from "i18next";
import { Trans } from "react-i18next";
import { Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto px-4 text-center py-9">
      <Typography variant="body2" className="text-sm">
        {t("footerText")}{" "}<Link
        color="error"
      href="https://www.linkedin.com/in/juompan-bill"
      target="_blank"
      className="text-red-500 underline"
      rel="noreferrer"
    >
      Bill Juompan
    </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
