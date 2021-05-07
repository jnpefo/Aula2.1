-- 1) Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org .
SELECT * FROM sakila.customer
	WHERE email LIKE '%SCHOFIELD%';
    
-- 2) Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão mais ativos no nosso sistema e pertencem à loja com o id 2. Porém, não inclua o cliente KENNETH no resultado.
SELECT first_name FROM sakila.customer
	WHERE store_id = 2
    AND active IS false
    AND first_name <> 'KENNETH'
    ORDER BY first_name ASC;

-- 3) O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição, dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT title, description, release_year, replacement_cost
	FROM sakila.film
	WHERE rating IN ('PG', 'G', 'PG-13')
    AND replacement_cost >= 18.00
    ORDER BY  replacement_cost DESC, title
    LIMIT 100;
 
-- 4) Quantos clientes estão ativos e na loja 1 ?
SELECT COUNT(*) FROM sakila.customer
	WHERE store_id = 1
    AND active IS TRUE;

-- 5) Mostre todos os detalhes dos clientes que não estão ativos na loja 1 .
SELECT * FROM sakila.customer
	WHERE store_id = 1
    AND active IS FALSE;
    
-- 6) Precisamos descobrir quais são os 50 filmes feitos para maiores de 17 anos e adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT * FROM sakila.film
	WHERE rating IN ('NC-17', 'R')
    ORDER BY rental_rate DESC, title ASC
	LIMIT 50;