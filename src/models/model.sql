create database gql_books;

\c gql_books

create table authors(
  author_id int generated by default as identity primary key,
  author_name varchar(30)
);

create table books(
  book_id int generated by default as identity primary key,
  book_name varchar(30) not null,
  book_price int,
  author_id int not null references authors(author_id)
);


insert into authors(author_name) values
('Abdulloh Abdurahmon'),
('Muhammad Ibrohim'),
('Muhammad Soqdi'),
('Javlon Abdulloh')
;

insert into books(book_name, book_price, author_id) values
('HTML asoslari', 20000, 1),
('Mukammal dasturlash', 35000, 4),
('Dasturlashga ilk qadam', 50000, 1),
('Javascript', 60500, 3),
('Java', 30000, 2),
('Go dasturlash tili', 70000, 2)
;
