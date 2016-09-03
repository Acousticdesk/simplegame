var GameModel = (function ($) {
	'use strict';

	var selected;

	function getSelected () {
		return selected;
	}

	function setSelected (hero) {
		selected = hero;
	}

	function removeSelection () {
		selected = null;
	}

	return {
		getSelected: getSelected,
		setSelected: setSelected,
		removeSelection: removeSelection
	};

})(jQuery);