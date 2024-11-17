import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { useEffect } from "react";
import { Home, NotFound } from "./pages";

import { Scroll } from "./animation";
import { Navbar, Footer } from "./components/global";

const Root = () => {
  return (
    <div>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  // we can create another route object here if we don't want the <Root/> to affect it
]);
export default function App() {
  useEffect(() => {
    Scroll();
  }, []);
  return (
    <>
      <Outlet />
      <RouterProvider router={router} />
    </>
  );
}
