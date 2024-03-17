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
import Myday from "./pages/Myday";
import {NextSevenDays} from "./pages/NextSevenDays";
import AllTasks from "./pages/AllTasks";
import MyCalendar from "./pages/MyCalendar";

function App() {
  const router = createBrowserRouter([
    { 
      path: "/", 
      element: <Home /> 
    },
    { 
      path: "/my-day", 
      element: <Myday /> 
    },
    { 
      path: "/next-seven-days", 
      element: <NextSevenDays /> 
    },
    { 
      path: "/all-my-tasks", 
      element: <AllTasks /> 
    },
    { 
      path: "/my-calendar", 
      element: <MyCalendar /> 
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
