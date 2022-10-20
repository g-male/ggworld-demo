function changeImage(){
    if(document.getElementById('img-container-1').style.display == 'block'){
  
      document.getElementById('img-container-2').style.display = 'block';
      document.getElementById('img-container-1').style.display ='none'  }
      else{
        document.getElementById('img-container-1').style.display = 'block';
      }
  }
  
  changeImage();