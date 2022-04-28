INSERT INTO Book
(Title
,ISBN)
VALUES 
('Harry Potter and the Philosopher''s Stone',
'9780747532743'
);

INSERT INTO Author
(Name)
VALUES
('JK Rowling');

INSERT INTO BookAuthor
(BookID
,AuthorID)
VALUES
((SELECT ID FROM Book WHERE Title = 'Harry Potter and the Philosopher''s Stone')
,(SELECT ID FROM Author WHERE Name = 'JK Rowling'));

INSERT INTO BookCopy
(BookID)
SELECT ID FROM Book WHERE Title = 'Harry Potter and the Philosopher''s Stone';