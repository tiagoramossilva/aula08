import Cliente from "../entities/Cliente";
import { describe, expect, it } from 'vitest';

describe('Testes da Classe Cliente', () => {

    it('Deve criar um novo cliente', () => {
        
        const cliente = new Cliente();
        cliente.criar('senha', 'email', 'usuario');

        expect(cliente.senha).toBe('senha');
        expect(cliente.email).toBe('email');
        expect(cliente.nome_usuario).toBe('usuario');
    })

    it('Deve ler os atributos do cliente e retornar os valores corretor', () => {
        
        const cliente = new Cliente();
        cliente.criar('senha', 'email', 'usuario');
        const dados = cliente.ler();

        expect(dados.senha).toBe('senha');
        expect(dados.email).toBe('email');
        expect(dados.nome_usuario).toBe('usuario');

    })

    it('Deve atualizar os atributos', () => {
        
        const cliente = new Cliente();
        cliente.criar('senha', 'email', 'usuario');

        cliente.atualizar('outrasenha', 'outroemail', 'outrousuario')
        const dados = cliente.ler();
        
        expect(dados.senha).toBe('outrasenha');
        expect(dados.email).toBe('outroemail');
        expect(dados.nome_usuario).toBe('outrousuario');

    })

    it('Deve atualizar os atributos parcialmente', () => {
        
        const cliente = new Cliente();
        cliente.criar('senha', 'email', 'usuario');

        cliente.atualizar(undefined, 'outroemail')
        const dados = cliente.ler();
        
        expect(dados.senha).toBe('senha');
        expect(dados.email).toBe('outroemail');
        expect(dados.nome_usuario).toBe('usuario');

    })

    it('Deve deletar o cliente', () => {
        
        const cliente = new Cliente();
        cliente.criar('senha', 'email', 'usuario');

        cliente.deletar()
        const dados = cliente.ler();
        
        expect(dados.senha).toBe(null);
        expect(dados.email).toBe(null);
        expect(dados.nome_usuario).toBe(null);

    })


})