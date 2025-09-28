import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  //estados de senha e email
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("Login feito:", { email, password });
  };

  const loginGoogle = () => {
    console.log("Login com Google feito");
  };

  return (
    <div>
      <div>
        <div>
          <h1>Bem-vindo de volta!</h1>
          <p>Faça login para continuar!</p>
        </div>

        <form onSubmit={enviarFormulario}>
          <div>
            <label htmlFor="email">Informe seu E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password">Informe sua senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
            />
          </div>

          <Link to="/forgot-password">Esqueci minha senha</Link>

          <Link to="/cadastro">Cadastre-se</Link>

          <button type="submit">Login</button>

          <div>ou</div>

          <button type="button" onClick={loginGoogle}>
            Continuar com o Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
