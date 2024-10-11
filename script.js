// Wait for the document to load before running the script
(function ($) {
  
  $(window).on('load hashchange', function(){
    
    // Hide all content regions initially
    $('.content-region').hide();
    
    // Remove active classes from the main menu
    $('.main-menu a').removeClass('active');
    
    // Determine the region to show based on the URL hash or default to the first menu item
    var region = location.hash || $('.main-menu a:first').attr('href');
    
    // Show the region specified
    $(region).show();
    
    // Highlight the active menu link
    $('.main-menu a[href="'+ region +'"]').addClass('active'); 

    // Uncomment the following for AJAX-based content loading:
    // var region = location.hash || '#first';
    // $('#content').load(region.slice(1) + '.html');
    
  });
  
})(jQuery);
