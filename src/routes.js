import Profile from "./Components/Pages/Profile/Profile";
import Signup from "./Components/Pages/SignUp/SignUp";
import {
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  PROFILE_ROUTE,
  LANDING_ROUTE,
  VOCABULARY_ROUTE,
  READING_ROUTE,
  ACTIVITIES_ROUTE,
  CONTACT_ROUTE,
  VOCABULARY1_ROUTE,
  READING1_ROUTE,
  ACTIVITIES1_ROUTE,
  VOCABULARY2_ROUTE,
  READING2_ROUTE,
  ACTIVITIES2_ROUTE,
  VOCABULARY3_ROUTE,
  READING3_ROUTE,
  ACTIVITIES3_ROUTE,
} from "./Components/utils/consts";
import SignIn from "./Components/Pages/Login/SignIn";
import Landing from "./Components/Pages/Landing/Landing";
import Reading1 from "./Components/Pages/Lessons/Lesson 1/Reading1";
import Vocabulary1 from "./Components/Pages/Lessons/Lesson 1/Vocabulary1";
import Activities1 from "./Components/Pages/Lessons/Lesson 1/Activities1";
import ContactForm from "./Components/Pages/ContactUs/ContactUs";
import Activities2 from "./Components/Pages/Lessons/Lesson 2/Activities2";
import Reading2 from "./Components/Pages/Lessons/Lesson 2/Reading2";
import Vocabulary2 from "./Components/Pages/Lessons/Lesson 2/Vocabulary2";
import Vocabulary3 from "./Components/Pages/Lessons/Lesson 3/Vocabulary3";
import Reading3 from "./Components/Pages/Lessons/Lesson 3/Reading3";
import Activities3 from "./Components/Pages/Lessons/Lesson 3/Activities3";
import Vocabulary4 from "./Components/Pages/Lessons/Lesson 4/Vocabulary3";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: SignIn,
  },
  {
    path: SIGNUP_ROUTE,
    Component: Signup,
  },
  {
    path: LANDING_ROUTE,
    Component: Landing,
  },
  {
    path: CONTACT_ROUTE,
    Component: ContactForm,
  },
];

export const privateRoutes = [
  {
    path: PROFILE_ROUTE,
    Component: Profile,
  },
  {
    path: VOCABULARY_ROUTE,
    Component: Vocabulary1,
  },
  {
    path: READING_ROUTE,
    Component: Reading1,
  },
  {
    path: ACTIVITIES_ROUTE,
    Component: Activities1,
  },
  {
    path: VOCABULARY1_ROUTE,
    Component: Vocabulary2,
  },
  {
    path: READING1_ROUTE,
    Component: Reading2,
  },
  {
    path: ACTIVITIES1_ROUTE,
    Component: Activities2,
  },
  {
    path: VOCABULARY2_ROUTE,
    Component: Vocabulary3,
  },
  {
    path: READING2_ROUTE,
    Component: Reading3,
  },
  {
    path: ACTIVITIES2_ROUTE,
    Component: Activities3,
  },
  {
    path: VOCABULARY3_ROUTE,
    Component: Vocabulary4,
  },
  {
    path: READING3_ROUTE,
    Component: Reading3,
  },
  {
    path: ACTIVITIES3_ROUTE,
    Component: Activities3,
  },
];
