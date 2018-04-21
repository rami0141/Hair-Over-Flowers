USE scheduler_db;

CREATE TABLE appointments (	
  id INT NOT NULL AUTO_INCREMENT,	
  name VARCHAR(100) NOT NULL,	
  phone VARCHAR(100) NOT NULL,
  email VARCHAR(100) NULL,
  service VARCHAR(100) NULL,
  appDate VARCHAR(100) NOT NULL,	
  appTime VARCHAR(100) NULL,
  stylist VARCHAR(100) NULL,
  comments VARCHAR(100) NULL,
  createdAt datetime DEFAULT NULL,	
  updatedAt datetime DEFAULT NULL,	
  PRIMARY KEY (id)	
);