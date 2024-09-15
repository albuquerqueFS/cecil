import BaseLayout from "components/layouts/base-layout";
import SummaryPage from "features/summary/summary-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <SummaryPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
