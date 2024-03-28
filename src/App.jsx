import { RouterProvider } from "react-router-dom";
import router from "./router";
import { DataProvider } from "./contexts/DataContext";

export default function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  )
}