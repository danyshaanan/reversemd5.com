# reversemd5
A reverse-md5 lookup database for the web, which adds user string-to-md5 queries to the the database.

***This is the PHP branch. For the updated version in Nodejs, see the master branch***

Database is MySQL, original data rendered in Python, server side code is PHP, the client is HTML, CSS, and JavaScript, and uses AJAX for server queries.

* * *
### Setup
* Create a mysql database.
* Import the schema into the database from either [initDB.sql](https://github.com/danyshaanan/reversemd5/blob/php/mysql/initDB.sql), or [initializedDB.sql](https://github.com/danyshaanan/reversemd5/blob/php/mysql/initializedDB.sql).
* Optional: Use [this Python script](https://github.com/danyshaanan/reversemd5/blob/php/mysql/generateStrings.py) to generate some values into a file, and import it into your database. A bash cheatsheet is [here](https://github.com/danyshaanan/reversemd5/blob/php/mysql/generateInitDBAndImportToMysql.sh).
* Copy [config.php.example](https://github.com/danyshaanan/reversemd5/blob/php/config.php.example) to `config.php`, and modify the values.
* Direct trafic to `/public/`

Once it is done, every string entered in the 'string to md5' input field will be sent to the server to be added to the database with its md5 sum.
