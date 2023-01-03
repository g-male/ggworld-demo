
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

// IMAGEROTATE
let images = ['/images/cotty-6.jpg', '/images/friendshipandsoccer.png', '/images/barca_vs_real.jpg', '/images/liberation_of_aunt_Jemima.JPG', '/images/web-off.jpg', '/images/notting-hill-carni-1992.jpg', '/images/understand-computer.png', '/images/kobe-smile.jpg', '/images/mike-janet.jpg', '/images/prince_jumper.png'];

let image = document.getElementById('image-rotate');

setInterval(function(){
  let random = Math.floor(Math.random() * 10);
  image.src = images[random];
},
1500)



// qUOTES ROTATE
let quotes = ['The worlds we live in are often in direct conflict with our core beliefs. <br> To protect ourselves and others, we invent universes where our dreams can be true and we can safely be our selves. <br>World-building is self-care. <br> -Yancey Strickler'];

let quoteblock = document.getElementById('quoteblock');

setInterval(function(){
  let random = Math.floor(Math.random() * 1);
  quoteblock.innerHTML = quotes[random];
},
10000)


// qUOTES ROTATE MOBILE
let quotesmobile = ['The worlds we live in are often in direct conflict with our core beliefs. <br> To protect ourselves and others, we invent universes where our dreams can be true and we can safely be our selves.<br> <br>World-building is self-care. <br> -Yancey Strickler'];

let quoteblockmobile = document.getElementById('quoteblock-mobile');

setInterval(function(){
  let random = Math.floor(Math.random() * 1);
  quoteblockmobile.innerHTML = quotesmobile[random];
},
15000)


///// get time animation

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
/// getting time for mobile
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

// getting date

const m = new Date();
const d = new Date();
const y = new Date();

const month = m.getMonth() +1;
const year = y.getFullYear();
const day = d.getDate();

const fulldate = month + "/"+ day+ "/"+year
document.getElementById("date").innerHTML = fulldate;



/// getting time for the desktop

function startTimedesktop() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('timedesktop').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTimedesktop()
  }, 500);
}
startTimedesktop();

// getting date

const md = new Date();
const dd = new Date();
const yd = new Date();

const monthd = m.getMonth() +1;
const yeard = y.getFullYear();
const dayd = d.getDate();

const fulldated = monthd + "/"+ dayd+ "/"+yeard
document.getElementById("datedesktop").innerHTML = fulldated;







function loadHtml(id, filename){

    console.log(`div id: ${id}, filename: ${filename}`);

    let xhttp;
    let element2 = document.getElementById(id);
    let file = filename;

    var element = (window.innerWidth < 600) ? document.getElementById("desktop-left") : document.getElementById("right");
   
    if (file) {
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){ element.innerHTML = this.responseText;}
        if(this.status == 400) {element.innerHTML = "<h1>Page not found.</h1>";}
    }
}
xhttp.open("GET", `templates/${file}`, true);
xhttp.send();
return;
    }
}


// for the return button
function returnHtml(id, filename){

  console.log(`div id: ${id}, filename: ${filename}`);

  let xhttp;
  let element2 = document.getElementById(id);
  let file = filename;

  var element = (window.innerWidth < 600) ? document.getElementById("left") : document.getElementById("right");
 
  if (file) {
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
  if(this.readyState == 4){
      if(this.status == 200){ element.innerHTML = this.responseText;}
      if(this.status == 400) {element.innerHTML = "<h1>Page not found.</h1>";}
  }
}
xhttp.open("GET", `${file}`, true);
xhttp.send();
return;
  }
}

returnHtml();


//TABLE SORTER
$(function() {
    $("#indexTable").tablesorter({
 cssAsc: "up",
    cssDesc: "down",
    sortInitialOrder: "desc"
    });

   
  });


  //TABLE SORTER mobile
$(function() {
  $("#indexTableMobile").tablesorter({
    cssAsc: "up",
       cssDesc: "down",
       sortInitialOrder: "desc"
       });
});



// ON OFF SWITCH TOGGLE. 4 clicks = 2 changes
  let clickState = 0;

  function doAction() {
      clickState++; 
   
      const indextable = document.getElementById('index-table');
  
      const globecanvas = document.getElementById('rotatingGlobe');
    const imagerotate = document.getElementById('select-images');
const mobileinfo = document.getElementById('mobile-info');
const leftside = document.getElementById('desktop-left');
const tickermobile = document.getElementById('ticker-mobile');

      if (clickState ==0){

           
       console.log(clickState)
        globecanvas.style.display = 'none';
        indextable.style.display = 'block';
        mobileinfo.style.display = 'block';

      }

      else if (clickState ==1 ) {

    console.log(clickState)
    globecanvas.style.display = 'inline-block';
    imagerotate.style.display = 'block';
    leftside.style.overflowY = 'hidden'
    indextable.style.display = 'none';
    mobileinfo.style.display = 'none';
   tickermobile.style.display = 'none';
      } else if (clickState == 2 ) {
        leftside.style.overflowY = 'auto'
   console.log(clickState)
    globecanvas.style.display = 'none';
    imagerotate.style.display = 'none';
    indextable.style.display = 'block';
    mobileinfo.style.display = 'block';
    tickermobile.style.display = 'block';
      } else if (clickState == 3 ) {

        console.log(clickState)
        globecanvas.style.display = 'inline-block';
        imagerotate.style.display = 'none';
        indextable.style.display = 'none';
        mobileinfo.style.display = 'none';
        tickermobile.style.display = 'none';
      } else if (clickState == 4 ) {
          // Do something...
          // then reset clickState for the next go round
     
        console.log(clickState)
        globecanvas.style.display = 'none';
          imagerotate.style.display = 'none';
          indextable.style.display = 'block';
          mobileinfo.style.display = 'block';
          tickermobile.style.display = 'block';
          clickState=0;
      } 

  }
