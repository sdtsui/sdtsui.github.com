---
layout: post
title:  300ms AngularJS Gotcha
date:   2015-07-04
author: "Daniel Tsui"
tags:
- Angular
- AngularJS
- ng-click
- ng-touch
- mobile
- hybrid
- ionic
- Cooper
- Cooper Buckingham
---

![Expect Delays](http://ionicframework.com/img/blog/delay-header.png)

Developing a webapp for mobile, or hybrid app in Ionic? Did you know that you need `ngTouch`?
Check out the docs for [`ngClick`](https://docs.angularjs.org/api/ngTouch/directive/ngClick):

> Most mobile browsers wait about 300ms after a tap-and-release before sending the click event. This version handles them immediately, and then prevents the following click event from propagating.

Original Source: [StackOverflow](http://stackoverflow.com/questions/20718020/angularjs-ngtouch-300ms-delay)

Credit and major props to fellow Hack Reactor alumnus [Cooper Buckingham](https://www.linkedin.com/in/cooperbuckingham) for the tip. You can learn more about his work by checking out [Heavy Handed Games](http://heavyhandedgames.com/) and the [Hero Engine](http://www.heroengine.com/).

Edit!
[Fastclick.js](https://github.com/ftlabs/fastclick) is a great alternative. Naturally, Ionic uses it under the hood. Check out their [blog post](http://blog.ionic.io/hybrid-apps-and-the-curse-of-the-300ms-delay/) on it!