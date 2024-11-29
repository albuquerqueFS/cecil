import axios from "@api/config/axios"
import { JWTToken } from "@api/config/models"
import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"
import { useLocation, useNavigate } from "react-router-dom"

const AuthContext = createContext<{
    token: string | null
    name: string | null
    logout: () => void
    setUserCredentials: (jwt: JWTToken) => void
}>({
    token: null,
    name: null,
    logout: () => {},
    setUserCredentials: () => {},
})

const AuthProvider = ({ children }: PropsWithChildren) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [token, setToken_] = useState(localStorage.getItem("token"))
    const [refresh, setRefresh_] = useState(localStorage.getItem("refresh"))
    const [name, setName_] = useState(localStorage.getItem("name"))

    const setUserCredentials = (jwt: JWTToken) => {
        setRefresh_(jwt.refresh)
        setToken_(jwt.access)
        setName_(jwt.name)
    }

    const logout = () => {
        setRefresh_(null)
        setToken_(null)
        setName_(null)
        navigate("/auth/login")
    }

    useEffect(() => {
        if (pathname.startsWith("/app") || pathname.startsWith("/auth")) {
            if (token) {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + token
                localStorage.setItem("refreshToken", refresh as string)
                localStorage.setItem("token", token)
                localStorage.setItem("name", name as string)
            } else {
                delete axios.defaults.headers.common["Authorization"]
                localStorage.removeItem("refreshToken")
                localStorage.removeItem("token")
                localStorage.removeItem("name")
                navigate("/auth/login")
            }
        }
    }, [token])

    // Memoized value of the authentication context
    const contextValue = useMemo(
        () => ({
            token,
            name,
            logout,
            setUserCredentials,
        }),
        [token],
    )

    // Provide the authentication context to the children components
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthProvider
