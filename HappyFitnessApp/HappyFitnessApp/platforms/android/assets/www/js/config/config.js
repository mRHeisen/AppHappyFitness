// Config
angular.module('hfApp').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
        url: '/',
        templateUrl: '/views/login.html',
        controller: 'loginController as vm'
    })
    .state('home', {
        url: '/home',
        templateUrl: '/views/home.html',
        controller: 'homeController as vm'
    })
    .state('listagemAlunos', {
        url: '/listagemAlunos',
        templateUrl: '/views/instrutor/listagemAlunos.html',
        controller: 'listagemAlunosController as vm'
    })
    .state('cadastroTreino', {
        url: '/cadastroTreino/:alunoCodigo',
        templateUrl: '/views/instrutor/cadastroTreino.html',
        controller: 'cadastroTreinoController as vm'
    })
    .state('menuAluno', {
        url: '/menuAluno',
        templateUrl: '/views/aluno/menuAluno.html',
        controller: 'menuAlunoController as vm'
    })
    .state('listaTreino', {
        url: '/listaTreino',
        templateUrl: '/views/aluno/listaTreino.html',
        controller: 'listaTreinoController as vm'
    })
    .state('treino', {
        url: '/treino',
        templateUrl: '/views/aluno/treino.html',
        controller: 'treinoController as vm'
    })
    .state('exercicio', {
        url: '/exercicio',
        templateUrl: '/views/aluno/exercicio.html',
        controller: 'exercicioController as vm'
    })
    .state('endTreino', {
        url: '/endTreino',
        templateUrl: '/views/aluno/endTreino.html',
        controller: 'endTreinoController as vm'
    });

    $urlRouterProvider.otherwise("/");
}); 