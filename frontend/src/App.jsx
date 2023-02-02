import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LoginProfPage from "./pages/LoginProfPage";
import "./App.css";
import Registration from "./pages/Registration";
import MainPage from "./pages/MainPage";
import { CurrentUserContextProvider } from "./Context/userContext";
import Cours from "./pages/Cours";
import Profile from "./pages/Profile";
import CreateCourse from "./pages/CreateCourse";
import EditCourse from "./pages/EditCourse";

function App() {
  return (
    <CurrentUserContextProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-professeur" element={<LoginProfPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/course" element={<Cours />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/edit-course/:courseId" element={<EditCourse />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </CurrentUserContextProvider>
  );
}

export default App;
