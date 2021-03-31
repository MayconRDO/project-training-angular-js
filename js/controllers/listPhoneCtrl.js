angular.module("listPhone").controller("listPhoneCtrl", function ($scope, contacts, operatorsAPI, serialGenerator) {

    $scope.app = "Lista Telefonica";

    $scope.contacts = contacts;
    $scope.operators = [];

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

    // var loadContacts = function () {
    //     // contactsAPI.getContacts().success(function (data) {
    //     //     $scope.contacts = data;
    //     // }).error(function (data, status) {
    //     //     $scope.message = "Aconteceu um problema: " + data;
    //     // });

    //     $scope.contacts = contactsAPI.getContacts();
    //     $scope.error = "Não foi possível carregar os dados!";
    // };

    // var loadOperators = function () {
    //     $scope.operators = operatorsAPI.getOperators();
    // }

    // loadContacts();
    // loadOperators();

});