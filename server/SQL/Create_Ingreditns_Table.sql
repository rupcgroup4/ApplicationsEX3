CREATE TABLE _ingredients (
	id int identity(1,1) primary key,
	name varchar(20),
	img nvarchar(1024),
	calories int
)

INSERT INTO _ingredients(name, img, calories)
VALUES ('Soy', 
'https://images.heb.com/is/image/HEBGrocery/000129449?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0',
30)

INSERT INTO _ingredients(name, img, calories)
VALUES ('Chicken Breast', 
'https://cdn.shopify.com/s/files/1/0274/0217/4498/products/bonelessbreast_300x.jpg?v=1588263198',
300)


SELECT * FROM _ingredients