import Cliente from "./entities/Cliente.js";
import ClienteManager from "./entities/ClienteManager.js";

const clienteManager = new ClienteManager();
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.criar('senha123', 'email1@example.com', 'usuario1');
clienteManager.adicionarCliente(cliente2);

cliente2.criar('senha456', 'exemplo2@gmail.com', 'usuario2');
clienteManager.adicionarCliente(cliente2);

console.log(cliente1, cliente2)

//atualizar

cliente1.atualizar('senha789', 'emai@iiii.com', 'usuario3')
console.log(cliente1)

//deletar

cliente2.deletar();
console.log(clienteManager.buscarCliente('usuario2'))
