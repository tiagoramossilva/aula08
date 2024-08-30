import ClienteManager from "../entities/ClienteManager";
import { describe, expect, it } from 'vitest';

describe("Classe ClienteManager", () => {
  let clienteManager;
  let cliente1;
  let cliente2;

  beforeEach(() => {
    clienteManager = new ClienteManager();
    cliente1 = new Cliente("senha123", "cliente1@email.com", "cliente1");
    cliente2 = new Cliente("senha456", "cliente2@email.com", "cliente2");
    clienteManager.adicionarCliente(cliente1);
    clienteManager.adicionarCliente(cliente2);
  });

  it("deve adicionar um cliente à lista de clientes", () => {
    expect(clienteManager.buscarCliente("cliente1@email.com")).toBe(cliente1);
    expect(clienteManager.buscarCliente("cliente2@email.com")).toBe(cliente2);
  });

  it("deve remover um cliente da lista com base no email", () => {
    clienteManager.removerCliente("cliente1@email.com");
    expect(clienteManager.buscarCliente("cliente1@email.com")).toBeUndefined();
    expect(clienteManager.buscarCliente("cliente2@email.com")).toBe(cliente2);
  });

  it("deve encontrar um cliente na lista pelo email", () => {
    expect(clienteManager.buscarCliente("cliente2@email.com")).toBe(cliente2);
  });
  
  it("deve retornar undefined para busca de um email que não existe", () => {
    expect(
      clienteManager.buscarCliente("emailInexistente@email.com")
    ).toBeUndefined();
  });
});
