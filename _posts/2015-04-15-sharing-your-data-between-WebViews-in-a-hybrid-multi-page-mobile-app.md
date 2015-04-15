---
layout: post
title:  Sharing Your Data Between WebViews in a Hybrid Multi Page Mobile App
date:   2015-04-15
author: "Daniel Tsui"
tags:
- appgyver
- angular
- SPA
- MPA
- webviews
- hybrid 
- mobile
---
</a>

Building dynamic, single page apps (SPA) with Angular is par for the course and one of its selling points. However, when it comes to building a hybrid mobile app, the SPA model can create problems. You have to be very careful with memory management, and you miss out on the native navigation features of the device if you use Angular routing.

There are a number of frameworks or stacks that incorporate Angular for making hybrid mobile apps, and that number is steadily growing. Some of these frameworks, such as the newly renamed "AppGyver" (formerly "Steroids"), turn your Angular SPA into a multi page app (MPA).

This comes with a number of benefits, such as:
- Significantly improved memory management
- Native navigation and animation
- Easier to reproduce error / bug states
- Greater code modularity
- More native overall experience.

However, for one familiar with building Angular SPAs, this MPA approach is different. The biggest challenge comes from sharing your data between your different views. This is due to the fact that each "page" or view in the app is actually a separate WebView. That means each view has a separate `window` object, and you cannot natively share data between those views using globals.

We will take a look at some options along with code examples I have used with AppGyver while building a real estate app. The first options are specific to AppGyver, but the last two options should work for any framework.


### 1. Channels
When using AppGyver, channels represent the most straightforward way of sharing your data. This is an asynchronous event system with a format that should seem pretty intuitive. It will emit data with the `publish` method, which will be received by each listener with the `subscribe` method. 

**Here is a basic example:**

{% highlight javascript %}
// WebView One
supersonic.data.channel('query')
  .publish(data);

// WebView Two
supersonic.data.channel('query')
  // receive the data from view one
    .subscribe( function(data) {
      // perform some function with that data
      callback(data);
    });
{% endhighlight %}


In the above example, View One is emitting data to the channel called `query`. View Two is listening to that channel, receiving the data, and invoking the `receiveData()` function when data is received. 

In my real estate app, I wanted to send search results from a search view to the view that contained the actual listings. 



### Search View:

<img src="http://i.imgur.com/lv8N2hc.png" width="300" height="550"/>

####Listings View:  
<img src="http://i.imgur.com/9S8KW5p.png" width="300" height="550" style="float:left;" />
<img src="http://i.imgur.com/6epJDcg.png" width="300" height="550"/>  


You will likely not want to put that event listener directly in your Angular view. You will likely want to wrap it in a controller or factory/service function that gets invoked on a user action or server response. 


Below is an example with some of the code I used:
{% highlight javascript %}

// search.html (search view)
<button ng-click="closeSearch()">Search</button>

// SearchController.js
$scope.closeSearch = function(){
      // Uses the Search factory to fetch actual data
      Search.fetch($scope.query, $scope.sort, function(data){
        // Error handling
        if(data.error){ 
          // perform error handling
        }
        if(!data.error){
          // Send the data to the listings controller through the ‘query’ channel
          supersonic.data.channel('query').publish(data);
          // Close the search view to reveal the listings view
          supersonic.ui.modal.hide();  
        }
      });
    };

