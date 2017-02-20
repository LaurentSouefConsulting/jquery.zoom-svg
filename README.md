# jQuery Zoom SVG Plugin

# Purpose
This plugins is meant to pan and zoom in/out an SVG object inside a div container.
This is particulary usefull for SVG Maps.
This plugin is based on jQuery to ensure multi-browsers support.


# Requirements
It has been qualifyed on jQuery 3.1, Jquery UI 1.2 (draggable) and jQuery mousewheel 3.1

# Install
Copy the jquery.zoom-svg.min.js and zoom-svg.min.css dist files in your lib folder.

# Loading
Simply load the scripts and css files.

```sh
	<script type="text/javascript" src="../test/libs/jquery.min.js"></script>
	<script type="text/javascript" src="../test/libs/jquery-ui.min.js"></script>
	<script type="text/javascript" src="../test/libs/jquery.mousewheel.min.js"></script>

	<script type="text/javascript" src="../dist/jquery.zoom-svg.min.js"></script>
	<link rel="stylesheet" type="text/css" href="../dist/zoom-svg.min.css">
```

In your HTML File, create a div container with the class zoom-svg-container.
Add your svg inside. Make sure the SVG contains a viewBox otherwise it won't work.
Add 3 divs for the zoom-in, zoom-out and zoom-rst buttons as described below.

```sh
	<div class="zoom-svg-container">
		<svg id="svg1" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" 
		viewBox="0 0 500 400" version="1.1" preserveAspectRatio="xMinYMid slice" xmlns:cc="http://creativecommons.org/ns#" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/">
			 <defs id="defs3">
			 ... Your SVG ...
		</svg>
		<div class="zoom-svg-zoom zoom-svg-zoom-in"> + </div>
		<div class="zoom-svg-zoom zoom-svg-zoom-rst"> = </div>
		<div class="zoom-svg-zoom zoom-svg-zoom-out"> - </div>
	</div>
```

Bind zoomSvg to your svg using the jQuery selector.
	
```sh
	$("svg").zoomSvg();
```

# Options
step adjust the granularity of the zoom step.

```sh
zoomSvg.options = {
	step : 5,
}
```

# Test 
This was tested on Chrome 56 and IE 11
You can run the test/index.html for playing.

ENJOY !
Handcrafted with heart.

