import { useState, useEffect } from 'react';

import { carregaProdutos } from '../servicos/carregaDados';

export default function useProdutos(melhoresProdutos) {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutos();
        retorno.lista.sort(
            (produto1, produto2) => produto1.distancia - produto2.distancia,
        );
        let novaLista = retorno.lista;
        
        if (melhoresProdutos) {
            novaLista = novaLista.filter(
                (produto) => produto.estrelas > 3
            );
        }
        setLista(novaLista);
    }, []);

    return lista;
}
