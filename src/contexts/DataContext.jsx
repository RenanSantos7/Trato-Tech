import { createContext, useState, useEffect } from "react"

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([])

    const endPoint = 'http://localhost:8000'

    async function getProdutos() {
        try {
            const resposta = await fetch(`${endPoint}/produtos`);
            if (resposta.ok) {
                const dados = await resposta.json()
                console.log(dados);
                setProdutos(dados)
            } else {
                throw new Error(`Erro na requisição: ${resposta.status} ${resposta.statusText}`)
            }
        } catch (error) {
            console.error('Erro ao buscar dados dos produtos:', error);
        }
    }

    useEffect(() => {
        getProdutos()
    }, [])

    useEffect(() => {
        console.log(produtos);
    }, [produtos])

    return (
        <DataContext.Provider value={{
            produtos, setProdutos
        }}>
            {children}
        </DataContext.Provider>
    )
}