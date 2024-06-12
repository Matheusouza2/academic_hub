import logo from "/src/assets/logo.svg";
import login from "/src/assets/imagen-login.svg";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

async function autenticarUser(cpf, password) {
  const response = await fetch('http://localhost:8000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cpf, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to authenticate');
  }

  return response.json();
}

export function Login() { 
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try{
      const result = await autenticarUser(cpf, password);
      setMessage(result.message);
      if (result.message === 'Login realizado com sucesso.') { //Mensagem de sucesso
        navigate('/DashboardAluno'); // Redireciona para a página de dashboard
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
  

  <section className="flex items-center justify-center h-screen w-screen">

    {/* container principal */}
    <div className="flex items-center justify-center overflow-hidden rounded-3xl h-1/2 w-1/2 shadow-2xl">
      {/* imagem */}
      <div className="bg-blue-400 sm:block hidden w-1/2">
        <img src={login} alt="imagem login" />
      </div>
      {/* formulário */}
      <div className="sm:w-1/2 flex flex-col items-center justify-center space-y-2">
        <header>
          <img src={logo} alt="logo" />
        </header>
        <form onSubmit={handleLogin} action=""className="flex flex-col items-center">
              <label htmlFor="cpf" >Usuário</label>
              <input type="text" id="cpf" value={cpf} onChange={(event) => setCpf(event.target.value)} placeholder="Usuário" className="bg-gray-500" />
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="***********" className="bg-gray-500" />
              <span className=" flex text-[12px]  text-gray-900 items-center justify-end m-2 space-x-2 w-full">
              <input type="checkbox" id="check" className="bg-gray-500" />
              <label htmlFor="check">manter conectado?</label>
              </span>
              <button className="bg-blue-400 w-full px-4 py-2 text-white ">Login</button>
        </form>
            {message && <p className="text-[12px] text-red">{message}</p>}
            <p className="text-[10px] text-[#7575D8] "><a href="">Esqueci minha senha?</a></p>
      </div>
    </div>

  </section>
  </>
  )
}
