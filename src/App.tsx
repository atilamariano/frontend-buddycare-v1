import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import GlobalStyle from "./style/GlobalStyles";

export function App() {
  return (
      <BrowserRouter>
      <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
  );
}