SELECT * FROM sakila.film;
SELECT title AS Filmes, release_year AS 'Ano Lançamento', rating AS Classificação FROM sakila.film;
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(film_id) FROM sakila.film;
SELECT * from sakila.customer;
SELECT DISTINCT last_name FROM sakila.customer;
SELECT COUNT(category_id) FROM sakila.category;
SELECT COUNT(country_id) FROM country;
SELECT * FROM language LIMIT 4 OFFSET 1;
SELECT * FROM sakila.film;
SELECT title AS título, release_year AS 'ano de lançamento', length AS duração, rating AS Avaliação, replacement_cost AS 'custo de substituição'
	FROM sakila.film ORDER BY length DESC, replacement_cost ASC LIMIT 20;