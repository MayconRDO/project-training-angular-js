angular.module("listPhone").config(function (serialGeneratorProvider) {
    console.log(serialGeneratorProvider.getLength());
    serialGeneratorProvider.setLength(40);
    console.log(serialGeneratorProvider.getLength());
});