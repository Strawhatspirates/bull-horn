##BULL HORN
============

A simple library that let's you to map your user actions with DOM mutation.

![alt tag](https://lh4.googleusercontent.com/lymg1hTC_OhGfTL6qvt3FgMu5BTBxH8y345Bba2DUMtZmJEiTS_yuoRiBtRVqJdxbjHd9f3c=w500-h248-no
)

##USAGE

Include the Script and listen to the action-mutation relationship.

```

<script src="dist/bull.js"></script>

```

create a bull horn object.

```javascript

//were 2000 is the window size which tells us to about the maximum time
//bull-horn has to wait for a mutation to occur for an event.
//recommonded 1000 - 2000 milli-seconds
var horn = new BullHorn(2000);

horn.on('observation', function(event){
   console.log(event.summaries);
   console.log(event.x);
   console.log(event.y);
   console.log(event.element.text);
});

```

##LICENSE
MIT
