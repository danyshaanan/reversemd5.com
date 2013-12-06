<?php

require_once '../../config.php'; //config.php sets the values of $SqlUser and of $SqlPass

function set($str,$md5) {
  $args = array($str,$md5,$_SERVER['SERVER_ADDR']); //TODO: FIX! this should be user address, not server
  $args = array_map('mysql_real_escape_string', $args);
  array_unshift($args, "INSERT IGNORE INTO md5 (str, md5, ip) VALUES( '%s' , '%s' , '%s' )");
  $query = call_user_func_array('sprintf', $args);
  $result = mysql_query($query);
}

function get($md5) {
  $query = sprintf("SELECT * FROM md5 WHERE `md5`='%s';", mysql_real_escape_string($md5));
  $row = mysql_fetch_array(mysql_query($query));
  if ($row['str']) echo $row['str'];
}

if (!isset($connection)) {
  $connection = mysql_connect('localhost',$SqlUser,$SqlPass) or die(mysql_error());
  mysql_select_db("md5") or die(mysql_error());
}

if     ($_REQUEST['str']) set($_REQUEST['str'],md5($_REQUEST['str']));
elseif ($_REQUEST['md5']) get($_REQUEST['md5']);


