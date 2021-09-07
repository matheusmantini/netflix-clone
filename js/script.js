$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
})


$(document).ready(function() {
  $('.dropbtn').mouseover(function() {
    $(this).find('.fa-sort-down,.fa-sort-up').toggleClass('fa-sort-down').toggleClass('fa-sort-up');
  });
});


document.getElementById("search-btn").addEventListener('click', function(){  
    var curDisplay =  document.getElementById("search-form").style.display;

    if(curDisplay === 'none'){
      document.getElementById("search-form").style.display = 'block';
      document.getElementById("search-input").style.padding = '7px';
      document.getElementById("search-input").style.backgroundColor = 'transparent';
      document.getElementById("search-input").style.border = '1px solid #aaa';
      document.getElementById("search-input").style.color = 'white';
      document.getElementById("search-input").style.paddingLeft = '30px';
      document.getElementById("search-btn").style.position = 'relative';
      document.getElementById("search-btn").style.left = '-200px';
      document.getElementById("search-btn").style.top = '2px';
    }else{
      document.getElementById("search-form").style.display = 'none';
      document.getElementById("search-btn").style.position = 'relative';
      document.getElementById("search-btn").style.left = '0';
      document.getElementById("search-btn").style.top = '0';
    }
})





