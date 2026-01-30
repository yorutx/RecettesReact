/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import des pages
import Home from "./pages/home";
import NotFound from "./pages/notFound";

// Import des composants
import { HeaderBar, Footer } from "./components";

const router = createBrowserRouter([
  { path:"/", element: <Home/>},
  { path:"/home", element: <Home/>},
  { path: "*", element: <NotFound /> },
]);

const elem = document.getElementById("root")!;
const app = ( 
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
