'use strict';

function animationSet(selector, name, duration, delay, timeFunction, count){
  selector[0].style.animationName = name;
  selector[0].style.animationDuration = duration;
  selector[0].style.animationDelay = delay;
  selector[0].style.animationTimingFunction = timeFunction;
  selector[0].style.animationIterationCount = count;
  selector[0].style.animationFillMode = 'forwards';
  selector[0].style.webkitAnimationName = name;
  selector[0].style.webkitAnimationDuration = duration;
  selector[0].style.webkitAnimationDelay = delay;
  selector[0].style.webkitAnimationTimingFunction = timeFunction;
  selector[0].style.webkitAnimationIterationCount = count;
  selector[0].style.webkitAnimationFillMode = 'forwards';
}

function setParallax(){
  var scene02 = document.getElementById('Session02');
  var parallax02 = new Parallax(scene02);
  var scene03 = document.getElementById('Session03');
  var parallax03 = new Parallax(scene03);
  var scene04 = document.getElementById('Session04');
  var parallax04 = new Parallax(scene04);
  var scene05 = document.getElementById('Session05');
  var parallax05 = new Parallax(scene05);
  var scene06 = document.getElementById('Session06');
  var parallax06 = new Parallax(scene06);
}

function setParallax2(){
  var scene08 = document.getElementById('Session08');
  var parallax08 = new Parallax(scene08);
}

//var musicLoaded = false;
//
//function loadAudio(src, callback) {
//  var audio = new Audio(src);
//  audio.onloadedmetadata = callback;
//  audio.src = src;
//}

function SessionControl(){}

