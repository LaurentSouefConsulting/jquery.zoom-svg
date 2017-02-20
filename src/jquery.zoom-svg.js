/**
 * @license jquery.zoom-svg.js v1.0
 * Updated: Mon Feb 20 2017
 * First Release
 * Copyright (c) Laurent SOUEF Consulting
 * Released under the MIT license
 * https://github.com/LaurentSouefConsulting/jquery.zoom-svg/blob/master/MIT-License.txt
 */
$.fn.zoomSvg = function(options) 
{
	// Merge with default options
	var options = $.extend({
		step :  5,
	}, options);

	// Return This to implement Chaining Design Pattern
	return this.each(function(){
		// Elements
		var svg = $(this);
		var div = $(this).parent();
		var zoomIn  = $(div).find(".zoom-svg-zoom-in");
		var zoomOut = $(div).find(".zoom-svg-zoom-out");
		var zoomRst = $(div).find(".zoom-svg-zoom-rst");

		// ViewBox Ratio
		var viewBox = $(svg).prop("viewBox");
		var viewRatio = viewBox.baseVal.height / viewBox.baseVal.width;

		// Params
		var step = options.step;
		var zoom = 100;
		var width  = $(svg).width();

		// Fix div size
		var height = Math.round(width * viewRatio);
		$(div).css("width", width);
		$(div).css("height", height);

		// Drag
		$(svg).draggable();

		// Zooms
		$(zoomIn).click(function() {
			zoom += step;
			scale();
		});

		$(zoomOut).click(function() {
			zoom -= step;
			scale();
		});

		$(zoomRst).click(function() {
			zoom = 100;
			$(svg).css({"top": "0px", "left": "0px"});
			scale();
		});

		// Resize
		$(window).resize(function() {
			$(div).css("width", "100%");
			$(div).css("height", "auto");
			width  = $(div).width();
			height = Math.round(width * viewRatio);
			$(div).css("height", height);
		});

		// Wheel
		$(div).mousewheel(function(event) {
			//console.log("Wheel", event.deltaY);
			if (event.deltaY > 0)
				$(zoomIn).trigger("click");
			else
				$(zoomOut).trigger("click");			
		});

		// Functions
		var scale = function() {
			$(svg).css("width", zoom + "%");
			$(svg).css("height", zoom + "%");
			$(div).css("width", width);
			$(div).css("height", height);
		};

	})
};
