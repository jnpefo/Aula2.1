-- Utilizando a tabela sakila.payment , monte uma function que retorna a 
-- quantidade total de pagamentos feitos até o momento por um determinado customer_id .
USE sakila;
DELIMITER $$

CREATE FUNCTION QuantidadeTotalPagamento(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE totalPagamento INT;
    SELECT COUNT(*)
    FROM sakila.payment
    WHERE customer_id = id INTO totalPagamento;
    RETURN totalPagamento;
END $$
DELIMITER ;

SELECT QuantidadeTotalPagamento(2);

-- Crie uma function que, dado o parâmetro de entrada inventory_id ,
-- retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$
CREATE FUNCTION NomeDoFilmePeloID(id INT)
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
	DECLARE NomeFilme VARCHAR(500);
	SELECT distinct F.title
    FROM sakila.inventory I
    INNER JOIN sakila.film F
    ON F.film_id = I.film_id
    WHERE I.inventory_id = id INTO NomeFilme;
    RETURN NomeFilme;
END $$ 
DELIMITER ;

SELECT NomeDoFilmePeloID(1);

-- Crie uma function que receba uma determinada categoria
-- de filme em formato de texto (ex: 'Action' , 'Horror' )
-- e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$
CREATE FUNCTION QuantidadeDeFilmesPorCategoria(Categoria VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE Filmes INT;
    SELECT COUNT(F.film_id) AS 'Filmes Feitos'
	FROM sakila.film AS F
	INNER JOIN sakila.film_category AS FC
	ON F.film_id = FC.film_id
	INNER JOIN sakila.category AS C
	ON FC.category_id = C.category_id
	WHERE C.name = Categoria INTO Filmes;
	RETURN Filmes;
END $$
DELIMITER ;

SELECT QuantidadeDeFilmesPorCategoria('Action');