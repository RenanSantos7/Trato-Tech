import { RouterProvider } from "react-router-dom";
import router from "./router";
import DadosProvider from "./context/DadosContext";

export default function App() {
return (
  <DadosProvider>
    <RouterProvider router={router} />
  </DadosProvider>)
}