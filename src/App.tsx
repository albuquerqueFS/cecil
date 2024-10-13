import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import BaseLayout from "@components/layouts/base-layout";
import SummaryPage from "@features/summary/summary-page";
import { queryClient } from "./api";
import LoginPage from "@features/login/login-page";

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
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
