-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos 
-- livros que ainda não foram emprestados.
SELECT Id, Title
FROM hotel.Books AS b
WHERE NOT EXISTS(
    SELECT *
    FROM hotel.Books_Lent
    WHERE b.Id = book_id
);
-- 1 3 5 //  6 7 
SELECT Id AS ID, Title AS Tituto
FROM hotel.Books AS B
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE book_id = B.Id
    AND returned = 0
);

-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos
--  livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT * FROM hotel.Books_Lent;
SELECT * FROM hotel.Books;

SELECT Id, Title AS Tituto
FROM hotel.Books AS B
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE book_id = B.Id
    AND returned = 0
)
AND Title LIKE '%lost%';

SELECT Id, Title
FROM hotel.Books b
WHERE EXISTS(
    SELECT *
    FROM hotel.Books_Lent
    WHERE b.Id = book_id AND b.Title like '%lost%'
);	

-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes
--  que ainda não compraram um carro.
SELECT 
    Name
FROM
    hotel.Customers AS C
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = C.CustomerId);

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers
-- e carsales , exiba o nome do cliente e o modelo do carro de todos os
-- clientes que fizeram compras de carros.
SELECT * FROM hotel.Car;
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;

SELECT 
    CUS.name, CAR.name
FROM
    hotel.Cars CAR
        INNER JOIN
    hotel.Customers CUS
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = CUS.CustomerId
                AND carID = CAR.ID);