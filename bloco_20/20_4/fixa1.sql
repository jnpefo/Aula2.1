-- Insira um novo funcionário na tabela sakila.staff .
INSERT INTO sakila.staff
(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Jean', 'Franco', 3, 'jnpefo@gmail.com', 2, 1, 'jnpefo', NULL);

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois
-- funcionários novos em apenas uma query .
INSERT INTO sakila.staff
(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Jean', 'Franco', 3, 'jnpefo@gmail.com', 2, 1, 'jnpefo', NULL),
('Janclecia', 'Avelino', 4, 'janclecia@gmail.com', 1, 0, 'jan', NULL);

-- Selecione os cinco primeiros nomes e sobrenomes da tabela 
-- sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO sakila.category (name) VALUES
('Jean'),
('Jan'),
('Enzo');

-- Cadastre uma nova loja na tabela sakila.store .
INSERT INTO sakila.store (manager_staff_id, address_id) VALUES
(3, 2);
