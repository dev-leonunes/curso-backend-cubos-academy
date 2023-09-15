
-- 1
select * from farmacia;

-- 2
select min(idade) from usuarios;

-- 3
select max(idade) from usuarios;

-- 4
select avg(idade) from usuarios where idade >= 18;

-- 5
select sum(estoque) as somatotalestoque from farmacia where categoria = 'blue' or categoria = 'black';

-- 6
select categoria, sum(estoque) from farmacia where categoria is not null group by categoria;

-- 7
select categoria, sum(estoque) from farmacia where categoria is null group by categoria;

-- 8
select estoque from farmacia where categoria is null;

-- 9
select concat(medicamento, ' (', categoria, ')') from farmacia where categoria is not null;

-- 10
select concat(id, ' - ', medicamento, ' (', coalesce(categoria, 'sem categoria'), ')') from farmacia;

-- 11
select nome, idade, cadastro::date from usuarios where cadastro between '2020' and '2021';

-- 12
select nome, idade, email, age(cadastro::timestamp) from usuarios where idade < 18;

-- 13
select nome, idade, email, age(cadastro::date) from usuarios where idade >= 60;

-- 14
select categoria, count(medicamento) from farmacia where categoria is not null group by categoria;

-- 15
select idade, count(id) from usuarios where idade >= 18 group by idade;

-- 16
select categoria, sum(estoque) as somaestoque from farmacia group by categoria limit 3;