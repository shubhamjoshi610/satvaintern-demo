--  Create a table named 'sales'
CREATE TABLE sales (
    sale_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    category VARCHAR(50),
    sale_date DATE,
    quantity INT,
    unit_price DECIMAL(10, 2)
);

--  Insert data into the 'sales' table
INSERT INTO sales (product_name, category, sale_date, quantity, unit_price)
VALUES
('Laptop', 'Electronics', '2024-12-01', 5, 1000.00),
('Smartphone', 'Electronics', '2024-12-03', 10, 700.00),
('Tablet', 'Electronics', '2024-12-05', 7, 400.00),
('Refrigerator', 'Home Appliances', '2024-12-02', 2, 1200.00),
('Washing Machine', 'Home Appliances', '2024-12-04', 3, 800.00),
('Headphones', 'Electronics', '2024-12-06', 15, 50.00),
('Microwave', 'Home Appliances', '2024-12-07', 4, 300.00);

--  Update the price of all 'Electronics' products to include a 10% discount
UPDATE sales
SET unit_price = unit_price * 0.90
WHERE category = 'Electronics';

--  Query sales within a specific date range using the BETWEEN clause
SELECT * 
FROM sales
WHERE sale_date BETWEEN '2024-12-01' AND '2024-12-05';

--  Query to fetch sales of products with quantity greater than 5
SELECT * 
FROM sales
WHERE quantity > 5;

--  Group sales data by category and calculate total revenue for each category
SELECT category, SUM(quantity * unit_price) AS total_revenue
FROM sales
GROUP BY category;

--  Filter categories with total revenue greater than $2000 using the HAVING clause
SELECT category, SUM(quantity * unit_price) AS total_revenue
FROM sales
GROUP BY category
HAVING total_revenue > 2000;

-- Create a stored procedure to get sales ordered by sale_date in descending order
DELIMITER $$

CREATE PROCEDURE GetSalesOrderedByDate()
BEGIN
    SELECT * FROM sales
    ORDER BY sale_date DESC;
END $$

DELIMITER ;
--  Create a table named 'supplier'

CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_name VARCHAR(100),
    product_name VARCHAR(100),
    FOREIGN KEY (sale_id) REFERENCES sales(sale_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insert data into the 'suppliers' table
INSERT INTO suppliers (supplier_name, product_name)
VALUES
('TechWorld', 'Laptop'),
('GadgetMart', 'Smartphone'),
('GadgetMart', 'Tablet'),
('HomeStore', 'Refrigerator'),
('HomeStore', 'Washing Machine'),
('TechWorld', 'Headphones'),
('ApplianceHub', 'Microwave'),
('ElectroDeals', 'Camera'); -- Product not in sales


-- Inner Join
SELECT s.sale_id, s.product_name, s.category, su.supplier_name
FROM sales s
INNER JOIN suppliers su
ON s.product_name = su.product_name;

-- Left Join
SELECT s.sale_id, s.product_name, s.category, su.supplier_name
FROM sales s
LEFT JOIN suppliers su
ON s.product_name = su.product_name;

--Right Join
SELECT s.sale_id, s.product_name, su.supplier_name
FROM sales s
RIGHT JOIN suppliers su
ON s.product_name = su.product_name;

--Full Outer Join
SELECT s.sale_id, s.product_name, s.category, su.supplier_name
FROM sales s
FULL OUTER JOIN suppliers su
ON s.product_name = su.product_name;

--Cross Join
SELECT s.product_name AS sale_product, su.product_name AS supplier_product
FROM sales s
CROSS JOIN suppliers su;

--Self Join
SELECT s1.product_name AS Product1, s2.product_name AS Product2, s1.category
FROM sales s1
INNER JOIN sales s2
ON s1.category = s2.category
AND s1.product_name <> s2.product_name;


