SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `servicos` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `servicos`;

CREATE TABLE `servico` (
  `id_servico` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `empresa` varchar(100) DEFAULT NULL,
  `cnpj` varchar(30) DEFAULT NULL,
  `servico` varchar(100) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `descricao` varchar(1000) NOT NULL,
  `valor` varchar(100) NOT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `servico` (`id_servico`, `usuario`, `empresa`, `cnpj`, `servico`, `categoria`, `descricao`, `valor`, `data_criacao`) VALUES
(32, 'fabio@gmail.com', NULL, NULL, 'Aluguel', 'Outros', 'imóvel no centro', '400 reais/mês', '2018-06-08 22:18:04'),
(34, 'fabioh@windowslive.com', 'teste', '23424556546456', 'teste', 'Outros', 'teste', '50', '2018-06-14 22:45:42'),
(36, 'hique@gmail.com', 'OdontoTop', '1234566789', 'Limpeza', 'Odontologia', 'limpeza geral dos dentes\r\nemail: odontotop@gmail.com\r\nfone: 33333333', '80,00', '2018-06-15 23:29:57'),
(37, 'mate@gmail.com', 'Law&Order', '87654321', 'processos criminais', 'Advocacia', 'processos', 'A combinar', '2018-06-15 23:31:25'),
(38, 'mate@gmail.com', 'Law&Order', '87654321', 'processos', 'Advocacia', 'processos trabalhista', 'A combinar', '2018-06-15 23:32:06'),
(39, 'fabio2@gmail.com', 'Magia e Sedução', '21212121', 'Massagem', 'Estética', 'Massagem relaxante', '150', '2018-06-15 23:33:31'),
(40, 'fabio2@gmail.com', 'Magia e Sedução', '21212121', 'Limpeza de pele', 'Estética', 'limpeza de pele 100% limpa', '70', '2018-06-15 23:34:19');


ALTER TABLE `servico`
  ADD PRIMARY KEY (`id_servico`);


ALTER TABLE `servico`
  MODIFY `id_servico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
