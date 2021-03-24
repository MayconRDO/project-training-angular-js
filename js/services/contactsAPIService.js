angular.module("listPhone").factory("contactsAPI", function ($http, config) {

    var getContacts = function () {
        //return $http.get(config.baseUrl + "/contact");

        var contacts = [
            { name: "maycon de oliveira", phone: "111111111", date: new Date(), color: "blue", operator: { name: "Oi", codigo: 14, category: "Celular" } },
            { name: "eloisa caetano de oliveira", phone: "222222222", date: new Date(), color: "yellow", operator: { name: "GVT", codigo: 25, category: "Fixo" } },
            { name: "schirley caetano", phone: "333333333", date: new Date(), color: "red", operator: { name: "Embratel", codigo: 21, category: "Fixo" } }
        ];

        return contacts;

    };

    return { getContacts }

});