SessionControl.prototype = {
  session01: function(){
    var imgSelector = $('img');
    var loadingText = $('.j_loading-num');
    var loadingBlock = $('.j_loading-block');
    var imgUnFinished = imgSelector.length;
    var imgPercent = 100/imgSelector.length;
    var blockPercent = 130/imgSelector.length;

    var blockTop = parseInt(loadingBlock.css('top'));
    var self = this;

    function session01Outting(){
        animationSet($('.j_session-01'), 'loadingOut', '5s', '0', 'ease-in-out', '1');
        animationSet($('.j_session-02'), 'session02Show', '1s', '0', 'ease-in-out', '1');
        self.session02();
    }

    function checkImg(){
      var loadingNum = 0;
      imgSelector.each(function(){
        if(this.complete){
          loadingNum++;
        }
      });

      loadingBlock.css('opacity', 1);
      loadingBlock.css('top', (blockTop-blockPercent*loadingNum) +'px');
      loadingText.text(parseInt(imgPercent * loadingNum -2) + '%');

      if(loadingNum === imgUnFinished){
        //if(musicLoaded){
        session01Outting();
        //}else{
        //  setTimeout(checkImg, 1000);
        //}
      }else{
        setTimeout(checkImg, 300);
      }
    }
    checkImg();
  },
  session02: function(){
    setParallax();
    $('.j_music-bg-start')[0].play();
    var self = this;
    var personSelect = $('.j_session-02-person');

    animationSet($('.j_flash-01'), 'session02Flash01', '1s', '1.6s', 'ease-in-out', '1');
    animationSet($('.j_flash-02'), 'session02Flash02', '1.2s', '1.4s', 'ease-in-out', '1');
    animationSet($('.j_light-01'), 'session02Light', '1s', '0.8s', 'ease-in-out', '1');
    animationSet($('.j_light-03'), 'session02Light', '1.3s', '0.8s', 'ease-in-out', '1');
    animationSet($('.j_light-04'), 'session02Light', '1.2s', '1s', 'ease-in-out', '1');
    animationSet($('.j_light-05'), 'session02Light', '1s', '0.9s', 'ease-in-out', '1');
    animationSet(personSelect, 'session02Person', '7s', '1.5s', 'ease-out', '1');
    animationSet($('.j_session-02-ink'), 'session02Ink', '8s', '2s', 'ease-out', '1');
    animationSet($('.j_session-02-font-01'), 'session02Font01', '0.5s', '3.5s', 'faster', '1');
    animationSet($('.j_session-02-font-02'), 'session02Font02', '0.2s', '4.7s', 'faster', '1');
    animationSet($('.j_session-02-font-03'), 'session02Font03', '0.7s', '3.6s', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');

    var flowerDelay = '4.2s';
    animationSet($('.j_flower-01'), 'session02Flower01', '2.7s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-02'), 'session02Flower02', '2.9s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-03'), 'session02Flower03', '2.1s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-04'), 'session02Flower04', '2.4s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-05'), 'session02Flower05', '2.3s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-06'), 'session02Flower06', '2.9s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-07'), 'session02Flower07', '2.2s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-08'), 'session02Flower08', '3.1s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-09'), 'session02Flower09', '3.0s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-10'), 'session02Flower10', '1.5s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-11'), 'session02Flower11', '2.3s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_click-continue'), 'session02Click', '1.5s', '5s', 'ease-in-out', 'infinite');

    function font03Out(){
      animationSet($('.j_session-02-font-03'), 'session02Out', '0.7s', '0s', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    }

    function font02Out(){
      animationSet($('.j_session-02-font-02'), 'session02Out', '0.6s', '0s', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    }

    function font01Out(){
      animationSet($('.j_session-02-font-01'), 'session02Out', '0.5s', '0s', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    }

    function personOut(){
      personSelect.css('transform-origin', '55% 55%');
      animationSet(personSelect, 'session02Out', '0.4s', '0s', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    }

    function continueEventBind(){
      $('.j_top').one('touchstart', function(){
        $('.j_click-continue').css('display', 'none');
        font02Out();
        setTimeout(font03Out, 500);
        setTimeout(font01Out, 900);
        setTimeout(personOut, 1200);
        setTimeout(self.session03, 1400);
        $('.j_music-bg-start')[0].pause();
        $('.j_music-bg')[0].play();
      });
    }

    setTimeout(continueEventBind, 5000);
    setTimeout(setParallax2, 5000);
  },
  session03: function(){
    var sessionFont01 = $('.j_session-03-font-01');
    var fontFlashFlag = true;

    function fontFlash(){
      sessionFont01.css('opacity', (100 * Math.random())/100 + 0.5);
      if(fontFlashFlag){
        setTimeout(fontFlash, 100 * Math.random());
      }else{
        sessionFont01.css('opacity', 1);
      }
    }

    function fontTopSlide(){
      var key = 1;
      var imgArray = [
        'http://cdn1.showjoy.com/images/b4/b4cc2b508fcb4a878f17edc21c72d399.png',
        'http://cdn1.showjoy.com/images/5f/5f5d761f5b2542c98ea70fe0c4ac9edd.png',
        'http://cdn1.showjoy.com/images/9f/9f5735671ef6477aa65608e463b99eca.png',
        'http://cdn1.showjoy.com/images/49/4959a2e5090b4cad88018e81dcbca58b.png',
        'http://cdn1.showjoy.com/images/04/04e65867fd7145809a86f0cfd78ee7ef.png',
        'http://cdn1.showjoy.com/images/dc/dc4e72ce9f5a4c1fa124d39d01c6f537.png',
        'http://cdn1.showjoy.com/images/41/417a34ca13654dc693677bd9a7f399f4.png',
        'http://cdn1.showjoy.com/images/26/26c4abfa2b2147609c5798fa5997b2f6.png'
      ];
      for(key; key<8; key++){
        var target = document.createElement('img');
        $(target).addClass('top-font').addClass('top-font-0' + key).attr('src', imgArray[(key-1)]).css('left', (100*Math.random()) + '%');
        animationSet($(target), 'session03FontMove', (2 + 2 * Math.random()) + 's', (Math.random() + 0.2) + 's', 'linear', '1');
        $('.j_session-03')[0].appendChild(target);
      }
      if(fontFlashFlag){
        setTimeout(fontTopSlide, 1400);
      }
    }

    function sessionOut(){
      fontFlashFlag = false;
      animationSet($('.j_session-03'), 'session03Out', '0.3s', '0', 'linear', '1');
      animationSet($('.j_session-04'), 'session04In', '0.3s', '0.1s', 'linear', '1');
      setTimeout(animateControl.session04, 200);
    }

    animationSet($('.j_session-02'), 'session02AllOut', '0.2s', '0', 'linear', '1');
    animationSet($('.j_session-03'), 'session03AllIn', '0.2s', '0', 'linear', '1');
    animationSet($('.j_session-03-person'), 'session03Person', '6s', '0.1s', 'faster', '1');
    fontFlash();
    fontTopSlide();
    setTimeout(sessionOut, 6500);
  },
  session04: function(){
    function fontFakeOut(){
      animationSet($('.j_session-04-fake'), 'session04FontOut', '0.4s', '0s', 'linear', '1');
    }
    function fontRealOut(){
      animationSet($('.j_session-04-real'), 'session04FontOut', '0.4s', '0s', 'linear', '1');
    }
    animationSet($('.j_session-04-person'), 'session04Person', '4s', '0.5s', 'faster', '1');
    animationSet($('.j_session-04-x-01'), 'session04X', '0.3s', '1.4s', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    animationSet($('.j_session-04-x-02'), 'session04X', '0.3s', '1.8s', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    animationSet($('.j_session-04-real'), 'session04Font', '0.5s', '2.2s', 'cubic-bezier(0.6, 0, 0.735, 0.045)', '1');
    animationSet($('.j_session-04-fake'), 'session04Font', '0.45s', '2.6s', 'cubic-bezier(0.6, 0, 0.735, 0.045)', '1');
    setTimeout(fontFakeOut, 4500);
    setTimeout(fontRealOut, 5000);

    function XOut02(){
      animationSet($('.j_session-04-x-01'), 'session04XOut02', '0.3s', '0', 'linear', '1');
      animationSet($('.j_session-04-x-02'), 'session04XOut02', '0.3s', '0', 'linear', '1');
      setTimeout(animateControl.session05, 300);
    }
    setTimeout(XOut02, 5500);
  },
  session05: function(){
    var session05Selector = $('.j_session-05');
    session05Selector.css('opacity', '1');
    animationSet($('.j_session-05-person'), 'session05Person', '3.5s', '0', 'linear', '1');
    animationSet($('.j_session-05-bg'), 'session05Bg', '2.5s', '0', 'linear', '1');
    animationSet($('.j_session-05-font-01'), 'session05Font', '0.5s', '1s', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    animationSet($('.j_session-05-font-02'), 'session05Font', '0.5s', '1.5s', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');

    function font02out(){
      animationSet($('.j_session-05-font-02'), 'session05FontOut', '0.4s', '0s', 'linear', '1');
    }
    function font01out(){
      animationSet($('.j_session-05-font-01'), 'session05FontOut', '0.4s', '0s', 'linear', '1');
    }
    function bgout(){
      animationSet($('.j_session-05-bg'), 'session04FontOut', '0.5s', '0s', 'linear', '1');
      animationSet($('.j_session-05-person'), 'session04FontOut', '0.5s', '0s', 'linear', '1');
    }

    function session05Out(){
      $('.j_session-04').css('display', 'none');
      font02out();
      setTimeout(font01out, 500);
      $('.j_session-05-bg').css('transform-origin', '50% 50%');
      setTimeout(bgout, 1000);
      setTimeout(animateControl.session06, 500);
    }
    setTimeout(session05Out, 3800);
  },
  session06: function(){
    animationSet($('.j_session-06'), 'session06In', '1s', '0', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    animationSet($('.j_session-06-person'), 'session06Person', '5s', '0.7s', 'ease-in-out', '1');
    animationSet($('.j_session-06-bg'), 'session06Bg', '0.25s', '1.9s', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    animationSet($('.j_session-06-font-01'), 'session06Font', '0.5s', '2.4s', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    animationSet($('.j_session-06-font-02'), 'session06Font', '0.5s', '2.9s', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    setTimeout(animateControl.session07, 5300);
  },
  session07: function(){
    var flashFlag = true;
    var flashTime = 200;
    var logoSelector = $('.j_session-07-logo');
    var flashFlag02 = true;
    var flash02Time = 200;
    var logoSelector02 = $('.j_session-07-logo-flash');

    function logoFlash(){
      if(flashTime > 0){
        if(flashFlag){
          animationSet(logoSelector, 'session07In', '0.15s', '0', 'linear', '1');
          flashFlag = !flashFlag;
        }else{
          animationSet(logoSelector, 'session07Out', '0.15s', '0', 'linear', '1');
          flashFlag = !flashFlag;
        }
        if(flashTime<150){
          flashTime -= 5;
        }else{
          flashTime -= 8;
        }

        setTimeout(logoFlash, flashTime);
      }else{
        animationSet(logoSelector, 'session07ScaleIn', '4s', '0', 'linear', '1');
        setTimeout(animateControl.session08, 3000);
      }
    }

    function logoFlash02(){
      if(flash02Time > 0){
        if(flashFlag02){
          animationSet(logoSelector02, 'session07In', '0.02s', '0', 'linear', '1');
          flashFlag02 = !flashFlag02;
        }else{
          animationSet(logoSelector02, 'session07Out', '0.01s', '0', 'linear', '1');
          flashFlag02 = !flashFlag02;
        }
        if(flash02Time<160){
          flash02Time -= 35;
        }else{
          flash02Time -= 25;
        }
        setTimeout(logoFlash02, flash02Time);
      }
    }

    animationSet($('.j_session-07'), 'session07PersonIn', '1s', '0', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    setTimeout(logoFlash, 3000);
    setTimeout(logoFlash02, 3000);
  },
  session08: function(){
    $('.j_review').css('display', 'block');
    $('.j_download').css('display', 'block');
    animationSet($('.j_session-08-logo'), 'session08logoIn', '3s', '0', 'cubic-bezier(0.59, 0, 0.735, 0.045)', '1');
    animationSet($('.j_session-08'), 'session08In', '0.3s', '0', 'linear', '1');
    animationSet($('.j_session-08-date'), 'session08fontIn', '0.3s', '0.8s', 'linear', '1');
    animationSet($('.j_session-08-des'), 'session08fontIn', '0.3s', '1s', 'linear', '1');
    animationSet($('.j_session-08-btn'), 'session08fontIn', '0.3s', '1.2s', 'linear', '1');

    var flowerDelay = '0.3s';
    animationSet($('.j_flower-08-01'), 'session02Flower01', '2.7s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-08-02'), 'session02Flower02', '2.9s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-08-03'), 'session02Flower03', '2.1s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-08-04'), 'session02Flower04', '2.4s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-08-05'), 'session02Flower05', '2.3s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-08-06'), 'session02Flower06', '2.9s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-08-07'), 'session02Flower07', '2.2s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-08-08'), 'session02Flower08', '3.1s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-08-09'), 'session02Flower09', '3.0s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-08-10'), 'session02Flower10', '1.5s', flowerDelay, 'ease-out', '1');
    animationSet($('.j_flower-08-11'), 'session02Flower11', '2.3s', flowerDelay, 'ease-out', '1');
  }
};

var animateControl = new SessionControl();



(function(){
  document.querySelector('body').addEventListener('touchmove', function (event) {
    event.preventDefault();
  });

  $(document).ready(function(){
    //页面加载(将内容移动到js中来看看页面的预加载效果)
    var session02HTML = '<ul id="Session02">' +
      '<li class="layer" data-depth="0.5"><img class="ink j_session-02-ink" src="http://cdn1.showjoy.com/images/4c/4c11327fcb244b64b39e5c0c7007fe5a.png"/></li>' +
      '<li class="layer" data-depth="0.0"><img class="person j_session-02-person" src="http://cdn1.showjoy.com/images/ac/ac4fa27bf5214f26b976dbf6f046b605.png"/></li>' +
      '<li class="layer" data-depth="0.4"><img class="font-01 j_session-02-font-01" src="http://cdn1.showjoy.com/images/a0/a03424ba3b6b4477a91fe9e2589aac7f.png"/></li>' +
      '<li class="layer" data-depth="0.3"><img class="font-02 j_session-02-font-02" src="http://cdn1.showjoy.com/images/f5/f5386667797e47fdbe3c238735f8df21.png"/></li>' +
      '<li class="layer" data-depth="0.2"><img class="font-03 j_session-02-font-03" src="http://cdn1.showjoy.com/images/e9/e95488ab377a4f28b76de3c62fb8cc18.png"/></li>' +
      '<li class="layer" data-depth="0.0"><img class="session-top" src="http://cdn1.showjoy.com/images/c2/c2c34026590d41d58b0c1ac489987231.png"/></li>' +
      '</ul> <img class="flash-01 j_flash-01" src="http://cdn1.showjoy.com/images/23/23149d3b72a143a1b2a4a26fbe03838f.png"/>' +
      '<img class="flash-02 j_flash-02" src="http://cdn1.showjoy.com/images/23/23149d3b72a143a1b2a4a26fbe03838f.png"/>' +
      '<img class="light-01 j_light-01" src="http://cdn1.showjoy.com/images/b7/b70d77feb0d34a57ac2b164e9c9ebf64.png"/>' +
      '<img class="light-02 j_light-02" src="http://cdn1.showjoy.com/images/b7/b70d77feb0d34a57ac2b164e9c9ebf64.png"/>' +
      '<img class="light-03 j_light-03" src="http://cdn1.showjoy.com/images/b7/b70d77feb0d34a57ac2b164e9c9ebf64.png"/>' +
      '<img class="light-04 j_light-04" src="http://cdn1.showjoy.com/images/b7/b70d77feb0d34a57ac2b164e9c9ebf64.png"/>' +
      '<img class="light-05 j_light-05" src="http://cdn1.showjoy.com/images/b7/b70d77feb0d34a57ac2b164e9c9ebf64.png"/>' +
      '<img class="flower flower-01 j_flower-01" src="http://cdn1.showjoy.com/images/a1/a16af258ce5e4a6d85d7a1598a4678b8.png"/>' +
      '<img class="flower flower-02 j_flower-02" src="http://cdn1.showjoy.com/images/a1/a16af258ce5e4a6d85d7a1598a4678b8.png"/>' +
      '<img class="flower flower-03 j_flower-03" src="http://cdn1.showjoy.com/images/0b/0b45af55195143a5ae6f0b0b6999cbb2.png"/>' +
      '<img class="flower flower-04 j_flower-04" src="http://cdn1.showjoy.com/images/0b/0b45af55195143a5ae6f0b0b6999cbb2.png"/>' +
      '<img class="flower flower-05 j_flower-05" src="http://cdn1.showjoy.com/images/95/954f7802bc614a7db796886247995b42.png"/>' +
      '<img class="flower flower-06 j_flower-06" src="http://cdn1.showjoy.com/images/95/954f7802bc614a7db796886247995b42.png"/>' +
      '<img class="flower flower-07 j_flower-07" src="http://cdn1.showjoy.com/images/09/09cc643293ec474d8aba6c71ddf85d6d.png"/>' +
      '<img class="flower flower-08 j_flower-08" src="http://cdn1.showjoy.com/images/09/09cc643293ec474d8aba6c71ddf85d6d.png"/>' +
      '<img class="flower flower-09 j_flower-09" src="http://cdn1.showjoy.com/images/a1/a16af258ce5e4a6d85d7a1598a4678b8.png"/>' +
      '<img class="flower flower-10 j_flower-10" src="http://cdn1.showjoy.com/images/0b/0b45af55195143a5ae6f0b0b6999cbb2.png"/>' +
      '<img class="flower flower-11 j_flower-11" src="http://cdn1.showjoy.com/images/0b/0b45af55195143a5ae6f0b0b6999cbb2.png"/>' +
      '<div class="click-continue j_click-continue">点击屏幕</div>';
    $('.j_session-02').append(session02HTML);

    var session03HTML = '<ul id="Session03"><li class="layer" data-depth="0.0"><img class="session-top" src="http://cdn1.showjoy.com/images/c2/c2c34026590d41d58b0c1ac489987231.png"/></li>' +
      '<li class="layer" data-depth="0.4"><img class="ink" src="http://cdn1.showjoy.com/images/78/78ccaf32ba4e48ab85261cd01c37f643.png"/></li>' +
      '<li class="layer" data-depth="0.3"><img class="font-01 j_session-03-font-01" src="http://cdn1.showjoy.com/images/e0/e029c93c4efd45c8b82800cbce6592ce.png"/></li>' +
      '<li class="layer" data-depth="0.0"><img class="person j_session-03-person" src="http://cdn1.showjoy.com/images/80/80aa49c5f83747d8af944a671d283c51.png"/></li>' +
      '</ul><img class="top-font top-font-01 j_session-03-top-font-01" src="http://cdn1.showjoy.com/images/b4/b4cc2b508fcb4a878f17edc21c72d399.png"/>' +
      '<img class="top-font top-font-02 j_session-03-top-font-02" src="http://cdn1.showjoy.com/images/5f/5f5d761f5b2542c98ea70fe0c4ac9edd.png"/>' +
      '<img class="top-font top-font-03 j_session-03-top-font-03" src="http://cdn1.showjoy.com/images/9f/9f5735671ef6477aa65608e463b99eca.png"/>' +
      '<img class="top-font top-font-04 j_session-03-top-font-04" src="http://cdn1.showjoy.com/images/49/4959a2e5090b4cad88018e81dcbca58b.png"/>' +
      '<img class="top-font top-font-05 j_session-03-top-font-05" src="http://cdn1.showjoy.com/images/04/04e65867fd7145809a86f0cfd78ee7ef.png"/>' +
      '<img class="top-font top-font-06 j_session-03-top-font-06" src="http://cdn1.showjoy.com/images/dc/dc4e72ce9f5a4c1fa124d39d01c6f537.png"/>' +
      '<img class="top-font top-font-07 j_session-03-top-font-07" src="http://cdn1.showjoy.com/images/41/417a34ca13654dc693677bd9a7f399f4.png"/>' +
      '<img class="top-font top-font-08 j_session-03-top-font-08" src="http://cdn1.showjoy.com/images/26/26c4abfa2b2147609c5798fa5997b2f6.png"/>';
    $('.j_session-03').append(session03HTML);

    var session04HTML = '<ul id="Session04"><li class="layer" data-depth="0.0"><img class="session-top" src="http://cdn1.showjoy.com/images/c2/c2c34026590d41d58b0c1ac489987231.png"/></li>' +
      '<li class="layer" data-depth="0.0"><img class="person j_session-04-person" src="http://cdn1.showjoy.com/images/0c/0c61ec55fbb24512aba3db052a98e461.png"/></li>' +
      '<li class="layer" data-depth="0.3"><img class="x-01 j_session-04-x-01" src="http://cdn1.showjoy.com/images/e0/e0a7651f28f24e85a792836b41af7e57.png"/></li>' +
      '<li class="layer" data-depth="0.3"><img class="x-02 j_session-04-x-02" src="http://cdn1.showjoy.com/images/11/11d07926910248cdac0d454c25cec543.png"/></li>' +
      '<li class="layer" data-depth="0.2"><img class="real j_session-04-real" src="http://cdn1.showjoy.com/images/af/af1aec14623b4fe4930f7ed1507573ef.png"/></li>' +
      '<li class="layer" data-depth="0.2"><img class="fake j_session-04-fake" src="http://cdn1.showjoy.com/images/93/937c7436f5224bfa90535761c254fd3a.png"/></li></ul>';
    $('.j_session-04').append(session04HTML);

    var session05HTML = '<ul id="Session05"> <li class="layer" data-depth="0.0"><img class="session-top" src="http://cdn1.showjoy.com/images/c2/c2c34026590d41d58b0c1ac489987231.png"/></li>' +
      '<li class="layer" data-depth="0.0"><img class="person j_session-05-person" src="http://cdn1.showjoy.com/images/b2/b2b2d2c359a84b689b346adde18e97a6.png"/></li>' +
      '<li class="layer" data-depth="0.4"><img class="bg j_session-05-bg" src="http://cdn1.showjoy.com/images/5d/5d33298f9d7c470dae46b84020705cfb.png"/></li>' +
      '<li class="layer" data-depth="0.3"><img class="font-01 j_session-05-font-01" src="http://cdn1.showjoy.com/images/32/32d73373c1b240c8a461f15ab7e1cc0c.png"/></li>' +
      '<li class="layer" data-depth="0.3"><img class="font-02 j_session-05-font-02" src="http://cdn1.showjoy.com/images/2b/2b2713f4fbe248b9b7cae9a4a8d03601.png"/></li></ul>';
    $('.j_session-05').append(session05HTML);

    var session06HTML = '<ul id="Session06"> <li class="layer" data-depth="0.0"><img class="session-top" src="http://cdn1.showjoy.com/images/c2/c2c34026590d41d58b0c1ac489987231.png"/></li>' +
      '<li class="layer" data-depth="0.0"><img class="person j_session-06-person" src="http://cdn1.showjoy.com/images/48/489362e312de4e3abb67a83375bf1a31.jpg"/></li>' +
      '<li class="layer" data-depth="0.4"><img class="bg j_session-06-bg" src="http://cdn1.showjoy.com/images/00/00c9fa2868ed43a89c3cbf8592c15433.png"/></li>' +
      '<li class="layer" data-depth="0.3"><img class="font-01 j_session-06-font-01" src="http://cdn1.showjoy.com/images/5a/5a5c8b3115ab4d33a5522c889e925aa3.png"/></li>' +
      '<li class="layer" data-depth="0.3"><img class="font-02 j_session-06-font-02" src="http://cdn1.showjoy.com/images/03/03459096409e4da18d7133e5528a90ca.png"/></li>' +
      '</ul>';
    $('.j_session-06').append(session06HTML);

    var session07HTML = '<img class="person" src="http://cdn1.showjoy.com/images/5c/5c6e80cebe89495884ffe0ea2af3711f.jpg"/>' +
      '<img class="logo j_session-07-logo" src="http://cdn1.showjoy.com/images/94/947a6a970cd546219966c9f096ec7205.jpg"/>' +
      '<img class="logo-flash j_session-07-logo-flash" src="http://cdn1.showjoy.com/images/ab/ab01b81d770547ae81d4233c1b266cc1.jpg"/>';
    $('.j_session-07').append(session07HTML);

    var session08HTML = '<ul id="Session08"> <li class="layer" data-depth="0.0"><img class="session-top" src="http://cdn1.showjoy.com/images/c2/c2c34026590d41d58b0c1ac489987231.png"/></li>' +
      '<li class="layer" data-depth="0.3"><img class="logo j_session-08-logo" src="http://cdn1.showjoy.com/images/3d/3dc42325ccf744f5a3b747105b909561.png"/></li>' +
      '<li class="layer" data-depth="0.2"><img class="date j_session-08-date" src="http://cdn1.showjoy.com/images/fa/fa54e23157464429aadfe8caab558b61.png"/></li>' +
      '<li class="layer" data-depth="0.1"><img class="des j_session-08-des" src="http://cdn1.showjoy.com/images/5d/5de2618187d84d308d801452eb90db21.png"/></li>' +
      '<li class="layer" data-depth="0.1"><img class="btn j_session-08-btn" src="http://cdn1.showjoy.com/images/58/58a80d2796674157abb313ea55f4da37.png"/></li>' +
      '</ul> <img class="flower flower-01 j_flower-08-01" src="http://cdn1.showjoy.com/images/a1/a16af258ce5e4a6d85d7a1598a4678b8.png"/>' +
      '<img class="flower flower-02 j_flower-08-02" src="http://cdn1.showjoy.com/images/a1/a16af258ce5e4a6d85d7a1598a4678b8.png"/>' +
      '<img class="flower flower-03 j_flower-08-03" src="http://cdn1.showjoy.com/images/0b/0b45af55195143a5ae6f0b0b6999cbb2.png"/>' +
      '<img class="flower flower-04 j_flower-08-04" src="http://cdn1.showjoy.com/images/0b/0b45af55195143a5ae6f0b0b6999cbb2.png"/>' +
      '<img class="flower flower-05 j_flower-08-05" src="http://cdn1.showjoy.com/images/95/954f7802bc614a7db796886247995b42.png"/>' +
      '<img class="flower flower-06 j_flower-08-06" src="http://cdn1.showjoy.com/images/95/954f7802bc614a7db796886247995b42.png"/>' +
      '<img class="flower flower-07 j_flower-08-07" src="http://cdn1.showjoy.com/images/09/09cc643293ec474d8aba6c71ddf85d6d.png"/>' +
      '<img class="flower flower-08 j_flower-08-08" src="http://cdn1.showjoy.com/images/09/09cc643293ec474d8aba6c71ddf85d6d.png"/>' +
      '<img class="flower flower-09 j_flower-08-09" src="http://cdn1.showjoy.com/images/09/09cc643293ec474d8aba6c71ddf85d6d.png"/>' +
      '<img class="flower flower-10 j_flower-08-10" src="http://cdn1.showjoy.com/images/a1/a16af258ce5e4a6d85d7a1598a4678b8.png"/>' +
      '<img class="flower flower-11 j_flower-08-11" src="http://cdn1.showjoy.com/images/a1/a16af258ce5e4a6d85d7a1598a4678b8.png"/>';
    $('.j_session-08').append(session08HTML);

    var pageHtml01 = $('#PageTemp01').html();
    var pageHtml2Selector = $('#PageTemp02');
    var pageHtml02 = pageHtml2Selector.html();

    $('#Content').css('height', document.body.clientHeight+'px');

    //loadAudio('http://mp3.haoduoge.com/music7/236272.mp3', function(){
    //  $('.j_music-bg').attr('src', 'http://mp3.haoduoge.com/music7/236272.mp3');
    //  musicLoaded = true;
    //});

    animateControl.session01();

    function pageHtml02Rewrite(){
      pageHtml2Selector.empty().append(pageHtml02);
    }

    var musicHtml = $('#MusicControl').html();
    $(document).on('touchend', '.j_review', function(){
      $('#PageTemp01').empty().append(pageHtml01);
      $('#MusicControl').empty().append(musicHtml);
      //session08渐隐变成黑色,接session02
      animationSet($('.j_session-01'), 'loadingOut', '0.3s', '0', 'ease-in-out', '1');
      animationSet($('.j_session-08'), 'sessionOut', '0.7s', '0s', 'linear', '1');
      animationSet($('.j_session-02'), 'session02Show', '0.7s', '0', 'ease-in-out', '1');
      animateControl.session02();
      $('.j_review').css('display', 'none');
      $('.j_download').css('display', 'none');
      setTimeout(pageHtml02Rewrite, 1000);
    });

    $(document).on('touchend', '.j_download', function(){
      window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=com.showjoy";
    });
  });
})();