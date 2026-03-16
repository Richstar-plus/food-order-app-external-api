import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { RootLayout } from "./pages/Root";
import { HomePage } from "./pages/Home";
import {AboutPage} from "./pages/About";
import {MenuPage} from "./pages/Menu";
import {ContactPage} from "./pages/Contact";
import {CartPage} from "./pages/Cart";
import {ProfilePage} from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      }, 
      {
        path: "cart",
        element: <CartPage />,
      }, 
      {
        path: "profile",
        element: <ProfilePage />,
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
