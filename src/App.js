import React from "react";
import { useState } from "react";
import { pacoteDeProdutos } from "./pacoteDeProdutos";
import Produtos from "./Cards/Produtos"
import Carrinho from "./Carrinho/Carrinho";

function App() {
  const [listaDeProdutos, setListadeProdutos]= useState([
    {
      id: 1,
      name: 'Produto legal',
      price: 123,
      photo: 'https://picsum.photos/200/200?a=1',
    },
    {
      id: 2,
      name: 'Produto 2',
      price: 200,
      photo: 'https://picsum.photos/200/200?a=2'
    },
    {
      id: 3,
      name: 'Produto 3',
      price: 30,
      photo: 'https://picsum.photos/200/200?a=3'
    },
    {
      id: 4,
      name: 'Produto 4',
      price: 10,
      photo: 'https://picsum.photos/200/200?a=4'
    }
 ])
  const [carrinho,setCarrinho] = useState([])
  const [valorTotal,setValarToal]= useState(0)

  const addToCar = (produto) =>{
    const novoCar = [...carrinho, produto]
    setCarrinho(novoCar)
    console.log(produto)

  }

 const produtos = listaDeProdutos.map(item =>{
  return <Produtos 
          produto={item} 
          addToCar={addToCar}
          />

 })


  return (
    <div>
      {produtos}
      <br>
      </br>
      <Carrinho carrinho={carrinho}></Carrinho>
    </div>
  );
}

export default App;
