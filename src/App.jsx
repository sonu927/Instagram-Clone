import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import AuthPage from "./pages/Authpage/AuthPage";
import PageLayout from "./Layouts/PageLayouts/PageLayout";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
