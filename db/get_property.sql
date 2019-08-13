SELECT property.city, property.state, property.address, property.zipcode, property.image, property.price, property.property_id
FROM property 
JOIN agents ON agents.agent_id = property.agent_id
WHERE property.agent_id = $1