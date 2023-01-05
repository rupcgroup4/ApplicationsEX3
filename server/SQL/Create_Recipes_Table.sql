CREATE TABLE _recipes (
	id int identity(1,1) primary key,
	name varchar(256),
	time int,
	cookingMethod varchar(256),
	img nvarchar(1024)
)

INSERT INTO _recipes(name, time, cookingMethod, img)
VALUES ('Chicken w Soy', 30, 'Oven', 
'https://upload.wikimedia.org/wikipedia/commons/0/07/Soy_Sauce_Chicken.jpg')


SELECT * FROM _recipes




