SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id` int(11)  AUTO_INCREMENT,
  `isbn` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `inventory` int(11) DEFAULT NULL,
  `sales` int(11) DEFAULT NULL,
  `image1` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES (1,'1','三体：全三册', '科幻', '刘慈欣', '50.20', '刘慈欣代表作，亚洲首部“雨果奖”获奖作品！', '14414', '10000','http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg'),
                          (2,'2','追风筝的人', '世界名著', '卡勒德·胡赛尼', '35.30', '“许多年过去了，人们说陈年旧事可以被埋葬，然而我终于明白这是错的，因为往事会自行爬上来。回首前尘，我意识到在过去二十六年里，自己始终在窥视着那荒芜的小径。”', '14141','1000', 'http://img3m5.ddimg.cn/26/14/25238195-1_w_3.jpg'),
                          (3,'3','红楼梦', '世界名著', '曹雪芹', '18.80', '中国古典小说佳作，影响整个华人世界的经典！轻松易学、国家教育部推荐读物！', '2441','100', 'http://img3m6.ddimg.cn/31/22/23828836-1_w_8.jpg'),
                          (4,'4','小王子','儿童文学','圣-埃克苏佩里',8.89,'豆瓣9.7高分推荐！旅法翻译家梅子涵之女梅思繁法文直译，舒朗大开本，央美教授高精度还原原作插画。首次收录全球舞台剧、音乐会、电影、动画片等对《小王子》的精彩诠释，通晓名作的前世今生。','1000','500','http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg'),
                          (5,'5','天龙八部(全五册)', '武侠小说', '金庸', '102.30', '《天龙八部》一书以北宋、辽、西夏、大理并立的历史为宏大背景，将儒释道、琴棋书画等中国传统文化融会贯通其中，书中人物繁多，个性鲜明，情节离奇，尽显芸芸众生百态。', '74747','1000', 'http://img3m2.ddimg.cn/84/17/23273202-1_w_1.jpg'),
                          (6,'6','哈利波特与魔法石', '魔幻小说', 'J·K·罗琳', '30.20', '“沉湎于虚幻的梦想，而忘记现实的生活，这是毫无益处的，千万记住。”                                ——阿不思·邓布利多', '1000', '100','http://img3m1.ddimg.cn/88/0/25479421-1_w_1.jpg');
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) AUTO_INCREMENT,
  `nickname` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `expense_all` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'handsome', 'handsome', '', '','85.5'),
                          ('2', 'ugly', 'ugly', '','','100'),
                          ('3', 'root', 'root', '','','2000');

-- ----------------------------
-- Table structure for user_auth
-- ----------------------------
DROP TABLE IF EXISTS `user_auth`;
CREATE TABLE `user_auth` (
  `user_id` int(11) AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` int(11) NOT NULL,
  `user_valid` BOOLEAN NOT NULL,
  `email` varchar(255) NOT NULL,
    PRIMARY KEY (`user_id`),
    FOREIGN KEY(user_id) REFERENCES user(user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_auth
-- ----------------------------
INSERT INTO `user_auth` VALUES ('1', 'handsome', 'handsome', '0','1','1292171824@qq.com'),
                               ('2', 'ugly', 'ugly', '0','1','1292171824@qq.com'),
                               ('3', 'root', 'root', '1','1','1292171824@qq.com');

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `cart_id` INT UNSIGNED AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `book_title` varchar(255) DEFAULT NULL,
  `book_image1` varchar(255) DEFAULT NULL,
  `book_price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `order_info`;
CREATE TABLE `order_info` (
  `order_id` int(11) AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `time` int(11),
  PRIMARY KEY (`order_id`),
  FOREIGN KEY(user_id) REFERENCES user(user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
    `orderItem_id` int(11) AUTO_INCREMENT,
    `order_id` int(11) NOT NULL,
    `book_title` varchar(255) DEFAULT NULL,
    `book_price` decimal(10,2) DEFAULT NULL,
    `book_num` int(11) NOT NULL,
    PRIMARY KEY (`orderItem_id`),
    FOREIGN KEY(order_id) REFERENCES order_info(order_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `order_item_tmp`;
CREATE TABLE `order_item_tmp` (
    `order_id` int(11) NOT NULL,
    `user_id` int(11) NOT NULL,
    `book_title` varchar(255) NOT NULL,
    `book_price` decimal(10,2) NOT NULL,
    `book_num` int(11) NOT NULL,
    `username` varchar(255) NOT NULL,
    PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
