import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Recette1 from './pages/recette1';

const router = createBrowserRouter([
  { path:"/", element: <Home/>},
  { path:"/home", element: <Home/>},
  { path:"/recette1", element: <Recette1/>},
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
