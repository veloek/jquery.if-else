/**
 * jQuery if-else plugin
 *
 * Creates if(), else() and fi() methods that can be used in
 * a chain of methods on jQuery objects
 * 
 * @author Vegard Løkken <vegard@headspin.no>
 * @copyright 2013
 * @version 0.3
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
            return !!condition ? this : $undef;
        }
    };

    $.fn["else"] = function() {
        if (orig === undefined)
            throw "else() can't be used before if()";

        return this === $undef ? orig : $undef;
    };

    $.fn["fi"] = function() {
        if (orig === undefined)
            throw "fi() can't be used before if()";

        return orig;
    };

})(jQuery);
