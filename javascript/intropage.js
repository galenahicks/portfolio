console.log("test")

var myPage1 = document.getElementById('page1');
var myPage2 = document.getElementById('page2');
var myPage3 = document.getElementById('page3');
var myBlur1 = document.getElementById('blurry1');
var myBlur2 = document.getElementById('blurry2');
var myBlur3 = document.getElementById('blurry3');
myPage1.addEventListener('mouseenter', () => { 
  myPage1.style.width = '50%';
  myPage1.style.right = '50%';
  myBlur1.style.width = '50%';
  myBlur1.style.right = '50%';
  myBlur1.style.height = '41%';
  myBlur1.style.top = '59%';
  myPage1.style.filter = 'none';
  myPage2.style.width = '25%';
  myPage3.style.width = '25%';
  myPage2.style.right = '25%';
  myBlur2.style.width = '25%';
  myBlur2.style.left = '50%';
  myBlur3.style.width = '25%';
  myBlur3.style.left = '75%';
  myPage1.style.transitionDuration = '3s';
  myPage2.style.transitionDuration = '3s';
  myPage3.style.transitionDuration = '3s';
  myBlur1.style.transitionDuration = '3s';
  myBlur2.style.transitionDuration = '3s';
  myBlur3.style.transitionDuration = '3s';
});

// var myPage1 = document.getElementById('page1');
// myPage1.addEventListener('mouseenter', () => { 
//   myPage1.style.width = '50%';
//   myPage1.style.transitionDuration = '3s';
// });

var myPage12 = document.getElementById('page1');
var myPage11 = document.getElementById('page2');
var myPage3 = document.getElementById('page3');
var myBlur1 = document.getElementById('blurry1');
var myBlur2 = document.getElementById('blurry2');
var myBlur3 = document.getElementById('blurry3');
myPage12.addEventListener('mouseleave', () => { 
  myPage12.style.width = '33.33%';
  myPage12.style.right = '66.66%';
  myBlur1.style.width = '33.33%';
  myBlur1.style.right = '66.66%';
  myBlur1.style.height = '11%';
  myBlur1.style.top = '89%';
  myPage12.style.filter = 'gray';
  myPage12.style.filter = 'grayscale(100%)';
  myPage11.style.width = '33.33%';
  myPage11.style.right = '33.33%';
  myBlur2.style.width = '33.33%';
  myBlur2.style.left = '33.33%';
  myBlur3.style.width = '33.33%';
  myBlur3.style.left = '66.66%';
  myPage3.style.width = '33.33%';
  myPage3.style.right = '0%';
  myPage12.style.transitionDuration = '3s';
  myBlur1.style.transitionDuration = '3s';
  myBlur2.style.transitionDuration = '3s';
});

var myPage2 = document.getElementById('page2');
var myBlur2 = document.getElementById('blurry2');
myPage2.addEventListener('mouseenter', () => { 
  myPage2.style.width = '50%';
  myPage2.style.filter = 'none';
  myBlur2.style.width = '50%';
  myBlur2.style.height = '41%';
  myBlur2.style.top = '59%';
  myBlur2.style.left = '16.67%';
  myPage2.style.transitionDuration = '3s';
  myBlur2.style.transitionDuration = '3s';
});

var myPage21 = document.getElementById('page2');
var myBlur2 = document.getElementById('blurry2');
myPage21.addEventListener('mouseleave', () => { 
  myPage21.style.width = '33.33%';
  myBlur2.style.width = '33.33%';
  myBlur2.style.left = '33.33%';
  myBlur2.style.height = '11%';
  myBlur2.style.top = '89%';
  myPage21.style.filter = 'gray';
  myPage21.style.filter = 'grayscale(100%)';
  myPage21.style.transitionDuration = '3s';
  myBlur2.style.transitionDuration = '3s';
});

