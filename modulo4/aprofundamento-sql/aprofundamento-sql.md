<h5>Aprofundamento SQL</h5>

**Exercício 1**
eia os comandos abaixo e indique o que eles fazem. Não os rode nas tabelas desse projeto!
Explique o que elas fariam se fossem rodadas.

A)
ALTER TABLE Actor DROP COLUMN salary;
Alterar a tabela Actor. Deletarr a coluna salary.


B)
ˋALTER TABLE Actor CHANGE gender sex VARCHAR(6);ˋ
Alterar a tabela Actor. Muda o gender por sex e restringir até 6 strings.

C)
ˋALTER TABLE Actor CHANGE gender gender VARCHAR(255);ˋ
Alterar a tabela Actor.Limite de strings até 255.

D)Agora,  altere a coluna gender da tabela ACTOR para que ele 
aceite strings com até 100 caracteres

ˋALTER TABLE Actor CHANGE gender gender VARCHAR(100);ˋ

**Exercício 2**

Além de criar e ler as tabelas, é muito importante que entendamos também como
atualizar e deletar. Inclusive, essas 4 operações têm um nome muito famoso
que vocês com certeza irão ouvir no dia a dia do trabalho: CRUD. Quando falamos
que vamos fazer um CRUD, queremos dizer que vamos fazer alguma aplicação que cria
(Create), lê (Read), atualiza (Update) e deleta (Delete) algum tipo de informação.

No MySQL, existem mais dois operadores que nos permitiram fazer o CRUD de qualquer
coisa. O primeiro deles é o `UPDATE`. A query abaixo muda o nome do ator com id `123` para `Moacyr Franco`:

~~~UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123"~~~

a) *Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*

~~~UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";~~~

b) *Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*

~~~UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";~~~

c) *Escreva uma query que atualize todas as informações do ator com o id `005`*

~~~UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";~~~

d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*

**Exercício 3**

Para finalizar o CRUD, vamos ver o D: `DELETE`. Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela. 

Por exemplo, se quisermos apagar o ator com o nome `Tony Ramos`

~~~DELETE FROM Actor WHERE name = "Tony Ramos"~~~

a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*

~~~DELETE FROM Actor WHERE name = "Fernanda Montenegro";~~~

b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*

~~~DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000~~~

**Exercício 4**


a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*

~~~SELECT MAX(salary) FROM Actor~~~

b) *Escreva uma query que pegue o menor salário das atrizes*

~~~SELECT MAX(salary) FROM Actor~~~

c) *Escreva uma query que pegue a quantidade de atrizes*

~~~SELECT COUNT(*) FROM Actor WHERE gender = "female"~~~

d) *Escreva uma query que pegue a soma de todos os salários*

~~~SELECT SUM(salary) FROM Actor~~~

**Exercício 5**

a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*

~~~SELECT COUNT(*), gender
FROM Actor
GROUP BY gender~~~

Função SQL que faz a contagem total dos atores e os agrupa de acordo com o gênero.


b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*

~~~SELECT id, name FROM Actor
ORDER BY name DESC;~~~

c) *Faça uma query que retorne todos os atores ordenados pelo salário*

~~~SELECT * FROM Actor
ORDER BY salary;~~~

d) *Faça uma query que retorne os atores com os três maiores salarios*

~~~SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;~~~

e) *Faça uma query que retorne a média de salário por gênero*

~~~SELECT AVG(salary), gender FROM Actor
GROUP BY gender;~~~

**Exercício 6**

a) *Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 

~~~ALTER TABLE Movie ADD playing_limit_date DATE;~~~

b) *Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*

~~~ALTER TABLE Movie CHANGE rating rating FLOAT;~~~

c) *Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*

~~~UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"~~~

d) *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*

`DELETE FROM Movie WHERE id = "001"`






