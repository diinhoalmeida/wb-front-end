import { User } from "phosphor-react";
import { Button } from "../../components/index";

const LandingPage = () => {
    return (
        <div className="bg-landingPage w-screen h-screen bg-cover bg-no-repeat flex justify-center p-5">
            <div className="min-1440:w-[1440px] w-full flex flex-col justify-between">
                <header className="w-full flex items-center justify-between py-5">
                    <img src={"/ng-cash-icon.png"} alt="ng cash icon" className="w-20 text-black hover:scale-[1.1] transition-transform cursor-pointer"/>
                    <div>
                        <User size={32} className="cursor-pointer hover:scale-[1.1] transition-transform" />
                    </div>
                </header>
                <div className="w-[50%] flex flex-col">
                    <h1 className="text-3xl font-bold">Sistema de Carteira Digital!</h1>
                    <h3 className="text-sm font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatum maiores eum magni, reprehenderit expedita asperiores minima quia nisi quis eveniet eligendi minus excepturi voluptatem aliquid! Assumenda non quae totam!</h3>
                </div>
                <footer className="pb-5">
                    <Button>
                        Acessar
                    </Button>
                </footer>
            </div>
        </div>
    )
}

export default LandingPage;