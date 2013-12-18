-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 18, 2013 at 07:43 AM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `backbonejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `slides`
--

CREATE TABLE IF NOT EXISTS `slides` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `slide_content` varchar(25000) NOT NULL,
  `sort_order` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `menu_header` varchar(75) NOT NULL,
  `menu_description` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `slides`
--

INSERT INTO `slides` (`id`, `slide_content`, `sort_order`, `start_date`, `end_date`, `menu_header`, `menu_description`) VALUES
(1, '<div><h1>SLIDE 1</h1></div>', 0, '2013-11-19', '2013-11-26', '~dfsdf This is it! ', 'It''s the best next thing.  Better than cake!'),
(2, '<div><h1>SLIDE 2</h1></div>', 2, '2013-11-20', '2013-11-29', 'Check it out!', 'Aww yeah, you''re not gonna believe what we have going on over here!'),
(3, '<div><h1>SLIDE 3</h1></div>', 3, '2013-11-19', '2013-11-27', 'Let''s go see...', 'Fuck yeah, it''s awesome!'),
(4, '<div><h1>SLIDE 4</h1></div>', 1, '2013-11-18', '2013-11-28', '...what everyone is talking about!', 'Ditch work, cut off contact with your friends and family, sell your soul, do whatever it takes to make it to this event!');
