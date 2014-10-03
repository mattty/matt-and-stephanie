function btnClick(element) {
  if (element == 'plus-sign') {
    d = document.getElementById('nav')
    if (d.className.indexOf('hidden') > -1) {
      d.className = 'btn-group btn-group-justified'
    } else {
      d.className = d.className + " hidden"
    }
  } 
  var arr = ['info','story','rsvp','travel','registry'] ;
  var arrLen = arr.length;
  for (var i = 0; i < arrLen; i++) {
    if (arr[i] == element) {
      document.getElementById(arr[i]).className = "" ;
      var d2 = document.getElementById("btn-" + arr[i])
      d2.className = d2.className + " active" ;
    } else {
      document.getElementById(arr[i]).className = "hidden" ;
      document.getElementById("btn-" + arr[i]).className = "btn btn-default" ;
    }
  }
};

function subContent(direction) {
  cur = document.getElementById('current-selection').innerHTML ;
  var element = "";
  var arr = ['Info','Story','RSVP','Travel','Registry'] ;
  var arrLen = arr.length;
    if (direction == 'next') {
      next_item = arr.indexOf(cur) + 1
      if (next_item >= arr.length) {
        element = arr[0]
      } else {
        element = arr[next_item]
      }
  } else if (direction == 'previous') {
    prev_item = arr.indexOf(cur) - 1;
    if (prev_item < 0) {
      element = arr[arr.length - 1]
    } else {
      element = arr[prev_item]
    }
  }
  for (var i = 0; i < arrLen; i++) {
   if (arr[i] == element) {
      document.getElementById(arr[i]).className = "" ;
    } else {
      document.getElementById(arr[i]).className = "hidden" ;
    }
  }
  document.getElementById('current-selection').innerHTML = element ;
};





function timeLeft() {
  var w_date = new Date(2015,3,26);
  var today_date = new Date();
  var ms_day = 86400000;
  var ms_week = 604800000;
  var ms_month = 2628000000;
  var time_left_text = "";

  ms_left = w_date - today_date ;
  if (ms_left < ms_day) {
    time_left_text = "today!" ;
  } else if (ms_left >= ms_day && ms_left < ms_week) {
    t = Math.floor(ms_left / ms_day)
    time_left_text = "in " + t + " days" ;
  } else if (ms_left >= ms_week && ms_left < ms_month) {
    t = Math.floor(ms_left / ms_week)
    rem_days = Math.floor((ms_left % ms_week) / ms_day)
    time_left_text = "in " + t + " weeks" ;
    if (rem_days > 0) {
      time_left_text = time_left_text + " and " + rem_days + " days"
    }
  } else {
    t = Math.floor(ms_left / ms_month)
    rem_days = Math.floor((ms_left % ms_month) / ms_day)
    time_left_text = "in " + t + " months" ;
    if (rem_days > 0) {
      time_left_text = time_left_text + " and " + rem_days + " days"
    }
  }
  document.getElementById("time_left").innerHTML = time_left_text;
};
