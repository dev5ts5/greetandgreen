function opennext_tab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
   // tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("child_menu");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  jQuery('.filter-item-cover .fpd-views-selection .fpd-item').hide();

  if(cityName=='enveloppe'){
    jQuery('.manage_corner_enable').hide();
    jQuery('.envelop_right').show();
    jQuery('.carte_right').hide();

    if(jQuery('.envelop_right .filter-photo.active').length>0)
    {
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(3)').show();
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(4)').show();
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(5)').show();
    }
    else{
      jQuery('body').addClass('disable_back');
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(3)').addClass('active');
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(4)').addClass('active');
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(5)').addClass('active');
    }

    jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(3)').click();
  }

  if(cityName=='carte')
  {
    jQuery('body').removeClass('disable_back');
    jQuery('.manage_corner_enable').show();
    jQuery('.envelop_right').hide();
    jQuery('.carte_right').show();
    jQuery('.show').hide();
    jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(1)').show();
    jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(2)').show();
    jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(1)').click();
  }

  if(cityName=='musique'){
     //jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(6)').show();
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(6)').click();
  }
  jQuery('.fpd-actions-wrapper .fpd-action-btn[data-action="manage-layers"]').click();
}
setTimeout(function(){ 

    // jQuery('.single-product .fpd-pos-right').prepend('<div class="category-filter-main fpd-tooltip fpd-primary-text-color manage_corner_enable tooltipstered" data-action="manage_corner" data-defaulttext="Coins de la carte"><h3 class="fpd-actions-heading">Coins de la carte</h3><div class="filter-main-cover filter-photo"><div class="onoffswitch"><input type="checkbox" name="myonoffswitch_carte" class="onoffswitch-checkbox" id="myonoffswitch_carte"><label class="onoffswitch-label" for="myonoffswitch_carte"><div class="onoffswitch-inner"></div><div class="onoffswitch-switch"></div></label><label class="non-lable" for="myonoffswitch_carte">Carrés</label><label class="oui-lable" for="myonoffswitch_carte">Arrondis</label></div></div></div>');


    // jQuery('.single-product .fpd-pos-right').prepend('<div class="category-filter-main fpd-tooltip fpd-primary-text-color manage_backend_enable tooltipstered" data-action="manage_backend" data-defaulttext="Enable Backside"><div class="carte_right"><h3 class="fpd-actions-heading">Carte Recto-Verso</h3><div class="filter-main-cover filter-photo"><div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox backside_enable" id="myonoffswitch"><label class="onoffswitch-label" for="myonoffswitch"><div class="onoffswitch-inner"></div><div class="onoffswitch-switch"></div></label><label class="non-lable" for="myonoffswitch">Non</label><label class="oui-lable" for="myonoffswitch">Oui</label></div></div></div><div class="envelop_right"><h3 class="fpd-actions-heading">Afficher Enveloppe</h3><div class="filter-main-cover filter-photo"><div class="onoffswitch"><input type="checkbox" name="myonoffswitch_envelop" class="onoffswitch-checkbox" id="myonoffswitch__envelop"><label class="onoffswitch-label" for="myonoffswitch__envelop"><div class="onoffswitch-inner"></div><div class="onoffswitch-switch"></div></label><label class="non-lable" for="myonoffswitch__envelop">Non</label><label class="oui-lable" for="myonoffswitch__envelop">Oui</label></div></div></div><div class="filter-item-cover"></div></div>');

    // jQuery(".fpd-views-wrapper").clone().appendTo($(".filter-item-cover"));

    // jQuery('.fpd-tooltip[data-action="info"]').clone().appendTo($(".tootlip_btn"));

    // jQuery(".category-filter-main .fpd-views-wrapper .fpd-views-selection .fpd-shadow-1:nth-child(2)").toggleClass("active");

    // jQuery('.fpd-tooltip[data-action="manage-layers"]').append('<h3 class="fpd-actions-heading">Éléments</h3>');
    // jQuery('.fpd-tooltip[data-action="save"] .fpd-icon-save').text('Enregistrer');
    // jQuery('.fpd-tooltip[data-action="preview-lightbox"] .fpd-icon-preview-lightbox').text('PRÉVISUALISER');

    // if(jQuery('.child_menu').attr('data-name')=='carte'){
    //   jQuery('.envelop_right').hide();
    //   jQuery('.filter-item-cover .fpd-views-selection .fpd-item').hide();
    //   jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(1)').show();
    //   jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(2)').show();
    // }

    
    // jQuery('.fpd-content div[data-module="images"]').removeClass('fpd-module');
    // jQuery('.fpd-content div[data-module="images"]').addClass('popup-cover-main product-popup cs-popup');

    
    // jQuery('.fpd-content div[data-module="images"] .fpd-module-tabs-content>div').prepend('<div class="popup-header"><h2 class="popup-title image-icon active">UPLOADEZ VOTRE IMAGE</h2><span>Formats acceptés : JPG, PNG | Taille maximale : 5Mo</span><span class="close-icon"></span></div>');


    // jQuery('.fpd-content .fpd-upload-zone').html('<span class="bold"><b>Glissez-Déposez votre image ici</b></span><span class="normal">ou</span></span><span class="button_upload">PARCOURIR</span>');

    // jQuery('.fpd-content .fpd-upload-form').append('<div class="upload_image_from_url"><span class="upload_image_from_url_label">Une image du Web ?</span><div class="upload_image_field"><div class="input_url"><input type="text" id="image_url" placeholder="Collez l’URL de l’image ici"></div><div class="input_btn"><button type="button" class="upload_button">UPLOADER</button></div></div></div>');

    // jQuery('.fpd-content .fpd-upload-form').addClass('popup-contain');
    // jQuery('.fpd-content div[data-module="images"] .fpd-scroll-area').prepend('<span class="bold all_images">IMAGES TÉLÉCHARGÉES</span>');
      

    // jQuery('.fpd-actions-wrapper .fpd-action-btn[data-action="manage-layers"]').click();

    // jQuery('.fpd-content div[data-module="images"] .fpd-photo-grid').slick({
    //   dots: false,
    //   infinite: true,
    //   speed: 300,
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // });
    


}, 3000);




