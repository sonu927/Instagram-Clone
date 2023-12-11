import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import AuthPage from "./pages/Authpage/AuthPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
