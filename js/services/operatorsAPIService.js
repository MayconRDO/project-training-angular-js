angular.module("listPhone").service("operatorsAPI", function ($http, config) {
    this.getOperators = function () {
        //return $http.get(config.urlBase + "/operator");
        var operators = [
            { name: "Oi", codigo: 14, category: "Celular", price: 1 },
            { name: "Vivo", codigo: 15, category: "Celular", price: 4 },
            { name: "Tim", codigo: 41, category: "Celular", price: 8 },
            { name: "GVT", codigo: 25, category: "Fixo", price: 2 },
            { name: "Embratel", codigo: 21, category: "Fixo", price: 4 }
        ];
        return operators;
    };
});