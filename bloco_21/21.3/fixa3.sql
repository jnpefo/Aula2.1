-- Crie um TRIGGER que, a cada nova inserção feita na tabela carros ,
-- defina o valor da coluna data_atualizacao para o momento do ocorrido,
-- a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER InserirCarro
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
    NEW.acao = 'INSERÇÃO',
    NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

INSERT INTO carros(preco) VALUES (1000);

SELECT * FROM betrybe_automoveis.carros;

-- Crie um TRIGGER que, a cada atualização feita na tabela carros , 
-- defina o valor da coluna data_atualizacao para o momento do ocorrido 
-- e a acao para 'ATUALIZAÇÃO' .
USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER AtualizaTabelaCarros
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
    NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

SET SQL_SAFE_UPDATES = 0;
UPDATE betrybe_automoveis.carros
SET preco = 12000;

SELECT * FROM betrybe_automoveis.carros;

-- Crie um TRIGGER que, a cada exclusão feita na tabela carros ,
-- envie para a tabela log_operacoes as informações do tipo_operacao como
-- 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER ExclucaoTabelaCarros
	AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES('EXCLUSÃO', NOW());
END $$
DELIMITER ;

DELETE FROM betrybe_automoveis.carros
WHERE id_carro = 1;

SELECT * FROM betrybe_automoveis.log_operacoes;