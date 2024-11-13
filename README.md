# O que é o Node.js:

- Node.js is not a programming language.
- Javascript is a programming language.

JS Runtime Eviroment. Node.js is an environment that offers features that allow you write and run applications in JavaScript.

- O Node.js can do everything you think, from websites to automation scripts, including API creation

# Onde o Node.js pode ser usado:
Lista:
- Backend;
- Frontend;
- Micro serviços;

-> API:
-Web;
-Desktop;
-Mobile;

-> Scripts de automação;
-> I.A;
-> Machine Learning;


# Advantages of Node.js:
-> Node.js Foundation:
-IBM;
-Microsoft;
-Paypal;

-> Rápido:
- Execução;
- Prototipagem;

-> Escalável;
-> Aplicativo de ponto único;
-> JS em todos os lugares;

-> Ecossistema gigante:
-Comunidade;
-Biblioteca;

-> amplamente utilizado;

# V8 Engine:
V8 é o interpretador da linguagem JavaScript. Desenvolvido pelo Google e usado no navegador Google Chrome.

O V8 é desenvolvido na linguagem de programação C++, com o objetivo de aumentar o desempenho de execução do Javascript.

# Como o Node funciona:
Exemplo:
Usuário registra login e senha, clica no botão de ação:

Action - requisition -> Event Loop (Single thread & Non-blocking I/O) - register callback. Call Stack {function 1, function 2, function 3} -> operation complet -> Event Loop (single thread & Non-Blockin) - execute callback - action



# Rotas: 
Point A  -> route:ways -> point b

Exemple:
my website -> https://myserver.com.br/products -> Server

Neste exemplo, "Ponto A" é o meu site (frontend) que precisa acessar o servidor. Mas para acessar o servidor, precisamos da rota. A rota comunica o site com o servidor.

# Methods || HTTP VERBS

GET - Read
POST - Create
PUT  - Update
DElETE - Delete
PATCH - Partial Update

# Parâmetros de Rota:
É uma estratégia que usamos para passar o parâmetro, por exemplo::
 
<!-- api address                       route      parameter-->
https://enderecoservidor.com.br       /user/        5


app.get('/message/:id/:user', (request, response) => {
    const {id, user} = request.params;

    response.send(`
    ID Message: ${id}
    For user: ${user}`);
} )

Neste exemplo, "request.params" é usado para dados simples. Não usamos request.params para dados complexos.

# Parâmetros de Consulta -- Query Params
Example:
<!--api address                   route  separator             key       value    separator        key       value-->  
https://enderecoservidor.com.br  /user/      ?                 page   =    2          &            limit =    10

Há uma diferença entre route.params e query.params. Você precisa declarar route.params na requisição, mas em query.params você não precisa.

Exemplo:

> Route.params

app.get('/message/:id/:user', (request, response) => {
    const {id, user} = request.params;

    response.send(`
    ID message: ${id}
    For user: ${user}`)
});

> Query params

app.get('/user', (request, response) => {
    const {page, limit} = request.query;

    response.send(`
    page: ${page}. limit ${limit}`);

});

Em query.params, você não precisa declarar '/user/:page/:limit'.

# Nodemon:
Comando de instalação:
npm install nodemon --save-dev

Obs: "--save-dev" esta flag é usada como dependência de desenvolvimento. Será usada quando estivermos desenvolvendo um aplicativo.

Comando para executar:
npm run dev. 

# Controllers
Os controladores servem para verificar informações e processar dados

Neste projeto, usaremos Classes

Exemplo:

class UsersController {
 // index  - GET to list registers;
 // show   - GET to show specific register;
 // create - POST to create register;
 // update - UPDATE for update register;
 // delete - DELETE register;
}

O controlador usa no máximo 5 métodos, se passar de 5 crie outro controlador.


# Códigos HTTP ou Código de Status:
> 1xx: Informacional = a requisição foi aceita ou o processamento está em andamento.
> 102 - Processando

> 2xx: Sucesso
> 200: Requisição bem-sucedida
> 201: Criado - usado com o método POST

> 3xx: Redirecionamento:
> 301: Movido permanentemente
> 302: Movido temporariamente

> 4xx: Erro do Cliente:
> 400: Requisição inválida
> 401: Não autorizado
> 404: Não encontrado

> 5xx: Erro do Servidor:
> 500: Erro interno


# Middleware: 
Middlewares são funções que têm acesso ao objeto de requisição, objeto de resposta e à próxima função middleware no ciclo de requisição-resposta do aplicativo.

Exemplo:
site -> requisição -> middleware -> newProduct().

# Construtor de Consultas SQL (Query Builder)
QUERY BUILDER é um construtor de Consulta. O Query Builder permite que você construa instruções SQL independente do banco de dados utilizados.

# Migrations
É uma forma de versionar a base de dados. Migrations trabalha na manipulação da base de dados: criando, alterando ou removendo.

> UP:
Método responsável por criar ou alterar algo no banco de dados.

> Down: 
Responsável pelo rollback. Ou seja, desfazer as alterações realizadas pela migration.

# NPM:
Node Package Manager é o gerenciador de pacotes padrão para Node.js. Os pacotes e módulos necessários no projeto Node são instalados usando npm. E também utilizamos o npm para executar scripts e bibliotecas instaladas.

Foco em instalação

# NPX:
O npx significa Node Package Execute e vem com o npm acima da versão 5.2. É um executador de pacotes npm que pode executar qualquer pacote que você quiser do registro NPM sem sequer instalar esse pacote.

Foco em execução.

# Primary Key:
Identificador único dentro de uma tabela. Assegura que jamais será duplicado o valor.

# Foreign Key:
É quando você tem outra chave que é gerada dentro de outra tabela. Digamos que exista uma tabela de notas e queremos conectar um registro com outra informação de tal usuário. Iremos precisar da referência da tabela de usuário com sua Foreign Key.

# Cardinalidade: 
É a frequência que uma entidade se relaciona com a outra, ou, a frequência que uma tabela se relaciona com a outra.

# InnerJoin:
Serve para unir tabelas, para que possamos selecionar duas tabelas unificados. Em uma única consulta.
