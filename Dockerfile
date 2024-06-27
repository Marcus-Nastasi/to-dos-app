# Dockerfile
FROM node:latest

# Criar diretório da aplicação
WORKDIR /app

# Copiar arquivos da aplicação para o container
COPY . /app

# Instalar dependências da aplicação
RUN cd backend
RUN npm install

RUN cd ..

RUN cd frontend
RUN npm install

# Expor a porta 3030
EXPOSE 3030

# Comando para rodar a aplicação
CMD ["cd app/backend/ &&", "npm run dev"]


