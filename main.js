$(document).ready(function() {
  $.getJSON('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Y2bls59nFEqY3fgDk4JKEKIJxiFot9XAumEBUz9S').done(function(data){
    console.log(data)
    let rand = Math.floor(Math.random()*data.photos.length);
    while (data.photos[rand].camera.name == 'MAST'){
      rand = Math.floor(Math.random()*data.photos.length);
    }
    console.log(rand);
    $('.pics').append('<img src =' +  data.photos[rand].img_src+' width=576>');
    $('#'+data.photos[rand].camera.name).addClass('active')
    console.log(data.photos[rand].camera.name);
  })
});
