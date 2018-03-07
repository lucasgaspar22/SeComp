 (function(){
    'use strict';

    angular
        .module('secomp.minicursos')
        .controller('MinicursosCtrl', MinicursosCtrl);

    MinicursosCtrl.$inject = ['$scope', '$state', 'Mini'];

    function MinicursosCtrl($scope, $state ,Mini){
        var vm = angular.extend(this, {
            ChangeState:ChangeState,
            Mini:Mini,
            ViewMiniCurso: ViewMiniCurso
        });

        function ChangeState(state){
            $state.go(state);
        }

        function ViewMiniCurso(miniID){
            $state.go('app.miniDetails', {minicursoID: miniID});
        }
    }    
})();