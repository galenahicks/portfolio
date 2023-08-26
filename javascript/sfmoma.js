console.log("test");

var myMartinText = document.getElementById('martin');
var myMartinVid = document.getElementById('martinvid');
var myBowlingText = document.getElementById('bowling');
var myBowlingVid = document.getElementById('bowlingvid');
var myTwomblyText = document.getElementById('twombly');
var myTwomblyVid = document.getElementById('twomblyvid');
var myLewText = document.getElementById('lew');
var myLewVid = document.getElementById('lewvid');
var myMatisseText = document.getElementById('matisse');
var myMatisseVid = document.getElementById('matissevid');
var myMartinBlock = document.getElementById('martintextblock');
var myBowlingBlock = document.getElementById('bowlingtextblock');
var myTwomblyBlock = document.getElementById('twomblytextblock');
var myLewBlock = document.getElementById('lewtextblock');
var myMatisseBlock = document.getElementById('matissetextblock');
myMartinText.addEventListener('click', () => { 
  myMartinVid.style.display = "block";
  myMartinBlock.style.display = "block";
  myBowlingVid.style.display = "none";
  myTwomblyVid.style.display = "none";
  myLewVid.style.display = "none";
  myMatisseVid.style.display = "none";
  myBowlingBlock.style.display = "none";
  myTwomblyBlock.style.display = "none";
  myLewBlock.style.display = "none";
  myMatisseBlock.style.display = "none";
});

myBowlingText.addEventListener('click', () => { 
  myBowlingVid.style.display = "block";
  myBowlingBlock.style.display = "block";
  myMartinVid.style.display = "none";
  myTwomblyVid.style.display = "none";
  myLewVid.style.display = "none";
  myMatisseVid.style.display = "none";
  myMartinBlock.style.display = "none";
  myTwomblyBlock.style.display = "none";
  myLewBlock.style.display = "none";
  myMatisseBlock.style.display = "none";
});

myTwomblyText.addEventListener('click', () => { 
  myTwomblyVid.style.display = "block";
  myTwomblyBlock.style.display = "block";
  myBowlingVid.style.display = "none";
  myMartinVid.style.display = "none";
  myLewVid.style.display = "none";
  myMatisseVid.style.display = "none";
  myBowlingBlock.style.display = "none";
  myMartinBlock.style.display = "none";
  myLewBlock.style.display = "none";
  myMatisseBlock.style.display = "none";
});

myLewText.addEventListener('click', () => { 
  myLewVid.style.display = "block";
  myLewBlock.style.display = "block";
  myBowlingVid.style.display = "none";
  myTwomblyVid.style.display = "none";
  myMartinVid.style.display = "none";
  myMatisseVid.style.display = "none";
  myBowlingBlock.style.display = "none";
  myTwomblyBlock.style.display = "none";
  myMartinBlock.style.display = "none";
  myMatisseBlock.style.display = "none";
});

myMatisseText.addEventListener('click', () => { 
  myMatisseVid.style.display = "block";
  myMatisseBlock.style.display = "block";
  myBowlingVid.style.display = "none";
  myTwomblyVid.style.display = "none";
  myLewVid.style.display = "none";
  myMartinVid.style.display = "none";
  myBowlingBlock.style.display = "none";
  myTwomblyBlock.style.display = "none";
  myLewBlock.style.display = "none";
  myMartinBlock.style.display = "none";
});
