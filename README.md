# reversemd5
A reverse-md5 lookup database for the web, which adds user string-to-md5 queries to the the database.

Database is MySQL, original data rendered in Python, server side code is PHP*, the client is HTML, CSS, and JavaScript, and uses AJAX for server queries.

See in action on [reversemd5.com](http://reversemd5.com)

*reversemd5.com still runs php, while the code here is running Nodejs,
and still being tested before deployment to the domain.

* * *
### Setup
* Create a mysql database.
* Import the schema into the database from either [initDB.sql](https://github.com/danyshaanan/reversemd5/blob/master/mysql/initDB.sql), or [initializedDB.sql](https://github.com/danyshaanan/reversemd5/blob/master/mysql/initializedDB.sql).
* Optional: Use [this Python script](https://github.com/danyshaanan/reversemd5/blob/master/mysql/generateStrings.py) to generate some values into a file, and import it into your database. A bash cheatsheet is [here](https://github.com/danyshaanan/reversemd5/blob/master/mysql/generateInitDBAndImportToMysql.sh).
* Copy [config.example.json](https://github.com/danyshaanan/reversemd5/blob/master/config.example.json) to `config.json`, and modify the values.
* `node reversemd5.js`

Once it is done, every string entered in the 'string to md5' input field will be sent to the server to be added to the database with its md5 sum.
