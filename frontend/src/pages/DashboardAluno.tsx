import { Page } from "./Page";
import Image1 from '../assets/image1.svg'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function DashboardAluno() {
    const [date, setDate] = useState(new Date());
//responsivo
    return (
        <Page>
            <div className="py-3 px-4 sm:px-6 lg:px-8">
                {/*Div de SECTION 1: Bem Vindo + Calendário*/}
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-2">
                    {/*Bem vindo*/}
                    <div className='lg:col-span-5 grid grid-cols-1 lg:grid-cols-8 py-3 h-auto lg:h-42 bg-gradient-to-b from-blue-400 to-blue-700 text-white rounded-lg'>
                        <div className='lg:col-span-5 pt-8 pl-6 lg:pl-16 lg:pr-16 space-y-2'>
                            <h3 className='text-lg lg:text-xl font-medium'>06 de Abril 2024</h3>
                            <h1 className='text-2xl lg:text-4xl font-bold'>Seja bem-vindo, Nome!</h1>
                            <h4 className='text-xl lg:text-2xl font-medium'>Se mantenha sempre atualizado da sua vida acadêmica.</h4>
                        </div>

                        <div className='lg:col-span-3 w-full lg:w-[285px] h-[280px] mx-auto lg:mx-0'>
                            <img src={Image1} alt="Bem-vindo"/>
                        </div>
                    </div>
                    {/*Calendário*/}
                    <div className="lg:col-span-3 pr-0 lg:pr-2">
                        <div className='calendar-container'>
                            <Calendar className='bg-[#3A71BE] text-white rounded-md' onChange={setDate} value={date} />
                        </div>
                    </div>
                </div>

                {/*DIV DE SECTION 2: CRE + Disciplinas*/}
                <div className="grid grid-cols-1 lg:grid-cols-8 py-5 gap-2 lg:space-x-3 text-lg lg:text-2xl">
                    {/*CRE*/}
                    <div className="lg:col-span-2 p-3 flex items-center h-auto lg:h-24 bg-white border rounded-md border-zinc-500/20 shadow-lg font-bold">
                        <div className="rounded-full w-[70px] h-[70px] bg-[#EAEAEA] text-black flex items-center justify-center">
                            <span className="px-2.5">85,4</span>
                        </div>
                        <span className="px-8">Seu CRE</span>
                    </div>
                    {/*Disciplinas*/}
                    <div className="lg:col-span-6 flex flex-col h-auto lg:h-64 bg-white border rounded-md border-zinc-500/20 shadow-lg font-bold">
                        <div className="text-black p-5">
                            <span>Suas Disciplinas</span>
                            <div className="flex flex-col py-3 space-y-2">
                                <div className="flex items-center space-x-3">
                                    <input type="checkbox" id="disciplina1"/>
                                    <label htmlFor="disciplina1">Disciplina 1</label>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <input type="checkbox" id="disciplina2"/>
                                    <label htmlFor="disciplina2">Disciplina 2</label>
                                </div>
                                {/* Add more disciplines as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
