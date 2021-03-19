angular.module("listPhone").factory("contactsAPI", function ($http) {

    var getContacts = function () {
        //return $http.get("https://localhost:44337/api/contact");

        var contacts = [
            { name: "Maycon", phone: "111111111", date: new Date(), color: "blue", operator: { name: "Oi", codigo: 14, category: "Celular" } },
            { name: "Eloisa", phone: "222222222", date: new Date(), color: "yellow", operator: { name: "GVT", codigo: 25, category: "Fixo" } },
            { name: "Schirley", phone: "333333333", date: new Date(), color: "red", operator: { name: "Embratel", codigo: 21, category: "Fixo" } }
        ];

        return contacts;

    };

    return { getContacts }

});