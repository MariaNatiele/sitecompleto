import { useEffect, useState } from 'react';
import './App.css';
import Prato from './componentes/Prato.js';

function App() {
  //obtendo dados da api 
  const[pratos, setPratos] = useState([])

  //pegando os dados da API lá no Heroku
  useEffect(() => {
    fetch('http://maria-projeto.herokuapp.com/api/pratos/')
    .then(resposta => resposta.json())
    .then(dados => {
    setPratos(dados)
    })
  },[])

  return (
  <div className="App">
      <div className = "banner-container">
        <img src = "/imagens/banner.png" alt="banner da  pizza" />
      </div>

      <div className = "logo-container">
        <img src = "/imagens/pizza.png" alt="logo da pizza"/>
      </div>
      <section className="cardapio">
      {pratos.map(prato =>
       (<Prato 
        key = {prato.id} 
        nome = {prato.nome} 
        descricao = {prato.descricao} 
        imagem = {prato.imagem}
        preco = {prato.preco}
        />))}
      </section>
  
    </div>
  );
}

export default App;
