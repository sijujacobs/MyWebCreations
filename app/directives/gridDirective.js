
App.directive('customGrid', function() {
    return {
        scope: {
            sourceData: '=sourceData',
            groupData:'@groupData'
        },
        restrict: 'E',
        template: '<div class="customGrid"><div class="gridTitle">'
                    +'<div class="dataHeader">Device</div>'
                    +'<div class="dataHeader">State</div>'
                    +'<div class="dataHeader">Action</div>'
                    +'<div class="dataHeader">Quantity</div>'
                    +'<div class="dataHeader">Price</div>'
                    +'</div></div>',
        replace:true,
        link: function(scope, element, attrs) {
            var groupByData = scope.groupData.split("-");
                
            angular.forEach(scope.sourceData, function(value, index) {
                var thisGroup = scope.sourceData[index];
                var groupContainer = $('div[group-name="'+ thisGroup.name.toLowerCase()  +'"]');
                if($(groupContainer).length === 0){
                    element.append('<div group-name="' + thisGroup.name.toLowerCase() + '"><span class="groupHeader">' + thisGroup.name.toUpperCase() + '</span></div>');
                }           
                var subGroupName = "TEMP_STATE_GROUP";
                var groupContainer, thisStateContainer;
                if(groupByData[1] == 'state'){
                    if(thisGroup.state !== subGroupName){
                        for(var i=0; i < thisGroup.fruits.length; i++){
                            var thisFruitRow = thisGroup.fruits[i];
                            var thisFruitName = thisFruitRow.name.toLowerCase();
                            var thisFruitSate = thisFruitRow.state.toLowerCase();
                            groupContainer = $('div[group-name="'+ thisFruitName +'"]');
                            thisStateContainer = $(groupContainer).find('div[sub-group-name="'+ thisFruitSate  +'"]');   
                            if(thisFruitSate !== subGroupName){
                                var subGroupContainerTemplate = '<div class="subGroupContainer" sub-group-name="'+ thisFruitSate +'"><span class="subGroupHeader">' + thisFruitRow.state + '</span></div>';
                                if($(thisStateContainer).length === 0){
                                    $(groupContainer).append(subGroupContainerTemplate);
                                    thisStateContainer = $(groupContainer).find('div[sub-group-name="'+ thisFruitSate  +'"]'); 
                                }
                                subGroupName = thisFruitRow.state;
                            }  
                            var actionNode = '<div class="tradeDetails"><div class="dataCol">' + thisFruitRow.action + '</div><div class="dataCol">' + thisFruitRow.quantity + '</div><div class="dataCol">' + thisFruitRow.price + '</div></div>';
                            $(thisStateContainer).append(actionNode);
                        }
                    }
                }

            });
        }
  };
});
