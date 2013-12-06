define( function () {

	'use strict';

	// TODO can this be neatened up at all?
	return function ( ractive ) {
		var query, decorator, transition, observer;

		while ( query = ractive._defLiveQueries.pop() ) {
			query._sort();
		}

		while ( decorator = ractive._defDecorators.pop() ) {
			decorator.init();
		}

		while ( transition = ractive._defTransitions.pop() ) {
			transition.init(); // TODO rename...
		}

		while ( observer = ractive._defObservers.pop() ) {
			observer.update();
		}
	};

});