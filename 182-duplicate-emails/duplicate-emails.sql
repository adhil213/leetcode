# Write your MySQL query statement below
SELECT 
    email 
FROM (
    SELECT 
        email, 
        COUNT(*) as count
    FROM Person
    GROUP BY email
) AS grouped_emails
WHERE count > 1;