import {createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Owner from "./pages/owner";

const router = createBrowserRouter([
{
  path: "/",
  element: <Layout/>,
  errorElement: (
    <div className="min-h-screen flex justify-end items-center">
      <h1 className="text-4xl">404 - P@ge N0t F0und ⚠️🐬⚠️</h1>
    </div>
  ),
  children: [
    {path: "/", element: <Home/>},
    {path: "owner", element: <Owner />},
  ]
}]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
