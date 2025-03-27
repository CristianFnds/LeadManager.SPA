# 🚀 React + Vite + TypeScript

Este projeto é uma aplicação React criada com Vite e TypeScript.

## 📌 Requisitos
Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🛠️ Instalação
1. Clone o repositório:
   ```sh
     git clone https://github.com/CristianFnds/LeadManager.SPA.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd LeadManager
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
   ou
   ```sh
   yarn install
   ```

## ▶️ Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute:
```sh
npm run dev
```
Ou com Yarn:
```sh
yarn dev
```
O projeto será iniciado em `http://localhost:5173/`.

## 🔧 Configuração do `.env`
O projeto utiliza variáveis de ambiente configuradas em um arquivo `.env` localizado na raiz do projeto. Certifique-se de criar um arquivo `.env` com o seguinte conteúdo:
```sh
VITE_API_URL=http://localhost:5264/Leads
```
Para acessar as variáveis dentro do código, utilize:
```ts
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🔨 Build para Produção
Para gerar uma versão otimizada para produção, execute:
```sh
npm run build
```
Os arquivos gerados estarão na pasta `dist/`.

## 🛠 Tecnologias Utilizadas
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## 📝 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo!

