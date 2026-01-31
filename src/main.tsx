import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./pages/notFound";

const router = createBrowserRouter([
  { path:"/", element: <Home/>},
  { path:"/home", element: <Home/>},
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
