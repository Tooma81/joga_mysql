CREATE TABLE IF NOT EXISTS article (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `body` longtext NOT NULL,
  `published` datetime NOT NULL,
  `author_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`slug`),
  KEY (`author_id`)
);
