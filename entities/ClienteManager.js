class ClienteManager{
    constructor(){
        this.clientes = [];
    }

    adicionarCliente(cliente){
        this.clientes.push(cliente)
    }

    removerCliente(nome_usuario){
        const index = this.clientesfindIndex(cliente => cliente.nome_usuario === nome_usuario)
        this.clientes.splice(index, 1)
    }

    buscarCliente(nome_usuario){
        return this.clientes.find(cliente => cliente.nome_usuario === nome_usuario)
    }

}

export default ClienteManager;