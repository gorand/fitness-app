;(function() {
  'use strict';

  angular
    .module('fitness.users')
    .filter('since', FromTime);

  // @ngInject
  function FromTime(){
    return function(date){
      var
        msg,
        now = +new Date(),
        diff = (now - date)/1000,
        min = 60,
        hour = 60*min,
        day = 24*hour,
        month = 30*day,
        threeMonths = 90*day,
        sixMonths = 180*day,
        year = 365*day;
      
      if(diff < min)
        msg = "только что";
      else if(diff > min && diff < hour)
        msg = "в течение часа";
      else if(diff > hour && diff < day)
        msg = "более суток назад";
      else if(diff > day && diff < month)
        msg = "больше, чем месяц назад";
      else if(diff > month && diff < threeMonths)
        msg = "более 3 месяцев назад";
      else if(diff > threeMonths && diff < sixMonths)
        msg = "более полугода";
      else
        msg = "больше года назад";

      return msg;
    }
  }

})();