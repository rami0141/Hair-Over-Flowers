USE scheduler_db;

CREATE TABLE appointments (	
  id INT NOT NULL AUTO_INCREMENT,	
  name VARCHAR(100) NOT NULL,	
  phone VARCHAR(100) NOT NULL,
  email VARCHAR(100) NULL,
  service VARCHAR(100) NOT NULL,
  appDate VARCHAR(100) NOT NULL,
  stylist VARCHAR(100) NULL,
  comments VARCHAR(300) NULL,
  createdAt datetime DEFAULT NULL,	
  updatedAt datetime DEFAULT NULL,	
  PRIMARY KEY (id)	
);

USE scheduler_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30)NOT NULL,
  password VARCHAR(30)NOT NULL,
  stylistName VARCHAR(50)NOT NULL,
  createdAt datetime DEFAULT NULL,  
  updatedAt datetime DEFAULT NULL,  
  PRIMARY KEY (id)
)


USE scheduler_db;

INSERT INTO appointments (name, phone, email, service, appDate, stylist, comments,  createdAt, updatedAt)
VALUES ("Jon Snow", "612-846-7895", "jon@northernmail.com", "Shampooing", "5/10/2018, 1:00:00 PM", "Mika Tan","I have not washed my hair since winter started.", "2018-04-24", "2018-04-24"),
("Selina Santana", "514-879-4897", "selina@gmail", "Styling", "5/10/2018, 10:00:00 AM", "Mika Tan", "I want my hair to look just like the photo", "2018-04-24", "2018-04-24"),
("Jessica Jones", "444-876-4578", "jessica@yahoo.com", "Brazilian Blowout", "5/10/2018, 9:00:00 AM", "Mika Tan", "My hair is super curly and I hate it.", "2018-04-24", "2018-04-24"),
("Gina Vang", "763-785-6795", "gina@yahoo.com", "Extensions", "5/10/2018, 11:00:00 PM", "Mika Tan", "I want longer hair", "2018-04-24", "2018-04-24"),
("Mia Zhang", "415-227-8469", "mia@umn.edu", "Coloring", "5/10/2018, 2:00:00 PM", "Roslina Jung", "I want my hair red!", "2018-04-24", "2018-04-24"),
("Steve Aoki", "548-879-6644", "aoki@cooldjs.com", "Styling", "5/10/2018, 9:00:00 AM", "Roslina Jung", "I need to look for my show.", "2018-04-24", "2018-04-24"),
("Barack Obama", "763-885-1354", "obama@presidents.com", "Haircut", "5/10/2018, 10:00:00 AM", "Roslina Jung", "Need to look sharp.", "2018-04-24", "2018-04-24"),
("Jorge Ramos", "227-875-4687", "ramos@univision.com", "Styling", "5/10/2018, 1:00:00 PM", "Roslina Jung", "anything to look good", "2018-04-24", "2018-04-24");

