angular.module("listPhone").filter("ellipsis", function () {
    return function (input, size) {
        var output = input.substring(0, (size || 2)) + "..."
        return output;
    };
})