import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="py-10">
      <div className="max-w-87.5 border-2 bg-gray-50 border-gray-200 p-4 h-200 mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
