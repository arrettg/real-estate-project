INSERT INTO agents
(first_name, last_name, image, city, state, phone, email, password)
VALUES
($1,$2,$3,$4,$5,$6,$7,$8)
returning *;