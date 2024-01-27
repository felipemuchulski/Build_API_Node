# O que é o Node.js:

- Node.js is not a programming language.
- Javascript is a programming language.

JS Runtime Eviroment. Node.js is an environment that offers features that allow you write and run applications in JavaScript.

- O Node.js can do everything you think, from websites to automation scripts, including API creation

# Where can Node be used:
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

# Methods || HTTP VERBS

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

# Nodemon:
Comand install:
npm install nodemon --save-dev

Obs: "--save-dev" this flag is used as development dependency. it will be used when we are developing an application.

Comand run: 
npm run dev. 
