import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Contact from "./Pages/Contact";
import LoginPage from "./Pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./Pages/Profile";
import DetailsCard from "./Pages/DetailsCard";
import Order from "./Pages/Order";
import OTPVerification from "./Pages/OTPVerification";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  // Set paths for the components to show on render.
  // Layout has page layout with nav bar and then outlet and at bottom, footer.
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "loginPage",
          element: <LoginPage />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "detailCard",
          element: <DetailsCard />,
        },
        {
          path: "order",
          element: <Order />,
        },
        {
          path: "OTPVerification",
          element: <OTPVerification />,
        },
      ],
    },
  ]);

  return (
    // AuthProvider wraps the app so that we can access global values anywhere we want.
    <>
      {/* <AuthProvider> */}
        <RouterProvider router={router} />
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
