# mofron-event-clkfocus
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

click focus event for mofron

## Feature
 - enable focus by clicking component and disable focus by clicking the other than that.
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
    <tag module="mofron-event-clkfocus">ClkFocus</tag>
</require>

<script run=init>
let evt = (p1,p2) => {
    p1.color((true === p2) ? "#f0e6fa" : "#FFFFFF");
}
</script>

<Frame event=ClkFocus(evt)></Frame>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| | pointer | boolean | true: set pointer cursor to target component. |
| | | | false: not set cursor to targeet component. |

