



/**
 *  MyIntervals is the interval reference map to the intervals
 *  created by MySetInterval..
 *  @type {Object}
 */
var MyIntervals = {
	counter: 0,
	intervals: {}
}
module.exports.MyIntervals = MyIntervals




/**
 *  MyClearInterval clears the interval and deletes the entry from the global
 *  MyIntervals object, effectively destroying the class and GC can collect.
 *  @param  {Int} 		intervalId 		ID of the interval to clear
 *  @return {String}            		ID of the interval cleared.
 */
module.exports.MyClearInterval = ( intervalId ) => {
	let interval = MyIntervals.intervals[`interval_${intervalId}`]
	if( !interval ){
		throw new Error('Interval Does Not Exist')
	}
	return interval.clear()
}




class MyInterval {

	/**
	 *  Constructor for the interval MyInterval class
	 *  @param  {Int}   	id       	ID of this interval
	 *  @param  {Function} 	callback 	Callback function or string to be executed at desired interval
	 *  @param  {Int}   	timer    	Interval timer in milliseconds
	 *  @param  {Array}   	args     	Additional args to be passed to callback function
	 *  @return {MyInterval}            Returns a class of MyInterval
	 */
	constructor( id, callback, timer, args ){
		this.id = id
		this.args = args
		this.timer = timer
		this.callback = callback
		if( typeof callback == 'string' ){
			this.callback = () => {
				eval(callback)
			}
		}
		this.continue()
	}

	/**
	 *  continue is called to schedule a timeout at the desired delay
	 */
	continue(){
		this.timeout = setTimeout( this.onTimeout.bind( this ), this.timer )
	}

	/**
	 *  OnTimeout is called each timeout completions. It then calls
	 *  continue to start another timeout.
	 */
	onTimeout(){
		this.callback.apply(null, this.args)
		this.continue()
	}

	/**
	 *  This gets called on MyClearInterval
	 *  @return {String} Id of the cleared interval
	 */
	clear(){
		clearTimeout( this.timeout )
		delete MyIntervals.intervals[`interval_${this.id}`]
		return this.id
	}

}




/**
 *  MySetInterval creates a new class for this interval, and returns the id
 *  which is used to reference the timer.
 *  @param  {Function} 	callback 	Callback function or string to be executed at desired interval
 *  @param  {Int}   	timer    	Interval timer in milliseconds
 *  @param  {Any}   	arg(s)     	Additional arg(s) to be passed to callback function
 *  @return {String}            	Returns id of the interval created.
 */
module.exports.MySetInterval = ( callback, timer, ...args )=> {
	let id = MyIntervals.counter
	MyIntervals.counter++
	MyIntervals.intervals[`interval_${id}`] = new MyInterval( id, callback, timer, args )
	return id
}



