O tema do meu projeto seria de eletrodomestico ele serve para cadastrar pessoas e seus objetos com preço ele tem como vc cadastrar dar update, delete( que seria só desativar ), post e puxar informações

no postman vc coloca
http://localhost:8080/items/items  puxar todos 
http://localhost:8080/items/items  cadastrar
http://localhost:8080/items/items/id aqui vc puxa com base no id
http://localhost:8080/items/items/id para dar update
http://localhost:8080/items/items/id para dar delete 


para colocar as dependencias
Set-ExecutionPolicy -Scope CurrentUser
RemoteSigned

para colocar as bibliotecas
npm install
npm i express nodemon config body-parse


esse vc coloca no package.json para conseguir dar start
"start": "nodemon index.js"



