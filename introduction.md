# O que é o Node.js:

- Node.js is not a programming language.
- Javascript is a programming language.

JS Runtime Eviroment. Node.js is an environment that offers features that allow you write and run applications in JavaScript.

- O Node.js can do everything you think, from websites to automation scripts, including API creation

# Where can Node.js be used:
List:
- Backend;
- Frontend;
- Micro serviços;

-> API:
-Web;
-Desktop;
-Mobile;

-> Automation Scripts;
-> I.A;
-> Machine Learning;


# Advantages of Node.js:
-> Node.js Foundation:
-IBM;
-Microsoft;
-Paypal;

-> Fast:
- execution;
- prototype;

-> Scalabel;
-> Point aplicattion 
-> JS everywhere;

-> Ecossistema gigante:
-Community;
-Library;

-> Widely Used;

# v8 Engine:
v8 is interpretator JavaScript Language. Developed by Google and used in your browser Google Chrome.

V8 is developed in the C++ programming language, with the aim of increasing javascript execution performance.

# How the Node Works:
Exemple:
User register login and password, click onbutton action:

Action - requisition -> Event Loop (Single thread & Non-blocking I/O) - register callback. Call Stack {function 1, function 2, function 3} -> operation complet -> Event Loop (single thread & Non-Blockin) - execute callback - action


////////////////////////////////////////////////////////////

# Routes: 
Point A  -> route:ways -> point b

Exemple:
my website -> https://myserver.com.br/products -> Server

In that exemple,"Point A" is my website(frontend) that needs an access server. But to access the server we need the route. The route communicates from the website to the server.

# Methods || HTTP VERB
GET - Read
POST - Create
PUT  - Update
DElETE - Delete
PATCH - Partial Update

# Route Params
Is a strategy we made to pass the parameter, for example:
 
<!-- api address                       route      parameter-->
https://enderecoservidor.com.br       /user/        5


app.get('/message/:id/:user', (request, response) => {
    const {id, user} = request.params;

    response.send(`
    ID Message: ${id}
    For user: ${user}`);
} )

in this exemple, "request.params" is used for simple data. We don't use request.params for complex data.

# Query Paramns
Example:
<!--api address                   route  separator             key       value    separator        key       value-->  
https://enderecoservidor.com.br  /user/      ?                 page   =    2          &            limit =    10

There's a difference between route.params and query.params. You need to declare route.params in the request, but in query.params you don't need to.

Exemple:

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

In query.params you don't need declare '/user/:page/:limit'.


# Controllers
Controllers serve to verify information and process data.

In this project we will use Class.

example:

class UsersController {
 // index  - GET to list registers;
 // show   - GET to show specific register;
 // create - POST to create register;
 // update - UPDATE for update register;
 // delete - DELETE register;
}

Controller uses a maximum of 5 methods, if pass 5 create other controller


# HTTP Codes or Status Code:
> 1xx: Informational = the request is accepted or processing is running.
    102 - Processing

> 2xx: Success
    200: Successful request
    201: Created - used with method POST

> 3xx: Redirection:
    301: moved permenanetly
    302: moved

> 4xx: Client Error:
    400: bad request
    401: unauthorized
    404: not found

> 5xx: Server Error: 
    500: internal error


# Middleware: 
Middlewares they are functions that have access to the request object, response object and in the next function middleware of the application's request-response cycle.

Example:

site -> request -> middleware -> newProcut().


# SQL Query Builder
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