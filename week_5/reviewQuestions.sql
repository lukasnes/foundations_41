-- For the following problems, write the queries with only the information provided by the question.
-- Assume you know nothing except the structure of the database.
-- The problems marked (Difficult) are challenge problems which will require you to use nested queries, IN, LIKE, and other keywords.
-- These problems will also potentially require you to write multiple consecutive queries.
-- IE: An INSERT followed by another INSERT or UPDATE, potentially needing to utilize nested SELECT queries to get the answer.
-- If a problem is too difficult for you, move on to the next.

-- SELECT problems
-- Problem 1:
-- Write a query below to select the email of the person with user id 3
SELECT email
FROM users
WHERE user_id = 3;

-- Problem 2:
-- Write a query below to select the name, description, and price of Pineapple.
SELECT name, description, price
FROM foods
WHERE name = 'Pineapple';

-- Problem 3:
-- Write a query below to select all rows in the carts table.
SELECT *
FROM carts;

-- INSERT problems
-- Problem 1:
-- Write a query below to insert a new food into the foods table.
INSERT INTO foods(name,description,price)
VALUES ('Bread','Goes with everything',2.99)

-- Problem 2:
-- Write a query below to insert a new user into the users table.
-- Don't forget to give them an empty cart!
INSERT INTO users(username,password,email)
VALUES ('Lukas Withakay','passwordWithakay','email@withakay.com');

INSERT INTO carts(user_id,total)
VALUES (5,0.00);

-- Problem 3 (Difficult):
-- Insert a Banana into Jane Doe's cart. Update her cart total by 0.99 dollars.
-- Remember, you may only use the information provided.
-- Query the database with only the knowledge provided, and the table and row names.
INSERT INTO cart_foods(cart_id,food_id)
VALUES (1,5);

UPDATE carts
SET total = 0.99
WHERE user_id IN (
    SELECT user_id
    FROM users
    WHERE username = 'Jane Doe'
);

-- UPDATE problems
-- Problem 1:
-- Write a query below to update HungryHippo2030's username to HungryHungryHippo2030
UPDATE users
SET username = 'HungryHungryHippo2030'
WHERE username = 'HungryHippo2030';

-- Problem 2:
-- Write a query below to update the description of the food with the id of 3 to "Guacamole is great!"
UPDATE foods
SET description = 'Guacamole is great!'
WHERE food_id = 3;

-- DELETE problems
-- Problem 1:
-- Delete the food that costs 5.99
DELETE FROM foods
WHERE price = 5.99;

-- Problem 2 (Difficult):
-- Write a query below to delete the user with the username 'Nice'.
-- Remember that there is another table that relies on his user id.
-- You'll have to delete that entry first.
DELETE FROM carts
WHERE user_id IN (
    SELECT user_id
    FROM users
    WHERE username = 'Nice'
);

DELETE FROM users
WHERE username = 'Nice';

-- JOIN problems
-- Problem 1:
-- Using a JOIN query, find Jane Doe's cart total.
SELECT total
FROM carts AS c
JOIN users AS u
ON c.user_id = u.user_id
WHERE u.username = "Jane Doe";

-- Problem 2 (Difficult):
-- Using a JOIN query, find out the name of the food in Jane Doe's cart.
SELECT name
FROM foods AS f
JOIN cart_foods AS cf
ON f.food_id = cf.food_id
JOIN carts AS c
ON cf.cart_id = c.cart_id
JOIN users AS u 
ON u.user_id = c.user_id
WHERE u.username = 'Jane Doe';

-- Problem 3 (Difficult):
-- Using a nested JOIN query inside an update query, update the name of the food in Jane Doe's cart to 'baNaNa'

UPDATE foods
SET name = 'baNaNa'
WHERE food_id IN (
    SELECT food_id
    FROM foods AS f
    JOIN cart_foods AS cf
    ON f.food_id = cf.food_id
    JOIN carts AS c
    ON c.cart_id = cf.cart_id
    JOIN users AS u
    ON u.user_id = c.user_id
    WHERE u.username = 'Jane Doe'
);