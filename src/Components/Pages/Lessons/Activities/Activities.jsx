import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import InteractiveTask from "../InteractiveTasks/InteractiveTask";
import { auth, db } from "../../../../firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import "./Activities.css";
import { useNavigate } from "react-router-dom";

const Activities = ({ tasks, moduleName }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [user, setUser] = useState(null);
  const [userProgress, setUserProgress] = useState(null);
  // eslint-disable-next-line
  const [modules, setModules] = useState(null);

  const navigate = useNavigate();

  const updateModuleCompletion = async (index) => {
    if (!user) return; 
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data();

    const updatedModules = [...userData.modules];
    updatedModules[index] = {
      ...updatedModules[index],
      isCompleted: true,
    };

    await updateDoc(userRef, { modules: updatedModules });
  };

  useEffect(() => {
    const fetchFinishedModules = async () => {
      if (user?.uid) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        setModules(userData?.modules || []);
      }
    };
    fetchFinishedModules();
  }, [user?.uid]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (user && userProgress && correctAnswers === tasks.length) {
      const updatedProgress = [
        ...userProgress,
        { moduleName, completedAt: new Date() },
      ];
      updateDoc(doc(db, "users", user.uid), {
        finishedModules: updatedProgress,
      })
        .then(() => console.log("Progress updated successfully"))
        .catch((error) => console.error("Error updating progress:", error));
    }
  }, [correctAnswers, tasks.length, moduleName, user, userProgress]);

  const handleCorrectAnswer = () => {
    setCorrectAnswers(correctAnswers + 1);
  };

  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      getDoc(userDocRef)
        .then((doc) => setUserProgress(doc.data().finishedModules || []))
        .catch((error) =>
          console.error("Error fetching user progress:", error)
        );
    }
  }, [user]);

  return (
    <div className="tasks__container">
      {tasks.map((task) => (
        <InteractiveTask
          key={task.title}
          title={task.title}
          text={task.text}
          instructions={task.instructions}
          answer={task.answer}
          onCorrectAnswer={() => {
            updateModuleCompletion(task.moduleIndex);
            handleCorrectAnswer();
          }}
          onIncorrectAnswer={
            task.onIncorrectAnswer || (() => alert("Incorrect answer!"))
          }
        />
      ))}
      {correctAnswers === tasks.length && (
        <Button
          sx={{ marginBottom: 5 }}
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Finish Module
        </Button>
      )}
    </div>
  );
};

export default Activities;
