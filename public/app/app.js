/**
 * Created by otuzgen on 27.04.2015.
 */
angular.module('MyApp',['appRoutes','mainCtrl','authService', 'userCtrl', 'userService','storyService', 'storyCtrl','reverseDirective'])
.config(function($httpProvider){
        $httpProvider.interceptors.push('AuthInterceptor');
    });