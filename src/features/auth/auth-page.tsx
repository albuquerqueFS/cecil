import { Navigate, useParams } from "react-router-dom"
import LoginForm from "./components/login-form"
import RegisterForm from "./components/register-form"
import { useAuth } from "@/providers/auth-provider"
import { CECIL_URLS } from "@/lib/constants"

const AuthPage = () => {
    const { type } = useParams<{ type: "login" | "register" | undefined }>()
    const { token } = useAuth()

    if (token) {
        return <Navigate to={CECIL_URLS.summary} />
    }

    return (
        <div className="flex h-screen w-full items-center justify-center">
            {type === "login" && <LoginForm key={"login"} />}
            {type === "register" && <RegisterForm key={"register"} />}
            {!type || (!["login", "register"].includes(type) && <h1>404</h1>)}
        </div>
    )
}

export default AuthPage
