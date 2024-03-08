CREATE DATABASE IF NOT EXISTS paris_olympics;

use paris_olympics;

-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: paris_olympics
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `athletes`
--

DROP TABLE IF EXISTS `athletes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `athletes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `date_naissance` datetime DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `pays_id` int DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `sport_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sport_id` (`sport_id`),
  KEY `pays_id` (`pays_id`),
  CONSTRAINT `athletes_ibfk_12` FOREIGN KEY (`sport_id`) REFERENCES `sports` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `athletes_ibfk_13` FOREIGN KEY (`pays_id`) REFERENCES `pays` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `athletes`
--

LOCK TABLES `athletes` WRITE;
/*!40000 ALTER TABLE `athletes` DISABLE KEYS */;
INSERT INTO `athletes` VALUES (1,'Bolt','Usain','1986-08-21 00:00:00','M',1,'https://cdn.midjourney.com/228da894-133a-4697-9b13-e87608be6af6/0_3.webp',2,'2024-03-06 13:27:05','2024-03-06 13:27:05'),(2,'Williams','Serena','1981-09-26 00:00:00','F',2,'https://cdn.midjourney.com/308cd4c9-fde0-4972-aac7-7c97ba9fb74a/0_0.webp',2,'2024-03-06 13:27:21','2024-03-06 13:27:21'),(3,'Federer','Roger','1981-08-08 00:00:00','M',3,'https://cdn.midjourney.com/5da4ee36-afb5-462f-8610-cbeec88487b3/0_2.webp',2,'2024-03-06 13:27:40','2024-03-06 13:27:40'),(4,'Nadal','Rafael','1986-06-03 00:00:00','M',3,'https://cdn.midjourney.com/bf10cddc-9de8-4aec-840c-1ef3c1eed857/0_2.webp',2,'2024-03-06 13:27:52','2024-03-06 13:27:52'),(5,'Kane','Harry','1993-07-28 00:00:00','M',2,'https://cdn.midjourney.com/4996dd05-3145-475b-84b3-c15c4bb382f8/0_3.webp',4,'2024-03-06 13:28:02','2024-03-06 13:28:02'),(6,'Osaka','Naomi','1997-10-16 00:00:00','F',2,'https://cdn.midjourney.com/58954b9c-a333-4a9a-9d06-b9e9f26ca3f8/0_2.webp',2,'2024-03-06 13:28:17','2024-03-06 13:28:17');
/*!40000 ALTER TABLE `athletes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `epreuves`
--

DROP TABLE IF EXISTS `epreuves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `epreuves` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sport_id` int DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `athlete_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sport_id` (`sport_id`),
  KEY `athlete_id` (`athlete_id`),
  CONSTRAINT `epreuves_ibfk_10` FOREIGN KEY (`athlete_id`) REFERENCES `athletes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `epreuves_ibfk_9` FOREIGN KEY (`sport_id`) REFERENCES `sports` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `epreuves`
--

LOCK TABLES `epreuves` WRITE;
/*!40000 ALTER TABLE `epreuves` DISABLE KEYS */;
INSERT INTO `epreuves` VALUES (2,2,'Tennis Quarter Finals','2022-12-12 00:00:00','Paris','2024-03-05 14:07:07','2024-03-05 14:07:07',NULL);
/*!40000 ALTER TABLE `epreuves` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pays`
--

DROP TABLE IF EXISTS `pays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pays` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `flag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pays`
--

LOCK TABLES `pays` WRITE;
/*!40000 ALTER TABLE `pays` DISABLE KEYS */;
INSERT INTO `pays` VALUES (1,'MAR','2024-03-05 15:26:23','2024-03-05 15:27:38','https://cdn-icons-png.flaticon.com/128/197/197551.png'),(2,'US','2024-03-05 15:26:23','2024-03-05 15:27:38','https://cdn-icons-png.flaticon.com/128/197/197484.png'),(3,'FR','2024-03-05 15:26:23','2024-03-05 15:27:38','https://cdn-icons-png.flaticon.com/128/197/197560.png'),(4,'ES','2024-03-05 15:26:23','2024-03-05 15:27:38','https://cdn-icons-png.flaticon.com/128/197/197593.png'),(5,'CN','2024-03-07 10:02:38','2024-03-07 10:02:39','https://cdn-icons-png.flaticon.com/128/197/197375.png'),(7,'Germany','2024-03-07 14:10:21','2024-03-07 14:10:21','https://cdn-icons-png.flaticon.com/128/197/197571.png'),(9,'JP','2024-03-07 14:13:18','2024-03-07 14:13:18','https://cdn-icons-png.flaticon.com/128/197/197604.png');
/*!40000 ALTER TABLE `pays` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resultats`
--

DROP TABLE IF EXISTS `resultats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resultats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `athlete_id` int NOT NULL,
  `epreuve_id` int NOT NULL,
  `position` int NOT NULL,
  `performance` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `athlete_id` (`athlete_id`),
  KEY `epreuve_id` (`epreuve_id`),
  CONSTRAINT `resultats_ibfk_16` FOREIGN KEY (`athlete_id`) REFERENCES `athletes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `resultats_ibfk_17` FOREIGN KEY (`epreuve_id`) REFERENCES `epreuves` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resultats`
--

LOCK TABLES `resultats` WRITE;
/*!40000 ALTER TABLE `resultats` DISABLE KEYS */;
INSERT INTO `resultats` VALUES (2,2,2,1,'10','2024-03-06 16:37:27','2024-03-06 16:37:28'),(4,1,2,1,'23','2024-03-07 14:33:39','2024-03-07 14:33:39'),(5,1,2,1,'20','2024-03-07 15:25:28','2024-03-07 15:25:28');
/*!40000 ALTER TABLE `resultats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sports`
--

DROP TABLE IF EXISTS `sports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sports`
--

LOCK TABLES `sports` WRITE;
/*!40000 ALTER TABLE `sports` DISABLE KEYS */;
INSERT INTO `sports` VALUES (2,'Natation','2024-03-05 13:00:21','2024-03-05 13:00:21','https://cdn.midjourney.com/0399b7c6-cbbb-48c1-a94f-4b78071864a9/0_0.webp'),(3,'Football','2024-03-05 13:00:21','2024-03-05 13:00:21','https://cdn.midjourney.com/4d400b05-f999-442a-83d2-e41973e98e97/0_3.webp'),(4,'Tennis','2024-03-06 13:08:17','2024-03-06 13:08:17','https://cdn.midjourney.com/a4849cae-335e-4cf4-bf7f-77cdbc4c8e2d/0_3.webp'),(5,'Athletics','2024-03-06 13:11:22','2024-03-06 13:11:22','https://cdn.midjourney.com/132098c2-ae4f-4656-b745-1e2e967089a0/0_1.webp'),(6,'Boxing','2024-03-06 13:12:11','2024-03-06 13:12:11','https://cdn.midjourney.com/27eb686e-24ad-4c7a-9613-e39ed72643cf/0_0.webp'),(7,'Basketball','2024-03-06 13:13:02','2024-03-06 13:13:02','https://cdn.midjourney.com/01d9b607-35ca-436d-bda1-5c4763b41310/0_2.webp'),(8,'Canoe Slalom','2024-03-06 13:14:08','2024-03-06 13:14:08','https://cdn.midjourney.com/ca493bc9-e50f-4d85-af49-a4e15a3534e2/0_0.webp'),(9,'Voleyball','2024-03-06 13:15:59','2024-03-06 13:15:59','https://cdn.midjourney.com/ab12a348-ac3a-435f-bab8-6f749d8d9391/0_2.webp'),(15,'jlfnwe','2024-03-07 10:35:28','2024-03-07 10:35:28','/uploads/1709807728228-nycdesign_Saudi_Arabia_Petrol_Economy_Hyper-Realistic_Textures__ced7ec8d-6648-4bf0-8e81-e323c3ab883a.png');
/*!40000 ALTER TABLE `sports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `titres`
--

DROP TABLE IF EXISTS `titres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `titres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('Or','Argent','Bronze') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `resultat_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `resultat_id` (`resultat_id`),
  CONSTRAINT `titres_ibfk_1` FOREIGN KEY (`resultat_id`) REFERENCES `resultats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `titres`
--

LOCK TABLES `titres` WRITE;
/*!40000 ALTER TABLE `titres` DISABLE KEYS */;
INSERT INTO `titres` VALUES (2,'Or','2024-03-05 15:20:12','2024-03-05 15:20:12',2),(3,'Or','2024-03-07 14:51:25','2024-03-07 14:51:25',2),(4,'Argent','2024-03-07 15:25:58','2024-03-07 15:25:58',4);
/*!40000 ALTER TABLE `titres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `pin_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `email_10` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'oualid','ouafi','omarouafi12@gmail.com','$2a$10$j7QsBhF596.hrmCNR/vD4.lIsBJRU9qe6iDWls0GHzQHpmNnO1.AW','','admin','2024-03-05 13:17:43','2024-03-06 10:58:31',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-08 10:31:06
