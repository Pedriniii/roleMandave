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
    VALOR_RECEBIDO DECIMAL(10, 2) NOT NULL,
    QTD_MAX_PESSOAS INT NOT NULL,
    QTD_ATUAL_PESSOAS INT NOT NULL
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
    DATA_RECEBIMENTO TIMESTAMP NOT NULL,
    FOREIGN KEY (ID_PESSOA) REFERENCES Pessoas(ID),
    FOREIGN KEY (ID_PASSEIO) REFERENCES Passeios(ID)
);

-- Tabela de Imagens
-- CREATE TABLE  Orcamento (
--     ID SERIAL PRIMARY KEY
-- );