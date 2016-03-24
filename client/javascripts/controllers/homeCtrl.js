angular.module('stacky-note')
    .controller('HomeCtrl',['$scope','$state','AuthenticationService','$interval',function($scope,$state,AuthenticationService,$interval) {

        $scope.LogOut= function () {
            AuthenticationService.logOut().then(function(){
            $state.go('/')
        })
        }
        $scope.remove = function (scope) {
            scope.remove();
        };

        $scope.toggle = function (scope) {
            scope.toggle();
        };

        $scope.moveLastToTheBeginning = function () {
            var a = $scope.data.pop();
            $scope.data.splice(0, 0, a);
        };

        $scope.newSubItem = function (scope) {
            var nodeData = scope.$modelValue;
            console.log(nodeData)
            nodeData.nodes.push({
                id: nodeData.id * 10 + nodeData.nodes.length,
                title: nodeData.title + '.' + (nodeData.nodes.length + 1),
                remember:false,
                nodes: []
            });
        };

    $scope.editName=function(scope){
        console.log(scope.$modelValue.title);
    }
        $scope.collapseAll = function () {
            $scope.$broadcast('angular-ui-tree:collapse-all');
        };

        $scope.expandAll = function () {
            $scope.$broadcast('angular-ui-tree:expand-all');
        };

        $scope.data=[
            {
                "id": 1,
                "title": "Default Stack",
                "remember":false,
                "nodes": [
                    {
                        "id": 11,
                        "title": "note 1.1",
                        "remember":false,
                        "nodes": []
                    },
                    {
                        "id": 12,
                        "title": "note 1.2",
                        "remember":false,
                        "nodes": []
                    }
                ]
            }
        ]

        $scope.treeOptions = {
            accept: function(sourceNodeScope, destNodesScope, destIndex) {
                return true;
            },
            dropped: function(e) {
                console.log($scope.data)
                console.log (e.source.nodeScope.$modelValue.title);
            }
        };

    $scope.ShowNotes=function (){
        console.log("hello")
    }

        $scope.EditChildName=function(){
            console.log("abab")
            //angular.element(document.getElementById('#nodeTextbox')).$show();
        }
    }]);

