import { Page } from "./Page";
import Image1 from '../assets/image1.svg'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function DashboardAluno() {
    const [date, setDate] = useState(new Date());

    return (
        <Page>
            <div className="py-3">
                {/*Div de SECTION 1: Bem Vindo + Calendário*/}
                <div className="grid grid-cols-8 gap-2">
                    {/*Bem vindo*/}
                    <div className='col-span-5 grid grid-cols-8 py-3 h-42 bg-gradient-to-b from-blue-400 to-blue-700 text-white rounded-lg'>
                        <div className='col-span-5 pt-8 pl-16 pr-16 space-y-2 '>
                            <h3 className='text-xl font-medium'>06 de Abril 2024</h3>
                            <h1 className='text-4xl font-bold'>Seja bem-vindo, Nome!</h1>
                            <h4 className='text-2xl font-medium'>Se mantenha sempre atualizado da sua vida acadêmica.</h4>

                        </div>

                        <div className='col-span-3 w-[285px] h-[280px]'>
                            <img src={Image1} />
                        </div>
                    </div>
                    {/*Calendário*/}
                    <div className="col-span-3 pr-2">
                        <div className=''>
                            <div className='calendar-container'>
                                <Calendar className='bg-[#3A71BE] text-white rounded-md' onChange={setDate} value={date} />
                            </div>
                        </div>
                    </div>
                </div>

                {/*DIV DE SECTION 2: CRE + Disciplinas*/}
                <div className="grid grid-cols-8 py-5 space-x-3 text-2xl">
                    {/*CRE*/}
                    <div className="col-span-2 p-3 flex items-center h-24 bg-white border rounded-md border-zinc-500/20 shadow-lg font-bold">
                        <div className="rounded-full w-[70px] h-[70px] bg-[#EAEAEA] text-black flex items-center ">
                            <span className="px-2.5">85,4</span>
                        </div>
                        <span className="px-8">Seu CRE</span>
                    </div>
                    {/*Disciplinas*/}
                    <div className="col-span-6 flex flex-col h-64 bg-white border rounded-md border-zinc-500/20 shadow-lg font-bold">
                        <div className="text-black p-5">
                            <span>Suas Disciplinas</span>
                            <div className="flex flex-col py-3 ">

                                <div className="space-x-3">
                                    <input className="" type="checkbox" name="" id="" />
                                    <span>Disciplina 1</span>
                                </div>

                                <div className="space-x-3">
                                    <input type="checkbox" name="" id="" />
                                    <span>Disciplina 2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}