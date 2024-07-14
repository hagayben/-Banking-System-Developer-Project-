-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2024 at 08:16 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bankaccounts`
--
CREATE DATABASE IF NOT EXISTS `bankaccounts` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bankaccounts`;

-- --------------------------------------------------------

--
-- Table structure for table `accountoperations`
--

CREATE TABLE `accountoperations` (
  `objectId` int(11) NOT NULL,
  `accountNumber` int(11) NOT NULL,
  `types` varchar(36) NOT NULL,
  `price` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `interest` decimal(4,0) DEFAULT NULL,
  `amountOfPayments` int(11) DEFAULT NULL,
  `dateOfLoan` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `accountoperations`
--

INSERT INTO `accountoperations` (`objectId`, `accountNumber`, `types`, `price`, `date`, `interest`, `amountOfPayments`, `dateOfLoan`) VALUES
(1, 12, 'Loam', 200, '2024-05-20 18:01:03', 4, 3, '2024-05-20 17:01:03'),
(2, 13, 'Withdrawl', 5000, '0000-00-00 00:00:00', 4, 3, '2024-05-20 17:01:03'),
(3, 12, 'Withdrawl', 500, '0000-00-00 00:00:00', NULL, NULL, NULL),
(4, 12, 'Deposit', 3000, '0000-00-00 00:00:00', NULL, NULL, NULL),
(5, 15, 'Deposit', 3000, '0000-00-00 00:00:00', NULL, NULL, NULL),
(6, 15, 'Loan', 2500, '0000-00-00 00:00:00', 2, 36, '2024-05-20 03:00:00'),
(7, 15, 'Deposit', 3000, '2024-05-20 21:15:30', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accountoperations`
--
ALTER TABLE `accountoperations`
  ADD PRIMARY KEY (`objectId`),
  ADD KEY `types` (`types`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accountoperations`
--
ALTER TABLE `accountoperations`
  MODIFY `objectId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
