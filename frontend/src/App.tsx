import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./constants/routes";

const router = createBrowserRouter(routes,
  {
    future: {
      v7_fetcherPersist: true,
    },
  }
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
