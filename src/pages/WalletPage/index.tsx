import { SignOut, CheckCircle, ArrowRight } from "phosphor-react";
import { Button } from "../../components";

const WalletPage = () => {
    return (
        <div className="bg-[#F2F3F7] w-screen h-screen bg-cover bg-no-repeat flex justify-center p-5">
            <div className="min-1440:w-[1440px] w-full flex flex-col">
                <header className="w-full flex items-center justify-between py-5">
                    <div className="flex gap-40">
                        <img src={"/ng-cash-icon.png"} alt="ng cash icon" className="w-20 text-black hover:scale-[1.1] transition-transform cursor-pointer"/>
                        <div className="flex flex-row gap-5">
                            <a className="font-bold">Minha Conta</a>
                            <a>Transações</a>
                        </div>
                    </div>
                    <div>
                        <SignOut size={32} className="cursor-pointer hover:scale-[1.1] transition-transform" />
                    </div>
                </header>
                <div className="w-full flex flex-col gap-5">
                    <div className="w-full bg-white rounded-2xl p-8">
                        <div className="grid grid-cols-2">
                            <div>
                                <h1 className="text-zinc-400">Conta Principal</h1>
                                <div className="flex flex-col py-5">
                                    <p className="font-extrabold text-xl">Conta de Edilson Almeida</p>
                                    <div className="flex flex-row gap-5 items-center">
                                        <p>fewwwwwwwwwwwwefefweEW9E87F98EW798FEW98F798EWF798WE</p>
                                        <CheckCircle size={32} className="text-emerald-600"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-end gap-5 flex-col">
                                <p className="text-zinc-400">Fundos Disponíveis</p>
                                <p className="text-2xl">R$1.500,00</p>
                            </div>
                        </div>
                        <div>
                            <Button>
                                Transferir Dinheiro
                            </Button>
                        </div>
                    </div>
                    <div className="w-full p-8 bg-white rounded-2xl flex flex-col gap-5">
                        <div className="w-full flex flex-row items-center justify-between">
                            <p className="font-extrabold text-xl">Últimas Transações</p>
                            <button>T</button>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <div className="w-full items-center flex flex-row justify-between border-b-4 py-2">
                                <p className="font-bold">17/11/2022</p>
                                <p>Edilson Almeida</p>
                                <p className="text-zinc-400">Saque</p>
                                <p className="font-bold">- R$700,00</p>
                            </div>
                            <div className="w-full items-center flex flex-row justify-between border-b-4 py-2">
                                <p className="font-bold">17/11/2022</p>
                                <p>Edilson Almeida</p>
                                <p className="text-zinc-400">Saque</p>
                                <p className="font-bold">- R$700,00</p>
                            </div>
                            <div className="w-full items-center flex flex-row justify-between border-b-4 py-2">
                                <p className="font-bold">17/11/2022</p>
                                <p>Edilson Almeida</p>
                                <p className="text-zinc-400">Saque</p>
                                <p className="font-bold">- R$700,00</p>
                            </div>
                            <div className="w-full items-center flex flex-row justify-between border-b-4 py-2">
                                <p className="font-bold">17/11/2022</p>
                                <p>Edilson Almeida</p>
                                <p className="text-zinc-400">Saque</p>
                                <p className="font-bold">- R$700,00</p>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <button className="flex flex-row items-center gap-2 hover:scale-[1.1] transition-transform">
                                <p>Veja mais</p>
                                <ArrowRight size={32} className="text-emerald-700"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletPage;