import { useLogin } from "@api/auth"
import { Button, Card, CardContent, CardTitle, Input } from "@components/ui"
import { Form, Formik } from "formik"
import { motion } from "framer-motion"

import ErrorLabel from "@components/ui/error-label"
import Spinner from "@components/ui/spinner"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { useAuth } from "src/providers/auth-provider"
import CecilLogo from "../../../assets/cecil.svg"

type Inputs = {
    email: string
    password: string
}

const LoginForm = () => {
    const { mutateAsync, isPending } = useLogin()
    const { setUserCredentials } = useAuth()
    const navigate = useNavigate()

    const transition = { type: "spring", duration: 0.8 }
    const animations = {
        initial: {
            x: 100,
            opacity: 0,
            transition: { ...transition, delay: 0.5 },
        },
        animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
        exit: { x: 100, opacity: 0, transition: { ...transition, delay: 0 } },
    }

    const signIn = async (data: Inputs) => {
        mutateAsync({ ...data })
            .then((res) => {
                setUserCredentials({ ...res })
                navigate("/app", { replace: true })
            })
            .catch((error) => {
                if (error.response.data) {
                    toast.error("Credenciais inválidas")
                }
            })
    }

    return (
        <motion.div {...animations}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                    const errors: { [key: string]: string } = {}
                    if (!values.email) {
                        errors.email = "Required"
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email,
                        )
                    ) {
                        errors.email = "Invalid email address"
                    }
                    return errors
                }}
                onSubmit={(values) => {
                    signIn(values)
                }}
            >
                {({ values, handleChange, errors, touched }) => (
                    <Card className="shadow-md">
                        <CardTitle>
                            <a
                                className="flex items-center justify-center py-4"
                                href="/"
                            >
                                <img
                                    src={CecilLogo}
                                    alt="Logo"
                                    className="w-20"
                                />
                            </a>
                        </CardTitle>
                        <CardContent>
                            <Form
                                className="flex flex-col items-center gap-4"
                                style={{
                                    visibility: isPending ? "hidden" : "unset",
                                }}
                            >
                                <Input
                                    className="bg-white"
                                    type="email"
                                    name="email"
                                    placeholder="Seu email"
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                {errors.email &&
                                    touched.email &&
                                    errors.email && (
                                        <ErrorLabel>{errors.email}</ErrorLabel>
                                    )}
                                <Input
                                    className="bg-white"
                                    type="password"
                                    name="password"
                                    placeholder="Sua senha"
                                    onChange={handleChange}
                                    value={values.password}
                                />
                                {errors.password &&
                                    touched.password &&
                                    errors.password && (
                                        <ErrorLabel>
                                            {errors.password}
                                        </ErrorLabel>
                                    )}
                                <div className="flex flex-col gap-2">
                                    <Button
                                        type="submit"
                                        className="mt-4 rounded-md bg-black text-white"
                                    >
                                        Entrar
                                    </Button>
                                    <Link to="/auth/register">
                                        <Button variant="link">
                                            Não tenho uma conta
                                        </Button>
                                    </Link>
                                </div>
                            </Form>
                            {isPending && (
                                <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2">
                                    <Spinner />
                                    Carregando
                                </span>
                            )}
                        </CardContent>
                    </Card>
                )}
            </Formik>
        </motion.div>
    )
}

export default LoginForm
