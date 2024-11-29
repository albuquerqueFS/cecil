import clsx from "clsx"
import CecilLogo from "../../assets/cecil_white.svg"

const LandingPage = () => {
    return (
        <div className="relative h-full w-full">
            <div
                className="absolute left-0 top-0 -z-10 h-full w-full"
                style={{
                    backgroundImage:
                        "radial-gradient(#444cf7 .8px, transparent .8px)",
                    backgroundSize: "7px 7px",
                }}
            ></div>
            <nav className="z-10 flex items-center justify-between gap-4 rounded-lg bg-black px-4 py-2 text-sm font-light text-white">
                <div>
                    <img src={CecilLogo} alt="Logo" className="w-20" />
                </div>

                <div className="flex gap-4">
                    <a href="">Sobre nós</a>
                    <a href="">Preços</a>
                </div>

                <div>
                    <a href="">Acessar minha conta</a>
                </div>
            </nav>

            <div className="z-10 mt-16 h-fit">
                <div className="font-poppins flex h-[60dvh] flex-col items-center text-8xl uppercase">
                    <h1 className="w-full min-w-[300px] max-w-[500px] text-left font-semibold">
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
                            href="/auth/login"
                        >
                            COMECE AGORA
                        </a>
                    </button>
                </div>
            </div>

            <div className="mt-24 w-full rounded-2xl bg-black px-6 py-6 text-white">
                <h2 className="font-poppins text-lg font-light">
                    O que é o Cecil e quem somos nós?
                </h2>

                <p>TBD</p>
            </div>

            <div className="mt-24 w-full rounded-2xl bg-black px-6 py-6 text-white">
                <h2 className="font-poppins text-lg font-light">Preços</h2>

                <p>TBD</p>
            </div>
        </div>
    )
}

export default LandingPage
