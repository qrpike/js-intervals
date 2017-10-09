
// Include lib:
const { MySetInterval, MyClearInterval } = require('./src/lib.js')




// String instead of Function passed:
var firstInt = MySetInterval(
	"console.log('firstInt ( 10 sec interval )')"
, 10000)


// Func with additional params for callback:
var secondInt = MySetInterval(( arg1, arg2 ) => {
	console.log('secondInt, with optional args', arg1, arg2)
}, 5000, 'firstarg', 'secondarg')


// Simple Interval
var thirdInt = MySetInterval(() => {
	console.log('thirdInt ( One Second Interval )')
}, 1000)






// Clearing a timeout using the returned ID:
setTimeout(() => {
	console.log('Clearing third interval:', thirdInt)
	MyClearInterval( thirdInt )
}, 5000)


// Clearing the timeout again, which has been removed ( not valid ).
setTimeout(() => {
	console.log('Clearing third interval again, which doesnt exist. Will throw err.')
	MyClearInterval( thirdInt )
}, 25000)


