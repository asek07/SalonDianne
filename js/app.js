// List Items for navigation
var aboutItem = document.getElementById("nav-about");
var servicesItem = document.getElementById("nav-services");
var contactItem = document.getElementById("nav-contact");
var pageTop = document.getElementById("");

var timeline = new TimelineMax({repeat:-1});
var servicesPanels = document.getElementsByClassName("panel-services");
var doubleDown = document.getElementById("fa-scrollDown");

function scrollToAbout(){
  TweenMax.to(window, 1.5, {scrollTo: "#aboutContainer", ease: Circ.ease});
  TweenMax.to(aboutItem, 0.5, {backgroundColor: "rgba(52,73,94)"});
}

function scrollToTop(){
  TweenMax.to(window, 1.5, {scrollTo: "#banner-logo-conatiner", ease: Circ.ease});
}

function scrollToServices(){
  TweenMax.to(window, 1.5, {scrollTo: "#servicesContainer", ease: Circ.ease});
  TweenMax.to(servicesItem, 0.5, {backgroundColor: "rgba(52,73,94)"});
}

function scrollToContact(){
  TweenMax.to(window, 1.5, {scrollTo: "#contactContainer", ease: Circ.ease});
  TweenMax.to(contactItem, 0.5, {backgroundColor: "rgba(52,73,94)"});
}

window.onload = function(){
  timeline.append(TweenMax.to(doubleDown, 1.5, {opacity:1 , repeat:1, yoyo: true, delay: 0}))
}
