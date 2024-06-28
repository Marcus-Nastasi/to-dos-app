# Dockerfile
FROM node:latest

# Criar diretório da aplicação
WORKDIR /app

# Copiar arquivos da aplicação para o container
COPY . /app

# Instalar dependências da aplicação
RUN cd backend && npm install

RUN cd frontend && npm install

# Expor a porta 3030
EXPOSE 3030

# Comando para rodar a aplicação
CMD ["node", "backend/dist/app.js"]


