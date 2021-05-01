-- Monte uma procedure que exiba os 10 atores mais populares, 
-- baseado em sua quantidade de filmes. Essa procedure não deve 
-- receber parâmetros de entrada ou saída e, quando chamada, deve
-- exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$
CREATE PROCEDURE MostraDezAoresMaisPopulares()
BEGIN
	SELECT actor_id, COUNT(*) AS 'quantidade de filmes'
    FROM film_actor
    GROUP BY actor_id
    LIMIT 10;
END $$
DELIMITER ;

CALL MostraDezAoresMaisPopulares();

-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria
-- desejada em uma string e que exiba o id do filme , seu titulo , o id de sua 
-- categoria e o nome da categoria selecionada. Use as tabelas film , film_category 
-- e category para montar essa procedure.
USE sakila;
DELIMITER $$
CREATE PROCEDURE MostraFilmesPelaCategoria(IN cat VARCHAR(100))
BEGIN
	SELECT F.film_id AS ID, F.title AS Titulo, FC.category_id AS IdFilme, C.name
	FROM sakila.film AS F
	INNER JOIN sakila.film_category AS FC
	ON F.film_id = FC.film_id
	INNER JOIN sakila.category AS C
	ON C.category_id = FC.category_id;
END $$
DELIMITER ;

CALL MostraFilmesPelaCategoria('Action');

-- Monte uma procedure que receba o email de um cliente como parâmetro
-- de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
USE sakila;
DELIMITER $$
CREATE PROCEDURE VerificaSeEstaAtivo(IN emailC VARCHAR(200), OUT ativo BOOL)
BEGIN
	SET ativo = (
        SELECT active
        FROM sakila.customer
        WHERE email = emailC
    );
END $$
DELIMITER ;

SELECT @ActiveStatus;
CALL VerificaSeEstaAtivo('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT * from sakila.customer;