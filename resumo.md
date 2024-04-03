# Introdução:

> Criação do projeto Node;
- Criar o projeto com npm init -y (y utilizado para aceitar todos os termos);

- Package.json trás as informações básicas de um projeto em Node;

> Adicionando Express:
- Framework web rápido e flexível para poder lidar com requisições na web com protocolo HTTP, lidar com Request e Response

- Para instalar npm install express --save

- O Node permite irmos acrescentando as tecnologias que precisamos no nosso projeto.

> Executando aplicação:
- Alterar a configuração do package.json na sessão de "scripts", colocar o seguinte:

"star": "node ./src/server.js"

Ficando assim mais facil sua execução no terminal com o comando "npm start".

> Rotas e Métodos HTTP:
- Rota é o caminho entre dois pontos, por exemplo é o caminho entre o frontend e backend. Ou seja um site. 

- Verbs HTTP:
GET: leitura
POST: criação
PUT: atualização
DELETE: deleção
PATCH: atualização parcial

Utilizados para informar o que queremos fazer entre frontend e backend.

> Método GET:
- Método GET utilizado para informar como funcionaria um exemplo com hello world, exemplo:

app.get("/message", (request, response) => {
    response.send("Hello World");
})


- Conseguida extrair as informações das requisições e também como utilizar o response.


> Route Params (Request Params):
- É uma estrátegia onde conseguimos passarmos uma informação como um parâmetro, por exemplo:

https://endereco.com/users/5  < esse "5" é o parâmetro simulando o id neste exemplo.

Exemplo:

app.get("/message/:id", (request, response) => {
    response.send(`id da mensagem é o: ${request.params.id}`);
})

Nesse caso acima utilizamos o ":" para informarmos que ele irá receber um parâmetro. Após isso pegamos o seu valor com "request.params.id"

- Serve para passarmos informações e valores no endereço da Rota.

- São utilizados para dados simples, informações pequenas e enxutas. O mais comum é passar par a id.

> Query Params:
- Quando queremos utilizar o query params, os valores são opicionais.

Exemplo:
app.get("/users", (request, response) => {
    const {page, limit} = request.query;

    response.send(`Página: ${page}. Mostrar: ${limit}`)
})

- Para mostrar esses recursos na pagina devemos ter nossa url com o seguinte formato:

https://localhost/users/?page=5&limit=10

> Nodemon:
- É um recurso que verifica as alterações feita no codígo e ele reinicia o servidor de forma rápida para aplicar as alterções de forma rápida.

- Para instalar é só rodar o comando:
 npm install nodemon --save-dev  (dev é um dependência de desenvolvimento) ou seja, utilzar ele somente quando estou desenvolvendo o código.

- Verificando no package.json terá uma nova parte do código "devDependencies".

- Pode se configurar o nodemon para iniciar o servidor:
Adicionando a seguinte linha:
 "start": "node ./src/server.js",
    "dev": "nodemon ./src/server.js"

- Depois rodar o comando npm run dev. Assim o nodemon estará ativo e rodando no projeto

> Insominia:
- É uma ferramenta que permite efetuar testes na API com todos os Verbs HTTP ou Métodos HTTP.

- Criar uma nova coleção para ter uma nova coleção de requisições.

> Método Post:
- Configurado URL com método Post no insominia dentro de uma nova coleção de trabalho.

> Body Params:
- Quando utilizamos o POST, enviamos as informações através do corpo da requisição.

- Neste modelo iremos utilizar no modelo tipo JSON, por exemplo:
INSOMINIA
{
    "name": "Felipe Muchulski",
    "email": "lipemuchulski@gmail.com"
}

- Para pegar essas informações na API deve se utilizar o seguinte código:
VS CODE

app.post("/users", (request, response) => {
    cosnt {name, email} = request.body

    response.send(`Usuario: ${name}, - Email: ${email}`);
})

- É necessario informar para nossa aplicação que os conteúdos da requisição irão retornar em formato JSON, para isso informamos no arquivo de server o seguinte comando:

app.use(express.json());

- Pode se também devolver a resposta da requisição com o seguinte comando:

response.json({name, email});

> Organizando a estrutura do projeto:
- Começar a separar as tarefas de cada parte do código;

- Ajuda a desenvolver o projeto na forma mais didática possível;

- Configurada a divisão do processo com as rotas, fazendo assim com que possa ser utilizado os métodos HTTP da maneira correta. 
