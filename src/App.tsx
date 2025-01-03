import BaseLayout from "@components/layouts/base-layout"
import AuthPage from "@features/auth/auth-page"
import SummaryPage from "@features/summary/summary-page"
import { QueryClientProvider } from "@tanstack/react-query"
import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
} from "react-router-dom"
import { Toaster } from "sonner"
import "./App.css"
import AuthProvider from "./providers/auth-provider"
import { queryClient } from "@api/config/react-query"
import LandingPage from "./features/landing-page/landing-page"

function App() {
    const router = createBrowserRouter([
        {
            path: "/app",
            element: (
                <AuthProvider>
                    <Outlet />
                </AuthProvider>
            ),
            children: [
                {
                    path: "",
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
                    path: "auth/:type",
                    element: <AuthPage />,
                },
            ],
        },
        {
            path: "",
            element: <LandingPage />,
        },
        {
            path: "*",
            element: <Navigate to="/app" replace />,
        },
    ])

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <Toaster />
            </QueryClientProvider>
        </>
    )
}

export default App