var myPage3 = document.getElementById('page3');
var myBlur3 = document.getElementById('blurry3');
myPage3.addEventListener('mouseenter', () => { 
  myPage3.style.width = '50%';
  myBlur3.style.width = '50%';
  myBlur3.style.left = '50%';
  myBlur3.style.height = '41%';
  myBlur3.style.top = '59%';
  myPage3.style.filter = 'none';
  myPage3.style.transitionDuration = '3s';
  myBlur3.style.transitionDuration = '3s';
});

var myPage31 = document.getElementById('page3');
var myBlur3 = document.getElementById('blurry3');
myPage31.addEventListener('mouseleave', () => { 
  myPage31.style.width = '33.33%';
  myBlur3.style.width = '33.33%';
  myBlur3.style.left = '66.66%';
  myBlur3.style.height = '11%';
  myBlur3.style.top = '89%';
  myPage31.style.filter = 'gray';
  myPage31.style.filter = 'grayscale(100%)';
  myPage31.style.transitionDuration = '3s';
  myBlur3.style.transitionDuration = '3s';
});

var myFeatured = document.getElementById('featured');

  var myHeader = document.getElementById('headerjunt');
  var myArrow = document.getElementById('arrow');
  var myArrowPic = document.getElementById('arrowpic');
  var myPage1 = document.getElementById('page1');
  var myPage2 = document.getElementById('page2');
  var myPage3 = document.getElementById('page3');
  var myArrow2 = document.getElementById('arrow2');
  var myArrowPic2 = document.getElementById('arrowpic2');
  var myBlocker = document.getElementById('blocker');
  myArrow.addEventListener('click', () => { 
    myFeatured.style.display ='none';
    myBlocker.style.display = 'none';
    myHeader.style.height = '60%';
    myArrow.style.display = "none";
    myArrow2.style.display = "block";
    myArrowPic2.style.width = "5%";
    myHeader.style.transitionDuration = '3s';
    myArrowPic.style.transitionDuration = '3s';
    myPage1.style.top = '59%';
    myPage2.style.top = '59%';
    myPage3.style.top = '59%';
    myPage1.style.transitionDuration = '3s';
    myPage2.style.transitionDuration = '3s';
    myPage3.style.transitionDuration = '3s';
  });

  // var myHeader = document.getElementById('headerjunt');
  // var myArrow = document.getElementById('arrow');
  // var myArrowPic = document.getElementById('arrowpic');
  // var myPage1 = document.getElementById('page1');
  // var myPage2 = document.getElementById('page2');
  // var myPage3 = document.getElementById('page3');
  // var myArrow2 = document.getElementById('arrow2');
  // var myArrowPic2 = document.getElementById('arrowpic2');
  // var myBlocker = document.getElementById('blocker');
  // window.addEventListener('load', () => { 
  //   if (screen.width > 820) {
  //   myBlocker.style.display = 'none';
  //   myHeader.style.height = '60%';
  //   myArrow.style.display = "none";
  //   myArrow2.style.display = "block";
  //   myArrowPic2.style.width = "5%";
  //   myHeader.style.transitionDuration = '6s';
  //   myArrowPic.style.transitionDuration = '6s';
  //   myPage1.style.top = '59%';
  //   myPage2.style.top = '59%';
  //   myPage3.style.top = '59%';
  //   myPage1.style.transitionDuration = '6s';
  //   myPage2.style.transitionDuration = '6s';
  //   myPage3.style.transitionDuration = '6s';
  //   }
  // });

  var myHeader = document.getElementById('headerjunt');
  var myArrow = document.getElementById('arrow');
  var myArrowPic = document.getElementById('arrowpic');
  var myPage1 = document.getElementById('page1');
  var myPage2 = document.getElementById('page2');
  var myPage3 = document.getElementById('page3');
  var myArrow2 = document.getElementById('arrow2');
  var myArrowPic2 = document.getElementById('arrowpic2');
  var myBlocker = document.getElementById('blocker');
  myArrow2.addEventListener('click', () => { 
    myFeatured.style.display ='block';
    myBlocker.style.display = 'block';
    myHeader.style.height = '90%';
    myArrow.style.display = "block";
    myArrow2.style.display = "none";
    myHeader.style.transitionDuration = '3s';
    myArrowPic.style.transitionDuration = '3s';
    myPage1.style.top = '89%';
    myPage2.style.top = '89%';
    myPage3.style.top = '89%';
    myPage1.style.transitionDuration = '3s';
    myPage2.style.transitionDuration = '3s';
    myPage3.style.transitionDuration = '3s';
  });

 

  var myPage2 = document.getElementById('page2');
  var myBlur2 = document.getElementById('blurry2');
  myBlur2.addEventListener('mouseenter', () => { 
    myPage2.style.width = '50%';
    myPage2.style.filter = 'none';
    myBlur2.style.width = '50%';
    myBlur2.style.height = '41%';
    myBlur2.style.top = '59%';
    myBlur2.style.left = '16.67%';
    myPage2.style.transitionDuration = '3s';
    myBlur2.style.transitionDuration = '3s';
  });
  
  var myPage21 = document.getElementById('page2');
  var myBlur2 = document.getElementById('blurry2');
  myBlur2.addEventListener('mouseleave', () => { 
    myPage21.style.width = '33.33%';
    myBlur2.style.width = '33.33%';
    myBlur2.style.left = '33.33%';
    myBlur2.style.height = '11%';
    myBlur2.style.top = '89%';
    myPage21.style.filter = 'gray';
    myPage21.style.filter = 'grayscale(100%)';
    myPage21.style.transitionDuration = '3s';
    myBlur2.style.transitionDuration = '3s';
  });

  var myPage3 = document.getElementById('page3');
  var myBlur3 = document.getElementById('blurry3');
  myBlur3.addEventListener('mouseenter', () => { 
    myPage3.style.width = '50%';
    myBlur3.style.width = '50%';
    myBlur3.style.left = '50%';
    myBlur3.style.height = '41%';
    myBlur3.style.top = '59%';
    myPage3.style.filter = 'none';
    myPage3.style.transitionDuration = '3s';
    myBlur3.style.transitionDuration = '3s';
  });
  
  var myPage31 = document.getElementById('page3');
  var myBlur3 = document.getElementById('blurry3');
  myBlur3.addEventListener('mouseleave', () => { 
    myPage31.style.width = '33.33%';
    myBlur3.style.width = '33.33%';
    myBlur3.style.left = '66.66%';
    myBlur3.style.height = '11%';
    myBlur3.style.top = '89%';
    myPage31.style.filter = 'gray';
    myPage31.style.filter = 'grayscale(100%)';
    myPage31.style.transitionDuration = '3s';
    myBlur3.style.transitionDuration = '3s';
  });

  var myPage1 = document.getElementById('page1');
