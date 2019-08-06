INSERT INTO property
(city, state, adress, zipcode, image, price, agent_id)
VALUES
($1,$2,$3,$4,$5,$6,$7);

SELECT property.city, property.state, property.adress, property.zipcode, property.image, property.price
FROM property 
JOIN agents ON agents.agent_id = property.agent_id
WHERE property.agent_id = $7