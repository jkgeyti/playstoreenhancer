javascript: (function () { 
  if (window.location.href.indexOf("play.google.com/store/account?hl=en") < 0) {
    if (confirm("This bookmarklet only works on play.google.com/store/account?hl=en. Do you want to go there now?")) {
      window.location.href = "https://play.google.com/store/account?hl=en";
    }
    return;
  } else {
    $('head').append('<script src="https://raw.github.com/jkgeyti/playstoreenhancer/master/bookmarklet.js"></script>');
  }
}());  