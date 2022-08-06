

    //navbar
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    var DefaultSize = window.matchMedia("(max-width: 720px)");

    DefaultSize.addEventListener("change", function(){
      if(!DefaultSize.matches)
      {
        navLinks.style.visibility = "visible";
      }
      else{
        navLinks.style.visibility = "hidden";
      }
    });
    
    hamburger.addEventListener("click", function(){
      if (navLinks.style.visibility == "visible") {
        navLinks.style.visibility = "hidden";
      } else {
        navLinks.style.visibility = "visible";
      }
    });

  
      // your code here only for About.html
      //slideshow 350T
      var slider = document.querySelector("#LamboT");
      var image = ["./images/350GT-side.webp","./images/350GT-front.jpg", "./images/350GT-back.webp"];
      var index = 0;
      slider.addEventListener("click" , function(){
          index++
          if(index > 2)
          {
              index = 0;
          }
        slider.src = image[index];
      });
      
      //slideshow adventador
      var slider1 = document.querySelector("#LamboA");
      var image1 = ["./images/Aventador-side.webp","./images/Aventador-front.jpeg","./images/Aventador-back.jpg"];
      var index1 = 0;
      slider1.addEventListener("click" , function(){
          index1++
          if(index1 > 2)
          {
              index1 = 0;
          }
        slider1.src = image1[index1];
      });
      
      //slideshow huracan
      var slider2 = document.querySelector("#LamboH");
      var image2 = ["./images/huracan-side.webp","./images/huracan-front.jpg", "./images/huracan-back.jpg"];
      var index2 = 0;
      slider2.addEventListener("click" , function(){
          index2++
          if(index2 > 2)
          {
              index2 = 0;
          }
        slider2.src = image2[index2];
      });
      
      //AUDIO Track 1
      var track = document.getElementById('track');
      var controlBtn = document.getElementById('play-pause');
      controlBtn.addEventListener("click", playPause);
      track.addEventListener("ended", function() {
        controlBtn.className = "play";
      });
      
      function playPause() {
          if (track.paused) {
              track.play();
              controlBtn.className = "pause";
          } else { 
              track.pause();
              controlBtn.className = "play";
          }
      }
      
      //AUDIO Track 2
      var track1 = document.getElementById('track1');
      var controlBtn1 = document.getElementById('play-pause1');
      controlBtn1.addEventListener("click", playPause1);
      track1.addEventListener("ended", function() {
        controlBtn1.className = "play";
      });
      
      function playPause1() {
          if (track1.paused) {
              track1.play();
              controlBtn1.className = "pause";
          } else { 
              track1.pause();
              controlBtn1.className = "play";
          }
      }
      
      //AUDIO Track 3
      var track2 = document.getElementById('track2');
      var controlBtn2 = document.getElementById('play-pause2');
      controlBtn2.addEventListener("click", playPause2);
      track2.addEventListener("ended", function() {
        controlBtn2.className = "play";
      });
      
      function playPause2() {
          if (track2.paused) {
              track2.play();
              controlBtn2.className = "pause";
          } else { 
              track2.pause();
              controlBtn2.className = "play";
          }
      }




      // popups
      function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }
      function myFunction1() {
        var popup = document.getElementById("myPopup1");
        popup.classList.toggle("show1");
      }
      function myFunction2() {
        var popup = document.getElementById("myPopup2");
        popup.classList.toggle("show2");
      }
      function myFunction3() {
        var popup = document.getElementById("myPopup3");
        popup.classList.toggle("show3");
      }


  
      function myFunction4() {
        var popup = document.getElementById("myPpopup");
        popup.classList.toggle("show4");
      }
      function myFunction5() {
        var popup = document.getElementById("myPpopup1");
        popup.classList.toggle("show5");
      }
      function myFunction6() {
        var popup = document.getElementById("myPpopup2");
        popup.classList.toggle("show6");
      }
      function myFunction7() {
        var popup = document.getElementById("myPpopup3");
        popup.classList.toggle("show7");
      }



//footer animation
function ani() {
  document.getElementById('top-down').style.animation="lambo 5s infinite";
}


