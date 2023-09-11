import { IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { CONTACT_ROUTE } from "../../utils/consts";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer className="footer" style={{ backgroundColor: "#474B59", color: "#8a8f99", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
        <IconButton href="tel:+77771117276" style={{ color: "#8a8f99" }}>
          <PhoneIcon />
        </IconButton>
        <IconButton href="mailto:miritandetrov@mail.ru" style={{ color: "#8a8f99" }}>
          <EmailIcon />
        </IconButton>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Link to={CONTACT_ROUTE} style={{ color: "#8a8f99", textDecoration: "none", marginRight: "20px" }}>
          {t("contact_us")}
        </Link>
        <span style={{ marginRight: "20px" }}>|</span>
        <span>&copy; 2023 IT English</span>
      </div>
    </footer>
  );
};

export default Footer;
