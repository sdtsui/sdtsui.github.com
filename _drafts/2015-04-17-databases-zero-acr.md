---
layout: post
title:  "sampl"
date:   2014-11-09
author: "Daniel Tsui"
tags:
- t1
- t2
---

RMDBS: Relational.
Organizes data into one or more "tables", i.e., relations, of rows and columns, with a unique key for each row.
Rows in a table can be linked to rows in other tables, by storing the unique key to the destination row (i.e., the unique key is the foreign key)
    -primary key is what the foreign keys point to: specifies a unique tuple (key->value-or-row) in a table

Indexing: "quickly finding a matching tuple"
Indexing makes

Normalization: all the data is same size/shape.
    -eliminate redundancy/duplication of data.
    -Basically:
        -refactor tables into smaller, less redundant tables without losing information
        -Isolate data so additions, deleteions, modification of an attribute can be made in one table, but reflected in querie using foreign keys
            -Prevent anomalies:
                -update: same ID, differing properties
                -insert: needs all the properties to be normalized into table
                -delete

Because everything is on a magnetic strip...gotta be able to find things on the same size.


Intro to noSQL: Things to read:
http://stackoverflow.com/questions/1189911/non-relational-database-design
http://www.slideshare.net/adorepump/graph-databases-and-the-future-of-largescale-knowledge-management
http://www.slideshare.net/chrisbaglieri/non-relational-databases-2143723


acronyms:

CAP
ACID


Atomicity
Consistency
Isolation
Durability



CRUD

Why databases matter: Persistence. Storing things.


SQL:

4 RDMSes
-MySQL
-Oracle (how are schemas here different?)
-Informix
-Postgres



NoSQL, not only. Everything else.

Pro/con breadown:

Graph (orientDB, neo4j 'exception')
    -Good for: relational data/complex relationships
Document stores (mongo)
    -
Key Value Stores (redis)
    -



***Further research?***
NoSQL vs SQL:
-CAP Considerations
-Ability to scale
-relational data
-ACID considerations


Students should present at least 3 of the following, with explanations and relative disadvantages/advantages for each type:


-How schemas differ
-Normalization or Denoralization of data in schema. What impact does data redundancy have?
-Physical layout of data storage. Performance implications?
-How and where the schema is maintained (in source code vs in RDBMS), by software engineer/by database administrator. Ease of changes to the schema.
-Managing data integrity - data types, required data, etc.
-Challenges to scaling introduced by each type.
-How each handles ad hoc queries vs defined reporting?
-Strength of community/maturity in marketplace.



Market considerations: Way more people use SQL. Hard to be considered a legit engineer.