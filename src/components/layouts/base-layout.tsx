import StocksHeader from "@components/independent/stock-header/stocks-header"
import UserHeader from "@components/ui/user-header"
import { FC } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "src/providers/auth-provider"
import { TooltipProvider } from "../ui/tooltip"

const BaseLayout: FC = () => {
    const { token } = useAuth()

    if (!token) {
        return <Navigate to="/auth/login" />
    }

    return (
        <TooltipProvider>
            <div>
                <div className="mx-auto max-w-[1100px]">
                    <div className="flex justify-between">
                        <StocksHeader />
                        <UserHeader />
                    </div>
                    <Outlet />
                </div>
            </div>
        </TooltipProvider>
    )
}

export default BaseLayout
