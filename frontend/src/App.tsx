import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/auth/Register";
import LoginPage from "./pages/auth/Login";
import Application from "./pages/application/Home";
import ProtectedRoutes from "./ProtectedRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/application" element={<Application />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
