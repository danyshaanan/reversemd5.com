

python generateStrings.py > temp.sql
tar cfvj temp.sql.tar.bz2 temp.sql
scp temp.sql.tar.bz2 user@server:
rm temp.sql

ssh user@server

tar xfv temp.sql.tar.bz2
mysql DatabaseName < initDB.sql
mysql DatabaseName < temp.sql
rm temp.sql temp.sql.tar.bz2

