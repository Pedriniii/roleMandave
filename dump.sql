CREATE DATABASE rolemandave;

-- Tabela de Pessoas
CREATE TABLE Pessoas (
    ID SERIAL PRIMARY KEY,
    NOME VARCHAR(160) NOT NULL,
    EMAIL VARCHAR(255) UNIQUE NOT NULL,
    APELIDO VARCHAR(12) NOT NULL,
    SENHA TEXT NOT NULL
);

-- Tabela de Passeios
CREATE TABLE  Passeios (
    ID SERIAL PRIMARY KEY,
    DESCRICAO VARCHAR(255) NOT NULL,
    QTD_MAX_PESSOAS INT NOT NULL,
    QTD_ATUAL_PESSOAS INT NOT NULL,
    DATA_INICIO DATE NOT NULL,
    DATA_FIM DATE NOT NULL
);

-- Tabela de Pessoas_Passeios
CREATE TABLE  Pessoas_Passeios (
    ID SERIAL PRIMARY KEY,
    ID_PESSOA INT NOT NULL,
    ID_PASSEIO INT NOT NULL,
    FOREIGN KEY (ID_PESSOA) REFERENCES Pessoas(ID),
    FOREIGN KEY (ID_PASSEIO) REFERENCES Passeios(ID) 
);

-- Tabela de Recebimentos
CREATE TABLE  Recebimentos (
    ID SERIAL PRIMARY KEY,
    ID_PESSOA INT NOT NULL,
    ID_PASSEIO INT NOT NULL,
    VALOR_PAGO DECIMAL(10, 2) NOT NULL,
    DATA_RECEBIMENTO DATE NOT NULL,
    TIME_STAMP TIMESTAMP,
    FOREIGN KEY (ID_PESSOA) REFERENCES Pessoas(ID),
    FOREIGN KEY (ID_PASSEIO) REFERENCES Passeios(ID)
);

-- Tabela de Orçamentos
CREATE TABLE Orcamentos (
    ID SERIAL PRIMARY KEY,
    ID_PASSEIO INT NOT NULL,
    DESCRICAO VARCHAR(255) NOT NULL,
    UNIDADE_DE_MEDIDA VARCHAR(10) NOT NULL,
    QTD DECIMAL (10, 1) NOT NULL,
    VALOR DECIMAL(10, 2) NOT NULL,
    TOTAL DECIMAL(10, 2)NOT NULL,
    FOREIGN KEY (ID_PASSEIO) REFERENCES Passeios(ID)
);

-- Values teste para Tabelas
INSERT INTO PESSOAS (id, nome, email, apelido, senha) VALUES
(1, 'Pedrini', 'teste@teste.com', 'Perineo', '123'),
(2, 'Yago', 'god@teste.com', 'Yagod', '123'),
(3, 'João Vitor', 'jv@teste.com', 'Gordine', '123'),
(4, 'Renata', 're@teste.com', 'Renata', '123'),
(5, 'Luana', 'lu@teste.com', 'Anaul', '123'),
(6, 'Manel', 'liar@teste.com', 'Manuel', '123'),
(7, 'Guilherme', 'giro@teste.com', 'guido', '123'),
(8, 'Victor', 'vito@teste.com', 'Boneliz', '123'),
(9, 'Lucas Saif', 'saif@teste.com', 'trava', '123'),
(10, 'Gabs', 'gabs@teste.com', 'Gabs', '123'),
(11, 'Gadac', 'cortaGiros@teste.com', 'Ratao', '123'),
(12, 'Grazi', 'grazi@teste.com', 'grazi', '123'),
(13, 'Thiago', 'fofo@teste.com', 'sacaFofo', '123'),
(14, 'Gustavo', 'gustavo@teste.com', 'Gustavo', '123'),
(15, 'Vitoria', 'vitoria@teste.com', 'vitoria', '123'),
(16, 'Tati', 'Tati@teste.com', 'tati', '123');

INSERT INTO orcamentos (id, id_passeio, descricao, unidade_de_medida, qtd, valor, total) VALUES
(1, 1, 'Sitio', 'Diaria', 3.0, 700.00, 2100.00),
(2, 1, 'Pão de Forma', 'Pacote', 7.0, 8.00, 56.00),
(3, 1, 'Queijo', 'Kg', 2.0, 40.00, 80.00),
(4, 1, 'Presunto', 'Kg', 1.5, 30.00, 45.00),
(5, 1, 'Leite', 'Caixa', 11.0, 5.00, 55.00),
(6, 1, 'Café', 'Pacote', 1.0, 17.00, 17.00),
(7, 1, 'Tody/Nescau', 'Pacote', 1.0, 15.00, 15.00),
(8, 1, 'Carne de Boi', 'Kg', 6.0, 75.00, 450.00),
(9, 1, 'Carne de Porco', 'Kg', 5.0, 30.00, 150.00),
(10, 1, 'Linguiça', 'Kg', 4.0, 22.00, 88.00),
(11, 1, 'Pão de Alho', 'Pacote', 4.0, 25.00, 100.00),
(12, 1, 'Refrigerante', 'Fardos', 5.0, 36.00, 180.00),
(13, 1, 'Óleo', 'Litros', 1.0, 7.00, 7.00),
(14, 1, 'Bacon', 'Kg', 2.0, 22.00, 44.00),
(15, 1, 'Ovo', 'Pente', 1.0, 23.00, 23.00),
(16, 1, 'Linguiça Fina', 'Pacote', 1.0, 50.00, 50.00),
(17, 1, 'Torresmo', 'Kg', 3.0, 20.00, 60.00),
(18, 1, 'Feijão', 'Pacote', 2.0, 8.00, 16.00),
(19, 1, 'Knor de Bacon', 'Pacote', 1.0, 5.00, 5.00),
(20, 1, 'Arroz', 'Kg', 2.0, 10.00, 20.00),
(21, 1, 'Macarrão Parafuso', 'Pacote', 2.0, 8.00, 16.00),
(22, 1, 'Coxa Sobrecoxa', 'Kg', 3.0, 15.00, 45.00),
(23, 1, 'Creme de Leite', 'Latinha', 3.0, 5.00, 15.00),
(24, 1, 'Banana', 'Penca', 1.0, 8.99, 8.99),
(25, 1, 'Maçã', 'Unidade', 10.0, 5.00, 50.00),
(26, 1, 'Laranja', 'Unidade', 5.0, 3.68, 18.40),
(27, 1, 'Melancia', 'Unidade', 1.0, 60.00, 60.00),
(28, 1, 'Goiaba', 'Unidade', 2.0, 3.80, 7.60),
(29, 1, 'Alface', 'Unidade', 1.0, 2.99, 2.99),
(30, 1, 'Tomate', 'Kg', 2.0, 4.48, 8.96),
(31, 1, 'Tempero Verde', 'Unidade', 1.0, 3.98, 3.98),
(32, 1, 'Alho', 'Unidade', 1.0, 19.00, 19.00),
(33, 1, 'Pepino', 'Unidade', 2.0, 1.13, 2.26),
(34, 1, 'Couve', 'Unidade', 1.0, 5.99, 5.99),
(35, 1, 'Cebola', 'Kg', 2.0, 6.49, 12.98),
(36, 1, 'Pimentão', 'Unidade', 4.0, 1.61, 6.44),
(37, 1, 'imprevistos', 'unidade', 1.0, 700.00, 700.00),
(38, 1, 'valor media da van', 'unidade', 1.0, 1200.00, 1200.00);