var myPage2 = document.getElementById('page2');
var myPage3 = document.getElementById('page3');
var myBlur1 = document.getElementById('blurry1');
var myBlur2 = document.getElementById('blurry2');
var myBlur3 = document.getElementById('blurry3');
myBlur1.addEventListener('mouseenter', () => { 
  myPage1.style.width = '50%';
  myPage1.style.right = '50%';
  myBlur1.style.width = '50%';
  myBlur1.style.right = '50%';
  myBlur1.style.height = '41%';
  myBlur1.style.top = '59%';
  myPage1.style.filter = 'none';
  myPage2.style.width = '25%';
  myPage3.style.width = '25%';
  myPage2.style.right = '25%';
  myBlur2.style.width = '25%';
  myBlur2.style.left = '50%';
  myBlur3.style.width = '25%';
  myBlur3.style.left = '75%';
  myPage1.style.transitionDuration = '3s';
  myPage2.style.transitionDuration = '3s';
  myPage3.style.transitionDuration = '3s';
  myBlur1.style.transitionDuration = '3s';
  myBlur2.style.transitionDuration = '3s';
  myBlur3.style.transitionDuration = '3s';
});

var myPage12 = document.getElementById('page1');
var myPage11 = document.getElementById('page2');
var myPage3 = document.getElementById('page3');
var myBlur1 = document.getElementById('blurry1');
var myBlur2 = document.getElementById('blurry2');
var myBlur3 = document.getElementById('blurry3');
myBlur1.addEventListener('mouseleave', () => { 
  myPage12.style.width = '33.33%';
  myPage12.style.right = '66.66%';
  myBlur1.style.width = '33.33%';
  myBlur1.style.right = '66.66%';
  myBlur1.style.height = '11%';
  myBlur1.style.top = '89%';
  myPage12.style.filter = 'gray';
  myPage12.style.filter = 'grayscale(100%)';
  myPage11.style.width = '33.33%';
  myPage11.style.right = '33.33%';
  myBlur2.style.width = '33.33%';
  myBlur2.style.left = '33.33%';
  myBlur3.style.width = '33.33%';
  myBlur3.style.left = '66.66%';
  myPage3.style.width = '33.33%';
  myPage3.style.right = '0%';
  myPage12.style.transitionDuration = '3s';
  myBlur1.style.transitionDuration = '3s';
  myBlur2.style.transitionDuration = '3s';
});

