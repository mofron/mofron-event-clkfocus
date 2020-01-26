# mofron-event-clkfocus
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

click focus event for mofron

## event function parameter

- component: event target component object

- boolean: focus flag

- mixed: user specified parameter

## Feature
 - this event notify when enable focus by clicking component and disable focus by clicking the other than that.
## Attention
 - not supported focus event by tab key

# Install
```
npm install mofron mofron-event-clkfocus
```

# Sample
```html
<require>
    <tag module="mofron-comp-frame">Frame</tag>
    <tag module="mofron-event-clkfocus">Focus</tag>
</require>
<script name=cevt run=init>
    cevt1.color((true === cevt2) ? "#f0e6fa" : "#FFFFFF");
</script>

<Frame event=Focus:@cevt></Frame>
```

