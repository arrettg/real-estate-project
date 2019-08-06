INSERT INTO users
(user_name, email, password)
VALUES
($1,$2,$3)
returning *;