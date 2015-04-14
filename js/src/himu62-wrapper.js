Polymer('himu62-wrapper', {
	circleResize: function() {
		var root = document.querySelector('himu62-app /deep/ himu62-wrapper');

		// adjust the spinner to page view
		var pageWidth = root.$.content.offsetWidth;
		var pageHeight = root.$.content.offsetHeight;
		var spinnerSize = parseInt(Math.max(pageWidth, pageHeight) * 0.2);
		var spinnerWeight = parseInt(spinnerSize * 0.05);
		var spinner = root.shadowRoot.querySelector('paper-spinner');
		var spinnerCircles = root.shadowRoot.querySelectorAll('paper-spinner /deep/ .circle');
		spinner.style.width = spinner.style.height = spinnerSize + 'px';
		spinner.style.top = parseInt((pageHeight - spinnerSize) / 2) + 'px';
		spinner.style.left = parseInt((pageWidth - spinnerSize) / 2) + 'px';
		for(var i=0; i<spinnerCircles.length; ++i) {
			spinnerCircles.item(i).style.borderWidth = spinnerWeight + 'px';
		}
	},
	domReady: function() {
		this.circleResize();
		window.onresize = this.circleResize;
	},
	pageChanged: function(oldVal, newVal) {
		var loader = this.$.loader;
		loader.url = 'partials/' + newVal.toLowerCase() + '.html.part';
		loader.go();
	},
	resWrapper: function(e, res) {
		this.$.content.innerHTML = res.response;
	}
});