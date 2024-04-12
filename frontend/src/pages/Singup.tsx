import React,{useState} from "react";
import { Page } from "./Page";
import "../styles/Singup.css"
import { AppIcons } from "../assets/exports";
export function Singup(){ // Função de cadastro do usuário

    const [User, SetUser] =useState({
        FullName:"",
        Email:"",
        Password:"",
        Cpf:"",
        Rg:"",
        Data:"",
        Sexo:"",
        Endereço:""
    })
    
    type UserType ={
        FullName:string,
        Email:string,
        Password:string,
        Cpf:string,
        Rg:string,
        Data:string,
        Sexo:String
        Endereço:string
    }

    const [records,setRecords] = useState<UserType[]>([])
 
    const SubmitHandler =(e)=>{
        e.preventDefault()
        const newrecord ={...User, id:`${new Date().getTime()}`}
        setRecords([...records,newrecord])
        console.log(newrecord)
    }

    const handleChange =(e) =>{
       
        const name = e.target.name
        const value = e.target.value
        SetUser({...User,[name]:value})
        console.log(name)
    }

    return(
        <Page>  
            
            <div className="singup-form flex flex-col h-full gap-6">
            <h1 className="text-4xl font-bold">Cadastro de Alunos</h1>
                <form className="flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl" action=""> 
               
                <div className="flex w-full gap-8">
                    <div className="FullName flex flex-col flex-1 max-w-[300px]">
                        <label htmlFor="" className="text-gray-900">Nome completo:</label>
                        <input className="flex w-full h-[47px] bg-gray-500 rounded-md px-2" placeholder="Nome" type="text" name="FullName" id="FullName" value={User.FullName} onChange={handleChange}/>
                    </div>
                    <div className="Cpf flex flex-col flex-1 max-w-[264px]">
                        <label htmlFor="">Cpf:</label>
                        <input className="flexw-full h-[47px] bg-gray-500 rounded-md px-2 "  placeholder="Ex.: 000.000.000-00" type="text" name="Cpf" id="Cpf" value={User.Cpf} onChange={handleChange} />
                    </div>
                    <div className="Rg flex flex-col flex-1 max-w-[264px]">
                        <label htmlFor="">RG:</label>
                        <input className="w-full h-[47px] bg-gray-500 rounded-md px-2"  placeholder="Ex.: 0.000.000" type="text" name="Rg" id="Rg" value={User.Rg} onChange={handleChange} />
                   
                    </div>
                    </div>


                    <div className="Data flex gap-8">
                        <div className="flex flex-col flex-1 max-w-[264px]">
                            <label htmlFor="">Data de nascimento:</label>
                            <input className="w-full h-[47px] bg-gray-500 rounded-md px-2"  placeholder="Ex.: dd/mm/aaaa" type="date" name="Data" id="Data" value={User.Data} onChange={handleChange} />
                        </div>
                    <div className="flex flex-col flex-1 max-w-[264px]  ">
                            <label htmlFor="">Sexo:</label>
                            <input className="w-full h-[20px] bg-gray-500 rounded-md px-2"  placeholder="" type="radio" name="Sexo" id="Male" value="male" onChange={handleChange}/> 
                            <label htmlFor="Male"> Masculino</label> 
                             <input className="w-full h-[20px] bg-gray-500 rounded-md px-2"  placeholder="" type="radio" name="Sexo" id="Female" value="female" onChange={handleChange}/> 
                            <label htmlFor="Female"> Feminino</label>   
                            </div>
                            <div className="Endereço flex flex-col flex-1 max-w-[300px]">
                        <label htmlFor="" className="text-gray-900">Endereço</label>
                        <input className="flex w-full h-[47px] bg-gray-500 rounded-md px-2" placeholder="Endereço" type="text" name="Endereço" id="Endereço" value={User.Endereço} onChange={handleChange}/>
                   
                         </div>
                    
                    </div>

                    <div className="Data flex gap-8">
                    <div className="flex flex-col flex-1 max-w-[264px]">
                        <label htmlFor="">Email:</label>
                        <input className="w-full h-[47px] bg-gray-500 rounded-md px-2"  placeholder="Ex.: exemplo@email.com " type="Email" name="Email" id="Email" value={User.Email} onChange={handleChange}/>
                    </div>
                    <div className="password flex flex-col flex-1 max-w-[264px]">
                        <label htmlFor="">Senha:</label>
                        <input className="w-full h-[47px] bg-gray-500 rounded-md px-2"  placeholder="******" type="Password" name="Password" id="Password" value={User.Password} onChange={handleChange} />
                    </div>
                    </div>
                    <button onClick={SubmitHandler} className="self-end mt-auto w-[264px] hover:opacity-90 transition-all flex items-center justify-center gap-2 rounded-md bg-green text-white py-2">
                    <img src={AppIcons.disk} alt="Disquete"/>
                         Cadastrar
                    
                         </button>
                    
                    </form>
        
                </div>
             
        </Page>
    )
}
export default Singup