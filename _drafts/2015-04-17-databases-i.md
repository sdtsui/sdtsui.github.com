---
layout: post
title:  "sampl"
date:   2014-11-09
author: "Daniel Tsui"
tags:
- t1
- t2
---

What is a schema? 
Structure described in code that spells out how data is organized. This includes types, and constraints on size and relationships to other pieces of data.

"Set of formulas called integrity constraints, ensure compatibility between parts of the schema"


What is mySQL?




How to specify a scheme, with the following graphics:

Graphical schema designers, provided.
vs 
SQL Code.


Style in schema design:
-table names as plural forms of entities they hold
-primary keys are best just 'id': Users.id
-foreign keys: entityname(singular)+"id"
-join tables: authors_genres (plural, separated by underscore)

Common problems:



Schema Design general rules:
-All entities need a table
-relationships between the entities are: 1-1, 1-m, or m-m
-Many to many -> new join table: purpose is to reduce relationships to two one-tomany relationships



"A database schema specifies, based on the database administrator's knowledge of possible applications, the facts that can enter the database, or those of interest to the possible end-users."


