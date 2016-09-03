var Grid = (function ($, GameModel) {

	var $el;

	function getCell (x, y) {
		return $el.find('[data-row="' + y + '"][data-cell="' + x + '"]');
	}

	function setListeners () {
		$el.find('.grid__item').on('click', onCellClick);
	}

	function onCellClick (e) {
		var $clickTarget = $(e.currentTarget),
			$selected = $('.' + GameModel.getSelected()),
			x = $clickTarget.attr('data-cell'),
			y = $clickTarget.attr('data-row');

		if ($selected && x && y) {
			placeHero($selected, x, y);
		}
	}

	function placeHero ($hero, x, y) {
		var $cell = getCell(x, y);
		$cell.append($hero);
	}

	function indexateGridItem (gridData) {
		return function (i, el) {
			if (i % 5 === 0) {
				gridData.row += 1;
				gridData.cell = 0;
			}

			gridData.cell += 1;

			$(el)
				.attr('data-row', gridData.row)
				.attr('data-cell', gridData.cell);
		}
	}

	function initGrid (selector) {
		var $element = $(selector),
			$cells = $element.find('.grid__item'),
			gridData = {
				row: 0,
				cell: 0
			};

		$el = $element;

		$cells.each( indexateGridItem(gridData) );

		setListeners();
	}

	function getElement () {
		return $el;
	}

	return {
		getElement: getElement,
		initGrid: initGrid,
		placeHero: placeHero
	};

})(jQuery, GameModel);