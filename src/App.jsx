import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from "../src/pages/Signin/Signin";
import Signup from "../src/pages/Signup/Signup";
import Home from "./pages/Home/Home";

const App = () => {
  const endPoints = createBrowserRouter([
    {
      path: "/signin",
      element: (
        <div className="flex flex-col h-screen">
          <Navbar />
          <Signin />
        </div>
      ),
    },
    {
      path: "/signup",
      element: (
        <div className="flex flex-col h-screen">
          <Navbar />
          <Signup />
        </div>
      ),
    },
        {
      path: "/",
      element: (
        <div className="flex flex-col h-screen">
          <Navbar />
          <Home />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={endPoints} />
    </div>
  );
};

export default App;
