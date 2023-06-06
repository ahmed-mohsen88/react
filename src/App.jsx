import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import { useState } from "react";
import LogLayOut from "./users/LogLayOut";
import DashBoard from "./pages/DashBoard";

function App() {
  const [appEmail, setappEmail] = useState("");
  console.log(appEmail);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setappEmail={setappEmail} />} />
          <Route path="/thankYou" element={<ThankYou appEmail={appEmail} />} />
          <Route
            path="/login"
            element={<LogLayOut buttonText={"Sign In"} title={"Sign in"} />}
          />
          <Route
            path="/signup"
            element={<LogLayOut buttonText={"Sign up"} title={"Sign up"} />}
          />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