// IMAGEROTATE MOBILE
let imagesmoblie = ['/images/cotty-6.jpg', '/images/friendshipandsoccer.png', '/images/barca_vs_real.jpg', '/images/liberation_of_aunt_Jemima.JPG', '/images/web-off.jpg', '/images/notting-hill-carni-1992.jpg', '/images/understand-computer.png', '/images/kobe-smile.jpg', '/images/mike-janet.jpg', '/images/prince_jumper.png'];
let imageorientation = ['rotate(90deg)'];

let imagemobile = document.getElementById('image-rotate-mobile');

setInterval(function (){
  let random = Math.floor(Math.random() * 10);
  imagemobile.src = images[random];
  imagemobile.style.transformOrigin = 'center';


},
1500)



// ON OFF SWITCH TOGGLE. 4 clicks = 2 changes
let clickStatemobile = 0;

function doActionmobile() {
    clickStatemobile++; 
    const starcanvas = document.getElementById('star-canvas');
    const indextable = document.getElementById('index-table-mobile');
    
    const globecanvas = document.getElementById('rotatingGlobe');
  const imagerotate = document.getElementById('select-images-mobile');
  const mobileinfo = document.getElementById('mobile-info');
  
  const midswitch = document.getElementById('mid');
  const quoteblockmobile = document.getElementById('rotate-quote-mobile');
  const tickermobile = document.getElementById('ticker-mobile');
  const leftmobie = document.getElementById('left');
const mobilefooter = document.getElementById('mobile-footer');
    if (clickStatemobile ==0){

      midswitch.style.background = '#634627;';
      midswitch.style.backgroundSize = '0';

     console.log(clickState)
      globecanvas.style.display = 'none';
      indextable.style.display = 'block';
      mobileinfo.style.display = 'block';
      tickermobile.style.display = 'block';
      mobilefooter.style.display = 'block';
    }

    else if (clickStatemobile ==1 ) {
      midswitch.style.background = 'radial-gradient(2px 2px, white, blue)';
      midswitch.style.backgroundSize = '4px 4px';
  console.log(clickStatemobile)
  globecanvas.style.display = 'none';
  imagerotate.style.display = 'block';
  indextable.style.display = 'none';
  mobileinfo.style.display = 'none';
  tickermobile.style.display = 'none';
  mobilefooter.style.display = 'none';
  globecanvas.style.overflow = 'hidden';
    } else if (clickStatemobile == 2 ) {
      midswitch.style.background = '#634627;';
      midswitch.style.backgroundSize = '0';
 console.log(clickStatemobile)
  globecanvas.style.display = 'none';
  imagerotate.style.display = 'none';
  indextable.style.display = 'block';
  mobileinfo.style.display = 'block';
  tickermobile.style.display = 'block';
  mobilefooter.style.display = 'block';
globecanvas.style.overflow = 'auto';
    } else if (clickStatemobile == 3 ) {

      console.log(clickStatemobile)
      globecanvas.style.display = 'inline-block';
      imagerotate.style.display = 'none';
      
      midswitch.style.background = '#634627;';
      midswitch.style.backgroundSize = '0';
      indextable.style.display = 'none';
      mobileinfo.style.display = 'none';
      mobilefooter.style.display = 'none';
      tickermobile.style.display = 'none';
    } else if (clickStatemobile == 4 ) {
        // Do something...
        // then reset clickState for the next go round
   
      console.log(clickState)
      globecanvas.style.display = 'none';
        imagerotate.style.display = 'none';
        indextable.style.display = 'block';
        mobileinfo.style.display = 'block';
        midswitch.style.background = '#634627;';
      midswitch.style.backgroundSize = '0';
      mobilefooter.style.display = 'block';
      tickermobile.style.display = 'block';
      clickStatemobile=0;
    } 


}





  function changeImage(){
    if(document.getElementById('full-image').style.display == 'block'){
  
      document.getElementById('full-image-me').style.display = 'block';
      document.getElementById('full-image').style.display ='none'  }
      else{
        document.getElementById('full-image').style.display = 'block';
      }
  }
  
  changeImage();



  ///DROP DOWN

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// detecting idle time 

//let inactivityTime = function () {
  //  let time;
  //  window.onload = resetTimer;
  //  document.onmousemove = resetTimer;
  //  document.onkeypress = resetTimer;
 //   function logout() {
      
  ///      const starcanvas = document.getElementById('globe');
   ///     const indextable = document.getElementById('index-table');
       
   ///     starcanvas.style.display = 'block';
   ///     indextable.style.display = 'none';
  ///  }
   // function resetTimer() {
  ///    clearTimeout(time);
  ///    time = setTimeout(logout, 2000)
 ///   }
 /// };
// // window.onload = function() {
 //   inactivityTime();
 // }