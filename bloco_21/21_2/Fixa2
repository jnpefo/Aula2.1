-- Queremos saber os ids e custos de substituição dos filmes que possuem o 
-- mesmo custo de substituição.
SELECT 
    T1.film_id,
    T1.replacement_cost,
    T2.film_id,
    T2.replacement_cost
FROM
    sakila.film AS T1,
    sakila.film AS T2
WHERE
    T1.replacement_cost = T2.replacement_cost;

-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração.
-- Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT 
    T1.title, T1.rental_duration, T2.title, T2.rental_duration
FROM
    sakila.film AS T1,
    sakila.film AS T2
WHERE
    T1.rental_duration = T2.rental_duration
HAVING T1.rental_duration BETWEEN 2 AND 4;
