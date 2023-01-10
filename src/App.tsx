import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdditionalInfo from "./pages/account/AdditionalInfo";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/additional" element={<AdditionalInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
