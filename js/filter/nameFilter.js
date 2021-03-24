angular.module("listPhone").filter("name", function () {
    return function (input) {
        var names = input.split(" ");
        var namesFormat = names.map(function (name) {
            if (/(da|das|do|dos|de)/.test(name)) return name;
            return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
        });
        return namesFormat.join(" ");
    };
})