jQuery(document).on('click','.fpd-content div[data-module="images"] .close-icon',function(e){
    
    jQuery('.fpd-content div[data-module="images"]').removeClass('fpd-active');
    jQuery('.fpd-navigation div[data-module="images"]').removeClass('fpd-active');
});


jQuery(document).on('click','.backside_enable',function(e){
  jQuery(this).parents(".filter-main-cover.filter-photo").toggleClass("active");
  jQuery(".category-filter-main .fpd-views-wrapper .fpd-views-selection .fpd-shadow-1:nth-child(2)").toggleClass("active");
});

jQuery(document).on('click','#myonoffswitch__envelop',function(e){
  
  jQuery('body').toggleClass("disable_back");
  jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(3)').show();
  jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(4)').show();
  jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(5)').show();

  jQuery(this).parents(".filter-main-cover.filter-photo").toggleClass("active");
  jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(3)').toggleClass("active");
  jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(4)').toggleClass("active");
  jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(5)').toggleClass("active");
});


jQuery(document).on('click','#myonoffswitch_carte',function(e){
  
  jQuery(this).parents(".filter-main-cover.filter-photo").toggleClass("active");
});


jQuery(document).on('click','.fpd-pos-right .fpd-views-selection .fpd-shadow-1',function(e){ console.log('svfhgds');
    var child=jQuery(this).index()+1;

    jQuery('.fpd-pos-right .fpd-views-selection .fpd-shadow-1').removeClass('fpd-view-active');
    jQuery(this).addClass('fpd-view-active');
    jQuery('.fpd-main-wrapper > .fpd-views-wrapper .fpd-views-selection .fpd-shadow-1:nth-child('+child+')').click();
    jQuery('.fpd-actions-wrapper .fpd-action-btn[data-action="manage-layers"]').click();
});


jQuery(document).on('click','.product-popup[data-module="images"] .fpd-item',function(e){
  
  jQuery('.popup-cover-main.product-popup').removeClass('fpd-active');
});

jQuery(document).on('click','.fpd-grid_cat .fpd-category',function(e){ console.log('sdjfsdhfsd');
  var search=jQuery(this).attr('data-search');
  jQuery('.fpd-grid_cat .fpd-category').removeClass('active');
  jQuery(this).addClass('active');
  if(jQuery('.fpd-back.fpd-btn').length>0){
    jQuery('.fpd-back.fpd-btn').click();
  }
  
  if(search=='couleurs')
  {
    jQuery('.fpd-secondary-module').addClass('color-active');
    jQuery('.fpd-secondary-module').removeClass('text-active');
  }
  else
  {
     jQuery('.fpd-secondary-module').removeClass('color-active');
     jQuery('.fpd-secondary-module').addClass('text-active');
  }
  jQuery('.fpd-secondary-module .fpd-categories-active .fpd-grid .fpd-category[data-search="'+search+'"]')[0].click();

  jQuery('.fpd-element-toolbar-smart .fpd-color-palette.fpd-grid').clone().prependTo(jQuery(".fpd-secondary-module .fpd-color-wrapper .fpd-scroll-area"));
      
    if(search=='couleurs'){
    jQuery('.fpd-secondary-module.color-active .fpd-grid.fpd-grid-contain').prepend('<span class="bold_red">Motifs spéciaux</span>');
  }  
  //jQuery('.fpd-secondary-module .fpd-categories-active .fpd-grid .fpd-category[data-search="couleurs"]').click();
  // jQuery('.fpd-categories-active .fpd-grid .fpd-category[data-search="'+search+'"]').click();
});

