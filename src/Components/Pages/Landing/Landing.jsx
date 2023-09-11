import { useTranslation } from "react-i18next";
import { useSpring, animated } from "react-spring";
import BasicTable from "../../Shared/Table/Simpletable";
import {
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import "./landing.css";
import { db } from "../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { UserAuth } from "../../../Context/AuthContext";
import { useEffect, useState } from "react";

const Landing = () => {
  const { user } = UserAuth();
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const fetchFinishedModules = async () => {
      if (user?.uid) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        setRows(userData?.modules || []); 
      }
    };
    fetchFinishedModules();
  }, [user?.uid]); 

  const { t } = useTranslation();

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: -1 },
    config: { duration: 1500 },
  });

  return (
    <animated.div style={fadeIn} className="Landing__wrapper">
      <animated.section style={fadeIn} className="Landing__about">
        <Typography variant="h4" sx={{ mb: 2, color: "#1976d2" }}>
          {t("about")}
        </Typography>
        <Typography variant="body1">{t("about_us")}</Typography>
      </animated.section>
      <animated.img
        style={fadeIn}
        src="https://firebasestorage.googleapis.com/v0/b/vktkkpi.appspot.com/o/landing%2Fimages_belajar.jpg?alt=media&token=254707ab-53b5-471c-9e33-022e081a03d4"
        alt="Belajar"
        className="Landing__image"
      />
      <animated.section style={fadeIn} className="Landing__about">
        <Typography variant="h4" sx={{ mb: 2, color: "#1976d2" }}>
          {t("features")}
        </Typography>
        <List sx={{ mb: 2 }}>
          <ListItem>
            <ListItemText primary={t("why_1")} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t("why_2")} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t("why_3")} />
          </ListItem>
        </List>
      </animated.section>
      <animated.section style={fadeIn} className="Landing__table">
        <Typography variant="h4" sx={{ mb: 2, color: "#1976d2" }}>
          {t("modules")}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <BasicTable rows={rows} />
      </animated.section>
      <animated.section style={fadeIn} className="Landing__information">
        <Typography variant="h4" sx={{ mb: 2, color: "#1976d2" }}>
          {t("information")}
        </Typography>
        <List sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 5 }}>
          <ListItem sx={{ flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <BookOutlinedIcon fontSize="medium" color="primary" />
              <Typography variant="h6" sx={{ mr: 2 }}>
                {t("header_1")}
              </Typography>
            </div>
            <ListItemText primary={t("feature_1")} />
          </ListItem>
          <ListItem sx={{ flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <MenuBookOutlinedIcon fontSize="medium" color="primary" />
              <Typography variant="h6" sx={{ mr: 2 }}>
                {t("header_2")}
              </Typography>
            </div>
            <ListItemText primary={t("feature_2")} />
          </ListItem>
          <ListItem sx={{ flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <AssignmentTurnedInOutlinedIcon
                fontSize="medium"
                color="primary"
              />
              <Typography variant="h6" sx={{ mr: 2 }}>
                {t("header_3")}
              </Typography>
            </div>
            <ListItemText primary={t("feature_3")} />
          </ListItem>
        </List>
      </animated.section>
    </animated.div>
  );
};

export default Landing;
