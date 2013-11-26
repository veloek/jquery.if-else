/**
 * jQuery if-else plugin
 *
 * Creates if(), else() and fi() methods that can be used in
 * a chain of methods on jQuery objects
 * 
 * @author Vegard Løkken <vegard@headspin.no>
 * @copyright 2013
 * @version 0.1
 * @licence MIT
 */
;(function( $ ) {

    /* Undef object that all chained jQuery methods work on
     * if they should not be executed */
    var $undef = $();

    /* The original object is stored here so we can restore
     * it later */
    var orig;

    /* We store the condition given in the if() method */
    var condition;

    $.fn["if"] = function(options) {
        orig = this;
        condition = !!options;

        if (!condition) {
            return $undef;
        } else {
            return this;
        }
    };

    $.fn["else"] = function( options) {
        if (orig === undefined)
            throw "else() can't be used before if()";

        return this === $undef ? orig : $undef;
    };

    $.fn["fi"] = function(options) {
        if (orig === undefined)
            throw "fi() can't be used before if()";

        var toReturn = orig;
        orig = undefined;

        return toReturn;
    };

})(jQuery);
