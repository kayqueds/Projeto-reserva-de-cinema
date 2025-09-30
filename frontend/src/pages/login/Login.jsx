import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [index, setIndex] = useState(0);

   // Lista de imagens (pode trocar pelas suas)
  const imagens = [
    "https://blogprodutivamente.files.wordpress.com/2022/07/post-como-fazer-lista-de-tarefas-2.jpg?w=1024",
    "https://isoflex.com.br/wp-content/uploads/2022/12/matriz-de-gerenciamento-do-tempo.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2ee12c73344287.5c06973b51d22.jpg",
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, [imagens.length]);

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("Login feito:", { email, password });
  };

  const loginGoogle = () => {
    console.log("Login com Google feito");
  };

  return (
    <div className="login-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">TaskBoost</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">Início</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Sobre</a></li>
              <li className="nav-item"><a className="nav-link active" href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conteúdo */}
      <main>
        <div className="login-container">
          {/* Lado esquerdo */}
          <div className="login-left">
            <h2>Bem-vindo de volta!</h2>
            <p>Faça login para continuar</p>

            <form onSubmit={enviarFormulario}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="form-links">
                <Link to="/forgot-password">Esqueci minha senha</Link>
                <Link to="/cadastro">Cadastre-se</Link>
              </div>

              <button type="submit" className="btn-login">Login</button>

              <div className="divider">ou</div>

              <button type="button" className="btn-login-google" onClick={loginGoogle}>
                Continuar com Google
              </button>
            </form>
          </div>

          {/* Lado direito com imagens */}
          <div className="login-right">
            {imagens.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Slide ${i + 1}`}
                className={`login-img ${i === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
