-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2020 at 04:47 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.2.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `transmittal`
--

-- --------------------------------------------------------

--
-- Table structure for table `item_list`
--

CREATE TABLE `item_list` (
  `id` int(11) DEFAULT NULL,
  `particular` varchar(500) DEFAULT NULL,
  `part_from` varchar(30) DEFAULT NULL,
  `part_to` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `item_list`
--

INSERT INTO `item_list` (`id`, `particular`, `part_from`, `part_to`) VALUES
(2, 'Particular', 'Treasury', 'Bataan'),
(2, 'Particular', 'Admin', 'Bataan'),
(1, 'd', 'e', 'f'),
(1, 'a', 'a', 'a'),
(1, 'a', 'a', 'a'),
(1, 'd', 'd', 'd'),
(1, 'h', 'h', 'h'),
(1, 'a', 'a', 'a'),
(3, 'cl docs for release - Cerillio, Benjamin Jr', 'Julian trsy', 'Muntinlupa'),
(3, 'pdc - Magbanua, Lorenzo', 'Trsy', 'Calamba'),
(3, 'Stencil - Adam Leyson', 'Valenzuela', 'Muntinlupa'),
(3, 'cgl - Insurance', 'Tax Dept', 'Muntinlupa'),
(3, 'cl docs - Pasiliao Armando', 'Trsy', 'Muntinlupa'),
(4, 'Test', 'Test', 'Test'),
(5, 'Test', 'Test', 'Test'),
(5, 'Sample', 'Sample', 'Sample');

-- --------------------------------------------------------

--
-- Table structure for table `trans_list`
--

CREATE TABLE `trans_list` (
  `id` int(11) NOT NULL,
  `track_no` varchar(30) NOT NULL,
  `branch` varchar(30) NOT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `status` tinyint(1) DEFAULT 0,
  `date_received` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trans_list`
--

INSERT INTO `trans_list` (`id`, `track_no`, `branch`, `date`, `status`, `date_received`) VALUES
(1, '123', 'Muntinlupa/Calamba', '2020-01-20 13:28:13', 1, '2020-01-20 18:30:38'),
(2, '789', 'Bataan', '2020-01-20 16:10:24', 1, '2020-01-20 18:31:22'),
(3, '150151', 'Muntinlupa/Calamba', '2020-01-20 17:16:37', 0, NULL),
(4, 'Pending', 'Unknown Branch', '2020-01-20 18:32:11', 0, NULL),
(5, 'Pending', 'POEA', '2020-01-20 18:33:20', 0, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trans_list`
--
ALTER TABLE `trans_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trans_list`
--
ALTER TABLE `trans_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
