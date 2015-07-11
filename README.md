# enunciate.js
Human readable chain code.

Transform this:
```js
sendMessage(message, to, from)
```
into this:
```js
say("Hey, what's up?").to("John").from("Anne")
```

##Why??
Honestly, I just had this weird idea and wanted to see what will come of it, but a few reasonables usages come to mind:

* more readable code
* natural language like code
* easier to remember parameters

##Usage
Just feed it a function, it will figure out the chained functions names from its params:
```js
var say = enunciate(function(message, to, from){
});
say("Are you there?").to("Michael").from("Philip");
```