jQuery(document).on('click','.fpd-navigation .fpd-tooltip[data-module="designs"]',function(e){
  jQuery('.fpd-content > .fpd-categories-active').hide();
  jQuery('.fpd-list .fpd-list-row:first').click();
});
jQuery(document).on('click','.image_open_button',function(e){
    jQuery('.fpd-secondary-module .popup-cover-main.product-popup').addClass('fpd-active');
    jQuery('.fpd-navigation .fpd-tooltip').removeClass('fpd-active');
    jQuery('.fpd-navigation .fpd-tooltip[data-module="images"]').addClass('fpd-active');
    jQuery('.fpd-secondary-module .fpd-designs-active').removeClass('fpd-active'); 
});


jQuery(document).on('click','.product_top_menu li.child_menu',function(e){ 

var menu_name = jQuery(this).attr('data-name');
  if (menu_name == 'enveloppe') 
  {
    jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="images"]').hide();
    jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="text"]').hide();
    jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="designs_color"]').show();
  }
  else if(menu_name == 'carte')
  {
    jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="images"]').show();
    jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="text"]').show();
    jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="designs_color"]').hide();
    jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-cheat"]').hide();
    jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-timbre"]').hide();
  }
  else
  {
    jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="images"]').show();
    jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="text"]').show();
    jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="designs_color"]').hide();
  }

  
 });



jQuery(document).on('click','.fpd-shadow-1.fpd-item.fpd-tooltip.fpd-view-active',function(e){ 

var menu_name_title = jQuery(this).attr('title');
      if (menu_name_title == 'Enveloppe recto')
      {
          //alert(menu_name_title);
      }
      else if(menu_name_title == 'Enveloppe recto ferme')
      {
         // alert(menu_name_title);
          jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="designs_color"]').show();
          jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-cheat"]').show();
      }
      else if(menu_name_title == 'Enveloppe verso')
      {
         // alert(menu_name_title);
          jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-timbre"]').show();
      }
  jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="text"]').show();
  jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-cheat"]').show();
  jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-timbre"]').show();
 // jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="modifier_cachet"]').show();

 });
    



jQuery(document).on('click','.top_button',function(e){ 
    var next=jQuery('.child_menu.active').next('.child_menu');jQuery(next)[0].click();
});


jQuery( document ).ready(function() {
  

  setTimeout(function(){
     //jQuery('.fpd-actions-container').append('<span class="fpd-filter-icon"></span>');
     jQuery('.my_custom_remove_class').append('<span class="fpd-filter-icon"></span>');
     jQuery('.fpd-draggable-dialog.fpd-container').removeClass('fpd-active');
     

     
     //jQuery('.fpd-container.fpd-views-inside-left').addClass('fpd-sidebar');
   jQuery(".fpd-navigation.fpd-primary-bg-color").append('<div data-module="designs_color" class="fpd-tooltip tooltipstered"><span class="fpd-nav-icon fpd-icon-design-library"></span><span class="fpd-label">MODIFIER COULEURS</span></div>');
  // jQuery(".fpd-navigation.fpd-primary-bg-color").append('<div data-module="modifier_cachet" class="fpd-tooltip tooltipstered"><span class="fpd-nav-icon fpd-icon-design-library"></span><span class="fpd-label">MODIFIER CACHET</span></div>');  
   jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="designs_color"]').hide();
  // jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="modifier_cachet"]').hide();
   jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-cheat"]').hide();
  jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-timbre"]').hide();

  }, 2000);




});

jQuery(document).on("click", ".fpd-filter-icon", function(){ 
  jQuery('.fpd-actions-container').toggleClass('fpd-product-active');
  jQuery('.fpd-actions-wrapper.fpd-pos-right').toggleClass('fpd-product-active');
  jQuery('.add_new_class').toggleClass('fpd-product-active');
});

jQuery(document).on("click", ".close_sidebar", function(){ 
  jQuery('.fpd-module.fpd-designs-active').toggleClass('fpd-active');
});





jQuery(document).on("click", ".custom_color.fpd-tool-color.fpd-tooltip.tooltipstered", function(){ 
 jQuery("#colorPicker").trigger("click");
});

jQuery(document).on("change", "#colorPicker", function(){ 
  var background_color =  jQuery(this).val();
  jQuery('.custom_color .tool_color_name').html(jQuery(this).val());
  jQuery('.custom_color .tool_color').attr('style', 'background-color: '+background_color+' !important');
  jQuery('.fpd-product-designer-wrapper .fpd-views-inside-left .fpd-main-wrapper').attr('style', 'background-color: '+background_color+' !important');
 
});

