USE scheduler_db;

CREATE TABLE appointments (	
  id INT NOT NULL AUTO_INCREMENT,	
  name VARCHAR(100) NOT NULL,	
  phone VARCHAR(100) NOT NULL,
  email VARCHAR(100) NULL,
  service VARCHAR(100) NOT NULL,
  appMonth VARCHAR(100) NOT NULL,	
  appDay VARCHAR(100) NOT NULL,
  appTime VARCHAR(100) NOT NULL,
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

INSERT INTO appointments (name, phone, email, service, appMonth, appDay, appTime, stylist, comments)
VALUES ("Jon Snow", "612-846-7895", "jon@northernmail.com", "Shampooing", "4", "31", "11:00am", "Mika Tan","I have not washed my hair since winter started." );
VALUES ("Mia Zhang", "415-227-8469", "mia@umn.edu", "Coloring", "4", "31", "1:00pm", "Roslina Jung", "I want my hair red!" );
VALUES ("Steve Aoki", "548-879-6644", "aoki@cooldjs.com", "Styling", "5", "1", "1:00pm", "Roslina Jung", "I need to look for my show." );
VALUES ("Selina Santana", "514-879-4897", "selina@gmail", "Styling", "5", "1", "9:00am", "Mika Tan", "My milkshake brings all the boys to the yard" );
VALUES ("Jessica Jones", "444-876-4578", "jessica@yahoo.com", "Brazilian Blowout", "5", "2", "4:00pm", "Mika Tan", "My hair is super curly and I hate it." );
VALUES ("Barack Obama", "763-885-1354", "obama@presidents.com", "Haircut", "5", "2", "12:00pm", "Roslina Jung", "Need to look sharp." );
VALUES ("Jorge Ramos", "227-875-4687", "ramos@univision.com", "Styling", "5", "3", "9:00am", "Roslina Jung", "anything to look good" );
VALUES ("Mushu", "763-487-4868", "mushu@dogs.com", "Haircut", "5", "3", "4:00pm", "Mika Tan", "I am scruffy" );
VALUES ("Li Zhang", "763-785-6795", "lizhang@yahoo.com", "Extensions", "5", "4", "6:00pm", "Mika Tan", "I want longer hair" );