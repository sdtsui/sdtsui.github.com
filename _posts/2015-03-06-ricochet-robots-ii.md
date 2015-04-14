---
layout: post
title: Ricochet Robots in Backbone.js and HTML5 Canvas
date:   2015-04-06
author: "Daniel Tsui"
tags:
- ricochet robots
- html5 canvas
- backbone
- vex
- projects
---

![Alex Randolph's Ricochet Robots](https://images.funagain.com/cover/huge/14583.jpg)
[Play the webapp!](https://ricochet.herokuapp.com)

I recently finished a side-project in Backbone.js and HTML5 Canvas: a slick, playable remake of Ricochet Robots, the classic game by Alex Randdolf.  It's a game I'd often play on breaks with my cohort-mates at Hack Reactor. Now, students at H/R won't even have to find the board game: go straight to the webapp and get started in under a minute!

What's great about Ricochet Robots is the fast setup and ease of play. 
Unlike other, longer board games, Ricochet can be enjoyed in bite sized pieces. You can jump in and out of the game at any point, enjoying individual puzzles. You can also get competitive: dig in and try to win a full game by getting the most tokens.

Here's a demo of the game setting up:
![Set-up Demo](http://i.imgur.com/tHKD4wm.gif)

What ties it all together is the bidding process, made seamless with VexJS, a modal dialog library.  Bidding makes for some intense Ricochet games: placing your bid quickly runs the risk of erroneously under-bidding and losing a point. However, if you take too long, you might get undercut by others. Between equally matched opponents, there's a meta-game going on, where a quick bid might throw your opponent off.

Here's a quick round being played:
![Set-up Demo](http://i.imgur.com/oR7ESXJ.gif)


Before/Inspiration:
During my time as a student at Hack Reactor, I looked at Michael Fogelman's solver program in C/Python. He was simply doing a depth-first search (no prioritizing of nodes aside from the pre-computing map but being really smart about everything else in his code). I was inspired by [his slide deck](https://speakerdeck.com/fogleman/ricochet-robots-solver-algorithms), and how a large exponentially increasing problem space could be tackled by progressively more sophsticated alogorithmic techniques. I originally set out to build a quick/ugly game, focus on the solver, and potentially expand the project's scope into a chance to use OpenCV to take a picture of the board.

After/Lessons Learned:
Despite scoping down considerably due to other time commitments, I had a great time working on this. It was great to brush up on some Backbone.js, and using the event system more makes me want to go through the annotated source later next month. I'm also happy with my choice to use HTML5 Canvas instead of D3.js. more on both of those, in a future blog post.