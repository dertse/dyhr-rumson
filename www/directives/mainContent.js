app.directive('mainContent', [function(){

  return {
    templateUrl: '/directives/mainContent.html',
    controller: ['$scope', function($scope) {
      $scope.wells = /*[
        {
          title: 'Well 1',
          content: 'Aliquam finibus purus vitae ipsum aliquam, vitae blandit lectus aliquet. Phasellus dignissim porta placerat. Nulla facilisi.'
        },
        {
          title: 'Well 2',
          content: 'Morbi nibh dui, porttitor vel sagittis vel, porttitor nec dolor. Duis cursus porttitor neque, sagittis scelerisque est commodo quis.'
        },
        {
          title: 'Well 3',
          content: 'Pellentesque a bibendum nisi. In dignissim est tortor, vitae iaculis nunc gravida et. Mauris venenatis libero eget risus sollicitudin euismod ut sed mi.'
        }
      ];
*/
      // make all wells fit on a single row

      jQuery(document).ready(function ($) {
            
            var jssor_1_SlideshowTransitions = [
              {$Duration:1200,$Opacity:2}
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 600);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });


    



      /*footer*/

      $( document ).ready(function() {

$('.myfooter').appendTo('.body-wrap-2');
$('.myfooter').css("display","block");
});




      $scope.colSize = Math.floor(24/$scope.wells.length);
    }]
  };
}]);



 