/*
 Navicat Premium Data Transfer

 Source Server         : MYSQL-LOCAL
 Source Server Type    : MySQL
 Source Server Version : 50733
 Source Host           : localhost:3306
 Source Schema         : skote

 Target Server Type    : MySQL
 Target Server Version : 50733
 File Encoding         : 65001

 Date: 04/01/2023 15:44:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ci_sessions
-- ----------------------------
DROP TABLE IF EXISTS `ci_sessions`;
CREATE TABLE `ci_sessions`  (
  `id` varchar(128) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `ip_address` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data` blob NOT NULL,
  INDEX `ci_sessions_timestamp`(`timestamp`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ci_sessions
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `user_email` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `user_password` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `user_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_role` int(11) NULL DEFAULT NULL,
  `user_fullname` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `user_status` int(11) NULL DEFAULT NULL,
  `isLogin` int(11) NULL DEFAULT NULL,
  `update_by` int(11) NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`, `user_name`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 106 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (33, 'superadmin', 'super@admin.com', 'y$qfYYXc.GX7aadK9.LEAYdOBxill2gF4cnA5CXTu4SM4xqhIBoN4eW', '2020-11-08 02:10:27', 100, 'super admin', 1, 1, NULL, NULL);
INSERT INTO `users` VALUES (34, 'admin', 'saya@admin.com', 'y$qfYYXc.GX7aadK9.LEAYdOBxill2gF4cnA5CXTu4SM4xqhIBoN4eW', '2020-11-08 02:10:27', 10, 'Admin', 1, 1, 34, '2022-09-06 15:53:19');
INSERT INTO `users` VALUES (97, 'adalah', 'ada@gmail.com', 'y$d.EdZX/DCdQ/ow4jBUBMXeCiXB8LSo60qN8OTHri7vNYYYYHBUSXW', '2022-10-27 12:09:22', 0, 'adalah', 1, NULL, 34, '2022-10-27 12:09:42');
INSERT INTO `users` VALUES (98, 'standar', 'standar@gmail.com', 'y$eV7uHINHIWEdspYEKXjf9.ShYJEYlwiEUCgo2dsKSZ02RPnT/G28K', '2022-10-27 15:19:46', 0, 'standar', 1, NULL, 34, '2022-10-27 15:19:54');
INSERT INTO `users` VALUES (99, 'mandiri', 'mandiri@gmail.com', 'y$ln/Z3Wg.Xj5qLUYjO38.8uJatkAOa.k5yq/kF6NYpgBLzJbIqaM1m', '2022-10-29 23:16:21', 0, 'mandiri', 1, NULL, 34, '2022-10-29 23:16:39');
INSERT INTO `users` VALUES (100, 'slo', 'slo@gmail.com', 'y$/w.TcOEyix9KdKn9Lgfm/ulH2Tvglp9Q7p7EbXksqt3M2SOxp93ri', '2022-10-29 23:59:51', 0, 'slo', 1, NULL, 34, '2022-10-30 00:00:00');
INSERT INTO `users` VALUES (101, 'testing', 'testing@gmail.com', 'y$QsriUHTpdW1UIZuidsiLdu.CYfdh3Nnnyo13iTuQwKSt6fx6dcv/G', '2022-11-09 14:36:34', 0, 'testing', 1, NULL, 34, '2022-11-09 14:51:38');
INSERT INTO `users` VALUES (102, 'ada', 'ada@gmail.com', 'y$.z5WXv1zXe4Z6LXHVPGjQuvHX6OO1Fu006k5DrqE.vIELqHQS3vdq', '2022-11-09 16:20:13', 0, 'ada', 1, NULL, 34, '2022-11-09 16:20:21');
INSERT INTO `users` VALUES (103, 'baru', 'baru@baru.com', 'y$J8W9f7JYRb2h63.O9W3ZjOlBNniEiNgX8nVntoAK0hCg.uUhWfxL2', '2022-11-10 22:44:15', 0, 'baru', 1, NULL, 34, '2022-11-10 22:44:25');
INSERT INTO `users` VALUES (104, 'mantap', 'mantap@gmail.com', 'y$UBlVFncV5.JuudkWOF8.i.Hcmy8BG7siKW03ag6/BWudT6ABK5rUS', '2022-12-18 16:56:28', 0, 'mantap', 1, NULL, 34, '2022-12-18 16:56:35');
INSERT INTO `users` VALUES (105, 'badanair', NULL, 'y$m1bG3nPyeVtOvNs3ixb7Qe3Z/4DBubbtzeCIkFLkRIpObIoax3Ij6', '2022-12-27 21:25:37', 0, 'badan air', 1, 1, 34, '2022-12-27 21:25:49');
INSERT INTO `users` VALUES (74, 'bios', 'ijul@gmail.com', 'y$vTXosqctJLWnG7Z3TTiRZu7naFMbRSjoKSBzWQ4rFkEGjSdFyrOWq', '2022-05-13 10:24:58', 2, 'bios', 1, NULL, 34, '2022-10-15 20:33:36');
INSERT INTO `users` VALUES (72, 'ridwan', 'ijul@gmail.com', 'y$X7OrrOC4EcjHIz0qeIO0O.wnGTObwWtedEt5rNeM5cL7IyTAhW8B.', '2022-05-13 09:43:15', 1, 'bios', 1, NULL, 34, '2022-10-15 12:32:43');

-- ----------------------------
-- Table structure for users_role
-- ----------------------------
DROP TABLE IF EXISTS `users_role`;
CREATE TABLE `users_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NULL DEFAULT NULL,
  `role_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `role_desc` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users_role
-- ----------------------------
INSERT INTO `users_role` VALUES (1, 100, 'superadmin', NULL);
INSERT INTO `users_role` VALUES (2, 1, 'Persetujuan Teknis', 'user persetujaun teknis');
INSERT INTO `users_role` VALUES (3, 10, 'admin', NULL);
INSERT INTO `users_role` VALUES (4, 2, 'Surat Kelayakan Operasi', 'user slo');

SET FOREIGN_KEY_CHECKS = 1;
