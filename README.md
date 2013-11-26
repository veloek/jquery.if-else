jquery.if-else
==============

When using chained function calls in jQuery, it happens that you only want some of the functions to be called under specific conditions. With this plugin, you can use if(), else() and fi() to accomplish this.

Ex.
--
```javascript
$(mySelector)
  .css("color", "blue")
  .if(someCondition)
    .css("background", "red")
  .else()
    .css("background", "orange")
  .fi()
  .css("font-size", "22px");
```

The plugin also supports nesting of if statements:

```javascript
$(mySelector)
  .css("color", "blue")
  .if(someCondition)
    .css("background", "red")
    .if(anotherCondition)
      .text("Yep")
    .else()
      .text("Nop")
    .fi()
  .else()
    .css("background", "orange")
  .fi()
  .css("font-size", "22px");
```


Enjoy!
