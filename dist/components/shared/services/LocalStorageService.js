/*
 final 2018-08-31 
*/

!function(){"use strict";function t(e){return{set:function(t,o){e.localStorage[t]=o},get:function(t,o){return e.localStorage[t]||o||!1},setObject:function(t,o){e.localStorage[t]=JSON.stringify(o)},getObject:function(t,o){return null!=e.localStorage[t]?JSON.parse(e.localStorage[t]):o||!1},remove:function(t){e.localStorage.removeItem(t)},clear:function(){e.localStorage.clear()}}}angular.module("appModule").factory("$localstorage",t),t.$inject=["$window"]}();