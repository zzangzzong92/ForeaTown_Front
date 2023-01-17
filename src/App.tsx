import LanguageCard from "./components/LanguageCard";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdditionalInfo from "./pages/account/AdditionalInfo";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/additional" element={<AdditionalInfo />} />
        <Route path="/card" element={<LanguageCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
