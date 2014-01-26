define(['./module'], function(directives){

	directives.directive('bsHolder', function() {
	    return {
	        link: function (scope, element, attrs) {
	            Holder.run({images:element.get(0), nocss:true});
	        }
	    }
	});
});