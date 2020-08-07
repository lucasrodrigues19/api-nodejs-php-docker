# api-nodejs-php-docker
**Api construida com Node.js consumida em php, rodando em ambiente docker**
## Requisitos para executar para executar a aplicação
- [Docker](https://docs.docker.com/)
## Com o Docker instalado, e rodando, no terminal docker execute os comandos:
 - Mude para a pasta raiz do projeto:
 
   **cd pastadoprojeto**
  - OPCIONAL: liste as imagens, para verificar se precisa realmente construi-las.
  
    **docker image ls**
 #### 2ª ETAPA:
 - Construa(caso não tenha) a imagem do mysql 5 (o protocolo de autenticação entre o node.js e o mysql 5 é mais simples).
 
   **docker image build -t mysql5-image -f api/db/Dockerfile.**
 - Construa(caso não tenha) a imagem do node js:
 
   **docker image build -t node-image -f api/Dockerfile .**
 - Construa(caso não tenha) a imagem do php js:
 
    **docker image build -t php-image -f website/Dockerfile .**
    
 #### 3ª ETAPA:
 - Criando o container para o mysql5
     
     **docker container run -d -v $(pwd)/api/db/data-mysql5:/var/lib/mysql --rm --name mysql5-container  mysql5-image**
     
 - Criando o container para o node
     
     **docker container run -d -v $(pwd)/api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-image**
     
 - Criando o container para o php
     
     **docker container run -d -v $(pwd)/website:/var/www/html -p 8888:80 --link node-container --rm --name php-container php-image**
     
 #### 4ª ETAPA:
 - Em seu navegador, para visualizar a api funcionando, digite:
     
     **http://localhost:9001/products**
 - Em seu navegador, para visualizar a pagina php consumindo a api, digite:
     
     **http://localhost:8888/**
      
 ## Tecnologias usadas:
  - [PHP](https://www.php.net/manual/pt_BR/intro-whatis.php)
  - [DOCKER](https://docs.docker.com/)
  - [Node.js](https://nodejs.org/en/)
  - [Mysql](https://www.mysql.com/)
  - [Bootstrap](https://getbootstrap.com/)
  
  ## Informações Adicionais:
  - Author:
    
    **Lucas Pereira Rodirgues**
  - Contatos
    
      [LinkedIn](https://www.linkedin.com/in/lucas-rodrigues-521060191/)
     
      [Twitter](https://twitter.com/l_Rodrigues20)
   
     <a href="mailto:lucasp.rodrigues@uni9.edu.br?subject=Api%20Node%20com%20Docker" target="_blank">Email</a>
   
