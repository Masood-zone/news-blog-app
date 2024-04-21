import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import rootRoutes from "./pages";

function App() {
  return (
    <div>
      <Toaster />
      <RouterProvider router={rootRoutes} />
    </div>
  );
}

export default App;
