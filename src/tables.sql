-- CREATE DATABASE volunteerhood;
USE volunteerhood;

-- CREATE TABLE skills(
--     name VARCHAR(50) NOT NULL PRIMARY KEY
-- )

-- CREATE TABLE user (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50),
--     email VARCHAR(50) NOT NULL,
--     password VARCHAR(20) NOT NULL,
--     phone INT NOT NULL,
--     radius FLOAT,
--     ranking FLOAT,
--     counter INT
-- );

-- CREATE TABLE help_requests (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     userReq INT NOT NULL,
--     userHelper INT NOT NULL,
--     status ENUM ('open', 'in process', 'completed'),
--     description VARCHAR(255) NOT NULL,
--     skill VARCHAR(50) NOT NULL,
--     date DATE,
--     FOREIGN KEY (userReq) REFERENCES user(id),
--     FOREIGN KEY (userHelper) REFERENCES user(id),
--     FOREIGN KEY (skill) REFERENCES skills(name)
-- )

-- CREATE TABLE user_skills (
--     user INT NOT NULL,
--     skill VARCHAR(50) NOT NULL,
--     FOREIGN KEY (user) REFERENCES user(id),
--     FOREIGN KEY (skill) REFERENCES skills(name)
-- )