// var myArrow = document.getElementById('arrow');
// var myBlur1 = document.getElementById('blurry1');
// var myBlur2 = document.getElementById('blurry2');
// var myBlur3 = document.getElementById('blurry3');

var myMemoryTitle = document.getElementById('memorytitle');
var myMemoryPic = document.getElementById('memorypic1');
var myMemoryList = document.getElementById('memorylistitem');
myMemoryList.addEventListener('mouseenter', () => { 
  myMemoryTitle.style.display = 'block';
  myMemoryPic.style.display = 'block';
});

var myMemoryTitle = document.getElementById('memorytitle');
var myMemoryPic = document.getElementById('memorypic1');
var myMemoryList = document.getElementById('memorylistitem');
myMemoryList.addEventListener('mouseleave', () => { 
  myMemoryTitle.style.display = 'none';
  myMemoryPic.style.display = 'none';
});

var myOrangeTitle = document.getElementById('orangetitle');
var myOrangePic = document.getElementById('orangepic1');
var myOrangeList = document.getElementById('orangelistitem');
myOrangeList.addEventListener('mouseenter', () => { 
  myOrangeTitle.style.display = 'block';
  myOrangePic.style.display = 'block';
});

var myOrangeTitle = document.getElementById('orangetitle');
var myOrangePic = document.getElementById('orangepic1');
var myOrangeList = document.getElementById('orangelistitem');
myOrangeList.addEventListener('mouseleave', () => { 
  myOrangeTitle.style.display = 'none';
  myOrangePic.style.display = 'none';
});

var myReverbTitle = document.getElementById('reverbtitle');
var myReverbPic = document.getElementById('reverbpic1');
var myReverbList = document.getElementById('reverblistitem');
myReverbList.addEventListener('mouseenter', () => { 
  myReverbTitle.style.display = 'block';
  myReverbPic.style.display = 'block';
});

var myReverbTitle = document.getElementById('reverbtitle');
var myReverbPic = document.getElementById('reverbpic1');
var myReverbList = document.getElementById('reverblistitem');
myReverbList.addEventListener('mouseleave', () => { 
  myReverbTitle.style.display = 'none';
  myReverbPic.style.display = 'none';
});

var myCrestTitle = document.getElementById('cresttitle');
var myCrestPic = document.getElementById('crestpic1');
var myCrestList = document.getElementById('crestlistitem');
myCrestList.addEventListener('mouseenter', () => { 
  myCrestTitle.style.display = 'block';
  myCrestPic.style.display = 'block';
});

var myCrestTitle = document.getElementById('cresttitle');
var myCrestPic = document.getElementById('crestpic1');
var myCrestList = document.getElementById('crestlistitem');
myCrestList.addEventListener('mouseleave', () => { 
  myCrestTitle.style.display = 'none';
  myCrestPic.style.display = 'none';
});

var myBamTitle = document.getElementById('bamtitle');
var myBamPic = document.getElementById('bampic1');
var myBamList = document.getElementById('bamlistitem');
myBamList.addEventListener('mouseenter', () => { 
  myBamTitle.style.display = 'block';
  myBamPic.style.display = 'block';
});

