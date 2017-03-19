'use strict';

//console.log("Localhost::gridController-----------");
gridApp.controller('gridController', ['$scope', function ($timeout, uiGridConstants, uiGridGroupingConstants) {
  var self = this;
  
  self.gridOptions = {
    enableColumnMenus: false,
    enableRowSelection: false,
    enableGroupHeaderSelection: false,
    enableRowHeaderSelection: false,
    enableSorting: true,
    data: [
      {
        name: 'Marc',
        value: '-20.5',
        parent: 'Steve',
        lineage: lineage
      },
      {
        name: 'Mo',
        value: '30.0',
        parent: 'Steve',
        lineage: lineage
      },
      {
        name: 'Steve',
        value: '50',
        parent: 'Joe',
        lineage: lineage
      }
    ],
    columnDefs: [
      {
        field: 'lineage()',
        displayName: 'Name'
      },
      {
        field: 'value',
        cellFilter: 'currency',
        treeAggregationType: uiGridGroupingConstants.aggregation.SUM,
        customTreeAggregationFinalizerFn: function (aggregation) {
          aggregation.rendered = aggregation.value;
        }
      },
      {
        field: 'parent',
        cellTemplate: '<div ng-if="!col.grouping || col.grouping.groupPriority === undefined || col.grouping.groupPriority === null || ( row.groupHeader && col.grouping.groupPriority === row.treeLevel )" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
      }
    ],
    onRegisterApi: function (gridApi) {
      $timeout(function () {
        gridApi.grouping.clearGrouping();
        gridApi.grouping.groupColumn('parent');
        gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
      });
    }
  };
  
  function lineage() {
    return this.name + ' of ' + this.parent;
  }

}]);





