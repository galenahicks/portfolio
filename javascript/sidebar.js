console.log("sidebar")

var myExplore = document.getElementById('explorebutton');
var myCloseButton = document.getElementById('closesidebar');
var mySidebar = document.getElementById('sidebar');
var myMobilesidebar = document.getElementById('mobilesidebar');
var myMobileexplore= document.getElementById('mobileexplore');
var myMobileclose = document.getElementById('mobileclose');

myExplore.addEventListener('click', () => { 
    myExplore.style.display = 'none';
myCloseButton.style.display = 'block';
  mySidebar.style.left = '80%';
  mySidebar.style.transitionDuration = '2s';
});

myCloseButton.addEventListener('click', () => { 
    myCloseButton.style.display = 'none';
    myExplore.style.display = 'block';
    mySidebar.style.left = '100%';
    mySidebar.style.transitionDuration = '2s';
});

myMobileexplore.addEventListener('click', () => { 
  myMobileexplore.style.display = 'none';
myMobileclose.style.display = 'block';
myMobilesidebar.style.left = '0%';
myMobilesidebar.style.transitionDuration = '2s';
});

myMobileclose.addEventListener('click', () => { 
  myMobileclose.style.display = 'none';
  myMobileexplore.style.display = 'block';
  myMobilesidebar.style.left = '110%';
  myMobilesidebar.style.transitionDuration = '2s';
});