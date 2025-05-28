# Guia para Rodar o Projeto

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

1. **Frontend**: Desenvolvido em React + Vite, localizado na pasta `zendesk-test`.
2. **Backend**: Uma API intermediária criada em Python utilizando Flask, localizada na pasta `zendesk-test-backend`. Esta API funciona como um proxy para consumir a API da Farmina, evitando erros de CORS.

Além disso, há um teste de HTML na pasta `html-test`.

---

## Passos para Rodar o Projeto

### 1. Rodar o Backend (API Flask)
Acesse a pasta `zendesk-test-backend` e siga os passos abaixo:

1. Instale as dependências:
   ```bash
   pip install -r requirements.txt

2. Inicie o servidor Flask:
   ```bash
   python app.py

O backend estará rodando e funcionando como proxy para a API da Farmina.

2. Rodar o Frontend (React + Vite)

Acesse a pasta `zendesk-test` e siga os passos abaixo:

1. Instale as dependências:
    ```bash
    npm install
2. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev

O front end estará disponível no navegador, geralmente em `http://localhost:5173`
