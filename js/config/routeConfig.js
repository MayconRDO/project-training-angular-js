angular.module("listPhone").config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.when("/contacts", {
        templateUrl: "view/contacts.html",
        controller: "listPhoneCtrl",
        resolve: {
            contacts: function (contactsAPI) {
                return contactsAPI.getContacts();
            }
        }
    });

    $routeProvider.when("/newContact", {
        templateUrl: "view/newContact.html",
        controller: "newContactCtrl",
        resolve: {
            operators: function (operatorsAPI) {
                return operatorsAPI.getOperators();
            }
        }
    });

    $routeProvider.when("/detailsContact/:id", {
        templateUrl: "view/detailsContact.html",
        controller: "detailsContactCtrl",
        resolve: {
            contact: function (contactsAPI, $route) {
                return contactsAPI.getContact($route.current.params.id);
            }
        }
    });

    $routeProvider.otherwise({ redirectTo: "/contacts" });
});