/*
init md5 database
*/

DROP TABLE IF EXISTS md5;

CREATE TABLE md5 ( 
  str VARCHAR(32) UNIQUE,
  md5 VARCHAR(32),
  ip  VARCHAR(15),
  INDEX(str),
  INDEX(md5),
  INDEX(ip)
);

--REPLACE INTO md5 (str,md5) VALUES('',md5(''));
