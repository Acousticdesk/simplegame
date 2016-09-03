var PlayerModel = (function () {
	
	'use strict';

	var coordinates = {
		row: 0,
		cell: 0
	}

	function getCoordinates () {
		return coordinates;
	}

	function setCoordinates (x, y) {
		coordinates.row = y;
		coordinates.cell = x;
	}

	return {
		getCoordinates: getCoordinates,
		setCoordinates: setCoordinates
	};

})();