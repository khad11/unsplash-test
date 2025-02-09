// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Home, About, Contact } from "./pages";
// layout
import MainLayout from "./layouts/MainLayout";

// actions

import { action as HomeAction } from "./pages/Home";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          action: HomeAction,
        },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
