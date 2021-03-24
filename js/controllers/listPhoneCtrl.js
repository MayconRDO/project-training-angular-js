angular.module("listPhone").controller("listPhoneCtrl", function ($scope, contactsAPI, operatorsAPI, serialGenerator) {

    $scope.app = "Lista Telefonica";

    $scope.contacts = [];
    $scope.operators = [];

    // $scope.contacts = [
    //     { name: $filter('uppercase')("Maycon"), phone: "111111111", date: new Date(), color: "blue", operator: { name: "Oi", codigo: 14, category: "Celular" } },
    //     { name: $filter('uppercase')("Eloisa"), phone: "222222222", date: new Date(), color: "yellow", operator: { name: "GVT", codigo: 25, category: "Fixo" } },
    //     { name: $filter('uppercase')("Schirley"), phone: "333333333", date: new Date(), color: "red", operator: { name: "Embratel", codigo: 21, category: "Fixo" } }
    // ];

    // RUIM
    // $scope.addContact = function () {
    //     $scope.contacts.push({ name: $scope.name, phone: $scope.phone })
    // }

    // MEDIA
    // $scope.addContact = function (name, phone) {
    //     $scope.contacts.push({ name: name, phone: phone })
    // }

    // BOA
    $scope.addContact = function (contact) {

        contact.serial = serialGenerator.generate();
        $scope.contacts.push(angular.copy(contact));
        delete $scope.contact;
        $scope.contactForm.$setPristine();
    }

    // $scope.operators = [
    //     { name: "Oi", codigo: 14, category: "Celular", price: 1 },
    //     { name: "Vivo", codigo: 15, category: "Celular", price: 4 },
    //     { name: "Tim", codigo: 41, category: "Celular", price: 8 },
    //     { name: "GVT", codigo: 25, category: "Fixo", price: 2 },
    //     { name: "Embratel", codigo: 21, category: "Fixo", price: 4 },
    // ];

    $scope.deleteContact = function (contacts) {
        $scope.contacts = contacts.filter(function (contact) {
            if (!contact.selected) return contact;
        });
    };

    $scope.isSelectedContact = function (contacts) {
        return contacts.some(function (contact) {
            return contact.selected;
        });
    };

    $scope.orderBy = function (field) {
        $scope.criteriaOrdering = field;
        $scope.orderingDirection = !$scope.orderingDirection;
    };

    //contactsAPI.getContacts();

    var loadContacts = function () {
        // contactsAPI.getContacts().success(function (data) {
        //     $scope.contacts = data;
        // }).error(function (data, status) {
        //     $scope.message = "Aconteceu um problema: " + data;
        // });

        $scope.contacts = contactsAPI.getContacts();
    };

    var loadOperators = function () {
        $scope.operators = operatorsAPI.getOperators();
    }

    loadContacts();
    loadOperators();

});