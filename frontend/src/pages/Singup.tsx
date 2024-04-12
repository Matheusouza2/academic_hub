import React,{useState} from "react";
import { Page } from "./Page";
import "../styles/Singup.css"
export function Singup(){ // Função de cadastro do usuário

    const [User, SetUser] =useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:""
    })
    type UserType ={
        FirstName:string,
        LastName:string,
        Email:string,
        Password:string

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
            <div className="singup-form">
                <form action="">
                    <div className="first-name">
                        <label htmlFor="">Primeiro nome:</label>
                        <input type="text" name="FirstName" id="FirstName" value={User.FirstName} onChange={handleChange}/>
                    </div>
                    <div className="last-name">
                        <label htmlFor="">Sobrenome:</label>
                        <input type="text" name="LastName" id="LastName" value={User.LastName} onChange={handleChange} />
                    </div>
                    <div className="email">
                        <label htmlFor="">Email:</label>
                        <input type="Email" name="Email" id="Email" value={User.Email} onChange={handleChange}/>
                    </div>
                    <div className="password">
                        <label htmlFor="">Senha:</label>
                        <input type="Password" name="Password" id="Password" value={User.Password} onChange={handleChange} />
                    </div>
                    <button onClick={SubmitHandler}>Cadastrar</button>

                </form>
        
        
             </div>
        </Page>
    )
}
export default Singup