/**
 * Created by otuzgen on 30.04.2015.
 */
angular.module('reverseDirective',[])

.filter('reverse', function () {
        return function (items) {
            return items.slice().reverse();
        }
    });

