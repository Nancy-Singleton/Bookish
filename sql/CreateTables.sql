BEGIN TRANSACTION;

CREATE TABLE Usr (
 ID       SERIAL       PRIMARY KEY NOT NULL,
 USERNAME VARCHAR(200) UNIQUE      NOT NULL,
 PASSWORD VARCHAR(200)             NOT NULL
);

CREATE TABLE UsrSession (
ID           SERIAL       PRIMARY KEY    NOT NULL,
UsrID        INT          REFERENCES Usr NOT NULL,
SessionToken VARCHAR(500)                NOT NULL,
ExpiryDate   DATE                        NOT NULL
);

CREATE TABLE Book (
ID    SERIAL       PRIMARY KEY NOT NULL,
Title VARCHAR(500)             NOT NULL,
ISBN  INT                      NOT NULL
);

CREATE TABLE BookCopy (
ID      SERIAL PRIMARY KEY     NOT NULL,
Barcode INT    UNIQUE          NOT NULL,
BookID  INT    REFERENCES Book NOT NULL,
UsrID   INT    REFERENCES Usr,
DueDate DATE
);

CREATE TABLE Author (
ID   SERIAL       PRIMARY KEY NOT NULL,
NAME VARCHAR(200)             NOT NULL
);

CREATE TABLE BookAuthor (
ID       SERIAL PRIMARY KEY       NOT NULL,
BookID   INT    REFERENCES Book   NOT NULL,
AuthorID INT    REFERENCES Author NOT NULL
);

GRANT SELECT ON Book       TO bookish;
GRANT SELECT ON Author     TO bookish;
GRANT SELECT ON BookAuthor TO bookish;
GRANT SELECT ON Usr        TO bookish;
GRANT SELECT ON UsrSession TO bookish;
GRANT SELECT ON BookCopy   TO bookish;

COMMIT;