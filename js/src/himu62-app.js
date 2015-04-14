Polymer('himu62-app', {
	goPagetop: function() {
		console.log('fab tapped!');
	},
	onSelect: function(e, target) {
		if(target.isSelected) {
			document.querySelector('himu62-app /deep/ himu62-wrapper').page = target.item.label;
		}
	}
});