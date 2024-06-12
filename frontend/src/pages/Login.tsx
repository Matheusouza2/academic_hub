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

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const result = await autenticarUser(cpf, password);
      setMessage(result.message);
      if (result.message === 'Login realizado com sucesso.') {
        localStorage.setItem('token', result.token); // Armazena o token JWT
        localStorage.setItem('name', result.name); // Armazena o nome do usuário, se necessário
        navigate('/DashboardAluno'); // Redireciona para a página de dashboard
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen w-screen">
      {/* container principal */}
      <div className="flex items-center justify-center overflow-hidden rounded-3xl h-3/4 sm:h-1/2 w-3/4 sm:w-1/2 shadow-2xl">
        {/* imagem */}
        <div className="bg-blue-400 sm:block hidden w-1/2">
          <img src={login} alt="imagem login" className="h-full w-full object-cover" />
        </div>
        {/* formulário */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center space-y-2 px-6">
          <header>
            <img src={logo} alt="logo" className="h-12" />
          </header>
          <form onSubmit={handleLogin} className="flex flex-col items-center space-y-4 w-full">
            <div className="w-full">
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">Usuário</label>
              <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
                placeholder="Usuário"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="***********"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <label htmlFor="check" className="flex items-center text-sm text-gray-900">
                <input type="checkbox" id="check" className="bg-gray-500" />
                <span className="ml-2">Manter conectado?</span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Esqueci minha senha?</a>
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500">Login</button>
          </form>
          {message && <p className="text-sm text-red-600 mt-2">{message}</p>}
        </div>
      </div>
    </section>
  );
}
