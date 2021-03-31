angular.module("listPhone").controller("newContactCtrl", function ($scope, contactsAPI, serialGenerator, $location, operators) {

    $scope.app = "Lista Telefonica";
    $scope.contacts = [];

    $scope.operators = operators;

    // BOA
    $scope.addContact = function (contact) {
        console.log(contact);
        contact.serial = serialGenerator.generate();
        $scope.contacts.push(angular.copy(contact));
        delete $scope.contact;
        $scope.contactForm.$setPristine();
        $location.path("/contacts");
    };
});