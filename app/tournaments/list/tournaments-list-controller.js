'use strict';
app.controller('TournamentsListCtrl', function ($scope, Tournaments, $modal, Restangular) {

    $scope.Tournaments = Tournaments;
    $scope.filterOptions = {
        filterText: ''
    };
    $scope.SelectedTournaments = [];

    $scope.gridOptions = {
        data: 'Tournaments',
        columnDefs: [
            {field: 'Date', displayName: 'Date', width: '200px'},
            {field: 'Lake', displayName: 'Lake', width: '200px'},
            {field: 'Ramp', displayName: 'Ramp', width: '250px'},
            {field: 'Directions', displayName: 'Directions', width: '70px',cellTemplate: '<div class="centerInCell"><button type="button" class="btn btn-primary" ng-model="row.entity.Directions"></div>'}],
        multiSelect: false,
        showColumnMenu: true,
        enableColumnResize: true,
        showFilter: false,
        plugins: [new ngGridFlexibleHeightPlugin()],
        selectedItems: $scope.SelectedEmployees,
        filterOptions: $scope.filterOptions
    };
});