import { createContext, useState } from "react";


export const ContextInfo = createContext({})

export const ContextInfoProvider = ({ children }) => {
    const EmpreendimentosAll = ["Bem viver", "Boa Esperança", "Bosque Real", "Bosque Real 2", "Campo Verde", "Carro Quebrado", "Carro Quebrado 2", "Conceicao", "Colinas", "Corone", "Crispiniano", "Eldorado", "Eco Residence", "Eco Residence 2", "Fazenda Rumo", "Jardim Imperial", "Joao Araujo", "Jurema", "Lagoa Salgada", "Matinha", "Morada Brandao", "Onildo Silva", "Onildo Silva 2", "Pe de Serra", "Recanto do Alvorecer", "Saco do Capitao", "Santa Rita", "Sauipe", "Vila Real", "Vila Sabia"]
    const [pedidoInfo,setPedidoInfo] = useState([])
    const [user,setUser] = useState()

    return (
        <ContextInfo.Provider value={{ EmpreendimentosAll,pedidoInfo,setPedidoInfo,setUser,user }}>
            {children}
        </ContextInfo.Provider>
    )
}