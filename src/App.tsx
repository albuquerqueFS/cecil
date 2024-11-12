import BaseLayout from "@components/layouts/base-layout";
import AuthPage from "@features/auth/auth-page";
import SummaryPage from "@features/summary/summary-page";
import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { queryClient } from "./api";
import "./App.css";
import Auth from "./lib/auth/auth";
import AuthProvider from "./providers/auth-provider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthProvider>
          <Auth />
        </AuthProvider>
      ),
      children: [
        {
          path: "app",
          element: <BaseLayout />,
          children: [
            {
              path: "",
              element: <SummaryPage />,
              children: [],
            },
          ],
        },
        {
          path: "/auth/:type",
          element: <AuthPage />,
        },
      ],
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
