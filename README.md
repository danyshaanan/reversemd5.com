# reversemd5
A reverse-md5 lookup database for the web, which adds user string-to-md5 queries to the the database.

Database is MySQL, original data rendered in Python, server side code is PHP, the client is HTML, CSS, and JavaScript, and uses AJAX for server queries.

I've transfered the (old) project to github, and now making the code a bit nicer and more correct.

See in action on [reversemd5.com](http://reversemd5.com)

* * *
### Setup
* Create a mysql database.
* Import the schema into the database from either [initDB.sql](https://raw.github.com/danyshaanan/tcmount/master/mysql/initDB.sql), or [initializedDB.sql](https://raw.github.com/danyshaanan/tcmount/master/mysql(/initializedDB.sql).
* Optional: Use [this Python script](https://raw.github.com/danyshaanan/tcmount/master/mysql/generateStrings.py) to generate some values into a file, and import it into your database. A bash cheatsheet is [here](https://raw.github.com/danyshaanan/tcmount/master/mysql/generateInitDBAndImportToMysql.sh)
* Copy [config.php.example](https://raw.github.com/danyshaanan/tcmount/master/config.php.example) to `config.php`, and modify the values.
* Direct trafic to `/public/`

Once it is done, every string entered in the 'string to md5' input field will be sent to the server to be added to the database with its md5 sum.

* * *
### Notes
* Modify `generateStrings.py` to generate any combination of your desired charset at your desired length.
* ...
