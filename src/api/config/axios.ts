import { CECIL_URLS } from "@/lib/constants"
import Axios from "axios"

if (!import.meta.env.VITE_BACKEND_URL) {
    throw new Error(
        "env variable not set: BASE_URL (did you forget to create a .env file from .env.template?)",
    )
}

const axios = Axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: { "Content-Type": "application/json" },
})

axios.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        const originalRequest = error.config

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                const refreshToken = localStorage.getItem("refreshToken")
                const response = await axios.post("/api/token/refresh", {
                    refreshToken,
                })
                const { accessToken, refreshToken: newRefreshToken } =
                    response.data

                localStorage.setItem("token", accessToken)
                localStorage.setItem("refreshToken", newRefreshToken)

                axios.defaults.headers.common["Authorization"] =
                    `Bearer ${accessToken}`

                return axios(originalRequest)
            } catch (refreshError) {
                localStorage.removeItem("token")
                localStorage.removeItem("refreshToken")
                window.location.href = CECIL_URLS.login

                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    },
)

axios.interceptors.request.use(
    (request) => {
        const accessToken = localStorage.getItem("token")
        if (accessToken) {
            request.headers["Authorization"] = `Bearer ${accessToken}`
        }
        return request
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default axios
