import logo from "/src/assets/logo.svg"

export function Login() {
  return (
      <>
      <div>Login</div>

{/* container principal */}
<div className="containerPrim">


  {/* container da imagem */}
  <div className="flex bg-blue-400">
  <img src="" alt="" />
  </div>

  <div>
    <img src={logo} alt="" />
  </div>

  <form >  
    {/* contender dos formularios */}
    <div className="inputContainer">
      <label htmlFor="cpf">cpf</label>
      <input type="text" name="cpf" id="cpf"placeholder="000.000.000-00" />

    </div>

    <div className="inputContainer">
      <label htmlFor="password">password</label>
      <input type="password" name="password" id="password"placeholder="***********" />

    </div>

    <button className="button">Login</button>

    <a href="">esqueci minha senha</a>

  </form>

</div>
</>
  )
}
