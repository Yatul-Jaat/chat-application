import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/loginPage/Login";
import Signup from "./pages/SignupPage/Signup";
import Mainpage from "./pages/mainPage/Mainpage";
import Landing from "./pages/landingPage/Landing";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authContext";

const App = () => {
  const {authuser}=useAuthContext()
  return (
    <div>
      <Routes>
        <Route path="/" element={authuser? <Navigate to="/main"/>:<Landing />} />
        <Route path="/main" element={authuser?<Mainpage />:<Navigate to="/"/>} />
        <Route path="/login" element={  authuser? <Navigate to="/main"/>:<Login />} />
        <Route path="/signup" element={authuser? <Navigate to="/main"/>:<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
