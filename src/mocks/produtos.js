import bolo1 from '../assets/produtos/bolo1.jpeg';
import bolodecopo from '../assets/produtos/bolodecopo.jpeg';
import brownie from '../assets/produtos/brownie.jpeg';
import ovo1 from '../assets/produtos/ovo1.png';
import boloChocolate from '../assets/produtos/bolo.jpg';

import aspargos from '../assets/verduras/Aspargos.png';
import tomate from '../assets/verduras/Tomate.png';
import brocolis from '../assets/verduras/Brócolis.png';
import batata from '../assets/verduras/Batata.png';
import pepino from '../assets/verduras/Pepino.png';
import abobora from '../assets/verduras/Abóbora.png';
import cenoura from '../assets/verduras/Cenouras.png';
import cenoura2 from '../assets/verduras/Cenouras2.png';
import verduras from '../assets/verduras/Verduras.png';


const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtos = {
  lista: [
    {
      nome: "Bolo de Chocolate",
      imagem: boloChocolate,
      distancia: gerarNumeroAleatorio(30, 100),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Brócolis e Pepino",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",
            imagem: pepino
          },
          itens: [
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
          ]
        },
        {
          detalhes: {
            nome: "Brócolis",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: brocolis
          },
          itens: [
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
          ]
        }
      ]
    },
    {
      nome: "Bolo de Morango",
      imagem: bolo1,
      distancia: gerarNumeroAleatorio(30, 100),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Salada completa",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: verduras
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
          ]
        },
        {
          detalhes: {
            nome: "Tomate e pepino",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: tomate
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
          ]
        }
      ]
    },
    {
      nome: "Bolo de Copo",
      imagem: bolodecopo,
      distancia: gerarNumeroAleatorio(30, 100),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Muita Batata",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: batata
          },
          itens: [
            {
              nome: "Batata",
              imagem: batata,
            },
          ]
        },
        {
          detalhes: {
            nome: "Tomate e Brócolis",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: brocolis
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
          ]
        }
      ]
    },
    {
      nome: "Brownie",
      imagem: brownie,
      distancia: gerarNumeroAleatorio(30, 100),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Abobora e Aspargos",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: aspargos
          },
          itens: [
            {
              nome: "Abóbora",
              imagem: abobora,
            },
            {
              nome: "Aspargos",
              imagem: aspargos,
            }
          ]
        },
        {
          detalhes: {
            nome: "Tomate e Abobora",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: abobora
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Abóbora",
              imagem: abobora,
            }
          ]
        }
      ]
    },
    {
      nome: "Ovo de Brigadeiro",
      imagem: ovo1,
      distancia: gerarNumeroAleatorio(30, 100),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Pepinos",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: pepino
          },
          itens: [
            {
              nome: "Pepino",
              imagem: pepino,
            },
          ]
        },
        {
          detalhes: {
            nome: "Brócolis, Aspargos e Cenoura",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",

            imagem: cenoura2
          },
          itens: [
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Aspargos",
              imagem: aspargos,
            },
            {
              nome: "Cenoura",
              imagem: cenoura,
            }
          ]
        }
      ]
    }
  ]
};

export default produtos;
