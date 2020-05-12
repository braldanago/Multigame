-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: 127.0.0.1    Database: juego
-- ------------------------------------------------------
-- Server version	5.7.20-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `scoreboard`
--

DROP TABLE IF EXISTS `scoreboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scoreboard` (
  `k_nomUsuario` varchar(20) NOT NULL,
  `k_idJuego` int(11) NOT NULL,
  `i_puntaje` bigint(20) NOT NULL,
  PRIMARY KEY (`k_nomUsuario`,`k_idJuego`,`i_puntaje`),
  KEY `k_idJuego` (`k_idJuego`),
  KEY `k_nomUsuario` (`k_nomUsuario`),
  CONSTRAINT `FK_scoreboard_juego` FOREIGN KEY (`k_idJuego`) REFERENCES `juego` (`k_idJuego`),
  CONSTRAINT `FK_scoreboard_usuario` FOREIGN KEY (`k_nomUsuario`) REFERENCES `usuario` (`k_nomUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scoreboard`
--

LOCK TABLES `scoreboard` WRITE;
/*!40000 ALTER TABLE `scoreboard` DISABLE KEYS */;
INSERT INTO `scoreboard` VALUES ('Andrea',1,0),('Andrea',1,3),('Andrea',1,60),('Angie',1,9),('Angie',1,50),('Brayan',1,4),('Brayan',1,7),('Brayan',1,10),('Brayan',1,12),('Brayan',1,21),('Brayan',1,55),('Brayan',1,57),('Gina',1,10),('Gina',1,21),('Gina',1,59),('Italia',1,0),('Italia',1,3),('Italia',1,8),('Italia',1,9),('Italia',1,24),('Italia',1,28),('Italia',1,60),('Italiano',1,38),('Kathe',1,60),('Kathe',1,158),('Massimo',1,15),('Nicolas',1,8),('Nicolas',1,11),('NUEVO',1,0),('NUEVO',1,56),('Sonia',1,60),('Sonia',1,63),('',2,74),('Andrea',2,66),('Andrea',2,78),('Andrea',2,245),('Brayan',2,310),('Gina',2,52),('Gina',2,55),('hola',2,67),('Italia',2,90),('Andrea',3,1),('Andrea',3,5),('Brayan',3,15),('Brayan',3,56),('Brayan',3,57),('Italia',3,0),('Italia',3,3),('Italia',3,6),('Kathe',3,8),('Sebas',3,1),('Angie',4,147),('Brayan',4,144),('Brayan',4,146),('Gina',4,222),('Italia',4,114),('Nini',4,129),('Nini',4,180),('NUEVO',4,196);
/*!40000 ALTER TABLE `scoreboard` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-01  3:56:00
