var Player = (function ($, PlayerModel, GameModel, Grid) {

	var $el;

	function place (x, y) {
		PlayerModel.setCoordinates(x, y);
		Grid.placeHero($el, x, y);
	}

	function generateClassName (selector) {
		return selector.replace(/\./gm, ' ').trim();
	}

	function setListeners () {
		$el.on('click', onPlayerClick);
	}

	function onPlayerClick () {
		$el.toggleClass('selected');
		handleSelection();
	}

	function handleSelection () {
		// Refactor user login to data-attr (not classname)
		var playerClassName = $el.attr('class').split(' ')[1];

		if ( !$el.hasClass('selected') ) {
			GameModel.removeSelection();
		} else {
			GameModel.setSelected(playerClassName);
		}
	}

	function init (selector) {
		var $element = $(selector);

		if ( $element.length ) {
			return;
		}

		$element = $('<div class="' + generateClassName(selector) +  '" />');

		$el = $element;

		place(1, 1);
		setListeners();
	}

	function remove () {
		$el
			.off('click')
			.remove();
	}

	return {
		init: init,
		place: place
	};

})(jQuery, PlayerModel, GameModel, Grid);