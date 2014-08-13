/**
 * jQuery if-else plugin
 *
 * Creates if(), else() and fi() methods that can be used in
 * a chain of methods on jQuery objects
 *
 * @author Vegard Løkken <vegard@headspin.no>
 * @copyright 2014
 * @version 1.0.1
 * @licence MIT
 */
;(function( $ ) {

    var getFilter = function(condition) {
        return (typeof condition === 'function') ?
            condition : function() { return condition; };
    };

    $.fn["if"] = function(condition) {
        return this.filter(getFilter(condition));
    };

    $.fn["else"] = function() {
        return this.end().not(this);
    };

    $.fn["fi"] = function() {
        return this.end();
    };

})(jQuery);
