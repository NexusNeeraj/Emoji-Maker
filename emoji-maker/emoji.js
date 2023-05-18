// color block
var colorBox = document.getElementById('select-skin-card');
var yellowColor = document.getElementById('yellow-skin');
var greenColor = document.getElementById('green-skin');
var redColor = document.getElementById('red-skin');
var nextStepColorBtn = document.getElementsByClassName('fas fa-chevron-right next-step show-eyes-card');

// eyes block
var eyeBox = document.getElementById('select-eyes-card');
var prevStepEyeBtn = document.getElementById('show-skin-card');
var normalEye = document.getElementById('eye-normal');
var closedEye = document.getElementById('eye-closed');
var longEye = document.getElementById('eye-long');
var laughingEye = document.getElementById('eye-laughing');
var rollingEye = document.getElementById('eye-rolling');
var winkingEye = document.getElementById('eye-winking');

var nextStepEyeBtn = document.getElementById('show-mouth-card');


// mouth block
var mouthBox = document.getElementById('select-mouth-card');
var mouthOpen = document.getElementById('mouth-open');
var mouthSmiling = document.getElementById('mouth-smiling');
var mouthStraight = document.getElementById('mouth-straight');
var mouthSad = document.getElementById('mouth-sad');
var mouthTeeth = document.getElementById('mouth-teeth');

var prevStepMouthBtn = document.getElementsByClassName('fas fa-chevron-left previous-step show-eyes-card');

// colorbox js

yellowColor.addEventListener('click',function(){
      var skinImg = document.getElementById('skin');
      skinImg.src = './assets/skin/yellow.png';
});

greenColor.addEventListener('click',function(){
      var skinImg = document.getElementById('skin');
      skinImg.src = './assets/skin/green.png';
});

redColor.addEventListener('click',function(){
      var skinImg = document.getElementById('skin');
      skinImg.src = './assets/skin/red.png';
});

nextStepColorBtn[0].addEventListener('click',function(){
      colorBox.style.display = 'none';
      eyeBox.style.display = 'block';
});


// eye box js

prevStepEyeBtn.addEventListener('click',function(){
      eyeBox.style.display = 'none';
      colorBox.style.display = 'block';
});

normalEye.addEventListener('click',function(){
      var eyesImg = document.getElementById('eyes');
      eyesImg.src = './assets/eyes/normal.png';
});

closedEye.addEventListener('click',function(){
      var eyesImg = document.getElementById('eyes');
      eyesImg.src = './assets/eyes/closed.png';
});

longEye.addEventListener('click',function(){
      var eyesImg = document.getElementById('eyes');
      eyesImg.src = './assets/eyes/long.png';
});

laughingEye.addEventListener('click',function(){
      var eyesImg = document.getElementById('eyes');
      eyesImg.src = './assets/eyes/laughing.png';
});

rollingEye.addEventListener('click',function(){
      var eyesImg = document.getElementById('eyes');
      eyesImg.src = './assets/eyes/rolling.png';
});

winkingEye.addEventListener('click',function(){
      var eyesImg = document.getElementById('eyes');
      eyesImg.src = './assets/eyes/winking.png';
});

nextStepEyeBtn.addEventListener('click',function(){
      eyeBox.style.display = 'none';
      mouthBox.style.display = 'block';
});


// mouth box js

prevStepMouthBtn[0].addEventListener('click',function(){
      mouthBox.style.display = 'none';
      eyeBox.style.display = 'block';
});

mouthOpen.addEventListener('click',function(){
      var mouthImg = document.getElementById('mouth');
      mouthImg.src = './assets/mouth/open.png';
})

mouthSmiling.addEventListener('click',function(){
      var mouthImg = document.getElementById('mouth');
      mouthImg.src = './assets/mouth/smiling.png';
});

mouthStraight.addEventListener('click',function(){
      var mouthImg = document.getElementById('mouth');
      mouthImg.src = './assets/mouth/straight.png';
});

mouthSad.addEventListener('click',function(){
      var mouthImg = document.getElementById('mouth');
      mouthImg.src = './assets/mouth/sad.png';
});

mouthTeeth.addEventListener('click',function(){
      var mouthImg = document.getElementById('mouth');
      mouthImg.src = './assets/mouth/teeth.png';
});
