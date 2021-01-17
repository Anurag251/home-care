$(document).ready(function(){
    $('#icon').css("float","left");

    $('.location-btn').click(function(){
      $('.location ul .location-show').toggleClass("show");
      $('.location ul .first').toggleClass("rotate");
    });
    
    $('.services-btn').click(function(){
      $('.services ul .services-show').toggleClass("show");
      $('.services ul .second').toggleClass("rotate");
    });
  
    $('.get-care-now .row').css({
      "box-shadow" : " 0 0 20px #eee, 0 0 50px #eee",
      "background" : "white"
    });
    
    $('#submmit-btn').click(function(){
      alert("File is submitted");
    });

    $('.about-us .desc a').mouseover(function(){
      $('.about-us .desc a span').css({
        "transform" : "scale(1)",
        "background" : "var(--danger)",
        "width" : "22%"
      });
    });

    $('.about-us .desc a').mouseout(function(){
      $('.about-us .desc a span').css({
        "transform" : "scale(0)",
        // "width" : "22%"
      });
    });

    $('textarea, input, select').on("click", function(){
      $(this).css({
        "background" : "#fff",
        "border-color" : "var(--danger)",
      });
    })

    $('textarea, input, select').mouseout(function(){
      $(this).css({
        "background-color" : "var(--light)",
        "border-color" : "transparent",
        "color" : "var(--primary)"
      });
    });


/********** side-nav **********/
    $('.home-btn').click(function(){
      $('#side-menu ul .home-show').toggleClass("show");
      $('#side-menu ul .first').toggleClass("rotate");
    });
    $('.about-btn').click(function(){
      $('#side-menu ul .about-show').toggleClass("show1");
      $('#side-menu ul .second').toggleClass("rotate");
    });
    $('.serv-btn').click(function(){
      $('#side-menu ul .serv-show').toggleClass("show2");
      $('#side-menu ul .third').toggleClass("rotate");
    });
    $('.prod-btn').click(function(){
      $('#side-menu ul .prod-show').toggleClass("show3");
      $('#side-menu ul .fourth').toggleClass("rotate");
    });
    $('#side-menu ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });
  });

  
/********** side-nav **********/

  function openSlideMenu(){
    document.getElementById('side-menu').style.width = '300px';
  }
  
  function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
  }
  

/********* navbar **********/

window.addEventListener("scroll", function(){
  var nav = document.querySelector("nav, .logo-name");
  nav.classList.toggle("sticky", window.scrollY > 0);
})



/********* slider **********/

function marg1(){
  var slider = document.querySelector('#slider');
  slider.style.marginLeft = '-100%';
  function marg2(){
    var slider = document.querySelector('#slider');
  slider.style.marginLeft = '-200%';
  function marg0(){
    var slider = document.querySelector('#slider');
    slider.style.marginLeft = '0';
    setTimeout(marg1, 7500);
    }
    setTimeout(marg0, 7500);
  }
  setTimeout(marg2, 7500);
}
setTimeout(marg1, 7500);




setInterval(para, 7300);
setInterval(head, 7300);
setInterval(line, 7400);
setInterval(head2, 7800);
setInterval(para2, 7800);
setInterval(line2, 7900);


function head(){
  var h = document.querySelectorAll('h1');
  var i;
  for (i = 0; i < h.length; i++){
    h[i].style.top = '100px';
  }
}

function head2(){
  var h = document.querySelectorAll('h1');
  var i;
  for (i = 0; i < h.length; i++){
    h[i].style.top = '0';
  }
}

function para(){
  var p = document.querySelectorAll('h5');
  var i;
  for(i = 0; i < p.length; i++){
    p[i].style.bottom = '80px';
  }
}

function para2(){
  var p = document.querySelectorAll('h5');
  var i;
  for(i = 0; i < p.length; i++){
    p[i].style.bottom = '0';
  }
}

function line(){
  var l = document.querySelectorAll('.line');
  var i;
  for (i = 0; i < l.length; i++){
    l[i].style.transform = 'scale(0)';
  }
}

function line2(){
  var l = document.querySelectorAll('.line');
  var i;
  for (i = 0; i < l.length; i++){
    l[i].style.transform = 'scale(1)';
  }
}


var accordions = document.querySelectorAll("button.accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

function closeAll() {
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove("active");
    accordions[i].nextElementSibling.classList.remove("show");
  }
}





var openModelButton = document.querySelectorAll('[data-model-target]')
var closeModelButton = document.querySelectorAll('[data-close-button]')
var overlay = document.getElementById('overlay')
var body = document.getElementById('footer')
var sliders = document.getElementById('slider2')
var bodyTwo = document.getElementById('services-title')
var bodyThree = document.getElementById('first')
var card = document.getElementById('cardlist')

openModelButton.forEach(button => {
  button.addEventListener('click', () => {
    const model = document.querySelector(button.dataset.modelTarget);
    openModel(model);
  })
})

overlay.addEventListener('click', () => {
  const models = document.querySelectorAll('.model.active');
  models.forEach(model => {
    closeModel(model)
  })
})

closeModelButton.forEach(button => {
  button.addEventListener('click', () => {
    const model = button.closest('.model')
    closeModel(model)
  })
})

function openModel(model) {
  if (model == null) return
  model.classList.add('active')
  overlay.classList.add('active')
  body.classList.add('active')
  bodyTwo.classList.add('active')
  bodyThree.classList.add('active')
  sliders.classList.add('active')
  card.classList.add('active')
}

function closeModel(model) {
  if (model == null) return
  model.classList.remove('active')
  overlay.classList.remove('active')
  body.classList.remove('active')
  bodyTwo.classList.remove('active')
  bodyThree.classList.remove('active')
  sliders.classList.remove('active')
  card.classList.remove('active')
}





// $('#sim').click(function(){
//   $('.model').addClass('.active');
// });