// IndexController.js
 // Receive query params from the search view when published
    supersonic.data.channel('query')
      .subscribe( function(data) {
        // Force the view to update
        $scope.$apply(function(){
          // clears out previous listings
          $scope.homes = [];
          // updates the listings to the search results
          updateHomes(data);
          // take user to the top of the view
          window.scrollTo(0, 0);
      });
{% endhighlight %}


The biggest caveat to work around with this system is that a view has to be open for it to receive data. However, All views that are open and subscribing to that channel will receive that data. You will either have to preload that view for it to receive data, or use a different method. 

This actually presented a challenge with the search view, because once the search button was clicked to view the actual search results, that view is closed. When it gets reopened to perform a new search, the previous search parameters are gone and replaced with whatever the default is. That’s not a great user experience. To compensate for that, localStorage was used to save the last query (search parameters) entered by the user.


### 2. `window.localStorage`
This is the standard `localStorage` object store API for retaining data between sessions. This data will automatically be shared between all WebViews. It won't matter whether or not a particular WebView has been opened yet, because it will have access to whatever has been stored in localStorage as soon as it is opened.

The most important thing to be aware of with `localStorage` is that it is persistent, even between user sessions. This can either be a good thing or a bad thing. You have to be aware of how that data will be needed, mutated, or saved at all stages of the user experience in your app.

Using localStorage is as simple as:
{% highlight javascript %}

// save it to localStorage
localStorage.setItem(‘objectName’, JSON.stringify(‘object’));

// retrieve it from localStorage
JSON.parse(localStorage.getItem(‘objectName’));
{% endhighlight %}

In my case, I wanted to save the last query entered by the user to local storage. That way, it could be accessed by any other view at any time. It would also persist after the app had been closed and reopened, so that the last search entered by a user would be the default. To accomplish this, I added it to my search controller and updated the `closeSearch()` function.

{% highlight javascript %}

// SearchController.js

  // Uses the Search factory to get the last saved query and sort parameters
  $scope.query = Search.get();
  $scope.sort = Sort.get();

  $scope.closeSearch = function(){
      // Uses the Search factory to fetch actual data
      Search.fetch($scope.query, $scope.sort, function(data){
        // Error handling
        if(data.error){ 
          // perform error handling
        }
        if(!data.error){
          // Save the successful query object to localStorage using the Search factory
          Search.set($scope.query);
          supersonic.data.channel('query').publish(data);
          supersonic.ui.modal.hide();  
        }
      });
    };

// SearchFactory.js
    var set = function(q){
      // save the query object as a string in local storage
      localStorage.setItem('query', JSON.stringify(q));
    };
    var get = function(){
      // first check for a query saved in localStorage
      // if there is no saved query, fallback to the Angular value of `query`
      return JSON.parse(localStorage.getItem('query')) || query;
    };

// Values.js
  // An example of the default query object as saved an Angular value
  .value('query', {
    ad: '', // address
    bd: 3, // min beds
    ba: 2, // min baths
    pr: { // price range
      min: 100000,
      max: 250000,
      limit: 599000 // the max slider value to include searches above this amount
    },
    yr: 1985, // min year
    ft: 1250, // min sq feet
  })
  .value('sort', {
    property: 'pr', // sort by price
    order: 'descending' // sort in descending order
  })

// search.html
  // The query parameters are represented with range sliders in the search view.
     <label>Price Range:
       <slider class="range dual"

          // dual range slider minimum value
          ng-model="query.pr.min"

          // dual range slider maximum value
          ng-model-range="query.pr.max"

          buffer="60000"
          floor="60000"
          ceiling="599000"
          step="10000">
        </slider>
      </label>

      <label>Beds: {{ query.bd }}+
        <slider class="range"
          // number of bedrooms in the query object
          ng-model="query.bd"
          floor="1"
          ceiling="6"
          step="1">
        </slider>
      </label>

      <label class="item item-input item-stacked-label">Baths: {{ query.ba }}+
        <slider class="range"
          // number of bathrooms in the query object
          ng-model="query.ba"
          floor="1"
          ceiling="5"
          step="0.5">
        </slider>
      </label>

… etc …

{% endhighlight %}

In general, using localStorage this way with mobile apps is slightly safer than in normal web apps. In a desktop browser, a user can access their localStorage values and edit them at will. However, that process is currently not as easy in the mobile environment, which decreases the likelihood of users doing strange things with the values you save in localStorage.


### 3. `window.postMessage`
The last option I will explore here is to use the postMessage API. This will send data to ALL open views, so you need to make sure this data is for the intended target. This was used to open the results for a specific item out of a collection. More specifically, when viewing a collection of listings, a user will want to click through to see details about a specific listing.

Though AppGyver provides a native way to do this, you have to use their `model` methods to do so. I tried doing so with my Parse backend, but the AppGyver integration seems to be buggy for Parse at the moment, so this is the workaround. 

Here is essentially what is in the listings view to allow a user to click through to the individual item:

{% highlight javascript %}
// index.html
<div ng-repeat="home in homes">
    <!-- On click, invoke `openShow()` and pass in the id for this home -->
    <li ng-click='openShow(home.id)' >Home data … </li>
</div>

// IndexController.js
    // Open the single home view and pass in the home ID
    $scope.openShow = function(id) {
      // call postMessage, declare who it is intended for, along with the desired item ID
      window.postMessage({ recipient: 'homeShow', id: id });
      // find that view
      supersonic.ui.views.find('homeShow').then(function(view) {
      // push the view for the individual listing on top of the view stack
        supersonic.ui.layers.push(view);
      });
    };

// ShowController.js, controller for individual items

    // Make this view able to receive data from postMessage
    // Add `messageReceived` as the callback 
    window.addEventListener('message', messageReceived);

    // Callback for the postMessage data
    var messageReceived = function(event) {
      // make sure that this message is intended for us
      // this was declared in the data object passed to postMessage
      if (event.data.recipient === 'homeShow') { 
        // Make sure that a data ID is present
        if (event.data.id) {
          // Update the view with the data for the current individual listing
          refreshViewData(event.data.id);
        } else { 
          // If no id is present, reset the view to prepare for the next load
          $scope.$apply(function() {
            $scope.home = {ad: 'Loading...'}; // clear last address
            window.scrollTo(0, 0); // preloaded page retains last position
          });
        }
      }
    };
{% endhighlight %}

### An example of the individual listing view:

<img src="http://i.imgur.com/DZ1oIBV.png" width="300" height="550"/>

### Wrapping Up:  

We have explored a number of ways to share data between your WebViews in AppGyver and in mobile hybrid apps in general. However, if the methods mentioned here do not meet your needs, AppGyver provides a few more higher level methods to share your data across your WebViews. As hybrid mobile app development continues to improve at a rapid pace, I hope this encourages you to jump in and explore building these apps for yourself.

### About the guest poster, Nic Mitchell:
![Nic Mitchell](https://avatars1.githubusercontent.com/u/4238222?v=3&s=400)

Nic Mitchell is a full stack software engineer with background in design. Nic is interested in building multi-device applications that leverage the virtual world of software to connect people and resources in the physical world. You can read more of Nic's musings here: [nicmitchell.com](http://nicmitchell.com). You can learn more about RE-Locate, the demo app featured on this blog post, on the [github project page](https://github.com/nicmitchell/RE-locate).
