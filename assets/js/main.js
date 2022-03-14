function initPage() {
  $("#nav").load("closet/nav.html");
  $("#nav-mobile").load("closet/nav-mobile.html");

  $(window).scroll(function() {
    if ($(window).scrollTop() > $('#hero').outerHeight() - 200) {
      $(".nav").addClass("scrolled");
    } else {
      $(".nav").removeClass("scrolled");
    }
  });
}
//mobile navigation menus
function menuList() {
  var element = document.getElementById("menu-list");
  element.classList.toggle("show-menu");
}

function closeMenu() {
  var element = document.getElementById("menu-list");
  element.classList.toggle("show-menu");
}
