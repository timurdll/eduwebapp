import { Avatar, Button, LinearProgress, TextField } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import { UserAuth } from "../../../Context/AuthContext";
import { useState, useEffect } from "react";
import "./profile.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebase-config";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { t } = useTranslation();
  const { user, logout } = UserAuth();
  const [avatarUrl, setAvatarUrl] = useState(user.photoURL);
  const [userFirstname, setUserFirstname] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState("");
  const [finishedModules, setFinishedModules] = useState([]);
  const [totalModules, setTotalModules] = useState(0); // Total number of modules
  const [completedModules, setCompletedModules] = useState(0); // Number of completed modules

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileInfo = async () => {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        setAvatarUrl(userData.avatarUrl);
        setUserFirstname(userData.firstName);
      } else {
        console.log("No such document!");
      }
    };
    fetchProfileInfo();
  }, [user.uid]);

  useEffect(() => {
    const fetchFinishedModules = async () => {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        setFinishedModules(userData.finishedModules || []);
        setTotalModules(userData.modules.length || 0); // Set the total number of modules
      }
    };
    fetchFinishedModules();
  }, [user.uid]);

  useEffect(() => {
    // Calculate the number of completed modules
    const numberOfCompletedModules = finishedModules.length;
    setCompletedModules(numberOfCompletedModules);
  }, [finishedModules]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `avatars/${user.uid}/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    setAvatarUrl(url);
    await updateProfile(user, { photoURL: url });
    await setDoc(
      doc(db, "users", user.uid),
      { avatarUrl: url },
      { merge: true }
    );
  };

  const handleNameChange = async () => {
    await setDoc(
      doc(db, "users", user.uid),
      { firstName: newName },
      { merge: true }
    );
    setUserFirstname(newName);
    setIsEditingName(false);
  };

  const progress = (completedModules / totalModules) * 100;

  return (
    <div className="profile__wrapper">
      <div className="profile__container">
        <div className="avatar__container">
          <Avatar
            alt={user.email}
            src={avatarUrl}
            sx={{ width: 100, height: 100 }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            id="avatar-input"
            style={{ display: "none" }}
          />
          <label htmlFor="avatar-input">
            <Button variant="outlined" size="small" component="span">
              {t("changeAvatar")}
            </Button>
          </label>
        </div>
        <div className="name__container">
          {isEditingName ? (
            <>
              <TextField
                label={t("newName")}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                variant="outlined"
                margin="dense"
                size="small"
                sx={{ width: "180px" }}
              />
              <Button
                variant="outlined"
                size="small"
                onClick={handleNameChange}
              >
                {t("save")}
              </Button>
            </>
          ) : (
            <>
              <h2>{userFirstname}</h2>
              <Button
                variant="outlined"
                size="small"
                onClick={() => setIsEditingName(true)}
              >
                {t("changeAvatar")}
              </Button>
            </>
          )}
        </div>
        <p>
          {t("username")}: {user.email}
        </p>
        <div className="finished-modules__container">
          <h2>{t("finishedModules")}</h2>
          <List>
            {finishedModules.map((module) => (
              <ListItem key={module.moduleName}>
                <ListItemText
                  primary={module.moduleName}
                  secondary={`Completed at: ${module.completedAt
                    .toDate()
                    .toLocaleDateString()}`}
                />
              </ListItem>
            ))}
          </List>
        </div>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ width: "100%", mt: 2 }}
        />
        <div className="progress-label">
          {`${completedModules} / ${totalModules} ${t("modulesCompleted")}`}
        </div>
        <Button variant="outlined" size="small" onClick={handleLogout}>
          {t("logout")}
        </Button>
      </div>
    </div>
  );
};

export default Profile;
