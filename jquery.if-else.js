/**
 * jQuery if-else plugin
 *
 * Creates if(), else(), elif() and fi() methods that can be used in
 * a chain of methods on jQuery objects
 * 
 * @author Vegard Løkken <vegard@headspin.no>
 * @copyright 2013
 * @version 0.5.0
 * @licence MIT
 */
;(function( $ ) {

    /* Undef object that all chained jQuery methods work on
     * if they should not be executed */
    var $undef = $();

    /* The original object is stored here so we can restore
     * it later */
    var orig;

    $.fn["if"] = function(condition) {
        if (this === $undef) {
            return $();
        } else {
            orig = this;
            return !!condition ? orig : $undef;
        }
    };

    $.fn["elif"] = function(condition) {
        return this.else().if(condition);
    };

    $.fn["else"] = function() {
        return (this === $undef || this.prevObject === $undef) ?
	    (orig || this) : $undef;
    };

    $.fn["fi"] = function() {
        return orig || this;
    };

})(jQuery);
