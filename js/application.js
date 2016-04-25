$(function(){
  var petco = new Petco();
})

 
// Petco Namespaced methods
// ========================

var Petco = function(options){
  this.options = options || {};
  this.initialize();
}

Petco.prototype.initialize = function(){
  this.zip_search('#zip-search-wrapper');
}


Petco.prototype.helpers = {};

Petco.prototype.helpers.isValidZip = function(zipcode){
  return /^\d{5}(-\d{4})?$/.test(zipcode);
}

Petco.prototype.zip_search = function(container){
  var self = this;
  var c = $(container);
  var handleEvent = function(ev){
    // if user presses enter in the input element
    // or if they click on the submit button
    if (ev.which == 1 || ev.which == 13){
      var url = 'http://stores.petco.com/search?q={{zip}}&rad=20';
      var zip = $('input', c).val();

      // if the input is invalid, let the user know
      if (self.helpers.isValidZip(zip) == false){
        alert('Error, invalid zip');
        return false;
      }

      // open a new tab or window depending on browser preference
      url = url.replace('{{zip}}', zip);
      window.open(url,'_blank');
    }
  }
  // bind events listeners
  c.on('click', 'button', handleEvent);
  c.on('keypress', 'input', handleEvent);
}


/*! Main */
jQuery(document).ready(function($) {
   

    
    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#navbar-main'),
    		distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          	$("body").css("padding-top", "70px");
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
        }
    });
    

    
        $('.bxslider1').bxSlider({
              onSliderLoad: function(){
   $("#firstimage").css('visibility', 'visible');

  },
          adaptiveHeight: true,
          pagerCustom: '#bx-pager',
            startSlide:'1',
            controls:false,
            controls:false,
          mode: 'fade'
         });
    
    
 $('.bxslider2').bxSlider({

  });


    
});