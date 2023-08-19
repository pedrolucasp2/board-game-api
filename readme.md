
Exercício: Desenvolvimento de uma API RESTful para Gestão de Jogos de Tabuleiro com
Node.js, Express e Microsoft SQL Server
A loja de jogos de tabuleiro agora está expandindo suas operações e precisa de uma
solução mais robusta para gerenciar seu catálogo. Sua tarefa é desenvolver uma API
RESTful utilizando Node.js, o framework Express e uma conexão com um banco de dados
Microsoft SQL Server. Essa API permitirá a gestão completa dos jogos de tabuleiro, com
operações CRUD (Create, Read, Update, Delete) diretamente no banco de dados.
Requisitos:


1. 
Configure um servidor Node.js utilizando o framework Express para lidar com as
requisições HTTP.

2. 

Estabeleça uma conexão com um banco de dados Microsoft SQL Server. Utilize uma
biblioteca adequada, como "mssql" e Sequelize, para realizar operações de banco
de dados.

3.

Implemente os seguintes endpoints para as operações CRUD sobre os jogos de
tabuleiro:
a. Criação: Permita a adição de um novo jogo de tabuleiro ao catálogo. Os
clientes devem fornecer informações como título, descrição, número de jogadores
recomendados e faixa etária. Os dados devem ser inseridos no banco de dados.
b. Leitura: Implemente endpoints que permitam aos clientes obter informações
sobre os jogos de tabuleiro disponíveis. Isso pode incluir a lista completa de
jogos ou a busca por um jogo específico por ID, com as informações recuperadas
do banco de dados.
c. Atualização: Possibilite a atualização das informações de um jogo existente.
Os clientes devem ser capazes de enviar um pedido com o ID do jogo a ser
atualizado e as novas informações relevantes. As alterações devem ser
refletidas no banco de dados.
d. Exclusão: Implemente um endpoint para permitir a remoção de um jogo do
catálogo com base em seu ID. A exclusão deve ser realizada no banco de dados.
4. Realize validações adequadas nos dados fornecidos pelos clientes para garantir
que as requisições sejam tratadas corretamente e que os dados inseridos no
banco de dados sejam consistentes.
5. Teste a API utilizando ferramentas como Postman ou Insomnia, verificando se
todas as operações CRUD funcionam conforme o esperado e se os dados são
corretamente armazenados no banco de dados.
Este exercício oferece a oportunidade de trabalhar com integração de banco de dados
SQL Server em uma API RESTful. Certifique-se de aplicar os princípios RESTful, usar os
métodos HTTP apropriados e criar URLs significativas para os endpoints. Isso
proporcionará uma valiosa experiência no desenvolvimento de APIs em um contexto real.