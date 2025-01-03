import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import react from "@vitejs/plugin-react-swc"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@features": path.resolve(__dirname, "./src/features"),
            "@api": path.resolve(__dirname, "./src/api"),
        },
    },
    server: {
        host: "0.0.0.0",
        port: 5173,
        proxy: {
            "/v1": {
                target: "http://localhost:8000", // Point to the host machine's backend
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/v1/, ""),
            },
        },
    },
})
