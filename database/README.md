# Database

We use Docker to manage our PostgreSQL database for development and testing purposes.
This means we get to check in database-connection details into version control, so it should work similarly on everyone's
pcs.

In the current /docker-compose.yml configuration the Data folder is mounted back to the host system. This means that if you destroy your
database container, the actual data (and for all intents and purposes the entire database) will remain intact.

So to cleanly start over, you will need to delete the `database/data` folder as well. 