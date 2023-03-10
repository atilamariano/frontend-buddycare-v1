import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import { PsicologosRegister } from "../pages/signupPsicologo/SignupPsicologo";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/psicologos" element={<PsicologosRegister />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
