---
layout: post
title: Interview Questions - What happens when you go to google.com in your browser? (Part I)
date:   2014-12-31
author: "Daniel Tsui"
tags:
- interviews
- common questiosn
---

This was written in an extreme blogging session.

At a high level: The client sends a request to a server (for an image, some text, etc), and gets a response. More commonly, the client might be a browser, like Chrome, and the server might be hosting a website, like google.com.

An example: You type google.com into your url bar, press enter, and Chrome sends a HTTP GET request to ‘http://www.google.com&#8217;. Google sends back an HTTP response, with some HTML and a HTTP status code of 200.

Notice that when you type ‘google.com’ and press enter, the text in the location bar changes to ‘https://www.google.com&#8217;.
This is a Uniform Resource Locator, or URL. Chrome needs this to send a request to the right location.
URL’s have a number of components, which I won’t get into detail regarding. The relevant ones for this URL are:

URI Scheme: http
Subdomain: www
and
Host: google.com

I mentioned earlier that Chrome was sending a GET request.

GET requests are used to request information (“i want something”)

Here are a few other commonly used methods:

POST, used to perform an action
PUT, used place a resource, or update one
DELETE, delete a resources

Note that POST and PUT might seem similar, especially when thinking of database operations.

I found this Stackoverflow post of value.
http://stackoverflow.com/questions/630453/put-vs-post-in-rest

Another concept is idempotence: PUT and DELETE requests are idempotent because repeated identical requests of those types won’t create further changes of state, past the first request.

Look out for future parts:

http status codes
public and secret key encryption
domain name resolution, resolvers, and dns servers
routing
and more