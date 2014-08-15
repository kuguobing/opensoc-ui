/** @scratch /panels/5
 *
 * include::panels/pcap.asciidoc[]
 */

/** @scratch /panels/pcap/0
 * == pcap
 * Status: *Stable*
 *
 * The pcap panel is used for displaying static pcap formated as markdown, sanitized html or as plain
 * pcap.
 *
 */
define([
  'angular',
  'app',
  'lodash',
  'require',
  'jquery',
  'searchhighlight'
],
function (angular, app, _, require) {
  'use strict';

  var module = angular.module('kibana.panels.pcap', []);
  app.useModule(module);

  module.controller('pcap', function($scope, $http) {
    $scope.panelMeta = {
      status  : "Stable",
      description : "A static pcap panel that can use plain pcap, markdown, or (sanitized) HTML"
    };

    // Set and populate defaults
    var _d = {
      /** @scratch /panels/pcap/5
       *
       * === Parameters
       *
       * mode:: `html', `markdown' or `pcap'
       */
      mode    : "markdown", // 'html','markdown','pcap'
      /** @scratch /panels/pcap/5
       * content:: The content of your panel, written in the mark up specified in +mode+
       */
      content : "",
      style: {'font-size': '9px'},
    };
    _.defaults($scope.panel,_d);

    $scope.init = function() {
      $scope.ready = false;

      $scope.$on('refresh',function(){$scope.get_data();}); //
      $scope.get_data();
      //$scope.map_bytes();
    };

    // Show Second Level Details
    $scope.toggle_details = function(row) {
      row.details = row.details ? false : true;
      row.view = row.view || 'table';
      console.log(row);
      console.log('row.details = ', row.details);
    };


    // Highlight the 3rd Level Data
    $scope.highlight_text = function(row) {
      // TODO: Pass in the event/row
      // var val = $(this).val();
      var val = 'd4c3 b2a1 0200';
      var options = {
        exact: 'partial',
        style_name_suffix: false,
        keys: val
      }
      $(document).SearchHighlight(options);
    }


    // Highlight the 3rd Level Data
    $scope.hightlight_bytes = function(parent) {
      console.log('parent = ', parent);
      
      $("span").removeClass('selected').css('background-color','transparent');
      $("span[class^="+parent+"]").addClass('selected').css('background-color','blue');
    }

    $scope.highlight_bytes_below = function(pos, size) {
      console.log('pos, size = ', pos, ',' , size);
      var end = parseInt(pos) + parseInt(size) - 1;
      var parentClass = [pos]+'_'+[end];
    
      console.log('parentClass = ', parentClass);
      var pclass = String("."+parentClass);
      $("span").removeClass('selected').css('background-color','transparent');
      $("span[class^="+parentClass+"]").addClass('selected').css('background-color','blue');
    }


    // Create sample PCAP JSON object
    // $scope.data = [];

    // Get HBase PCAP data
    $scope.get_data = function() {
      var responsePromise = $http.get('http://jsonspitter.apiary.io/things');

      responsePromise.success(function(data, status, headers, config) {
        $scope.data = _.map(data.pdml.packet, function(result) {
          var _h = _.clone(result);
          return _h;
        });

        $scope.hexData = data.pdml.packet[0].proto[5].hexPacket;

        console.log('$scope.data = ', $scope.data);
        //console.log('$scope.data[0][0] = ', $scope.data[0][0].field[0]);

        //$scope.packet1num = $scope.data[0].proto[0].field[0].$.value);
        console.log('*****$scope.data[0].proto[3].field[10] = ', $scope.data[0].proto[4].field[0].$.show);


        $scope.lvl0 = data.pdml.packet[0].proto[0].field;
        console.log('$scope.lvl0', $scope.lvl0);

        $scope.lvl1 = data.pdml.packet[0].proto[1].field;
        console.log('$scope.lvl1', $scope.lvl1);

        for (var i = 0; i < $scope.lvl1.length; ++i) {
          console.log('$scope.lvl1['+i+'].$.showname = ', $scope.lvl1[i].$.showname);
        }

        $scope.lvl1_frame_num = data.pdml.packet[0].proto[1].field[8].$.show;
        console.log('$scope.lvl1_frame_num', $scope.lvl1_frame_num);

        $scope.lvl2 = data.pdml.packet[0].proto[2].field;
        console.log('$scope.lvl2', $scope.lvl2);

        $scope.lvl2_0 = data.pdml.packet[0].proto[2].field[0].field;
        console.log('$scope.lvl2_0', $scope.lvl2_0);

        $scope.lvl2_0_0 = data.pdml.packet[0].proto[2].field[0].field[0];
        console.log('$scope.lvl2_0_0', $scope.lvl2_0_0);

        //$scope.hexData = data.pdml.packet[0].proto[5].hexPacket;
        //console.log('$scope.hexData', $scope.hexData);


        // Map Packet Bytes
        var templength = $scope.lvl2.length;
        console.log('$scope.lvl2.length = ', templength);

        templength = $scope.lvl2[0].field.length;
        console.log('$scope.lvl2-0.length = ', templength);

        templength = $scope.lvl2[1].field.length;
        console.log('$scope.lvl2-1.length = ', templength);

        if ($scope.lvl2[2].field) {
          templength = $scope.lvl2[2].field.length;
          console.log('$scope.lvl2-2.length = ', templength);
        }
        else {
          console.log('no $scope.lvl2-2.length = ');
        }

        var hex = {

        "hex": [{"$":{ "byte_num": "0", "byte": "01"}},{"$":{ "byte_num": "1", "byte": "00"}},{"$":{ "byte_num": "2", "byte": "5e"}}]
  
        };
          var hexMapped = [];
          for ( var i = 0 ; i < $scope.hexData.length ; ++i) {
            hexMapped.push({"byte_num": i, "byte": $scope.hexData[i], "parent": "-1" });
          }
          for ( var i = 0 ; i < 6 ; ++i) {
            hexMapped[i]['parent'] = "0_5";
          }
          for ( var i = 6 ; i < 12 ; ++i) {
            hexMapped[i]['parent'] = "6_11";
          }
          for ( var i = 12 ; i < 14 ; ++i) {
            hexMapped[i]['parent'] = "12_13";
          }

            hexMapped[14]['parent'] = "14_14";
            hexMapped[15]['parent'] = "15_15";
            hexMapped[16]['parent'] = "16_17";
            hexMapped[17]['parent'] = "16_17";
            hexMapped[18]['parent'] = "18_19";
            hexMapped[19]['parent'] = "18_19";
            hexMapped[20]['parent'] = "20_20";
            hexMapped[21]['parent'] = "20_21";
            hexMapped[22]['parent'] = "22_22";
            hexMapped[23]['parent'] = "23_23";
            hexMapped[24]['parent'] = "24_25";
            hexMapped[25]['parent'] = "24_25";
            hexMapped[26]['parent'] = "26_29";
            hexMapped[27]['parent'] = "26_29";
            hexMapped[28]['parent'] = "26_29";
            hexMapped[29]['parent'] = "26_29";
            hexMapped[30]['parent'] = "30_33";
            hexMapped[31]['parent'] = "30_33";
            hexMapped[32]['parent'] = "30_33";
            hexMapped[33]['parent'] = "30_33";
            hexMapped[34]['parent'] = "34_37";
            hexMapped[35]['parent'] = "34_37";
            hexMapped[36]['parent'] = "34_37";
            hexMapped[37]['parent'] = "34_37";
          console.log('hexMapped[] = ', hexMapped);

          $scope.hexData = hexMapped;

      });


      responsePromise.error(function(data, status, headers, config) {
        console.log('AJAX Failed');
      });
    };


  });

  module.directive('markdown', function() {
    return {
      restrict: 'E',
      link: function(scope, element) {
        scope.$on('render', function() {
          render_panel();
        });

        function render_panel() {
          require(['./lib/showdown'], function (Showdown) {
            scope.ready = true;
            var converter = new Showdown.converter();
            var pcap = scope.panel.content.replace(/&/g, '&amp;')
              .replace(/>/g, '&gt;')
              .replace(/</g, '&lt;');
            var htmlText = converter.makeHtml(pcap);
            element.html(htmlText);
            // For whatever reason, this fixes chrome. I don't like it, I think
            // it makes things slow?
            if(!scope.$$phase) {
              scope.$apply();
            }
          });
        }

        render_panel();
      }
    };
  });

  module.filter('newlines', function(){
    return function (input) {
      return input.replace(/\n/g, '<br/>');
    };
  });

  module.filter('striphtml', function () {
    return function(pcap) {
      return pcap
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;');
    };
  });

});
