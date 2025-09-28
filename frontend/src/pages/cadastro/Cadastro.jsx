import "./Cadastro.css";
import { useState } from "react";
import {Link} from 'react-router-dom'

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const cadastrarUsuario = (e) => {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !senha.trim() || !dataNascimento.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    } else {
      console.log("Cadadastrando...");
      setTimeout(() => {
        alert(`Usuário cadastrado com sucesso!`);
        console.log(`Usuário cadastrado com sucesso!, Bem-vindo(a) ${nome}`);
        setNome("");
        setEmail("");
        setSenha("");
        setDataNascimento("");
      }, 1000);
    }
  };

  return (
    <>
      <h2>Crie a sua conta para começar</h2>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="nome">Informe seu nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Informe seu email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Informe sua senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            required
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dataNascimento">
            Informe sua data de nascimento:
          </label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            required
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </div>
        <div>
          <input type="checkbox" id="termos" name="termos" required />
          <label htmlFor="termos">
            Aceito os termos e condições e as políticas de privacidade
          </label>
        </div>
        <button type="submit">Cadastrar</button>
        <Link to="/login">Já tenho uma conta</Link>
      </form>
    </>
  );
}

export default Cadastro;
