
# JS Intervals

Custom JS Interval implementations. Attempting to replicate exact functionality of native `setInterval` and `clearInterval`

### Example:

	const { MySetInterval, MyClearInterval } = require('./src/lib.js')
	var firstInt = MySetInterval(() => {
		console.log('My Interval')
	}, 1000)


