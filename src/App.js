import { createBrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { RouterProvider } from "react-router-dom";
import Error from "./pages/ErrorPage";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Settings from "./pages/Settings";

function App() {
  const router = createBrowserRouter([
    { 
      path: "/", 
      element: <Home /> 
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/about/:pagenumber",
      element: <About />,
      loader: ({request, params, context})=>{
          console.log(params);
          console.log(typeof params.pagenumber);
          return 10;
      }
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} fallbackElement={<Error />} />
    </>
  );
}

export default App;
