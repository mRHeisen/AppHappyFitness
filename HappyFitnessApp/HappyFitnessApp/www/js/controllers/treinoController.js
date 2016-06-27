angular.module('hfApp')
    .controller('treinoController', treinoController);

treinoController.$inject = ['$http', '$location', '$stateParams'];

function treinoController($http, $location, $stateParams) {
    var vm = this;
    vm.exercicioList = [
        {
            Icone: 'img/Exercícios-para-peito-supino-reto-2.png',
             Nome: 'Supino Reto ',
             QuantidadeSerie: 3,
             QuantidadeRepeticoes: 10
        },
        {
            Icone: 'img/Supino-declinado-com-halteres1.png',
            Nome: 'Supino Inclinado ',
            QuantidadeSerie: 3,
            QuantidadeRepeticoes: 10
        },
        {
            Icone: 'img/Supino-declinado-com-halteres1.png',
            Nome: 'Supino Declinado ',
            QuantidadeSerie: 3,
            QuantidadeRepeticoes: 10
        },
        {
            Icone: 'img/analise-biomecanica-do-exercicio-rosca-direta-01.png',
            Nome: 'Rosca Direta ',
            QuantidadeSerie: 3,
            QuantidadeRepeticoes: 10
        }
        ];

    
}
