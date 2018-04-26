USE scheduler_db;

CREATE TABLE appointments (	
  id INT NOT NULL AUTO_INCREMENT,	
  name VARCHAR(100) NOT NULL,	
  phone VARCHAR(100) NOT NULL,
  email VARCHAR(100) NULL,
  service VARCHAR(100) NULL,
  appMonth VARCHAR(100) NOT NULL,	
  appDay VARCHAR(100) NOT NULL,
  appTime VARCHAR(100) NULL,
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

