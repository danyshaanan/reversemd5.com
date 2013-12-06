/*
init md5 database
*/

DROP TABLE IF EXISTS md5;

CREATE TABLE md5 (
  str VARCHAR(32) UNIQUE,
  md5 VARCHAR(32),
  INDEX(str),
  INDEX(md5)
);

--REPLACE INTO md5 (str,md5) VALUES('',md5(''));
