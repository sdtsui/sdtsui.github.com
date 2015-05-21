---
layout: post
title:  Why your lines should be 80 Characters - An Illustrated Example
date:   2015-03-11
author: "Daniel Tsui"
tags:
- Git
- 80 characters
- code readability
---

Been doing some open source work. I realize it never quite occurred to me what the [big deal](http://stackoverflow.com/questions/110928/is-there-a-valid-reason-for-enforcing-a-maximum-width-of-80-characters-in-a-code) about 80 character lines was. Most people seem to think it's a good idea, but consensus implies it's more of a suggestion. 

I've found it's useful and productive to think about maintainability. It helps you reason about your code in different ways. What tipped it for me was what longer lines looked like on Github Pull Requests:  
[![Eek, readability](http://i.imgur.com/O811Hyc.png)](https://github.com/sdtsui/ricochet-backbone/commit/2d0b2ec81a6ea2e46d09c81ce91890314ece0123)

Might seem like a small thing, but small increases in overall readability add up, especially if you're interested in making [good contributions](http://phillipalexander.io/2013/09/16/good-github-contributions-look-like/).

[![Readable!](http://i.imgur.com/2lxhhgQ.png)](https://github.com/immutable-harmony/ih/pull/45/files)

Proper spacing ftw...
