Polymer('himu62-wrapper', {
	domReady: function() {
		// adjust the spinner to page view
		var pageWidth = this.$.content.offsetWidth;
		var pageHeight = this.$.content.offsetHeight;
		var spinnerSize = parseInt(Math.max(pageWidth, pageHeight) * 0.25);
		var spinnerWeight = parseInt(spinnerSize * 0.05);
		var spinner = this.shadowRoot.querySelector('paper-spinner');
		var spinnerCircles = this.shadowRoot.querySelectorAll('paper-spinner /deep/ .circle');
		spinner.style.width = spinner.style.height = spinnerSize + 'px';
		spinner.style.top = parseInt((pageHeight - spinnerSize) / 2) + 'px';
		spinner.style.left = parseInt((pageWidth - spinnerSize) / 2) + 'px';
		for(var i=0; i<spinnerCircles.length; ++i) {
			spinnerCircles.item(i).style.borderWidth = spinnerWeight + 'px';
		}
	},pageChanged: function(oldVal, newVal) {
		var loader = this.$.loader;
		loader.url = 'partials/' + newVal.toLowerCase() + '.html.part';
		loader.go();
	},
	resWrapper: function(e, res) {
		console.log(res);
		this.$.content.innerHTML = res.response;
	}
});