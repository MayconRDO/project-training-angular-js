angular.module("listPhone").directive("uiAlert", function () {
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AE"
    };
});