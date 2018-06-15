# node_helloworld
Node app that uses MongoDB connection

Run application as: node app

The main URL to access the project is:
http://localhost:3200/

List books:
http://localhost:3200/books

List one book:
http://localhost:3200/books/id

Add a book:
Use post method on http://localhost:3200/book or http://localhost:3200/book2

Update a book:
Use put method on http://localhost:3200/book/id

Remove a book:
Use delete method on http://localhost:3200/book/id


**********************
Mongo utils:
run mongoDB : C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe
add records using the commands on node_helloworld\resources\insertBooks.txt file
to access db: use db_name
find records: db.users.find()
find records in json format: db.users.find().pretty()

Commands used to create the Node project
create package.json file: npm init
install modules: npm install --save express mongoose body-parser