-- lista produktów wg categorii wraz z categoriami podrzędnymi

SELECT c2.* , c2.is_active, p.*,pr.*
FROM category c inner join category c2 on c2.parent_id =c.id and c2.is_active =1
inner join product p on p.category_id =c2.id
inner join provider pr on p.provider_id =pr.id
where c.id=1 and p.is_active =1