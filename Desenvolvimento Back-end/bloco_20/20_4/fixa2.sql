-- Atualize o primeiro nome de todas as pessoas da tabela sakila.actor
-- que possuem o primeiro nome "JULIA" para "JULES".
UPDATE sakila.actor SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
UPDATE sakila.category SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

-- Atualize o valor do aluguel para $25 de todos os filmes com duração maior que
-- 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo
-- de substituição maior que $20.
UPDATE sakila.film SET rental_rate = 25
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13')
AND replacement_cost > 20;

-- Foi determinado pelo setor financeiro que haverá um reajuste em todos os
-- preços dos filmes, com base em sua duração. Para todos os filmes com duração
-- entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes
-- com duração acima de 100 passará a ser de $20,00.
UPDATE sakila.film
SET rental_rate = (
CASE 
WHEN length BETWEEN 0 AND 100 THEN 10
WHEN length > 100 THEN 20
END);
