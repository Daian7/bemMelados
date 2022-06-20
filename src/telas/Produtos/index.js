import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import Produto from './componentes/Produto';
import Topo from './componentes/Topo';
import useProdutos from '../../hooks/useProdutos';
import useTextos from '../../hooks/useTextos';

export default function Produtos({ melhoresProdutos }) {
  const navigation = useNavigation();
  const route = useRoute();

  const [exibeMensagem, setExibeMensagem] = useState(false);
  console.log(melhoresProdutos);
  const lista = useProdutos(melhoresProdutos);
  const { tituloProdutos, mensagemCompra } = useTextos();

  const nomeCompra = route.params?.compra.nome;
  const timestampCompra = route.params?.compra.timestamp;
  const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra);

  useEffect(() => {
    setExibeMensagem(!!nomeCompra);
    let timeout;

    if(nomeCompra){
      timeout = setTimeout(() => {
        setExibeMensagem(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [timestampCompra]);


  const TopoLista = () => {
    return <>
      <Topo melhoresProdutos={melhoresProdutos} />
      { exibeMensagem && <Text style={estilos.compra}>{ mensagemCompleta }</Text>}
      <Text style={estilos.titulo}>{tituloProdutos}</Text>
    </>
  }

  return <FlatList
    data={lista}
    renderItem={
      ({ item }) => <Produto {...item} aoPressionar={() => {
        navigation.navigate('Cesta', {item})
      }} />
    }
    keyExtractor={({ nome }) => nome}
    ListHeaderComponent={TopoLista}
    style={estilos.lista} />
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 16
  }
})
