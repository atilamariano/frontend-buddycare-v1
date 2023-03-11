import { Navigate, Route, Routes } from "react-router-dom";
import { PsicologosRegister } from "../pages/signupPsicologo/SignupPsicologo";
import { Home } from "../pages/home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/psicologos" element={<PsicologosRegister />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
