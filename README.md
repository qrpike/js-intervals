
# JS Intervals

Custom JS Interval implementations. Attempting to replicate exact functionality of native `setInterval` and `clearInterval`

### Example:
```javascript
// Include Library:
const { MySetInterval, MyClearInterval } = require('./src/lib.js')
// Create an Interval:
var firstInt = MySetInterval(() => {
	console.log('My Interval')
}, 1000)
```

