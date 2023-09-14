-- 1
select compositor, id from musicas;

-- 2
select composicao, tempo from musicas where tempo > 60*4;

-- 3
select compositor, composicao from musicas where id between 47 and 123;

-- 4
select * from musicas where compositor is not null and tempo < 60*5 and compositor != 'Bach';

-- 5
select composicao, tempo from musicas where compositor = 'Mozart' or compositor = 'Bach';

-- 6
select * from musicas order by id desc;

-- 7
select * from musicas order by tempo desc;

-- 8
select * from musicas order by tempo asc limit 5;

-- 9
select * from musicas order by tempo desc limit 10;

-- 10
select * from musicas order by tempo asc limit 10 offset 5;

-- 11
select * from musicas limit 10 offset 0;
select * from musicas limit 10 offset 10;
select * from musicas limit 10 offset 20;
select * from musicas limit 10 offset 30;

-- 12
select * from musicas limit 12 offset 0;
select * from musicas limit 12 offset 12;
select * from musicas limit 12 offset 12*2;
select * from musicas limit 12 offset 12*3;
select * from musicas limit 12 offset 12*4;
select * from musicas limit 12 offset 12*5;

-- 13
select distinct compositor from musicas where compositor is not null;

-- 14
select distinct compositor, composicao from musicas;

-- 15
select * from musicas where compositor like 'Bra%';

-- 16
select * from musicas where ritmo like '%troppo';

-- 17
select * from musicas where composicao ilike '%quartet%';

-- 18
select * from musicas where composicao not ilike '%quintet%';