var myBamTitle = document.getElementById('bamtitle');
var myBamPic = document.getElementById('bampic1');
var myBamList = document.getElementById('bamlistitem');
myBamList.addEventListener('mouseleave', () => { 
  myBamTitle.style.display = 'none';
  myBamPic.style.display = 'none';
});

// var myAllseekTitle = document.getElementById('allseektitle');
// var myAllseekPic = document.getElementById('allseekpic1');
// var myAllseekList = document.getElementById('allseeklistitem');
// myAllseekList.addEventListener('mouseenter', () => { 
//   myAllseekTitle.style.display = 'block';
//   myAllseekPic.style.display = 'block';
// });

// var myAllseekTitle = document.getElementById('allseektitle');
// var myAllseekPic = document.getElementById('allseekpic1');
// var myAllseekList = document.getElementById('allseeklistitem');
// myAllseekList.addEventListener('mouseleave', () => { 
//   myAllseekTitle.style.display = 'none';
//   myAllseekPic.style.display = 'none';
// });

// var mySwitchTitle = document.getElementById('switchtitle');
// var mySwitchPic = document.getElementById('switchpic1');
// var mySwitchList = document.getElementById('switchlistitem');
// mySwitchList.addEventListener('mouseenter', () => { 
//   mySwitchTitle.style.display = 'block';
//   mySwitchPic.style.display = 'block';
// });

// var mySwitchTitle = document.getElementById('switchtitle');
// var mySwitchPic = document.getElementById('switchpic1');
// var mySwitchList = document.getElementById('switchlistitem');
// mySwitchList.addEventListener('mouseleave', () => { 
//   mySwitchTitle.style.display = 'none';
//   mySwitchPic.style.display = 'none';
// });

var myCineTitle = document.getElementById('cinetitle');
var myCinePic = document.getElementById('cinepic1');
var myCineList = document.getElementById('cinelistitem');
myCineList.addEventListener('mouseenter', () => { 
  myCineTitle.style.display = 'block';
  myCinePic.style.display = 'block';
});

var myCineTitle = document.getElementById('cinetitle');
var myCinePic = document.getElementById('cinepic1');
var myCineList = document.getElementById('cinelistitem');
myCineList.addEventListener('mouseleave', () => { 
  myCineTitle.style.display = 'none';
  myCinePic.style.display = 'none';
});

var myLabTitle = document.getElementById('pagliarinititle');
var myLabPic = document.getElementById('pagliarinipic1');
var myLabList = document.getElementById('pagliarinilistitem');
myLabList.addEventListener('mouseenter', () => { 
  myLabTitle.style.display = 'block';
  myLabPic.style.display = 'block';
});

var myLabTitle = document.getElementById('pagliarinititle');
var myLabPic = document.getElementById('pagliarinipic1');
var myLabList = document.getElementById('pagliarinilistitem');
myLabList.addEventListener('mouseleave', () => { 
  myLabTitle.style.display = 'none';
  myLabPic.style.display = 'none';
});


var myPhotoTitle = document.getElementById('photographytitle');
var myPhotoPic = document.getElementById('photographypic1');
var myPhotoList = document.getElementById('photographylistitem');
myPhotoList.addEventListener('mouseenter', () => { 
  myPhotoTitle.style.display = 'block';
  myPhotoPic.style.display = 'block';
});

var myPhotoTitle = document.getElementById('photographytitle');
var myPhotoPic = document.getElementById('photographypic1');
var myPhotoList = document.getElementById('photographylistitem');
myPhotoList.addEventListener('mouseleave', () => { 
  myPhotoTitle.style.display = 'none';
  myPhotoPic.style.display = 'none';
});

var myMVTitle = document.getElementById('musicvideostitle');
var myMVPic = document.getElementById('mvpic1');
var myMVList = document.getElementById('musicvideoslistitem');
myMVList.addEventListener('mouseenter', () => { 
  myMVTitle.style.display = 'block';
  myMVPic.style.display = 'block';
});

