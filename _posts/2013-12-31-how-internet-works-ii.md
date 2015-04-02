---
layout: post
title:  Interview Questions: What happens when you go to google.com in your browser? (Part II)
date:   2013-12-31
author: "Daniel Tsui"
tags:
- t1
- t2
---

Welcome to “What happens…” Part II: HTTP Requests Continued, and HTTPS

We left Part I at idempotence,  the takeaway being “PUT” and “DELETE” are “safe” operations, since they have no additional effect when applied multiple times.

Check out this stackoverflow answer for more.

On the HTTP “HEAD” method: useful for testing and logging, as explained here.

On the HTTP “OPTIONS” method: don’t worry about it.

On Status codes:

Common codes.

Wikipedia for a more comprehensive list.

These requests are used by the browser to communicate with a server.

HTTPS (HTTP Secure) is a secure version of this protocol, and adds a layer of security when pressing enter into your url bar, like so:

-Browser sends a request to a webpage.

-Webpage responds by sending an SSL (Secure Sockets Layer) certificate, with a public key.

-Browser uses public key in the certificate to initiate an “SSL handshake”, to generate a secret key.

-The secret key is now used between the browser and the webpage, to ensure encryption of http requests and responses.