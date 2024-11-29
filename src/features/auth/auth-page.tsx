import { useParams } from "react-router-dom"
import LoginForm from "./components/login-form"
import RegisterForm from "./components/register-form"

const AuthPage = () => {
    const { type } = useParams<{ type: "login" | "register" | undefined }>()

    return (
        <div className="flex h-screen w-full items-center justify-center">
            {type === "login" && <LoginForm />}
            {type === "register" && <RegisterForm />}
            {!type || (!["login", "register"].includes(type) && <h1>404</h1>)}
        </div>
    )
}

export default AuthPage