var myMVTitle = document.getElementById('musicvideostitle');
var myMVPic = document.getElementById('mvpic1');
var myMVList = document.getElementById('musicvideoslistitem');
myMVList.addEventListener('mouseleave', () => { 
  myMVTitle.style.display = 'none';
  myMVPic.style.display = 'none';
});

var myMraTitle = document.getElementById('mratitle');
var myMraPic = document.getElementById('mrapic1');
var myMraList = document.getElementById('mralistitem');
myMraList.addEventListener('mouseenter', () => { 
  myMraTitle.style.display = 'block';
  myMraPic.style.display = 'block';
});

var myMraTitle = document.getElementById('mratitle');
var myMraPic = document.getElementById('mrapic1');
var myMraList = document.getElementById('mralistitem');
myMraList.addEventListener('mouseleave', () => { 
  myMraTitle.style.display = 'none';
  myMraPic.style.display = 'none';
});

var mySFMOMATitle = document.getElementById('sfmomatitle');
var mySFMOMAPic = document.getElementById('sfmomapic1');
var mySFMOMAList = document.getElementById('sfmomalistitem');
mySFMOMAList.addEventListener('mouseenter', () => { 
  mySFMOMATitle.style.display = 'block';
  mySFMOMAPic.style.display = 'block';
});

var mySFMOMATitle = document.getElementById('sfmomatitle');
var mySFMOMAPic = document.getElementById('sfmomapic1');
var mySFMOMAList = document.getElementById('sfmomalistitem');
mySFMOMAList.addEventListener('mouseleave', () => { 
  mySFMOMATitle.style.display = 'none';
  mySFMOMAPic.style.display = 'none';
});

var myPrintmenu = document.getElementById('printmenu');
var myPrintbar = document.getElementById('printbar');
myPrintbar.addEventListener('click', () => { 
  myPrintmenu.style.left = '0%';
  myPrintmenu.style.transitionDuration = '2s';
});

var myPrintmenu = document.getElementById('printmenu');
var myPrintx = document.getElementById('xbutton');
myPrintx.addEventListener('click', () => { 
  myPrintmenu.style.left = '-105%';
  myPrintmenu.style.transitionDuration = '2s';
});

var myWebmenu = document.getElementById('webmenu');
var myWebbar = document.getElementById('webbar');
myWebbar.addEventListener('click', () => { 
  myWebmenu.style.left = '0%';
  myWebmenu.style.transitionDuration = '2s';
});

var myWebmenu = document.getElementById('webmenu');
var myWebx = document.getElementById('xbutton2');
myWebx.addEventListener('click', () => { 
  myWebmenu.style.left = '-105%';
  myWebmenu.style.transitionDuration = '2s';
});

var myOthermenu = document.getElementById('othermenu');
var myOtherbar = document.getElementById('otherbar');
myOtherbar.addEventListener('click', () => { 
  myOthermenu.style.left = '0%';
  myOthermenu.style.transitionDuration = '2s';
});

var myOthermenu = document.getElementById('othermenu');
var myOtherx = document.getElementById('xbutton3');
myOtherx.addEventListener('click', () => { 
  myOthermenu.style.left = '-105%';
  myOthermenu.style.transitionDuration = '2s';
});

// var myTestimage2 = document.getElementById('test2');
// var myTestimage1 = document.getElementById('test1');
// myTestimage1.addEventListener('mouseenter', () => { 
//     myTestimage2.style.zIndex = '50';
//     myTestimage2.style.filter = 'blur(0px)';
//     myTestimage2.style.opacity = '70%';
//     myTestimage1.style.zIndex = '45';
//     myTestimage1.style.filter = 'blur(5px)';
//     myTestimage1.style.opacity = '50%';
//     myTestimage1.style.height = '60%';
//     myTestimage2.style.height = '50%';
//     myTestimage1.style.transitionDuration = '1s';
//     myTestimage2.style.transitionDuration = '1s';

//     });