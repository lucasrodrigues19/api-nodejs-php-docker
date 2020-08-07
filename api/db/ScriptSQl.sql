create database if not exists apicomdocker;

use apicomdocker; 

create table if not exists tb_prod(
 id int auto_increment,
 name varchar(255),
 price decimal (10,2),
 primary key (id)
);

insert into tb_prod values
(default, 'Curso HTML', 2500),
(default, 'Curso JAVA', 5000),
(default, 'Curso JAVA-SCRIPT', 3500);