var myExplore = document.getElementById('explorebutton');
var myCloseButton = document.getElementById('closesidebar');
var mySidebar = document.getElementById('sidebar');

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

console.log("is it working?")