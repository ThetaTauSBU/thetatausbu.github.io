(function(){
	var vid = document.getElementById('rushVid');
	var resize = function(){
	  var height = rushVid.clientWidth * (72 / 128);
	  var maxHeight = 0.9 * window.innerHeight;
	  vid.height = (height < maxHeight) ? height : maxHeight;
	};
	window.addEventListener('DOMContentLoaded', resize);
	window.addEventListener('resize', resize);
})();