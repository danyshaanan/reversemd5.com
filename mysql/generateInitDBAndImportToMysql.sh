
#local:
python generateStrings.py.py > temp.sql
tar vfcj temp.sql.tar.bz2 temp.sql
scp temp.sql.tar.bz2 eg:

#remote:
mv ~/temp.sql.tar.bz2 .
tar vfxj temp.sql.tar.bz2
mysql md5 < init.sql
mysql md5 < temp.sql

