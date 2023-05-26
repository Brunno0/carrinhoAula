import React, { useEffect } from "react";
import { useState } from "react";
import { pacoteDeProdutos } from "./pacoteDeProdutos";
import Produtos from "./Cards/Produtos"
import Carrinho from "./Carrinho/Carrinho";

function App() {
  const [listaDeProdutos] = useState(pacoteDeProdutos)
  const [carrinho, setCarrinho] = useState([])

  const adicionarAoCarrinho = (produto) => {
    let produtoJaNoCarrinho = false;
    
    const novoCarrinho = carrinho.map((item) => {
      if (item.name === produto.name) {
        produtoJaNoCarrinho =true;
        item.quantidade++
      }
      return item
    })

    if (!produtoJaNoCarrinho) {
      const novoProduto = {
        ...produto,
        quantidade: 1
      }
      novoCarrinho.push(novoProduto)
    }
    setCarrinho(novoCarrinho)
  }

  useEffect(()=>{

    if(carrinho.length>0){
      localStorage.setItem('car', JSON.stringify(carrinho))
    }

  },[carrinho])

  useEffect(()=>{
      const carrinhoLocalStorage = localStorage.getItem('car')
      if(carrinhoLocalStorage){
        setCarrinho(JSON.parse(carrinhoLocalStorage))
      }
  },[])

 const removerDoCarrinho =(produto) =>{
    const carrinoNovo = carrinho.filter((item)=>{
      if(item.name ===produto.name && item.quantidade ===1){
        localStorage.removeItem('car')
        return false
      }
      return item
    }).map((item)=>{
      if(produto.name === item.name){
        item.quantidade--
      }
      return item
    })
    setCarrinho(carrinoNovo)
 }

  const produtos = listaDeProdutos.map(item => {
    return <Produtos
      key={item.id}
      produto={item}
      adicionarAoCarrinho={adicionarAoCarrinho}
    />

  })
  return (
    <div>
          {produtos}
      <Carrinho 
          carrinho={carrinho}
          removerDoCarrinho={removerDoCarrinho}
      ></Carrinho>
    </div>
  );
}

export default App;
