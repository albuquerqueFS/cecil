import clsx from "clsx"
import CecilLogo from "../../assets/cecil_white.svg"
import { PropsWithChildren } from "react"
import { motion } from "framer-motion"

const NavLink = ({ children, ...props }: PropsWithChildren<any>) => (
    <a className="" {...props}>
        {children}
    </a>
)

const LandingPage = () => {
    return (
        <div className="relative flex h-full w-full flex-col">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 top-0 -z-10 h-full w-full"
                style={{
                    backgroundImage:
                        "radial-gradient(#444cf7 .8px, transparent .8px)",
                    backgroundSize: "7px 7px",
                }}
            ></motion.div>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="z-10 flex items-center justify-between gap-4 rounded-lg bg-black px-4 py-2 text-sm font-light text-white"
            >
                <div>
                    <img src={CecilLogo} alt="Logo" className="w-20" />
                </div>

                <div className="flex gap-4">
                    <NavLink href="">Sobre nós</NavLink>
                    <NavLink href="">Preços</NavLink>
                </div>

                <div>
                    <NavLink href="/app/auth/login">
                        Acessar minha conta
                    </NavLink>
                </div>
            </motion.nav>

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="z-10 mt-16"
            >
                <div className="flex min-h-[70dvh] flex-col items-start justify-center p-6 font-poppins text-[10vw] uppercase leading-[10vw]">
                    <h1 className="w-full text-left font-semibold">
                        Salvando seu dinheiro{" "}
                        <span className="inline-block w-fit animate-bounce text-8xl">
                            💸
                        </span>
                        <br />E seu tempo ⏳
                    </h1>
                    <p className="mt-4 text-lg">
                        Toda a sua vida financeira em um só lugar
                    </p>
                    <button
                        className={clsx(
                            "relative z-0 mt-12 border px-12 py-2 text-lg font-bold transition-all",
                            "border-black bg-black",
                            "hover:bg-white",
                        )}
                    >
                        <a
                            className="z-20 text-white mix-blend-difference"
                            href="/app/auth/login"
                        >
                            COMECE AGORA
                        </a>
                    </button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-6 mt-16 w-full rounded-2xl bg-black px-6 py-6 text-white"
            >
                <div className="mb-4 flex flex-col gap-4 md:flex-row">
                    <h2 className="md:flex-grow-1 font-poppins text-4xl font-bold uppercase">
                        O que é o Cecil e quem somos nós?
                    </h2>
                    <p className="max-w-0 font-opensans md:max-w-[50%]">
                        Cecil é uma ferramenta open-source de gerenciamento
                        financeiro, o Cecil foi criado para aquelas pessoas que
                        sempre perdem o rastro dos seus gastos, por esse motivo,
                        Cecil é uma ferramenta de uma página só, que busca
                        centralizar toda um visão resumida das finanças para que
                        você gaste a menor quantidade de tempo possível
                        quebrando a cabeça com dinheiro.{" "}
                    </p>
                </div>
                <p className="font-opensans">
                    O Cecil é um projeto open-source, criado por um grupo de
                    amigos que se conheceram na faculdade, e que sempre
                    compartilharam o interesse em criar algo que fosse útil para
                    a sociedade. O Cecil é um projeto que está em constante
                    evolução, e que sempre busca trazer a melhor experiência
                    para o usuário final.
                </p>
            </motion.div>

            <div className="mt-24 w-full rounded-2xl bg-black px-6 py-6 text-white">
                <h2 className="font-poppins text-lg font-light">Preços</h2>

                <p>TBD</p>
            </div>
        </div>
    )
}

export default LandingPage
