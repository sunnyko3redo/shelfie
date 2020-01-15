-- make first line is column names, order does matter.
INSERT INTO shelfie (name, price, img)
-- second comes the values, those aren't dollar signs they are open values
VALUES ($1, $2,$3 )

RETURNING *;

--! MAKE SURE TO HAVE ALL PARAMS IN CONTROLLER FOR SQL TO BE IN ARRAY FORM AND RIGHT ORDER