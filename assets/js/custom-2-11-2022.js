function letterRotateAction2()
{
  temp_for_time = (animation_time != 15) ? ((2.5*animation_time)/15) : 2.5;

  const env_back = document.getElementById('animation_html');
  const env_front = document.getElementById('animation_card_back');
  const ani_div = document.getElementById('animation_html');
  const letter = document.getElementById("animation_card_image");

  // if( ani_style_val_2 == 'ani_envelope_rectangle_horizontal' )
  // {
  //   ani_div.style.top = "-27px";
  //   letter.style.top = "-107px";
  // }
  // else
  //   ani_div.style.top = "-177px";
  // ani_div.style.left = "280px";


  // // console.log(env_back);
  // // console.log(env_front);

  env_back.style.transition = "all "+temp_for_time+"s";
  env_back.style.transformStyle = "preserve-3d";
  // env_back.style.transform = "translate(154px, -95px) scaleX(-1.1) scaleY(0.9) rotateY(-0deg)";
  env_back.style.transform = "rotateY(180deg)";

  env_front.style.transition = "all "+temp_for_time+"s";
  env_front.style.transformStyle = "preserve-3d";
  if( ani_style_val_2 == 'ani_envelope_reverse_flip' || ani_style_val_2 == 'ani_envelope_rolling_card' )
    env_front.style.transform = "rotateX(0deg)";
  else
    env_front.style.transform = "rotateX(0deg)";








  const image = document.getElementById("img_for_animation");
  const main_div = document.getElementById('for_flip_card_main');

  image.style.minWidth = back_card_width;
  image.style.minHeight = back_card_height;
  image.style.maxWidth = back_card_width;
  image.style.maxHeight = back_card_height;
  
  // image.style.minWidth = "500px";
  // image.style.minHeight = "600px";
  // image.style.maxWidth = "500px";
  // image.style.maxHeight = "600px";

  letter.style.transform = "translate(calc(-50% - 15%), calc(-50% - calc(50% - 35%))) scaleX(-1) scaleY(1) rotateY(-180deg)";
  letter.style.top = "50%";
  letter.style.left = "50%";
  letter.style.minWidth = back_card_width;
  letter.style.minHeight = back_card_height;
  letter.style.maxWidth = back_card_width;
  letter.style.maxHeight = back_card_height;

  // main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -210px), calc(-50% - 28%))";

  if( back_card_width.split('px')[0] > 700 )
  {
    main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -150px), calc(-50% - 45%))";
  }
  else
  {
    main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -200px), calc(-50% - 10%))";
  }


  // main_div.style.scale = "0.8";
  // main_div.style.top = "50%";
  main_div.style.top = "30%";
  // main_div.style.left = "50%";
  main_div.style.left = "45%";
  // main_div.style.minWidth = back_card_width;
  // main_div.style.minHeight = back_card_height;
  // main_div.style.maxWidth = back_card_width;
  // main_div.style.maxHeight = back_card_height;















  temp_for_time = (animation_time != 15) ? ((2500*animation_time)/15) : 2500;

  // my_animation = setTimeout(pushBackLetter, temp_for_time);


}
// global variable for animation start


var transform_tectonic_img = [];
var transform_tectonic_txt = [];

// for carte part global variable start 
var json_canvas_full_data = [];
var all_element_arr = [];
// for carte part global variable end

// var animation_images_location = document.location.origin + '/' + window.location.pathname.split('/')[1] + '/greet-and-green/wp-content/uploads/fpd_animation_image/' ;
var animation_images_location = 'https://dev.greetandgreen.com/administrationAcDRdcf/wp-content/uploads/fpd_animation_image/' ;
var my_animation = "";
var id = "";
var animation_time = "15";
var temp_for_time = "";
var animation_type_global = "fadein";
var background_color_ani = '#0a6351';
var stemp_img = 'http://192.168.0.121/wordpress/greet-and-green/wp-content/uploads/2022/03/Ellipse-113-2.png';
var card_custom_text = 'http://192.168.0.121/wordpress/greet-and-green/wp-content/uploads/2022/03/Ellipse-113-2.png';
var envelope_cap_text = 'custom text';
var dataURL_back_cc = "";

var ani_type_acf = "cartes";
var back_card_width = "";
var back_card_width = "";

// global variable for animation end


// global variable for music start
var music_array = [];
var user_unique_folderName = "";
var custom_music_main_url ="";
var customer_selected_music_link = ""; 
var customer_select_music_or_not = "";
var temp_random = "";
// global variable for music end



//for convert json object to js array

function json2array(json){
  var result = [];
  var keys = Object.keys(json);
  keys.forEach(function(key){
      result.push(json[key]);
  });
  return result;
}

function autosize()
{
  console.log("called autosize function");
  var text = $('.autosize');

  text.each(function(){
    $(this).attr('rows',1);
    resize($(this));
  });

  text.on('input', function(){
    resize($(this));
  });
  
  function resize ($text) {
    console.log("called resize function");
    $text.css('height', 'auto');
    $text.css('height', $text[0].scrollHeight+'px');
  }
}

// for details tab start 

var input_feilds_html = "";

  

  jQuery.ajax({
    url: my_ajax_object_for_custom_input_feilds.ajax_url,

    cache: false,
    type: 'POST',
    
    data: {
      'action':'display_custom_input_feilds_wcproduct_action',
    },
    success: function(result){
      console.log(" DEKH DETAILS = ");
      console.log(result.split('$%^&*$%^$')[0]);
      result = result.slice(0, -1);
      input_feilds_html = result.split('$%^&*$%^$')[1];
      // ani_type_acf = result.split('$%^&*$%^$')[0];

      
      
    }
  });


  var shop_details = "";

    
    var product_id = jQuery('.product.type-product').attr('id');
    if (typeof product_id === "undefined") 
    {
      var result_v = '';
    }
    else
    {
      var result = product_id.split('-');
      var result_v = result[1];
    }

  jQuery.ajax({
    url: my_ajax_object_for_shop_details.ajax_url,

    cache: false,
    type: 'POST',
    
    data: {
      'action':'display_shop_details_action',
      'product_id':result_v,
    },
    success: function(result){
      // // console.log(" DEKH DETAILS = ");
      // // console.log(result);
      shop_details = result.slice(0, -1);
      
      
      
    
      

    }
  });

// for details tab end




//  details funciton start 


function form_tag_of_wcproduct_right_side() // for diaplay input feilds in right side of details feild 
{


  

  jQuery('.details_input_custom_feilds').append(input_feilds_html);
 
  jQuery('.details_shop_address_main_div').append(shop_details);

  

  jQuery('#details_lbl_address').show();
  jQuery('#details_p_address').show();
  jQuery('#details_lbl_link').hide();
  jQuery('#details_p_link').hide();

}

function show_funcitonalities_of_details_tab()
{
  const e1 = document.getElementById("main_div_details_part_id");
  if(!(e1 == null))
    e1.remove();
  const e2 = document.getElementById("details_shop_address_main_div_id");
  if(!(e2 == null))
    e2.remove();

  jQuery('.fpd-pos-right').prepend('<div class="main_div_details_part fpd-tooltip tooltipstered" id="main_div_details_part_id" >  </div>');
  jQuery('.main_div_details_part').append('<div class="category-filter-main details_input_custom_feilds fpd-tooltip tooltipstered" >  </div>');
  jQuery('.fpd-actions-container').append('<div id="details_shop_address_main_div_id" class="fpd-actions-wrapper details_shop_address_main_div fpd-tooltip tooltipstered" >  </div>');

  form_tag_of_wcproduct_right_side();
}

function details_location_type_click()
{
  if(document.getElementById('myonoffswitch_details').checked==true)
  {
    jQuery('#details_lbl_address').show();
    jQuery('#details_p_address').show();
    jQuery('#details_lbl_link').hide();
    jQuery('#details_p_link').hide();
  }
  else
  {
    jQuery('#details_lbl_address').hide();
    jQuery('#details_p_address').hide();
    jQuery('#details_lbl_link').show();
    jQuery('#details_p_link').show();
  }
}


// details function end 





//music function start
function reset_and_hide_music_functionalities()
{
  jQuery('.music_main_container').remove();
  jQuery('.music_middle_main_div').remove();
}


function add_music_types(musics)
{
  music_array = musics;
}

function stop_music_clik()
{
  jQuery('.music_link_equall').removeClass('music_played');
  const e1 = document.getElementById("play_music_html_element");
  if(!(e1 == null))
    e1.remove();
}
// play music on click event
function play_music(src , unique_class)
{
  jQuery('.music_link_equall').removeClass('music_played');
  jQuery('.music_type---'+unique_class).addClass('music_played');
  
  customer_selected_music_link = src;
  customer_select_music_or_not = "yes";
  
 
  const e1 = document.getElementById("play_music_html_element");
  if(!(e1 == null))
    e1.remove();
  jQuery('.music_display_musics').append('<div id="play_music_html_element" class="music_type#play" style="display:none;" > <audio controls autoplay><source src="'+src+'" type="audio/mpeg">Your browser does not support the audio element.</audio> </div>');
}

//for find base name of music track link

function baseName(str)
{
   var base = new String(str).substring(str.lastIndexOf('/') + 1); 
    if(base.lastIndexOf(".") != -1)       
        base = base.substring(0, base.lastIndexOf("."));
   return base;
}


// for display musics by types
function set_music_by_types(music_type)
{
  

  const e1 = document.getElementById("music_display_musics_id");
  if(!(e1 == null))
    e1.remove();
  const e2 = document.getElementById("play_music_title_id");
  if(!(e2 == null))
    e2.remove(); 
  const e3 = document.getElementById("music_hide_show_id");
  if(!(e3 == null))
    e3.remove();


  jQuery('.music_all_types').append('<div class="play_music_title" id="play_music_title_id" >  </div><div id="music_display_musics_id" class="music_display_musics" ></div> <div class="music_hide_show" id="music_hide_show_id" >  </div>');
  jQuery('.play_music_title').append('<h2 class="music_option_heading"> Choix de la piste </h2>');;

  

  
  var music_display;

  // // console.log("hello = ");
  

  if(music_type == "all")
  {
    music_display = music_array;
    
    if(user_unique_folderName != "")
    {

      var temp_for_custom_music_show = localStorage.getItem("custom_music_base_names").split("$%^&*$");
      temp_for_custom_music_show.pop();



    

      temp_for_custom_music_show.length > 6 ? jQuery('.music_hide_show').show() : jQuery('.music_hide_show').hide();

      temp_for_custom_music_show.forEach(element => {
        temp_random=getRandomInt(500000000);
        jQuery('.music_display_musics').append('<div class="music_link_equall music_type---'+temp_random+'" > <p > '+baseName(element)+' </p> <span class="music_play_icon" musics_urls="'+"'"+custom_music_main_url+"/"+element+"'"+'" onclick="play_music('+"'"+custom_music_main_url+"/"+element+"'"+' , '+"'"+temp_random+"'"+')"> play </span> <span onclick="stop_music_clik()" class="music_stop_icon"> stop </span> </div>');  
      });

    }

  }
  else
  {
    music_array.forEach(element => {
      if(element.title == music_type)
        music_display = [element];
    });
  }
  
  

  music_display.length > 6 ? jQuery('.music_hide_show').show() : jQuery('.music_hide_show').hide();
    
  
    
  music_display.forEach(element => {
    element["designs"].forEach(element1 => {
      temp_random=getRandomInt(500000000);
      jQuery('.music_display_musics').append('<div class="music_link_equall music_type---'+temp_random+'" > <p  > '+baseName(element1.source)+' </p> <span onclick="play_music('+"'"+element1.source+"'"+' , '+"'"+temp_random+"'"+')" musics_urls="'+element1.source+'" class="music_play_icon"> play </span> <span onclick="stop_music_clik()" class="music_stop_icon"> stop </span> </div>');
    });
  });


  jQuery('.music_hide_show').append('<div class="music_type---hide" > <span onclick="music_links_hide_clk()" class="music_links_hide_icon" > hide </span> <span onclick="music_links_show_clk()" class="music_links_show_icon" > show </span> </div>');
  
}
function music_links_hide_clk()
{
  jQuery('.music_all_types').removeClass('all_links_show');
}

function music_links_show_clk()
{
  jQuery('.music_all_types').addClass('all_links_show');
}

function music_details_checkbox_click()
{
  if(document.getElementById('myonoffswitch_music').checked == true)
  {
    customer_select_music_or_not = "yes";
    jQuery('.music_all_types').show();
    jQuery('.music_uploader_custom').show();
  }
  else
  {
    customer_selected_music_link = "";
    customer_select_music_or_not = "no";
    jQuery('.music_all_types').hide();
    jQuery('.music_uploader_custom').hide();
  }
}

function main_functionalities_of_music_tab()
{
  const e1 = document.getElementById("music_main_div");
  if(!(e1 == null))
    e1.remove();
  const e2 = document.getElementById("music_middle_main_div_id");
  if(!(e2 == null))
    e2.remove();
  

  jQuery('.fpd-pos-right').prepend('<div id="music_main_div" class="category-filter-main music_main_container" ></div>');
  jQuery('.music_main_container').hide();
    // heading of music mode
  jQuery('.music_main_container').prepend('<div class="filter-photo music_mode" > <h3 class="music_option_heading">Musique</h3> </div>');
  jQuery('.music_mode').append('<div class="onoffswitch"><input type="checkbox" name="myonoffswitch_carte" class="onoffswitch-checkbox" onclick="music_details_checkbox_click()" id="myonoffswitch_music"><label class="onoffswitch-label" for="myonoffswitch_music"><div class="onoffswitch-inner"></div><div class="onoffswitch-switch"></div></label><label class="non-lable" for="myonoffswitch_carte">non</label><label class="oui-lable" for="myonoffswitch_carte">Oui</label></div>');
  document.getElementById('myonoffswitch_music').checked = true;

  jQuery('.music_main_container').append('<div class="music_all_types" ></div>');
  jQuery('.music_all_types').append('<div class="filter-photo music_mode" > <h2 class="music_option_heading">Genre musical</h2> </div>');
  jQuery('.music_all_types').append('<div class="fetch_music_types" >   </div>');


  jQuery('.fpd-product-stage').prepend('<div id="music_middle_main_div_id" class="music_middle_main_div" >  </div>'); // for music middle content

  jQuery('.fetch_music_types').addClass('filter-item-cover'); // for music types checkbox
  
  
  // add all music types
  jQuery('.fetch_music_types').append('<div class="filter-form-row"><input onclick="set_music_by_types('+"'all'"+')" type="radio" name="music_type" id="all" class="filter-checkbox" checked ><label for="fil-classique" class="filter-lable">TOUT</label></div>');
  music_array.forEach(element => {

  jQuery('.fetch_music_types').append('<div class="filter-form-row"><input onclick="set_music_by_types('+"'"+element.title+"'"+')" type="radio" name="music_type" id="'+element.title+'" class="filter-checkbox"><label for="fil-classique" class="filter-lable">'+element.title.split("_")[1]+'</label></div>');

  });
  
  
  
  set_music_by_types('all');// for bydefault all music comes

  
  jQuery('.music_main_container').append('<div class="music_uploader_custom" > <p > Rien trouvé ? </p> <button onclick="display_music_popup_window()" class="music_add_custom_button" >IMPORTER <br> VOTRE MUSIQUE</button> </div>');

  

  // jQuery('.fpd-product-stage').css({'cssText':'width:unset'});
  jQuery('.fpd-product-stage').css({'cssText':'width: 720px;'});
  
  jQuery('.music_middle_main_div').append('<div id="music_popup_window_id" class="music_popup_window" style="transform:scale(0)" > </div>');

  jQuery('.music_popup_window').append('<div class="music_popup_header popup-header" > <span class="music_popup_main_header popup-title music-icon"> UPLOADEZ VOTRE MUSIQUE </span> <span class="music_popup_sub_header" > Formats acceptés : MP3, WMA | Taille maximale : 2Mo </span> <span onclick="music_close_popup_menu()" class="music_popup_close_icon close-icon" > X </span> </div>');
  jQuery('.music_popup_window').append('<div class="music_popup_body" >  </div>');
  jQuery('.music_popup_body').append('<div class="music_popup_upload_file" onclick="document.getElementById('+"'custom_music_upload_file_input'"+').click()" > <input style="display:none;" type="file" id="custom_music_upload_file_input" name="myfile" accept="audio/*" onchange="upload_music_file(event)"> <span class="music_popup_body_middle_contain_first"> Glissez-Déposez votre morceau ici </span> <span class="music_popup_body_middle_contain_second" > ou </span> <button class="music_custom_music_upload_input_class" > PARCOURIR </button> </div>');
  jQuery('.music_popup_body').append('<div class="music_custom_link_title" > <p> Une musique du Web ? </p> </div>');
  jQuery('.music_popup_body').append('<div class="music_popup_link_file" > <input type="text" placeholder="Collez l’URL de la piste ici" name="music_link" id="custom_music_link" /> <button onclick="upload_music_url()" class="custom_music_link_btn" > CHARGER </button> </div>');

  


}


function music_close_popup_menu()
{

  const popup = document.getElementById("music_popup_window_id");
  

  let i = 51;
  clearInterval(id);
  id = setInterval(function(){
    if(i == 0)
    {
      popup.style.transform="scale(0)";
      clearInterval(id);
    }
    else
    {
      popup.style.transform="scale("+(i/50)+")";
      i--;
    }
  } , 6 );
  
  
  setTimeout(function(){
    set_animation_time(animation_time,animation_type_global);  
  } , 400 );
}


function display_music_popup_window()
{

  for_clear_animation_timeout();

  const popup = document.getElementById("music_popup_window_id");
  

  let i = 0;
  clearInterval(id);
  id = setInterval(function(){
    if(i == 51)
    {
      popup.style.transform="scale(1)";
      clearInterval(id);
    }
    else
    {
      popup.style.transform="scale("+(i/50)+")";
      i++;
    }
  } , 6 );

}

//for getting random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function upload_music_url()
{
  const tburl_input = document.getElementById("custom_music_link");
  
  if(tburl_input.value != "")
  {
    let formdata =new FormData();

    var f = new File([""], "filename");

    
    formdata.append('action', 'upload_custom_music_by_local_files');
    formdata.append("file" , f);
    formdata.append('url' , tburl_input.value);
    formdata.append('random_for_folder_name', localStorage.getItem("custom_music_for_unique"));
    formdata.append('random_for_file_name', getRandomInt(500000000));


    jQuery.ajax({
      url: my_ajax_object.ajax_url,
      
      cache: false,
      type: 'POST',
      contentType: false,
      processData: false,
      data: formdata,
      success: function(result){
        result = result.trim();
        result = result.slice(0, -1);
        // // console.log(result.split("$%^&*$")[0]);
        if(result.split("$%^&*$")[0] == "success")
        {
          user_unique_folderName = result.split("$%^&*$")[1].slice(0, -1);
          //// console.log("hello 1 == "+user_unique_folderName);
          var cuustom_music_url = (window.location.origin+"/"+window.location.pathname.split( '/' )[1])+"/wp-content/"+(user_unique_folderName.split("wp-content")[1]);
          //// console.log("hello 2 == "+cuustom_music_url);
          localStorage.setItem("custom_music_base_names" , (localStorage.getItem("custom_music_base_names")+baseName(cuustom_music_url)+"."+ (cuustom_music_url.split("/")[cuustom_music_url.split("/").length-1]).split(".")[1] +"$%^&*$" ));
          custom_music_main_url = ((window.location.origin+"/"+window.location.pathname.split( '/' )[1]) + "/wp-content/" + (user_unique_folderName.split("wp-content")[1])).split("/");
          custom_music_main_url.pop();
          custom_music_main_url = custom_music_main_url.join("/");

          document.getElementById("all").checked = true;
          set_music_by_types("all"); // for display musics
          
        }


        // // console.log("REUSLT OF AJAX FILE UPLOAD BY URL = "+result);
  
      }
    });

  }
}


async function upload_music_file(event)
{

  
  let formdata =new FormData();
  formdata.append("file" , event.target.files[0]);
  formdata.append('action', 'upload_custom_music_by_local_files');
  formdata.append('random_for_folder_name', localStorage.getItem("custom_music_for_unique"));
  formdata.append('random_for_file_name', getRandomInt(500000000));


  jQuery.ajax({
    url: my_ajax_object.ajax_url,
    
    cache: false,
    type: 'POST',
    contentType: false,
    processData: false,
    data: formdata,
    success: function(result){
      result = result.trim();
      result = result.slice(0, -1);
     
      // // console.log(result.split("$%^&*$")[0]);
      if(result.split("$%^&*$")[0] == "success")
      {
        user_unique_folderName = result.split("$%^&*$")[1].slice(0, -1);
        //// console.log("hello 1 == "+user_unique_folderName);
        var cuustom_music_url = (window.location.origin+"/"+window.location.pathname.split( '/' )[1])+"/wp-content/"+(user_unique_folderName.split("wp-content")[1]);
        //// console.log("hello 2 == "+cuustom_music_url);
        localStorage.setItem("custom_music_base_names" , (localStorage.getItem("custom_music_base_names")+baseName(cuustom_music_url)+"."+ (cuustom_music_url.split("/")[cuustom_music_url.split("/").length-1]).split(".")[1] +"$%^&*$" ));
        custom_music_main_url = ((window.location.origin+"/"+window.location.pathname.split( '/' )[1]) + "/wp-content/" + (user_unique_folderName.split("wp-content")[1])).split("/");
        custom_music_main_url.pop();
        custom_music_main_url = custom_music_main_url.join("/");

        document.getElementById("all").checked = true;
        set_music_by_types("all"); // for display musics
        
      }

      // // console.log("REUSLT OF AJAX FILE UPLOAD BY LOCAL STORAGE = "+result);

    }
  });

  

  

  

  


}

//music function end


// animation functions start 
function set_animation_time(time,ani_type="")
{
  
  var type;

  if(ani_type == "")
  {

    
    
    animation_time = time;

    if(document.getElementById('fadeIn').checked == true)
    {
      type = "fadein";
    }
    else if(document.getElementById('ZoomIn').checked == true)
    {
      type = "zoomin";
    }
    else if(document.getElementById('slide_in_left').checked == true)
    {
      type = "slideinleft";
    }
    else if(document.getElementById('slide_in_right').checked == true)
    {
      type = "slideinright";
    }
    else if(document.getElementById('slide_in_up').checked == true)
    {
      type = "slideinup";
    }

    animation_type_global = type;
  }
  else
  {
    type = ani_type;
  }
  for_clear_animation_timeout();
  

  


  jQuery('.fpd-pos-right').append('<div id="radio_for_choose_ani" class="amimation_product_main" ><div id="radio_for_choose_ani_2" class="amimation_duration_style" > </div></div>');
  if( ani_type_acf == 'clips' )
  {
    jQuery('#radio_for_choose_ani_2').append('<h3 class="animation_heading_text_type">Style d’animation</h3>');
    jQuery('#radio_for_choose_ani_2').append('<div id="ani_scroll_main" ></div>');
    jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'slide_up'"+')" id="slide_up" name="ani_type_2" value="" checked > <label for="slide_up"> Slide Up </label> </div>');
    jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'rise_text'"+')" id="rise_text" name="ani_type_2" value="rise_text" ><label for="rise_text">Rise + Text</label></div>');
    jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'zoomout_text'"+')" id="zoomout_text" name="ani_type_2" value="zoomout_text" ><label for="zoomout_text">Zoomout + Text</label></div>');
    jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'ani_pan'"+')" id="ani_pan" name="ani_type_2" value="ani_pan" ><label for="ani_pan">Pan</label></div>');
    jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'ani_pop'"+')" id="ani_pop" name="ani_type_2" value="ani_pop" ><label for="ani_pop">Pop</label></div>');
    jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'tectonic'"+')" id="tectonic" name="ani_type_2" value="tectonic" ><label for="tectonic">Tectonic</label></div>');
    jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'baseline'"+')" id="baseline" name="ani_type_2" value="baseline" ><label for="baseline">Baseline</label></div>');
    jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'tumble'"+')" id="tumble" name="ani_type_2" value="tumble" ><label for="tumble">Tumble</label></div>');
    jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'neon'"+')" id="neon" name="ani_type_2" value="neon" ><label for="neon">Neon</label></div>');
    jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'photo_flow'"+')" id="photo_flow" name="ani_type_2" value="photo_flow" ><label for="photo_flow">Photo Flow</label></div>');
    jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'photo_rise'"+')" id="photo_rise" name="ani_type_2" value="photo_rise" ><label for="photo_rise">Photo Rise</label></div>');
    jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'photo_zoom'"+')" id="photo_zoom" name="ani_type_2" value="photo_zoom" ><label for="photo_zoom">Photo Zoom</label></div>');
    

    document.getElementById(ani_type_acf).checked = true;
    
  }

  if( ani_type_acf == 'cartes' )
  {
    jQuery('#radio_for_choose_ani').append('<div id="radio_for_choose_ani_3" class="amimation_duration_style" > </div>')
    jQuery('#radio_for_choose_ani_3').append('<h3 class="animation_heading_text_type">Style d’animation</h3>');
    jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope'"+')" id="ani_envelope" name="ani_type_3" value="" checked > <label for="ani_envelope"> Envelope </label> </div>');
    jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope_fast'"+')" id="ani_envelope_fast" name="ani_type_3" value="" > <label for="ani_envelope_fast"> Envelope Fast </label> </div>');
    jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope_rectangle_horizontal'"+')" id="ani_envelope_rectangle_horizontal" name="ani_type_3" value="" > <label for="ani_envelope_rectangle_horizontal"> Envelope Rectangle Horizontal </label> </div>');
    jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope_reverse_flip'"+')" id="ani_envelope_reverse_flip" name="ani_type_3" value="" > <label for="ani_envelope_reverse_flip"> Envelope Reverse Flip </label> </div>');
    jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope_rolling_card'"+')" id="ani_envelope_rolling_card" name="ani_type_3" value="" > <label for="ani_envelope_rolling_card"> Envelope Rolling Card </label> </div>');

    // document.getElementById(ani_type_acf).checked = true;

  }


  if( document.getElementById(ani_style_val) != null )
    document.getElementById(ani_style_val).checked = true;
  if( document.getElementById(ani_style_val_2) != null )
    document.getElementById(ani_style_val_2).checked = true;

  do_animation_envelope(type);

}

function change_envelope_color(color=background_color_ani)
{
  document.getElementById("envelope_back_image").style.backgroundColor = color;
  document.getElementById("animation_image_tag_envelope_cap_front_side").style.backgroundColor = color;
  document.getElementById("animation_image_tag_envelope_body_front").style.backgroundColor = color;
  jQuery('#animation_image_tag_envelope_cap_back_side').css({'cssText':'background-image:url("'+dataURL_back_cc+'") !important;'});
  // // console.log(dataURL_back_cc);

}

function for_clear_animation_timeout()
{

  
  clearTimeout(my_animation);
  clearInterval(id);
  const e1 = document.getElementById("animation_div");
  if(!(e1 == null))
    e1.remove();

  const e2 = document.getElementById("radio_for_choose_ani");
  if(!(e2 == null))
    e2.remove();



  const e3 = document.getElementById("animation_clips_main");
  if(!(e3 == null))
  e3.remove();
}

function refresh_animation_for_userClick(my_value="")
{
  clearTimeout(my_animation);
  clearInterval(id);

  var iframe_user = jQuery('body').attr('user_ids');
  var v_id = jQuery('body').attr('v_id');
  var envelop_range = jQuery("#vol").val();
  var animation = jQuery('input[name="animation"]:checked').val();
  var canvas = document.getElementsByClassName("lower-canvas");
  // var dataURL = canvas[0].toDataURL("image/svg", 1.0);
  var dataURL = canvas[0].toDataURL({ pixelRatio: 30000 });
  
  
  if( canvas[4] != null )
    var dataURL_back = canvas[4].toDataURL({ pixelRatio: 30000 });
  else
  {
    // var dataURL_back ="";
    var dataURL_back ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAAGNCAYAAAA4r0YoAAAAAXNSR0IArs4c6QAAIABJREFUeF7svfmPZYd95Xfuft++1N4LeyOb+95cJJESJduyPAkCJPkhljWesUfy/AnjZZJJgAE8k9iDCZABElgey/IytmRJtmVZ4io2lyabS5Psvdn73rW+eq/eevfgfG9Vi/ZkMMUyKi0C30cUq7rq3vtufd774dQX53uOUfna/5BBH0pACSgBJaAElIASUAJKQAmsi4ChAnpdnPQgJaAElIASUAJKQAkoASUgBFRA6xtBCSgBJaAElIASUAJKQAl8DAIqoD8GLD1UCSgBJaAElIASUAJKQAmogNb3gBJQAkpACSgBJaAElIAS+BgEVEB/DFh6qBJQAkpACSgBJaAElIASUAGt7wEloASUgBJQAkpACSgBJfAxCKiA/hiw9FAloASUgBJQAkpACSgBJaACWt8DSkAJKAEloASUgBJQAkrgYxBQAf0xYOmhSkAJKAEloASUgBJQAkpABbS+B5SAElACSkAJKAEloASUwMcgoAL6Y8DSQ5WAElACSkAJKAEloASUgApofQ8oASWgBJSAElACSkAJKIGPQUAF9MeApYcqASWgBJSAElACSkAJKAEV0PoeUAJKQAkoASWgBJSAElACH4OACuiPAUsPVQJKQAkoASWgBJSAElACKqD1PaAElIASUAJKQAkoASWgBD4GARXQHwOWHqoElIASUAJKQAkoASWgBFRA63tACSgBJaAElIASUAJKQAl8DAIqoD8GLD1UCSgBJaAElIASUAJKQAmogNb3gBJQAkpACSgBJaAElIAS+BgEVEB/DFh6qBJQAkpACSgBJaAElIASUAGt7wEloASUgBJQAkpACSgBJfAxCKiA/hiw9FAloASUgBJQAkpACSgBJaACWt8DSkAJKAEloASUgBL4KSWwb9cd2DuzDcgyucM4SdDpdNBe6SCKY5imhVq1gkatAddxAGRIsxTdXh/tThvDIAAMoFwsYazeQMH3Id9AhsFoiFarhf5ohCzL4Ps+mvU6SoUiLNOEYRgYhSGW2210ez2kaQrXdVCv1VAtV2CZFgwDch/tTgcrva58bVsWqpUq6tUqHNuWp8vSTH7O40ZhANMwUCmVUa/V4XkuDB5kAP3BQJ6P98a7LJfKaNTq8D3v5isU8J46bfT7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';
  }

  if( canvas[4] != null )
    dataURL_back_cc = canvas[3].toDataURL({ pixelRatio: 30000 });
  else
  {
    // dataURL_back_cc = "";
    dataURL_back_cc = 'data:image/png;base64,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';
  }


  jQuery.ajax({
    url: my_ajax_object_for_shop_details.ajax_url,

    cache: false,
    type: 'POST',
    
    data: {
      'action':'save_envelop_preview',
      'product_id':result_v,
      'dataURL_1':dataURL,
      'dataURL_2':dataURL_back,
      'dataURL_3':dataURL_back_cc,
      'envelop_range':envelop_range,
      'animation':animation,
      'musics_urls':my_value,
      'enveloppe_color':background_color_ani,
      'iframe_user':iframe_user,
    },
    // success: function(result){
    //   shop_details = result.slice(0, -1);
    // }
  });

  

  const e1 = document.getElementById("animation_div");
  if(!(e1 == null))
    e1.remove();

  //jQuery('.fpd-product-stage').prepend('<div class="enveloppe_min" style="display: block;width: 100%;"><div id="animation_div" style="transform: rotateX(0deg);position: absolute;top: 56%; transform-style: preserve-3d;" class="my_custom_img_tag_for_animation remove_class_animation"></div></div>');



  

  jQuery('.fpd-product-stage').prepend('<div id="animation_div" style="transform: rotateX(0deg);position: absolute;top: 56%; transform-style: preserve-3d;" class="my_custom_img_tag_for_animation remove_class_animation"></div>');
  jQuery('.my_custom_img_tag_for_animation').prepend('<div style="backface-visibility: hidden; transform: rotateY(180deg);" id="animation_full_envelope_front" class="animation_envelope_front_side" ></div>');
  jQuery('.my_custom_img_tag_for_animation').prepend('<div style="position: absolute; backface-visibility: hidden;" class="animation_envelope_back_side" ></div>');
  jQuery('.animation_envelope_back_side').prepend(' <img id="envelope_back_image" src="'+dataURL_back+'" />');
  

  var html_id = $(".post_main_container").attr("id").split('-')[1];
  var html = custom_html_card(JSON.parse(window.localStorage.getItem('fancy-product-designer-'+html_id))[JSON.parse(window.localStorage.getItem('fancy-product-designer-'+html_id)).length - 1]['product'][0]['elements']);


  if( ani_type_acf == 'cartes' )
  {
    // console.log("YA YA YA");
  

    
    // if (jQuery('#myonoffswitch_carte').prop('checked')==true)
    // { 
    //   jQuery('.animation_envelope_front_side').prepend('<div id="animation_card_image" style="position: relative;transform-origin: center; transform: translate(154px, -95px) scaleX(1.1) scaleY(0.90);z-index: 0;transform-style: preserve-3d;transition: transform 0.6s;" > <div id="temp_for_left"> <img style="border-radius: 45px;position: absolute;transform: rotate(-90deg);transform-style: preserve-3d;transition: transform 0.6s ease 0s;" class="myy" id="img_for_animation" src="'+dataURL+'" /></div> </div>');
    //   jQuery('#img_for_animation').append('<div class="animation_html" id="animation_html" style="width:440px;height:650px;position:relative;"><div class="htm_contain" style="position:absolute;left:1.4278739521989px;top:-8.1743474841654px;z-index:-1;"><img src="https://dev.greetandgreen.com/administrationAcDRdcf/wp-content/uploads/2022/09/MicrosoftTeams-image-1.png" style="width:435.65450863856px;height:665.41538274267px;"></div></div>');
    // }
    // else
    // {
    if( ani_style_val_2 == 'ani_envelope_rolling_card' )
      jQuery('.animation_envelope_front_side').prepend('<div style="perspective: 1000px;position: absolute; transform: rotate(360deg)" id="for_flip_card_main" >  </div>');
    else
      jQuery('.animation_envelope_front_side').prepend('<div style="perspective: 1000px;position: absolute;" id="for_flip_card_main" >  </div>');
    jQuery('#for_flip_card_main').prepend('<div style="position: absolute; left: 0; height: 397.5px;width: 720px;" id="animation_card_back_before"> <div style="top: 0px;left: 0;right: 0;width: 720.1969px;height: 397.500475px;background: #fff;font-size: 0;" id="animation_card_back" > <h1>abcxyz</h1> </div></div>');
    jQuery('#for_flip_card_main').prepend('<div id="animation_card_image" style="position: relative;transform-origin: center; transform: translate(154px, -95px) scaleX(1.1) scaleY(0.90);z-index: 0;transform-style: preserve-3d;transition: transform 0.6s;" > <div id="temp_for_left"> <img style=" perspective: 1000px; position: absolute;transform: rotateY(180deg) rotate(-90deg);transform-style: preserve-3d;transition: transform 0.6s ease 0s; " class="myy" id="img_for_animation" src="'+dataURL+'" />    </div> </div>');

    // jQuery('#img_for_animation').prepend('<img src="'+dataURL+'" />');
    // }
  }

  if( ani_type_acf == 'clips' )
  {
    jQuery('.animation_envelope_front_side').prepend('<div style="perspective: 1000px;position: absolute;" id="for_flip_card_main" >  </div>');
    jQuery('#for_flip_card_main').prepend('<div style="position: absolute; left: 0; height: 397.5px;width: 720px;" id="animation_card_back_before"> <div style="top: 0px;left: 0;right: 0;width: 720.1969px;height: 397.500475px;background: #fff;font-size: 0;" id="animation_card_back" > <h1>abcxyz</h1> </div></div>');
    jQuery('#for_flip_card_main').prepend('<div id="animation_card_image" style="position: relative;transform-origin: center; transform: translate(154px, -95px) scaleX(-1.1) scaleY(0.90);z-index: 0;transform-style: preserve-3d;transition: transform 0.6s;" > <div id="temp_for_left"> <div style=" perspective: 1000px; border-radius: 45px;position: absolute;transform: rotate(-90deg);transform-style: preserve-3d;transition: transform 0.6s ease 0s; " class="myy" id="img_for_animation" " >    </div></div> </div>');

    
    jQuery('#img_for_animation').append(html);
  }
  
  
  jQuery('.animation_envelope_front_side').prepend('<div style="z-index:20" id="animation_Envelope_cap_close" > <img style="background-color: '+background_color_ani+';" id="animation_image_tag_envelope_cap_back_side" src="'+animation_images_location+'cap.png" />  <img style="background-color: '+background_color_ani+';" id="animation_image_tag_envelope_cap_front_side" src="'+animation_images_location+'cap_open.png" />  <img src="'+stemp_img+'" id="animation_envelope_stemp_img" alt="" />  </div>');
    

  // add envelope body
  jQuery('.animation_envelope_front_side').append('<div style="z-index:10;" id="animation_Envelpoe_body_front" > <img style="position: relative;background-color: '+background_color_ani+';" id="animation_image_tag_envelope_body_front" src="'+animation_images_location+'4.png" /> </div>  <div style="position: absolute;z-index: -1;top: 0;" class="animation_envelope_background_img" > <img id="animation_img_tag_envelope_background" src="'+animation_images_location+'fixed_cover.png" /></div>  ');
    
  change_envelope_color(); // change envelope color
  

  
}



function do_animation_envelope(animation_type="fadein")
{
  // jQuery('#animation_div').addClass('animation_shadow');
  animation_type_global = animation_type;
  
  if(animation_type == "fadein")
  {
    
    refresh_animation_for_userClick();
    const product_stage = document.getElementById("animation_div");
    product_stage.style.top = "30%";
    
    
    const image = document.getElementById("envelope_back_image");
    

    image.style.opacity = "0";

  }

  if(animation_type == "zoomin")
  {
    refresh_animation_for_userClick();
    const product_stage = document.getElementById("animation_div");
    product_stage.style.top = "30%";
    product_stage.style.transform = " rotateX(0deg) scale(0)";
  }

  if(animation_type == "slideinleft")
  {
    refresh_animation_for_userClick();
    const product_stage = document.getElementById("animation_div");
    product_stage.style.top = "30%";
    product_stage.style.left="-155%";

  }

  if(animation_type == "slideinup")
  {
    refresh_animation_for_userClick();
    const product_stage = document.getElementById("animation_div");
    product_stage.style.top = "-50%";
  }

  if(animation_type == "slideinright")
  {
    refresh_animation_for_userClick();
    const product_stage = document.getElementById("animation_div");
    product_stage.style.top = "30%";
    product_stage.style.right="-155%";
  }
  temp_for_time = (animation_time != 15) ? ((100*animation_time)/15) : 100;
  my_animation = setTimeout(start_animation_first_method , temp_for_time);
}

function start_animation_first_method()
{
  temp_for_time = (animation_time != 15) ? ((3*animation_time)/15) : 3;
  if(animation_type_global == "fadein")
  {
    

    const image = document.getElementById("envelope_back_image");
    image.style.transition = "opacity "+temp_for_time+"s";
    image.style.transformStyle = "preserve-3d";
    image.style.opacity = "1";

  }

  if(animation_type_global == "zoomin")
  {
   
    const product_stage = document.getElementById("animation_div");

    product_stage.style.transition = "transform "+temp_for_time+"s";
    product_stage.style.transformStyle = "preserve-3d";
    product_stage.style.transform = "rotateX(0deg) scale(0.992)";
  }

  if(animation_type_global == "slideinleft")
  {
    const product_stage = document.getElementById("animation_div");

    product_stage.style.transition = "left "+temp_for_time+"s";
    product_stage.style.transformStyle = "preserve-3d";
    product_stage.style.left = "0%";

  }

  if(animation_type_global == "slideinup")
  {
    const product_stage = document.getElementById("animation_div");

    product_stage.style.transition = "top "+temp_for_time+"s";
    product_stage.style.transformStyle = "preserve-3d";
    product_stage.style.top = "30%";

  }

  if(animation_type_global == "slideinright")
  {
    const product_stage = document.getElementById("animation_div");

    product_stage.style.transition = "right "+temp_for_time+"s";
    product_stage.style.transformStyle = "preserve-3d";
    product_stage.style.right = "0%";
  }

  temp_for_time = (animation_time != 15) ? ((2800*animation_time)/15) : 2800;  
  my_animation = setTimeout(flipenvelope , temp_for_time);
}

function flipenvelope()
{

  temp_for_time = (animation_time != 15) ? ((2*animation_time)/15) : 2;

  const animation_div = document.getElementById("animation_div");
  animation_div.style.transition = "transform "+temp_for_time+"s";
  animation_div.style.transformStyle = "preserve-3d";
  animation_div.style.transform = "rotateY(180deg)";


  


  temp_for_time = (animation_time != 15) ? ((2000*animation_time)/15) : 2000;
  

  my_animation = setTimeout(openEnvelope , temp_for_time );
}


function openEnvelope()
{
  //alert("dsfsd");
  //jQuery('.my_custom_img_tag_for_animation').fadeOut('remove_class_animation');

  jQuery('.my_custom_img_tag_for_animation').fadeIn('slow').removeClass('remove_class_animation');
  temp_for_time = (animation_time != 15) ? ((2*animation_time)/15) : 2;
  const animation_div = document.getElementById("animation_div");
  const envelope_cap = document.getElementById("animation_Envelope_cap_close");

  animation_div.style.transition = "top "+temp_for_time+"s";
  animation_div.style.transformStyle = "preserve-3d";
  animation_div.style.top = "50.185%";

  envelope_cap.style.transition = "transform "+temp_for_time+"s";
  envelope_cap.style.transformStyle = "preserve-3d";
  envelope_cap.style.transform = "rotateX(180deg)";
  const letter = document.getElementById("animation_card_image");
  letter.style.top = "0px";
  
  temp_for_time = (animation_time != 15) ? ((1650*animation_time)/15) : 1650;
  my_animation = setTimeout(letterUp, temp_for_time);
}

var for_store_top_c_front;
var for_store_top_c_back;
function letterUp()
{
  temp_for_time = (animation_time != 15) ? ((2.5*animation_time)/15) : 2.5;
  if( ani_type_acf == 'clips' )
  {
    const letter = document.getElementById("animation_card_image");
    const letter1 = document.getElementById("img_for_animation");
    const envelope_cap = document.getElementById("animation_Envelope_cap_close");

    const cardBack = document.getElementById('animation_card_back_before');
    // for_store_top_c_back = cardBack.style.top;
    cardBack.style.transition = "all "+temp_for_time+"s";
    cardBack.style.transformStyle = "preserve-3d";
    // cardBack.style.top = "0";
    cardBack.style.top = "-394px";


    envelope_cap.style.zIndex="-1";
    letter.style.transition = "top "+temp_for_time+"s";
    letter.style.transformStyle = "preserve-3d";
    for_store_top_c_front = letter.style.top;
    letter.style.top = "-396px";

    letter.style.left = "0px";

    
  }
  else if( ani_type_acf == 'cartes' )
  {
    const letter = document.getElementById("animation_card_image");
    const letter1 = document.getElementById("img_for_animation");
    const envelope_cap = document.getElementById("animation_Envelope_cap_close");
    envelope_cap.style.zIndex="-1";

    const whole_envelope = document.getElementById('for_flip_card_main');

    if( ani_style_val_2 == 'ani_envelope_rectangle_horizontal' )
    {
      // // console.log("before");
      // // console.log("back_card_width = "+back_card_width);
      // // console.log("back_card_height = "+back_card_height);
      // back_card_height = (parseFloat(back_card_width.split('px')[0]) + parseFloat(back_card_height.split('px')[0])) + "px";
      // back_card_width = ( back_card_height.split('px')[0] - back_card_width.split('px')[0] ) + "px";
      // back_card_height = ( back_card_height.split('px')[0] - back_card_width.split('px')[0] ) + "px";

      // // console.log("after");
      // // console.log("back_card_width = "+back_card_width);
      // // console.log("back_card_height = "+back_card_height);
      // return;
    }

    // letter.style.transition = "top "+temp_for_time+"s";
    // letter.style.transformStyle = "preserve-3d";
    // letter.style.top = "-396px";

    // letter.style.left = "0px";
    whole_envelope.style.transition = "top "+temp_for_time+"s";
    whole_envelope.style.transformStyle = "preserve-3d";
    whole_envelope.style.top = "-396px";

    whole_envelope.style.left = "0px";
  }

  temp_for_time = (animation_time != 15) ? ((2200*animation_time)/15) : 2200;

  if( ani_type_acf == 'clips' )
  {
    if( ani_style_val_2 == 'ani_envelope_rectangle_horizontal' )
      my_animation = setTimeout(letterDown, temp_for_time);
    else
      my_animation = setTimeout(letterrotateDown, temp_for_time);
  }
  else if( ani_type_acf == 'cartes' )
  {
    my_animation = setTimeout(letterrotate, temp_for_time);
  }
}

function letterrotate()
{
  temp_for_time = (animation_time != 15) ? ((1.5*animation_time)/15) : 1.5;
  const letter = document.getElementById("animation_card_image");
  const whole_envelope = document.getElementById("for_flip_card_main");
  const image = document.getElementById("img_for_animation");
  const envelope_body = document.getElementById("animation_Envelpoe_body_front");
  
  const temp = document.getElementById('temp_for_left');

  const card_back = document.getElementById('animation_card_back');
  const card_back_before = document.getElementById('animation_card_back_before');

  

  envelope_body.style.zIndex = "-1";
  letter.style.zIndex = "10";

  whole_envelope.style.transition = "all "+temp_for_time+"s";
  whole_envelope.style.transformStyle = "preserve-3d";


  if( back_card_width.split('px')[0] > 700 )
  {
    // // console.log("BIG");
    // main_div.style.transform = "scaleX("+(700/back_card_width.split('px')[0])+") scaleY("+(615/back_card_height.split('px')[0])+")";
    whole_envelope.style.scale = (700/back_card_width.split('px')[0]);

    // main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -150px), calc(-50% - 45%))";

  }

  if( ani_style_val_2 != 'ani_envelope_rectangle_horizontal' )
  {
    
    // if( ani_style_val_2 == 'ani_envelope_rolling_card' )
    //   whole_envelope.style.transform = "rotate(270deg)";
    // else
      whole_envelope.style.transform = "rotate(90deg)";
  }

  card_back.style.transition = "all "+temp_for_time+"s";
  card_back.style.transformStyle = "preserve-3d";
  card_back.style.height = "100%";
  card_back.style.width = "100%";


  card_back_before.style.transition = "all "+temp_for_time+"s";
  card_back_before.style.transformStyle = "preserve-3d";


  if( ani_style_val_2 == 'ani_envelope_rectangle_horizontal' )
  {
    card_back_before.style.height = back_card_width;
    card_back_before.style.minHeight = back_card_width;
    card_back_before.style.maxHeight = back_card_width;
    card_back_before.style.width = back_card_height;
    card_back_before.style.minWidth = back_card_height;
    card_back_before.style.maxWidth = back_card_height;




    image.style.minHeight = back_card_height;
    image.style.minWidth = back_card_width;
    image.style.maxHeight = back_card_height;
    image.style.maxWidth = back_card_width;
  }
  else
  {
    card_back_before.style.height = back_card_width;
    card_back_before.style.minHeight = back_card_width;
    card_back_before.style.maxHeight = back_card_width;
    card_back_before.style.width = back_card_height;
    card_back_before.style.minWidth = back_card_height;
    card_back_before.style.maxWidth = back_card_height;




    image.style.minHeight = back_card_height;
    image.style.minWidth = back_card_width;
    image.style.maxHeight = back_card_height;
    image.style.maxWidth = back_card_width;
  }
  
  
  

  if( ani_style_val_2 != 'ani_envelope_rectangle_horizontal' )
  {
    if( back_card_width.split('px')[0] > 700 )
    {
      
      card_back_before.style.left = "100%";
      card_back_before.style.top = "50%";
      // card_back_before.style.transform = "translate(-50%, -50%)";
      card_back_before.style.transform = "translate(-63%, -55%)";
      
      
    }
    else
    {
      card_back_before.style.left = "85%";
      card_back_before.style.top = "50%";
      card_back_before.style.transform = "translate(-50%, -40%)";
    }
    // card_back_before.style.left = "220px";
    
    
    image.style.left = "220px";
    image.style.transform = "rotateX(180deg) rotate(-90deg) scale(0.9)";
  }
  else
  {
    if( back_card_width.split('px')[0] > 700 )
    {
      card_back_before.style.left = "50%";
      card_back_before.style.top = "110%";
      card_back_before.style.transform = "translate(-50%, -35%)";
    }
    else
    {
      card_back_before.style.top = "320px";
      card_back_before.style.left = "13px";
    }
    
    
    image.style.top = "220px";
    if( ani_style_val_2 == 'ani_envelope_rectangle_horizontal' )
      image.style.transform = "rotateX(180deg) rotate(-90deg) scale(0.91) translate(-7px , 160px) scaleX(1.22)";
    else
      image.style.transform = "rotateX(180deg) rotate(-90deg) scale(0.91) translate(160px, -7px) scaleX(1.22)";
  }
  
  // return;

  
  

  temp_for_time = (animation_time != 15) ? ((2200*animation_time)/15) : 2200;

  my_animation = setTimeout(zoomImage , temp_for_time);
  




  // temp.style.transition = "transform "+temp_for_time+"s";
  // temp.style.transformStyle = "preserve-3d";
  // temp.style.transform = "translateX(140px)";


  // letter.style.transition = "transform "+temp_for_time+"s";
  // letter.style.transformStyle = "preserve-3d";
  // letter.style.transform = "unset";
  
  // image.style.transition = "transform "+temp_for_time+"s";
  // image.style.transformStyle = "preserve-3d";
  // image.style.transform = "rotate(0deg)";

  // image.style.width = "440px";
  
  // temp_for_time = (animation_time != 15) ? ((2200*animation_time)/15) : 2200;

  // my_animation = setTimeout(zoomImage , temp_for_time);

}

function letterDown()
{
  temp_for_time = (animation_time != 15) ? ((2.5*animation_time)/15) : 2.5;

  const letter = document.getElementById("animation_card_image");
  const envelope_body = document.getElementById("animation_Envelpoe_body_front");
  const cardBackBefore = document.getElementById('animation_card_back_before');

  envelope_body.style.zIndex = "-1";
  letter.style.zIndex = "10";
  cardBackBefore.style.zIndex = "10";

  cardBackBefore.style.transition = "all "+temp_for_time+"s";
  cardBackBefore.style.transformStyle = "preserve-3d";
  cardBackBefore.style.transform = "translate(calc(-62%), calc(-68%))";
  cardBackBefore.style.top = "-50px";

  temp_for_time = (animation_time != 15) ? ((1900*animation_time)/15) : 1900;


  my_animation = setTimeout(envelope_minor_rotate, temp_for_time);

}

function letterrotateDown()
{
  temp_for_time = (animation_time != 15) ? ((2.5*animation_time)/15) : 2.5;

  const letter = document.getElementById("animation_card_image");
  const cardBack = document.getElementById('animation_card_back');
  const cardBackBefore = document.getElementById('animation_card_back_before');
  const envelope_body = document.getElementById("animation_Envelpoe_body_front");
  const image = document.getElementById("img_for_animation");

  const main_div = document.getElementById('for_flip_card_main');

  document.getElementById('animation_card_back_before').style.height = document.getElementById('card_outer_items').children[0].style.width;
  document.getElementById('animation_card_back_before').style.width = document.getElementById('card_outer_items').children[0].style.height;
  document.getElementById('animation_card_back_before').style.minHeight = document.getElementById('card_outer_items').children[0].style.width;
  document.getElementById('animation_card_back_before').style.minWidth = document.getElementById('card_outer_items').children[0].style.height;
  document.getElementById('animation_card_back_before').style.maxHeight = document.getElementById('card_outer_items').children[0].style.width;
  document.getElementById('animation_card_back_before').style.maxWidth = document.getElementById('card_outer_items').children[0].style.height;
  
  document.getElementById('animation_html').style.minWidth = back_card_width;
  document.getElementById('animation_html').style.minHeight = back_card_height;
  document.getElementById('animation_html').style.maxWidth = back_card_width;
  document.getElementById('animation_html').style.maxHeight = back_card_height;

  main_div.style.transition = "all "+temp_for_time+"s";
  main_div.style.transformStyle = "preserve-3d";
  // main_div.style.width = document.getElementById('card_outer_items').children[0].style.width;
  // main_div.style.height = document.getElementById('card_outer_items').children[0].style.height;
  // main_div.style.top = "-290px";
  main_div.style.top = "30%";
  // main_div.style.left = "110px";
  main_div.style.left = "45%";
  main_div.style.transform = "translate(calc(-50% - -150px), calc(-95%))";
  main_div.style.position = "absolute";


  envelope_body.style.zIndex = "-1";
  letter.style.zIndex = "10";
  cardBackBefore.style.zIndex = "10";
  


  cardBack.style.transition = "all "+temp_for_time+"s";
  cardBack.style.transformStyle = "preserve-3d";
  cardBack.style.height = "100%";

  cardBackBefore.style.transition = "all "+temp_for_time+"s";
  cardBackBefore.style.transformStyle = "preserve-3d";
  cardBackBefore.style.top = "-180px";
  if( ani_style_val_2 == 'ani_envelope_rolling_card' )
    cardBackBefore.style.transform = "translate(calc(100% - calc(50% - calc(-50% - 120px))), calc(50% - calc(100% - calc(50% - 15%)))) rotate(270deg) ";
  else
    cardBackBefore.style.transform = "translate(calc(-62%), calc(-68%)) rotate(90deg)";
  cardBackBefore.style.left = "45px";


  // cardBackBefore.style.top = "0px";
  cardBackBefore.style.top = "50%";
  // cardBackBefore.style.left = "0px";
  cardBackBefore.style.left = "50%";
  cardBackBefore.style.bottom = "0px";
  cardBackBefore.style.right = "0px";



  cardBack.style.transition = "all "+temp_for_time+"s";
  cardBack.style.transformStyle = "preserve-3d";
  cardBack.style.height = "100%";
  cardBack.style.width = "100%";

  const main_div_card = document.getElementById('animation_html');
  // image.style.transform = "";
  // main_div_card.style.transform += "translate(-154px, 95px)";


  // cardBackBefore.style.width = "650px";
  // cardBackBefore.style.height = "470px";

  letter.style.transition = "all "+temp_for_time+"s";
  letter.style.transformStyle = "preserve-3d";
  letter.style.top = for_store_top_c_front;


  image.style.transition = "transform "+temp_for_time+"s";
  image.style.transformStyle = "preserve-3d";



  // if( back_card_width.split('px')[0] > 700 || back_card_height.split('px')[0] > 615 )
  if( back_card_width.split('px')[0] > 700 )
  {
    // console.log("BIG");
    // main_div.style.transform = "scaleX("+(700/back_card_width.split('px')[0])+") scaleY("+(615/back_card_height.split('px')[0])+")";
    main_div.style.scale = (700/back_card_width.split('px')[0]);

    // main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -150px), calc(-50% - 45%))";

  }
  else
  {
    // main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -200px), calc(-50% - 10%))";
  }
  


  // image.style.minWidth = back_card_width;
  // image.style.minHeight = back_card_height;
  // image.style.maxWidth = back_card_width;
  // image.style.maxHeight = back_card_height;

  // letter.style.transform = "translate(calc(-50% - 15%), calc(-50% - calc(50% - 35%))) scaleX(-1) scaleY(1) rotateY(-180deg)";
  // letter.style.top = "50%";
  // letter.style.left = "50%";
  // letter.style.minWidth = back_card_width;
  // letter.style.minHeight = back_card_height;
  // letter.style.maxWidth = back_card_width;
  // letter.style.maxHeight = back_card_height;

  // main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -210px), calc(-50% - 28%))";
  // main_div.style.scale = "0.8";
  // main_div.style.top = "50%";
  // main_div.style.left = "50%";
  // main_div.style.minWidth = back_card_width;
  // main_div.style.minHeight = back_card_height;
  // main_div.style.maxWidth = back_card_width;
  // main_div.style.maxHeight = back_card_height;




  if( ani_type_acf == 'clips' )
    image.style.transform = "rotate(0deg) ";
  else
    image.style.transform = "rotate(0deg)";

  // image.style.width = "440px";

  temp_for_time = (animation_time != 15) ? ((1900*animation_time)/15) : 1900;


  my_animation = setTimeout(envelope_minor_rotate, temp_for_time);

}

function envelope_minor_rotate()
{
  temp_for_time = (animation_time != 15) ? ((1.2*animation_time)/15) : 1.2;

  const enve = document.getElementById('animation_div');
  const enve_state = document.getElementById('for_flip_card_main');

  enve.style.transition = "all "+temp_for_time+"s";
  enve.style.transformStyle = "preserve-3d";
  enve.style.transform = "rotateY(180deg) rotate(-15deg)";

  enve_state.style.transition = "all "+temp_for_time+"s";
  enve_state.style.transformStyle = "preserve-3d";
  if( ani_type_acf == 'clips' )
  {
    // enve_state.style.transform = "rotate(-15deg) ";
    if( back_card_width.split('px')[0] > 700 )
    {
      // console.log("BIG");
      // main_div.style.transform = "scaleX("+(700/back_card_width.split('px')[0])+") scaleY("+(615/back_card_height.split('px')[0])+")";
      // enve_state.style.scale = (700/back_card_width.split('px')[0]);

      enve_state.style.transform = "rotate(-15deg) translate(calc(-50% - -150px), calc(-50% - 45%))";
      // enve_state.style.transform = "rotate(-15deg)";

    }
    else
    {
      enve_state.style.transform = "rotate(-15deg) translate(calc(-50% - -200px), calc(-50% - 10%))";
      // enve_state.style.transform = "rotate(-15deg)";
    }
  }
  if( ani_type_acf == 'cartes' )
  {
    if( ani_style_val_2 == 'ani_envelope_rectangle_horizontal' )
    {
      if( back_card_width.split('px')[0] > 700 )
      {
        // // console.log("BIG");
        // main_div.style.transform = "scaleX("+(700/back_card_width.split('px')[0])+") scaleY("+(615/back_card_height.split('px')[0])+")";
        enve_state.style.scale = (700/back_card_width.split('px')[0]);

        // main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -150px), calc(-50% - 45%))";
        enve_state.style.transform = "rotate(-15deg) scale(1.1)";

      }
      else
      {
        const card_front = document.getElementById('img_for_animation');
        card_front.style.transition = "all "+temp_for_time+"s";
        card_front.style.transformStyle = "preserve-3d";
        card_front.style.transform = "rotateX(0deg) rotate(-90deg) scale(0.91) translate(-35%, -10%) scaleX(1.22)";
        enve_state.style.transform = "rotate(-15deg) scale(1.1)";
      }
    }
    else
    {
      if( back_card_width.split('px')[0] > 700 )
      {
        // // console.log("BIG");
        // main_div.style.transform = "scaleX("+(700/back_card_width.split('px')[0])+") scaleY("+(615/back_card_height.split('px')[0])+")";
        enve_state.style.scale = (700/back_card_width.split('px')[0]);

        // main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -150px), calc(-50% - 45%))";
        enve_state.style.transform = "rotate(75deg) scale(1.1)";
        enve_state.style.top = "-296px";
        enve_state.style.left = "-90px";

      }
      else
      {
        enve_state.style.transform = "rotate(75deg) scale(1.1)";
      }
    }
    
    
  }

  temp_for_time = (animation_time != 15) ? ((1900*animation_time)/15) : 1900;

  if( ani_type_acf == 'cartes' )
    my_animation = setTimeout(put_whole_envelope, temp_for_time);
  else if( ani_type_acf == 'clips' )
    my_animation = setTimeout(letterZoomAction, temp_for_time);

}

function letterZoomAction()
{
  temp_for_time = (animation_time != 15) ? ((1.5*animation_time)/15) : 1.5;
  const card = document.getElementById('for_flip_card_main');

  const html_ani_main = document.getElementById('animation_html');

  html_ani_main.style.height = back_card_height;
  html_ani_main.style.width = back_card_width;
  // html_ani_main.style.transform = "translate(-154px, 95px)";

  const letter = document.getElementById("animation_card_image");



  letter.style.transition = "all "+temp_for_time+"s";
  letter.style.transformStyle = "preserve-3d";
  letter.style.transform = "translate(154px, -95px) scaleX(-1) scaleY(1) rotateY(-180deg)";

  card.style.transition = "all "+temp_for_time+"s";
  card.style.transformStyle = "preserve-3d";
  // card.style.scale = "1.2";

  temp_for_time = (animation_time != 15) ? ((1500*animation_time)/15) : 1500;

  my_animation = setTimeout(letterRotateAction, temp_for_time);
}

function letterRotateAction()
{
  temp_for_time = (animation_time != 15) ? ((2.5*animation_time)/15) : 2.5;

  const env_back = document.getElementById('animation_html');
  const env_front = document.getElementById('animation_card_back');
  const ani_div = document.getElementById('animation_html');
  const letter = document.getElementById("animation_card_image");

  // if( ani_style_val_2 == 'ani_envelope_rectangle_horizontal' )
  // {
  //   ani_div.style.top = "-27px";
  //   letter.style.top = "-107px";
  // }
  // else
  //   ani_div.style.top = "-177px";
  // ani_div.style.left = "280px";


  // // console.log(env_back);
  // // console.log(env_front);

  env_back.style.transition = "all "+temp_for_time+"s";
  env_back.style.transformStyle = "preserve-3d";
  // env_back.style.transform = "translate(154px, -95px) scaleX(-1.1) scaleY(0.9) rotateY(-0deg)";
  env_back.style.transform = "rotateY(0deg)";

  env_front.style.transition = "all "+temp_for_time+"s";
  env_front.style.transformStyle = "preserve-3d";
  if( ani_style_val_2 == 'ani_envelope_reverse_flip' || ani_style_val_2 == 'ani_envelope_rolling_card' )
    env_front.style.transform = "rotateX(180deg)";
  else
    env_front.style.transform = "rotateX(-180deg)";








  const image = document.getElementById("img_for_animation");
  const main_div = document.getElementById('for_flip_card_main');

  image.style.minWidth = back_card_width;
  image.style.minHeight = back_card_height;
  image.style.maxWidth = back_card_width;
  image.style.maxHeight = back_card_height;

  letter.style.transform = "translate(calc(-50% - 15%), calc(-50% - calc(50% - 35%))) scaleX(-1) scaleY(1) rotateY(-180deg)";
  letter.style.top = "50%";
  letter.style.left = "50%";
  letter.style.minWidth = back_card_width;
  letter.style.minHeight = back_card_height;
  letter.style.maxWidth = back_card_width;
  letter.style.maxHeight = back_card_height;

  // main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -210px), calc(-50% - 28%))";

  if( back_card_width.split('px')[0] > 700 )
  {
    main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -150px), calc(-50% - 45%))";
  }
  else
  {
    main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -200px), calc(-50% - 10%))";
  }


  // main_div.style.scale = "0.8";
  // main_div.style.top = "50%";
  main_div.style.top = "30%";
  // main_div.style.left = "50%";
  main_div.style.left = "45%";
  // main_div.style.minWidth = back_card_width;
  // main_div.style.minHeight = back_card_height;
  // main_div.style.maxWidth = back_card_width;
  // main_div.style.maxHeight = back_card_height;















  temp_for_time = (animation_time != 15) ? ((2500*animation_time)/15) : 2500;

  my_animation = setTimeout(pushBackLetter, temp_for_time);


}

function pushBackLetter()
{
  temp_for_time = (animation_time != 15) ? ((1.5*animation_time)/15) : 1.5;
  const card = document.getElementById('for_flip_card_main');
  

  // card.style.transition = "all "+temp_for_time+"s";
  // card.style.transformStyle = "preserve-3d";
  // card.style.scale = "1";



  temp_for_time = (animation_time != 15) ? ((400*animation_time)/15) : 400;

  my_animation = setTimeout(showLetterDetails, temp_for_time);
}


var ani_style_val_2 = "ani_envelope";
function select_ani_type_2(type)
{
  if( document.getElementById(type).checked == true )
  {
    ani_style_val_2 = type;
    if( ani_style_val_2 == 'ani_envelope_fast' )
    {
      // // console.log("CALLS");
      // ani_style_val_2 = "ani_envelope";
      document.getElementById('vol').value = document.getElementById('vol').min;
      move();
      animation_slider_range();
      // // console.log( document.getElementById('vol').min );
      return;
    }
  }

  do_animation_envelope(animation_type_global);
}
var ani_style_val = "slide_up";
function select_ani_type(type)
{
  // alert(type);
  if( document.getElementById(type).checked == true )
    ani_style_val = type;
  // else
  //   ani_style_val = "slide_up";

  

  // do_animation_envelope(animation_type_global);

  const e3 = document.getElementById("animation_clips_main");
  if(!(e3 == null))
  e3.remove();

  jQuery('.fpd-product-stage').prepend('<div id="animation_clips_main" >  </div>');

  var html_id = $(".post_main_container").attr("id").split('-')[1];
  var html = custom_html_card(JSON.parse(window.localStorage.getItem('fancy-product-designer-'+html_id))[JSON.parse(window.localStorage.getItem('fancy-product-designer-'+html_id)).length - 1]['product'][0]['elements']);

  jQuery('#animation_clips_main').append(html);
  

  showLetterDetails();
}

var ele_tra_img = [];

function showLetterDetails(time = 4)
{

  const ani_main = document.getElementById('animation_html');

  const main_div = document.getElementById('animation_clips_main');

  ani_main.style.maxHeight = back_card_height;
  ani_main.style.minHeight = back_card_height;
  ani_main.style.maxWidth = back_card_width;
  ani_main.style.minWidth = back_card_width;


  if( back_card_width.split('px')[0] > 700 )
  {
    

    if( back_card_width.split('px')[0] >= 1400 )
    {
      ani_main.style.transform = "translate(-20%, -20%)";
    }
    // console.log("BIG");
    // main_div.style.transform = "scaleX("+(700/back_card_width.split('px')[0])+") scaleY("+(615/back_card_height.split('px')[0])+")";
    main_div.style.scale = (700/back_card_width.split('px')[0]);

    main_div.style.width = "100%";
    main_div.style.height = "100%";
    // main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -150px), calc(-50% - 45%))";

  }
  else
  {
    // main_div.style.transform = "rotate(-15deg) translate(calc(-50% - -200px), calc(-50% - 10%))";
  }


  animation_time = time;
  // // console.log("hello");
  // return;
  // temp_for_time = (animation_time != 15) ? ((1.5*animation_time)/15) : 1.5;
  // const letter = document.getElementById("animation_card_image");
  // const image = document.getElementById("img_for_animation");
  // const envelope_body = document.getElementById("animation_Envelpoe_body_front");
  
  // const temp = document.getElementById('temp_for_left');


  // temp.style.transition = "transform "+temp_for_time+"s";
  // temp.style.transformStyle = "preserve-3d";
  // temp.style.transform = "translateX(140px)";

  // envelope_body.style.zIndex = "-1";
  // letter.style.zIndex = "10";

  // letter.style.transition = "transform "+temp_for_time+"s";
  // letter.style.transformStyle = "preserve-3d";
  // letter.style.transform = "unset";
  
  // image.style.transition = "transform "+temp_for_time+"s";
  // image.style.transformStyle = "preserve-3d";
  // image.style.transform = "rotate(0deg)";

  // image.style.width = "440px";
  
  temp_for_time = (animation_time != 4) ? ((500*animation_time)/4) : 500;


  img_left_ani = [];
  txt_left_ani = [];
  top_img = [];
  top_txt = [];

  transform_tectonic_img = [];
  transform_tectonic_txt = [];

  if( ani_style_val == "photo_zoom" )
  {
    const img_html = document.getElementsByClassName('html_dif_img');
    const txt_html = document.getElementsByClassName('html_dif_txt');
    for( let i = 0; i<img_html.length ; i++ )
    {
      // transform_tectonic_img.push( img_html[i].style.transform );
      if( i != 0 )
      {
        img_html[i].style.opacity = "0";
        img_html[i].style.scale += "1.2";
      }
    } 

    for( let i = 0; i<txt_html.length ; i++ )
    {
        txt_html[i].style.opacity = "0";
    } 


    my_animation = setTimeout(display_photo_zoom_animation_content , temp_for_time);
  }
  else if( ani_style_val == "photo_rise" )
  {
    const img_html = document.getElementsByClassName('html_dif_img');
    const txt_html = document.getElementsByClassName('html_dif_txt');

    for( let i = 0; i<img_html.length ; i++ )
    {
      transform_tectonic_img.push( img_html[i].style.transform );
      if( i != 0 )
      {
        img_html[i].style.opacity = "0";
        img_html[i].style.transform += " translate(0, 40px)";
      }
    } 

    for( let i = 0; i<txt_html.length ; i++ )
    {
        txt_html[i].style.opacity = "0";
    } 


    my_animation = setTimeout(display_photo_rise_animation_content , temp_for_time);
  }
  else if( ani_style_val == "photo_flow" )
  {
    const img_html = document.getElementsByClassName('html_dif_img');
    const txt_html = document.getElementsByClassName('html_dif_txt');

    for( let i = 0; i<img_html.length ; i++ )
    {
      transform_tectonic_img.push( img_html[i].style.transform );
      if( i != 0 )
      {
        img_html[i].style.opacity = "0";
        img_html[i].style.transform += " translate(0, -40px)";
      }
    } 

    for( let i = 0; i<txt_html.length ; i++ )
    {
        txt_html[i].style.opacity = "0";
    } 


    my_animation = setTimeout(display_photo_flow_animation_content , temp_for_time);

  }
  else if( ani_style_val == "neon" )
  {
    const img_html = document.getElementsByClassName('html_dif_img');
    const txt_html = document.getElementsByClassName('html_dif_txt');

    for( let i = 0; i<img_html.length ; i++ )
    {
      transform_tectonic_img.push( img_html[i].style.transform );
      if( i != 0 )
      {

        img_html[i].style.opacity = "0";
        
        
      }
    } 

    for( let i = 0; i<txt_html.length ; i++ )
    {
      transform_tectonic_txt.push( txt_html[i].style.transform );

        txt_html[i].style.opacity = "0";
        

    } 
    my_animation = setTimeout(display_neon_animation_content , temp_for_time);


  }
  else if( ani_style_val == "tumble" )
  {
    const img_html = document.getElementsByClassName('html_dif_img');
    const txt_html = document.getElementsByClassName('html_dif_txt');

    var total = 0;

    if( img_html.length >= txt_html.length )
      total = img_html.length;
    else
      total = txt_html.length;

    for( let i = 0; i<total ; i++ )
    {
      if( txt_html[i] != null )
      {
        transform_tectonic_txt.push( txt_html[i].style.transform );
        txt_html[i].style.opacity = "0";
        if( i%2 == 0 )
          txt_html[i].style.transform += "rotate(90deg) translate(450px, 0)";
        else
          txt_html[i].style.transform += "rotate(90deg) translate(-450px, 0)";
      }
      
      
      if( img_html[i] != null )
      {
        transform_tectonic_img.push( img_html[i].style.transform );
        if( i != 0 )
        {
          img_html[i].style.opacity = "0";
          if( i%2 == 0 )
            img_html[i].style.transform += "rotate(90deg) translate(450px, 0)";
          else
            img_html[i].style.transform += "rotate(90deg) translate(-450px, 0)";
        }
      }
        
      
    }



    my_animation = setTimeout(display_tumble_animation_content , temp_for_time);

  }
  else if( ani_style_val == "baseline" )
  {
    document.getElementById('card_inner_html').style.perspective = "3000px";
    const img_html = document.getElementsByClassName('html_dif_img');
    const txt_html = document.getElementsByClassName('html_dif_txt');

    for( let i = 0; i<img_html.length ; i++ )
    {
      transform_tectonic_img.push( img_html[i].style.transform );
      if( i != 0 )
      {

        img_html[i].style.opacity = "0";
        img_html[i].style.transform += "rotateX(90deg)";
        
      }
    } 

    for( let i = 0; i<txt_html.length ; i++ )
    {
      transform_tectonic_txt.push( txt_html[i].style.transform );

        txt_html[i].style.opacity = "0";
        txt_html[i].style.transform += "rotateX(90deg)";

    } 

    my_animation = setTimeout(display_baseline_animation_content , temp_for_time);

  }
  else if( ani_style_val == "tectonic" )
  {
    // var id = window.setTimeout(function() {}, 0);

    // while (id--) {
    //     window.clearTimeout(id); // will do nothing if no timeout with id is present
    // }

    const img_html = document.getElementsByClassName('html_dif_img');
    const txt_html = document.getElementsByClassName('html_dif_txt');

    

    for( let i = 0; i<img_html.length ; i++ )
    {
      transform_tectonic_img.push( img_html[i].style.transform );
      if( i != 0 )
      {

        img_html[i].style.opacity = "0";
        

      }
    } 

    for( let i = 0; i<txt_html.length ; i++ )
    {
      transform_tectonic_txt.push( txt_html[i].style.transform );

        txt_html[i].style.opacity = "0";
        

    } 

    my_animation = setTimeout(display_tectonic_animation_content , temp_for_time);

  }
  else if( ani_style_val == "slide_up" )
  {
    const img_html = document.getElementsByClassName('html_dif_img');
    const txt_html = document.getElementsByClassName('html_dif_txt');

    for( let i = 0; i<img_html.length ; i++ )
    {
      top_img.push(img_html[i].style.top.replace(/px/g, ""));
      if( i != 0 )
      {
        img_html[i].style.top = (parseInt(top_img[i])+parseInt(100))+"px";
        

      }
    }  



    for( let i = 0; i<txt_html.length ; i++ )
    {
      top_txt.push(txt_html[i].style.top.replace(/px/g, ""));
    
      txt_html[i].style.top = (parseInt(top_txt[i])+parseInt(100))+"px";
    }
    
    my_animation = setTimeout(display_inner_contains_top_set , temp_for_time);
  }
  else if( ani_style_val == "rise_text" )
  {
    const img_html = document.getElementsByClassName('html_dif_img');
    const txt_html = document.getElementsByClassName('html_dif_txt');

    for( let i = 0; i<img_html.length ; i++ )
    {
      top_img.push(img_html[i].style.top.replace(/px/g, ""));
      if( i != 0 )
      {
        img_html[i].style.top = (parseInt(top_img[i])+parseInt(100))+"px";
        // img_html[i].style.opacity = "1";

      }
    }  



    for( let i = 0; i<txt_html.length ; i++ )
    {
      top_txt.push(txt_html[i].style.top.replace(/px/g, ""));
    
      txt_html[i].style.top = (parseInt(top_txt[i])+parseInt(30))+"px";
      
      // txt_html[i].style.opacity = "1";

      // txt_html[i].style
      txt_html[i].style.cssText += "line-height: 1.5; clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);";

    }


    my_animation = setTimeout(display_inner_contains_rise_text , temp_for_time);
  }
  else if( ani_style_val == 'zoomout_text' )
  {
    const img_html = document.getElementsByClassName('html_dif_img');
    const txt_html = document.getElementsByClassName('html_dif_txt');

    for( let i = 0; i<img_html.length ; i++ )
    {
      ele_tra_img.push(img_html[i].style.transform);
      img_html[i].style.transform = img_html[i].style.transform+" scale(1.8)";
    }

    for( let i = 0; i<txt_html.length ; i++ )
    {
      txt_html[i].style.cssText += "line-height: 1.5; clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);";

    }
    
    my_animation = setTimeout(display_inner_contains_zoom_text , temp_for_time);

  }
  else if( ani_style_val == 'ani_pan' )
  {
    // // console.log("YES");
    const img_html = document.getElementsByClassName('html_dif_img');
    const txt_html = document.getElementsByClassName('html_dif_txt');

    for( let i = 0; i<img_html.length ; i++ )
    {
      img_left_ani.push(img_html[i].style.left.split('px')[0]);

      if( i != 0 )
      {
        
        img_html[i].style.left = (parseFloat(img_left_ani[i])-parseFloat(100)) +"px";
        // img_html[i].style.opacity = "0";
      }
        
    }

    for( let i = 0; i<txt_html.length ; i++ )
    {
      txt_left_ani.push(txt_html[i].style.left.split('px')[0]);
      txt_html[i].style.left = (parseFloat(txt_left_ani[i])-parseFloat(100)) +"px";
      // txt_html[i].style.opacity = "0";
    }
    my_animation = setTimeout(display_inner_contains_pan , temp_for_time);

  }
  else if( ani_style_val == 'ani_pop' )
  {
    const img_html = document.getElementsByClassName('html_dif_img');
    const txt_html = document.getElementsByClassName('html_dif_txt');

    for( let i = 0; i<img_html.length ; i++ )
    {
      // img_left_ani.push(img_html[i].style.left.split('px')[0]);

      if( i != 0 )
      {
        
        img_html[i].style.scale = "0.5";
        // img_html[i].style.opacity = "1";
      }
        
    }

    for( let i = 0; i<txt_html.length ; i++ )
    {
      
      txt_html[i].style.scale = "0.5";
      // txt_html[i].style.opacity = "1";
    }
    my_animation = setTimeout(display_inner_contains_pop , temp_for_time);

  }
 


}

function display_photo_zoom_animation_content()
{
  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  var total = 0;
  // var temp_for_time_temp = (animation_time != 4) ? ((1*animation_time)/4) : 1;
  var temp_for_time_temp2 = (animation_time != 4) ? ((3*animation_time)/4) : 3;
  var temp_for_time_temp22 = (animation_time != 4) ? ((150*animation_time)/4) : 150;
  let i = 0;

  if( img_html.length >= txt_html.length )
    total = img_html.length;
  else
    total = txt_html.length;

  

  var myInterval = setInterval( function(){
    if( i == img_html.length )
    {
      i = 0;
      var myInterval2 = setInterval( function(){
        if( i == txt_html.length )
        {
          clearInterval(myInterval2);    
        }
        else
        {
          
          txt_html[i].style.opacity = "1";

        }
        i++;
      }, temp_for_time_temp22);
      clearInterval(myInterval);
    }
    else
    {
      if( i != 0 )
      {
        img_html[i].style.opacity = "1";
        img_html[i].style.transition = "scale "+temp_for_time_temp2+"s";
        img_html[i].style.scale = "1";
      }
      
      
    }
    i++;
  
  }, temp_for_time_temp22);


}

function display_photo_rise_animation_content()
{
  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  var total = 0;
  var temp_for_time_temp = (animation_time != 4) ? ((1*animation_time)/4) : 1;
  var temp_for_time_temp2 = (animation_time != 4) ? ((3*animation_time)/4) : 3;
  var temp_for_time_temp22 = (animation_time != 4) ? ((150*animation_time)/4) : 150;
  let i = 0;

  if( img_html.length >= txt_html.length )
    total = img_html.length;
  else
    total = txt_html.length;

  

  var myInterval = setInterval( function(){
    if( i == txt_html.length )
    {
      i = 0;
      var myInterval2 = setInterval( function(){
        if( i == img_html.length )
        {
          clearInterval(myInterval2);    
        }
        else
        {
          if( i != 0 )
          {
            img_html[i].style.opacity = "1";
            img_html[i].style.transition = "transform "+temp_for_time_temp2+"s";
            img_html[i].style.transform = transform_tectonic_img[i];
          }
          

        }
        i++;
      }, temp_for_time_temp22);
      clearInterval(myInterval);
    }
    else
    {
      
      txt_html[i].style.opacity = "1";
      
    }
    i++;
  
  }, temp_for_time_temp22);
}

function display_photo_flow_animation_content()
{
  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  var total = 0;
  var temp_for_time_temp = (animation_time != 4) ? ((1*animation_time)/4) : 1;
  var temp_for_time_temp2 = (animation_time != 4) ? ((3*animation_time)/4) : 3;
  var temp_for_time_temp22 = (animation_time != 4) ? ((150*animation_time)/4) : 150;
  let i = 0;

  if( img_html.length >= txt_html.length )
    total = img_html.length;
  else
    total = txt_html.length;

  

  var myInterval = setInterval( function(){
    if( i == img_html.length )
    {
      i = 0;
      var myInterval2 = setInterval( function(){
        if( i == txt_html.length )
        {
          clearInterval(myInterval2);    
        }
        else
        {
          txt_html[i].style.opacity = "1";
        }
        i++;
      }, temp_for_time_temp22);
      clearInterval(myInterval);
    }
    else
    {
      if( i != 0 )
      {
        img_html[i].style.opacity = "1";
        img_html[i].style.transition = "transform "+temp_for_time_temp2+"s";
        img_html[i].style.transform = transform_tectonic_img[i];
      }
    }
    i++;
  
  }, temp_for_time_temp22);
}

function display_neon_animation_content()
{
  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  var total = 0;
  var temp_for_time_temp = (animation_time != 4) ? ((1*animation_time)/4) : 1;
  var temp_for_time_temp22 = (animation_time != 4) ? ((150*animation_time)/4) : 150;
  let i = 0;

  if( img_html.length >= txt_html.length )
    total = img_html.length;
  else
    total = txt_html.length;

  

  var myInterval = setInterval( function(){
    if( i == total )
    {
      clearInterval(myInterval);
    }
    else
    {
  
      if( txt_html[i] != null )
      {
        txt_html[i].style.opacity = "unset";
        txt_html[i].style.animation = "neonani "+temp_for_time_temp+"s ease-in-out 0s forwards";
        txt_html[i].classList.add("neon_anima");
      }
      
      if( i != 0 )
      {
        if( img_html[i] != null )
        {
          img_html[i].style.opacity = "unset";
          img_html[i].style.animation = "neonani "+temp_for_time_temp+"s ease-in-out 0s forwards";
          img_html[i].classList.add("neon_anima");
        }
        
      }
    }
    i++;
  
  }, temp_for_time_temp22);
}

function display_tumble_animation_content()
{
  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  var total = 0;
  var temp_for_time_temp = (animation_time != 4) ? ((1*animation_time)/4) : 1;
  var temp_for_time_temp22 = (animation_time != 4) ? ((80*animation_time)/4) : 80;
  let i = 0;

  if( img_html.length >= txt_html.length )
    total = img_html.length;
  else
    total = txt_html.length;

  

  var myInterval = setInterval( function(){
    if( i == total )
    {
      clearInterval(myInterval);
    }
    else
    {
  
      if( txt_html[i] != null )
      {
        txt_html[i].style.opacity = "1";
        txt_html[i].style.transition = "transform "+temp_for_time_temp+"s";
        if( i%2 == 0 )
          txt_html[i].style.transform = transform_tectonic_txt[i];
        else
          txt_html[i].style.transform = transform_tectonic_txt[i];
      }
      
      if( i != 0 )
      {
        if( img_html[i] != null )
        {
          img_html[i].style.opacity = "1";
          img_html[i].style.transition = "transform "+temp_for_time_temp+"s";
          if( i%2 == 0 )
            img_html[i].style.transform = transform_tectonic_img[i];
          else
            img_html[i].style.transform = transform_tectonic_img[i];
        }
        
      }
    }
    i++;
  
  }, temp_for_time_temp22);
}

function display_baseline_animation_content()
{
  temp_for_time = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;

  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  var temp_for_time_temp = (animation_time != 4) ? ((1*animation_time)/4) : 1;
  var temp_for_time_temp22 = (animation_time != 4) ? ((80*animation_time)/4) : 80;


  var total = 0;

  if( img_html.length >= txt_html.length )
    total = img_html.length;
  else
    total = txt_html.length;



  let i = 0;
  var myInterval = setInterval( function(){

    if( i == total )
    {
      clearInterval(myInterval);
    }
    else 
    {
      if( txt_html[i] != null )
      {
        console.log(transform_tectonic_txt[i]);
        txt_html[i].style.transition = "transform "+temp_for_time_temp+"s";
        txt_html[i].style.opacity = "1";
        txt_html[i].style.transform = transform_tectonic_txt[i];
      }

      if( i != 0 )
      {
        if( img_html[i] != null )
        {
          console.log(transform_tectonic_img[i]);
          img_html[i].style.transition = "transform "+temp_for_time_temp+"s";
          img_html[i].style.opacity = "1";
          img_html[i].style.transform = transform_tectonic_img[i];
        }
      }


      
    }
    i++;

  }, temp_for_time_temp22);


}

function display_tectonic_animation_content()
{
  temp_for_time = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;

  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  var temp_for_time_temp = (animation_time != 4) ? ((0.5*animation_time)/4) : 0.5;
  var temp_for_time_temp22 = (animation_time != 4) ? ((50*animation_time)/4) : 50;

  let i = 0;
  var myInterval = setInterval( function(){

    if( i == img_html.length )
    {
      clearInterval(myInterval);
    }
    else if( i != 0 )
    {
      img_html[i].style.transition = "all "+temp_for_time_temp+"s";
      img_html[i].style.opacity = "1";


      
    }
    i++;

  }, temp_for_time_temp22);


  
  my_animation = setTimeout(display_tectonic_animation_content2 , (temp_for_time_temp22*img_html.length));

}

function display_tectonic_animation_content2()
{
  temp_for_time = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;

  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  var temp_for_time_temp = (animation_time != 4) ? ((0.5*animation_time)/4) : 0.5;
  var temp_for_time_temp22 = (animation_time != 4) ? ((50*animation_time)/4) : 50;

  let i = 0;

  var myInterval2 = setInterval( function(){

    if( i == txt_html.length )
    {
      clearInterval(myInterval2);
    }
    else 
    {
      txt_html[i].style.transition = "all "+temp_for_time_temp+"s";
      txt_html[i].style.opacity = "1";


      
    }
    i++;

  }, temp_for_time_temp22);

  my_animation = setTimeout(display_tectonic_animation_content3 , (temp_for_time_temp22*txt_html.length));

}

function display_tectonic_animation_content3()
{
  temp_for_time = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;

  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  var total = 0;
  let i = 0;

  var temp_for_time_temp = (animation_time != 4) ? ((3*animation_time)/4) : 3;

  if( img_html.length >= txt_html.length )
    total = img_html.length;
  else
    total = txt_html.length;
  
  // var myInterval2 = setInterval( function(){

    // if( i == 4 )
    // {
    //   clearInterval(myInterval2);
    // }
    // else 
    // {
  for( let j = 0 ; j < total ; j++ )
  {
    if( j % 2 == 0 )
    {
      if( txt_html[j] != null )
      {
        txt_html[j].style.transition = "all "+temp_for_time_temp+"s";
        
        txt_html[j].style.transform = transform_tectonic_txt[j]+" translate(10px, 0)";
        

      }
      if( j != 0 )
      {
        if( img_html[j] != null )
        {
          img_html[j].style.transition = "all "+temp_for_time_temp+"s";
          
          img_html[j].style.transform = transform_tectonic_img[j]+" translate(10px, 0)";
          

        }
      }
    }
    else
    {
      if( txt_html[j] != null )
      {
        txt_html[j].style.transition = "all "+temp_for_time_temp+"s";
        
        txt_html[j].style.transform = transform_tectonic_txt[j]+" translate(-10px, 0)";
        

      }
      if( j != 0 )
      {
        if( img_html[j] != null )
        {
          img_html[j].style.transition = "all "+temp_for_time_temp+"s";
          
          img_html[j].style.transform = transform_tectonic_img[j]+" translate(-10px, 0)";
          

        }
      }
    }
  }
      


      
  //   }
  //   i++;

  // }, 800);

  my_animation = setTimeout(display_tectonic_animation_content4 , ( temp_for_time_temp * 1000 ));
  
}

function display_tectonic_animation_content4()
{
  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');


  var total = 0;
  let i = 0;

  var temp_for_time_temp = (animation_time != 4) ? ((0.3*animation_time)/4) : 0.3;
  var temp_for_time_temp2 = (animation_time != 4) ? ((200*animation_time)/4) : 200;

  if( img_html.length >= txt_html.length )
    total = img_html.length;
  else
    total = txt_html.length;


  var myInterval2 = setInterval( function(){
    if( i == total )
    {
      clearInterval(myInterval2);
    }
    else 
    {
      if( txt_html[i] != null )
      {
        txt_html[i].style.transition = "all "+temp_for_time_temp+"s";
        txt_html[i].style.transform = transform_tectonic_txt[i];

      }
      if( i != 0 )
      {
        if( img_html[i] != null )
        {
          img_html[i].style.transition = "all "+temp_for_time_temp+"s";
          
          img_html[i].style.transform = transform_tectonic_img[i];
          

        }
      }
    }

    i++;


  }, temp_for_time_temp2);

  // for( let j = 0 ; j < total ; j++ )
  // {
    
  //   if( txt_html[j] != null )
  //   {
  //     txt_html[j].style.transition = "unset";
  //     txt_html[j].style.transform = transform_tectonic_txt[j];

  //   }
  //   if( j != 0 )
  //   {
  //     if( img_html[j] != null )
  //     {
  //       img_html[j].style.transition = "unset";
        
  //       img_html[j].style.transform = transform_tectonic_img[j];
        

  //     }
  //   }
    
  // }


}

function display_inner_contains_pop()
{
  temp_for_time = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;

  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');


  // for( let i = 0; i<img_html.length ; i++ )
  // {
  //   if( i != 0 )
  //     img_html[i].style.opacity = "1";
  // }
  
  // for( let i = 0; i<txt_html.length ; i++ )
  // {
  //   txt_html[i].style.opacity = "1";
  // }



  let j = 0;
  var temp_for_time_temp = (animation_time != 4) ? ((1*animation_time)/4) : 1;

  var temp_for_time_temp22 = (animation_time != 4) ? ((600*animation_time)/4) : 600;

  var temp_for_time_temp222 = (animation_time != 4) ? ((100*animation_time)/4) : 100;


  var myInterval = setInterval( function(){
      if( j == 5 )
      {
        clearInterval(myInterval);
      }
      else
      {
        let i = 0;
        var myInterval2 = setInterval( function(){

          if( i == img_html.length )
          {
            clearInterval(myInterval2);
          }
          else
          {
            img_html[i].style.transition = "all "+temp_for_time_temp+"s";
            if( i != 0 )
            {
              if( img_html[i].style.opacity == "0" )
                img_html[i].style.opacity = "1";
              
              if( img_html[i].style.scale == "1" )
                img_html[i].style.scale = "0.8";
              else
                img_html[i].style.scale = "1";
            }
          }

        } , temp_for_time_temp222 );
        // for( let i = 0; i < img_html.length ; i++ )
        // {
          
        //   img_html[i].style.transition = "all "+temp_for_time_temp+"s";

        //   if( i != 0 )
        //   {
        //     if( img_html[i].style.opacity == "0" )
        //       img_html[i].style.opacity = "1";
            
        //     if( img_html[i].style.scale == "1" )
        //       img_html[i].style.scale = "0.7";
        //     else
        //       img_html[i].style.scale = "1";
        //   }
        // }

        if( j > 1 )
        {
          i = 0;
          var myInterval3 = setInterval( function(){

            if( i == txt_html.length )
            {
              clearInterval(myInterval3);
            }
            else
            {
              txt_html[i].style.transition = "all "+temp_for_time_temp+"s";


              if( txt_html[i].style.opacity == "0" )
                txt_html[i].style.opacity = "1";


              
              if( txt_html[i].style.scale == "1" )
                txt_html[i].style.scale = "0.8";
              else
                txt_html[i].style.scale = "1";
              
              i++;
            }

          } , temp_for_time_temp222 );
        }

        // if( j > 1 )
        // {
          // for( let i = 0; i < txt_html.length ; i++ )
          // {
          //   txt_html[i].style.transition = "all "+temp_for_time_temp+"s";


          //   if( txt_html[i].style.opacity == "0" )
          //     txt_html[i].style.opacity = "1";


            
          //   if( txt_html[i].style.scale == "1" )
          //     txt_html[i].style.scale = "0.7";
          //   else
          //     txt_html[i].style.scale = "1";
            
          // }
        // }
        
        // i++;
        j++;
      }
  }, temp_for_time_temp22);

}


var img_left_ani = [];
var txt_left_ani = [];

function display_inner_contains_pan()
{
  temp_for_time = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;

  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  // for( let i = 0; i<img_html.length ; i++ )
  // {
  //   if( i != 0 )
  //     img_html[i].style.opacity = "1";
  // }
  
  // for( let i = 0; i<txt_html.length ; i++ )
  // {
  //   txt_html[i].style.opacity = "1";
  // }


  var temp_for_time_temp = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;
  for( let i = 0; i<img_html.length ; i++ )
  {
    if( i != 0 )
    {
      // // console.log(img_html[i].style.left);
      img_html[i].style.transition = "all "+temp_for_time_temp+"s";
      img_html[i].style.left = img_left_ani[i]+"px";
      img_html[i].style.opacity = "1";
    }
    

  }


  let i = 0;
  const txt_htmll = document.getElementsByClassName('html_dif_txt');

  var myInterval = setInterval( function(){
    // // console.log(i);
    
      if( i == txt_html.length )
      {
        clearInterval(myInterval);
      }
      else
      {

        // // console.log(txt_htmll[i]);

        // // console.log(temp_for_time_temp);

        txt_htmll[i].style.transition = "all "+temp_for_time_temp+"s";
      
        // txt_html[i].style.top = top_txt[i]+"px";

        txt_html[i].style.left = txt_left_ani[i]+"px";

        txt_htmll[i].style.opacity = "1";

        i++;
      }
  }, 150);

}

function display_inner_contains_zoom_text()
{
  temp_for_time = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;


  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  for( let i = 0; i<img_html.length ; i++ )
  {
    if( i != 0 )
      img_html[i].style.opacity = "1";
  }
  
  for( let i = 0; i<txt_html.length ; i++ )
  {
    txt_html[i].style.opacity = "1";
  }


  

  let i =0;

  var temp_for_time_temp = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;

  for( let i = 0; i<img_html.length ; i++ )
  {
    img_html[i].style.transition = "all "+temp_for_time_temp+"s";
    img_html[i].style.transform = ele_tra_img[i]+" scale(1)";
  }

  const txt_htmll = document.getElementsByClassName('html_dif_txt');

  var myInterval = setInterval( function(){
    // // console.log(i);
    
      if( i == txt_html.length )
      {
        clearInterval(myInterval);
      }
      else
      {

        // // console.log(txt_htmll[i]);

        // // console.log(temp_for_time_temp);

        txt_htmll[i].style.transition = "all "+temp_for_time_temp+"s";
      
        // txt_html[i].style.top = top_txt[i]+"px";

        txt_html[i].style.cssText += "clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);";

        i++;
      }
  }, 150);


}

function display_inner_contains_rise_text()
{
  temp_for_time = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;


  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  for( let i = 0; i<img_html.length ; i++ )
  {
    if( i != 0 )
      img_html[i].style.opacity = "1";
  }
  
  for( let i = 0; i<txt_html.length ; i++ )
  {
    txt_html[i].style.opacity = "1";
  }

  for( let i = 0; i<img_html.length ; i++ )
  {
    
    img_html[i].style.transition = "all "+temp_for_time+"s";
    if( i != 0 )
    {
      img_html[i].style.top = top_img[i]+"px";
    }

  }  



  let i =0;

  var temp_for_time_temp = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;

  const txt_htmll = document.getElementsByClassName('html_dif_txt');

  var myInterval = setInterval( function(){
    // // console.log(i);
    
      if( i == txt_html.length )
      {
        clearInterval(myInterval);
      }
      else
      {

        // // console.log(txt_htmll[i]);

        // // console.log(temp_for_time_temp);

        txt_htmll[i].style.transition = "all "+temp_for_time_temp+"s";
      
        txt_html[i].style.top = top_txt[i]+"px";

        txt_html[i].style.cssText += "clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);";

        i++;
      }
  }, 150);

}

var top_img = [];
var top_txt = [];
function display_inner_contains_top_set() 
{
  temp_for_time = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;

  

  const img_html = document.getElementsByClassName('html_dif_img');
  const txt_html = document.getElementsByClassName('html_dif_txt');

  for( let i = 0; i<img_html.length ; i++ )
  {
    
    img_html[i].style.transition = "all "+temp_for_time+"s";
    if( i != 0 )
    {
      img_html[i].style.top = top_img[i]+"px";
    }

    img_html[i].style.opacity = "1";
  }  



  let i =0;

  var temp_for_time_temp = (animation_time != 4) ? ((3.5*animation_time)/4) : 3.5;

  const txt_htmll = document.getElementsByClassName('html_dif_txt');

  var myInterval = setInterval( function(){
    // // console.log(i);
    
      if( i == txt_html.length )
      {
        clearInterval(myInterval);
      }
      else
      {

        // // console.log(txt_htmll[i]);

        // // console.log(temp_for_time_temp);

        txt_htmll[i].style.transition = "all "+temp_for_time_temp+"s";
      
        txt_html[i].style.top = top_txt[i]+"px";

        txt_htmll[i].style.opacity = "1";


        i++;
      }
  }, 150);

  // temp_for_time = (animation_time != 15) ? ((2200*animation_time)/15) : 2200;

  // my_animation = setTimeout(display_inner_contains(top_img) , temp_for_time);
}




// stop cover animation





function zoomImage()
{
  

  temp_for_time = (animation_time != 15) ? ((1.5*animation_time)/15) : 1.5;

  
  const temp = document.getElementById('temp_for_left');
  const full_envelope = document.getElementById("animation_div");
  const image = document.getElementById("img_for_animation");

  const card_before = document.getElementById('animation_card_back_before');


  const card_back_before = document.getElementById('for_flip_card_main');

  card_back_before.style.transition = "all "+temp_for_time+"s";
  card_back_before.style.transformStyle = "preserve-3d";
  if( ani_style_val_2 != 'ani_envelope_rectangle_horizontal' )
  {
    // card_back_before.style.transform = "rotate(90deg) scale(1.1)";
    card_back_before.style.transform = "rotate(90deg) scale(1.1)";
    image.style.transition = "unset";
    image.style.transformStyle = "preserve-3d";
    // image.style.transform = "rotateX(180deg) rotate(-90deg) scale(0.9)";
    if( ani_style_val_2 == 'ani_envelope_reverse_flip' )
      image.style.transform = "rotateX(-180deg) rotate(-90deg) translate(-8px, -39px) scaleX(1.12) scaleY(0.91)";
    else
    {
      if( back_card_width.split('px')[0] > 700 )
      {
        // image.style.transform = "rotateX(180deg) rotate(-90deg) translate(172px, -222px) scaleX(1.12) scaleY(0.91)";
        // image.style.transform = "rotateX(180deg) rotate(-90deg) translate(calc(100% - calc(100% - 32%)), calc(100% - 126%)) scaleX(1.12) scaleY(0.91)";
        
        image.style.transform = "rotateX(180deg) rotate(-90deg)";
        image.style.left = "unset";
        temp.style.minHeight = back_card_height
        temp.style.maxHeight = back_card_height
        temp.style.minWidth = back_card_width;
        temp.style.maxWidth = back_card_width;
        temp.style.transform = "scaleY(1.12) scaleX(0.91) translate(calc(0%), calc(-20%))";
        // card_before.style.transform = "translate(calc(100% - 145%), calc(100% - 145%))";
        card_before.style.transform = "translate(-63%, -55%)";

        card_back_before.style.left = "-90px";
      }
      else
      {
        image.style.transform = "rotateX(180deg) rotate(-90deg) translate(-50px, 10px) scaleX(1.12) scaleY(0.91)";
      }
      
    }
  }
  else
  {
    image.style.left = "unset";
    if( back_card_width.split('px')[0] > 700 )
    {
      image.style.transform = "rotateX(180deg) rotate(-90deg) scale(0.91) translate(-2%, -36%) scaleX(1.22)";
    }
    else
    {
      
    }
    card_back_before.style.transform = "scale(1.1)";
  }

  

  temp.style.perspective = "1000px";

  // image.style.transition = "width "+temp_for_time+"s";
  // image.style.transformStyle = "preserve-3d";
  // image.style.width = "516px";

  // full_envelope.style.transition = "transform "+temp_for_time+"s";
  // full_envelope.style.transformStyle = "preserve-3d";
  // full_envelope.style.transform = "rotateY(180deg) rotateZ(-7.98deg)";

  // temp.style.transition = "transform "+temp_for_time+"s";
  // temp.style.transformStyle = "preserve-3d";
  // temp.style.transform = "rotate(-8deg)";



  temp_for_time = (animation_time != 15) ? ((1500*animation_time)/15) : 1500;

  
  my_animation = setTimeout(flip_card_ani , temp_for_time);
  
}

function flip_card_ani()
{
  temp_for_time = (animation_time != 15) ? ((1.3*animation_time)/15) : 1.3;

  const card_back = document.getElementById('animation_card_back');

  const card_front = document.getElementById('img_for_animation');

  const temp = document.getElementById('temp_for_left');

  // card_front.style.transition = "unset";
  // card_front.style.transform = "rotateX(180deg) rotate(-90deg)";

  card_back.style.transition = "all "+temp_for_time+"s";
  card_back.style.transformStyle = "preserve-3d";
  if( ani_style_val_2 == 'ani_envelope_reverse_flip' )
    card_back.style.transform = "rotateX(180deg)";
  else
    card_back.style.transform = "rotateX(-180deg)";


  card_front.style.transition = "all "+temp_for_time+"s";
  card_front.style.transformStyle = "preserve-3d";
  if( ani_style_val_2 != 'ani_envelope_rectangle_horizontal' )
  {
    if( back_card_width.split('px')[0] > 700 )
    {
      // card_front.style.transform = "rotateX(0deg) rotate(-90deg) translate(172px, -222px) scaleX(1.12) scaleY(0.91)";
      // card_front.style.transform = "rotateX(0deg) rotate(-90deg) translate(calc(100% - calc(100% - 32%)), calc(100% - 126%)) scaleX(1.12) scaleY(0.91)";
      
      card_front.style.transform = "rotateX(0deg) rotate(-90deg)";
      card_front.style.left = "unset";

      temp.style.minHeight = back_card_height
      temp.style.maxHeight = back_card_height
      temp.style.minWidth = back_card_width;
      temp.style.maxWidth = back_card_width;
      temp.style.transform = "scaleY(1.12) scaleX(0.91) translate(calc(0%), calc(-20%))";
    }
    else
    {
      card_front.style.transform = "rotateX(0deg) rotate(-90deg) translate(-50px, 10px) scaleX(1.12) scaleY(0.91)";
    }
    
  }
  else
  {
    if( back_card_width.split('px')[0] > 700 )
    {
      card_front.style.transform = "rotateX(0deg) rotate(-90deg) scale(0.91) translate(-2%, -36%) scaleX(1.22)";
    }
    else
    {
      card_front.style.transform = "rotateX(0deg) rotate(-90deg) scale(0.91) translate(-35%, 0%) scaleX(1.22)";
    }
    // card_front.style.transform = "rotateX(0deg) rotate(-90deg) scale(0.91) translate(160px, -7px) scaleX(-1.22)";
    
  }


  temp_for_time = (animation_time != 15) ? ((1500*animation_time)/15) : 1500;

  my_animation = setTimeout(envelope_minor_rotate , temp_for_time);

}

function put_whole_envelope()
{
  // jQuery('#animation_div').removeClass('animation_shadow');
  temp_for_time = (animation_time != 15) ? ((1.5*animation_time)/15) : 1.5;
  const full_envelope = document.getElementById("for_flip_card_main");

  // full_envelope.style.transform = "rotateY(180deg) rotateZ(-7.98deg) scale(1)";

  full_envelope.style.transition = "transform "+temp_for_time+"s";
  full_envelope.style.transformStyle = "preserve-3d";
  if( ani_style_val_2 == 'ani_envelope_rectangle_horizontal' )
    full_envelope.style.transform = "rotate(-15deg) scale(1)";
  else
    full_envelope.style.transform = "rotate(75deg) scale(1)";

  

}

// animation functions end



// on click function start

function opennext_tab(evt, cityName) {
  // debugger

 
  if(evt != "")
  {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    // tabcontent[i].style.display = "none";
    
    }
    tablinks = document.getElementsByClassName("child_menu");
    
    for (i = 0; i < tablinks.length; i++) {
      // // console.log(i + " :- "+ tablinks[i].className + " = " + tablinks[i].className.replace(" active", ""));
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // // console.log("end");

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    jQuery('.filter-item-cover .fpd-views-selection .fpd-item').hide();
  }

  if(cityName == 'musique')
  {
    jQuery('.add_new_class').addClass('add_new_class_music');
  }
  else
  {
    jQuery('.add_new_class').removeClass('add_new_class_music');
  }

  if(cityName == 'musique')
  {
    // jQuery('.fpd-action-btn.fpd-tooltip.fpd-primary-text-color.save_item').trigger('click');
    

    $('#details_shop_address_main_div_id').hide();

    jQuery('body').removeClass('enveloppe_cover_enveloppe');
    jQuery('body').removeClass('enveloppe_datails');
    jQuery('body').addClass('enveloppe_music');


    jQuery('#animation_div').show();
    jQuery('#music_middle_main_div_id').show();
    jQuery('.fpd-mainbar .fpd-content [data-module="manage-layers"]').css('cssText', 'display: none !important');
    jQuery('body').removeClass("enveloppe_animation");
    jQuery('.my').hide();
    for_clear_animation_timeout();

    // for clear main background
    jQuery('.fpd-main-wrapper').css({'cssText':'background: unset !important'});
    if(localStorage.getItem("custom_background_type_or_value"))
    {
      var myArray = localStorage.getItem("custom_background_type_or_value").split("$%^&$");
      
      if(myArray[0] == "image")
      {
        // // console.log("its image");
        jQuery('.fpd-main-wrapper').css({'cssText':'background-image: url("'+myArray[1]+'") !important;background-position: center center !important;background-size: contain !important;background-repeat: no-repeat !important;'});
      }
      else if(myArray[0] == "color")
      {
        // // console.log("its color");
        jQuery('.fpd-main-wrapper').css({'cssText':'background-color:'+myArray[1]+' !important'});
      }
    }

    jQuery('.my').hide(); // for hide right side panel of animation tab

    // for left side options ex :- uploads 
    jQuery('.fpd-navigation').hide();
    jQuery('.fpd-module').hide();
    jQuery('.category-filter-main').hide();
    jQuery('.fpd-list').hide(); // for elements
    jQuery('.fpd-actions-heading').hide(); // for elements heading (Elements)
    jQuery('.fpd-view-stage').hide();//hide all canvas 


    jQuery('.fpd-main-wrapper').css({'cssText':'background-image:url("'+animation_images_location+'animation_background.png") !important;background-position: center !important;'});

    main_functionalities_of_music_tab();// add right sidebar

    


    // set_animation_time(animation_time,animation_type_global);
    start_animations_main_function();
    

    jQuery('.music_main_container').show();

    jQuery('#radio_for_choose_ani').hide();


    const e2 = document.getElementById("radio_for_choose_ani");
    if(!(e2 == null))
    e2.remove();

  }
  else if(cityName == 'details')
  {
    // jQuery('.fpd-action-btn.fpd-tooltip.fpd-primary-text-color.save_item').trigger('click');
    $('#radio_for_choose_ani').hide();

    jQuery('body').removeClass('enveloppe_cover_enveloppe');
    jQuery('body').addClass('enveloppe_datails');
    jQuery('body').removeClass('enveloppe_music');

    jQuery('body').removeClass("enveloppe_animation");
    jQuery('.my').hide();
    // remove other elements start 

    // for left side options ex :- uploads 
    jQuery('.fpd-navigation').hide();
    jQuery('.fpd-module').hide();
    jQuery('.category-filter-main').hide();
    jQuery('.fpd-list').hide(); // for elements
    jQuery('.fpd-actions-heading').hide(); // for elements heading (Elements)
    // jQuery('.fpd-view-stage').hide();//hide all canvas
    jQuery('.fpd-mainbar').hide();
    
    // remove other elements end 


    // set css for design start

    
    jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(2)').click();

    // jQuery('.fpd-main-wrapper').css('max-width','1311px');
    // jQuery('.fpd-pos-right').css('','');

    // set css for design end


    show_funcitonalities_of_details_tab();

    jQuery(".fpd-product-stage").removeAttr("style");
    jQuery(".fpd-product-stage").attr("style","width:720px!important;");


    const e2 = document.getElementById("radio_for_choose_ani");
    if(!(e2 == null))
    e2.remove();


    
  }

  else if(cityName=='enveloppe')
  {

    $('.fpd-mainbar.fpd-clearfix').show();
    
    $('#radio_for_choose_ani').hide();


    // jQuery('.fpd-action-btn.fpd-tooltip.fpd-primary-text-color.save_item').trigger('click');

    $('#details_shop_address_main_div_id').hide();

    jQuery('body').addClass('enveloppe_cover_enveloppe');
    jQuery('body').removeClass('enveloppe_datails');
    jQuery('body').removeClass('enveloppe_music');


    jQuery('#main_div_details_part_id').hide();
    jQuery('#details_shop_address_main_div_id').hide();
    jQuery('body').removeClass("enveloppe_animation");
    jQuery('.my').hide();
    jQuery('.category-filter-main').show();
    jQuery('.fpd-navigation').show();
    // hide animation image
    jQuery('.fpd-view-stage').show();//show all canvas
    jQuery('.my_custom_img_tag_for_animation').hide(); // hide img of canvas

    // elements of duration and heading of animation
    jQuery('.my-custom-duration-line').hide();
    
    jQuery('.fpd-actions-heading').show(); // for elements heading (Elements)

    jQuery('.fpd-list').show(); // for elements

    jQuery('.manage_corner_enable').hide();
    jQuery('.envelop_right').show();
    jQuery('.carte_right').hide();
    jQuery('.fpd-mainbar .fpd-content [data-module="manage-layers"]').css('cssText', 'display: block !important');
    jQuery('#music_main_div').css('cssText', 'display: none !important');
    //jQuery('#music_middle_main_div_id').css('cssText', 'display: none !important');

    
    jQuery('#animation_div').hide();


    
    jQuery('#music_middle_main_div_id').hide();
    
    


    if(jQuery('.envelop_right .filter-photo.active').length>0)
    {
      
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(3)').show();
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(4)').show();
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(5)').show();
    }
    else
    {
      
      jQuery('body').addClass('disable_back');
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(3)').addClass('active');
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(4)').addClass('active');
      jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(5)').addClass('active');
    }

    jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(3)').click();

    const e2 = document.getElementById("radio_for_choose_ani");
    if(!(e2 == null))
    e2.remove();



    const e3 = document.getElementById("animation_div");
    if(!(e3 == null))
      e3.remove();

  }



  //  animation part start 

  else if(cityName=='animation')
  {

    $('.fpd-mainbar.fpd-clearfix').hide();
    


    $('#details_shop_address_main_div_id').hide();

    // $('#radio_for_choose_ani').hide();

    localStorage.clear();

    jQuery('.fpd-action-btn.fpd-tooltip.fpd-primary-text-color.save_item').trigger('click');

    jQuery('body').removeClass('enveloppe_cover_enveloppe');
    jQuery('body').removeClass('enveloppe_datails');
    jQuery('body').removeClass('enveloppe_music');

    // alert("sdfsdf");
    jQuery(".fpd-shadow-1.fpd-item.fpd-tooltip.fpd-view-active:nth-child(4)").trigger("click");
    for_clear_animation_timeout();
    jQuery('body').addClass("enveloppe_animation");
    jQuery('.my').show(); // for show right side panel of animation tab
    
    // document.getElementById("fadeIn").checked = true;
    document.getElementById('slide_in_up').checked = true;
    if(animation_type_global == "fadein")
      document.getElementById("fadeIn").checked = true;
    else if(animation_type_global == "zoomin")
      document.getElementById("ZoomIn").checked = true;
    else if(animation_type_global == "slideinleft")
      document.getElementById("slide_in_left").checked = true;
    else if(animation_type_global == "slideinup")
      document.getElementById("slide_in_up").checked = true;
    else if(animation_type_global == "slideinright")
      document.getElementById("slide_in_right").checked = true;
    
    
    jQuery('.my_custom_img_tag_for_animation').show(); // show img of canvas
    

    // change background image or color
    jQuery('.fpd-main-wrapper').css({'cssText':'background-image:url("'+animation_images_location+'animation_background.png") !important;background-position: center!important;'});
      


    // remove background of carte tab


    // for left side options ex :- uploads 
    jQuery('.fpd-navigation').hide();

    jQuery('.fpd-module').hide();
    jQuery('.category-filter-main').hide();



    jQuery('.fpd-list').hide(); // for elements

    jQuery('.fpd-actions-heading').hide(); // for elements heading (Elements)

    jQuery('.my-custom-duration-line').show();
    

    
    jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(1)').click(); // for middle content

    jQuery('.fpd-view-stage').hide();//hide all canvas   
    // animation of envelope start
    my_animation = setTimeout(function(){


      // console.log("Szdvgdzsbgxdfcb hnkbv = "+ani_type_acf);
      // select_type_main(ani_type_acf);
      start_animations_main_function();

      // do_animation_envelope(animation_type_global);
    } , 0);
    // animation of envelope end
    
    jQuery('.fpd-product-stage').css({'cssText':'width: 720px;'});
    







    // console.log("GEPJDOG");
    ani_type_acf = ani_type_acf.trim();
    console.log(" ani_type_acf = "+ani_type_acf);

    const e2 = document.getElementById("radio_for_choose_ani");
    if(!(e2 == null))
    e2.remove();


    const e3 = document.getElementById("animation_clips_main");
    if(!(e3 == null))
    e3.remove();


    const e4 = document.getElementById("animation_type_rdbtn_ch");
    if(!(e4 == null))
    e4.remove();


    // jQuery('#pro_price_range').prepend('<div id="animation_type_rdbtn_ch" class="amimation_duration_style" >  </div>');
    // jQuery('#animation_type_rdbtn_ch').append('<h3 class="animation_heading_text_type">Sélectionner le genre</h3>');
    // jQuery('#animation_type_rdbtn_ch').append('<div class="ami_input_duration"><input type="radio" onclick="select_type_main('+"'cartes'"+')" id="cartes" name="ani_type_main" value="" checked > <label for="cartes"> Cartes </label> </div>');
    // jQuery('#animation_type_rdbtn_ch').append('<div class="ami_input_duration"><input type="radio" onclick="select_type_main('+"'clips'"+')" id="clips" name="ani_type_main" value="" > <label for="clips"> Clips </label> </div>');

    jQuery('.fpd-pos-right').append('<div id="radio_for_choose_ani" class="amimation_product_main" ><div id="radio_for_choose_ani_2" class="amimation_duration_style" > </div></div>');
    if( ani_type_acf == 'clips' )
    {
      jQuery('#radio_for_choose_ani_2').append('<h3 class="animation_heading_text_type">Style d’animation</h3>');
      jQuery('#radio_for_choose_ani_2').append('<div id="ani_scroll_main" ></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'slide_up'"+')" id="slide_up" name="ani_type_2" value="" checked > <label for="slide_up"> Slide Up </label> </div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'rise_text'"+')" id="rise_text" name="ani_type_2" value="rise_text" ><label for="rise_text">Rise + Text</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'zoomout_text'"+')" id="zoomout_text" name="ani_type_2" value="zoomout_text" ><label for="zoomout_text">Zoomout + Text</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'ani_pan'"+')" id="ani_pan" name="ani_type_2" value="ani_pan" ><label for="ani_pan">Pan</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'ani_pop'"+')" id="ani_pop" name="ani_type_2" value="ani_pop" ><label for="ani_pop">Pop</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'tectonic'"+')" id="tectonic" name="ani_type_2" value="tectonic" ><label for="tectonic">Tectonic</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'baseline'"+')" id="baseline" name="ani_type_2" value="baseline" ><label for="baseline">Baseline</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'tumble'"+')" id="tumble" name="ani_type_2" value="tumble" ><label for="tumble">Tumble</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'neon'"+')" id="neon" name="ani_type_2" value="neon" ><label for="neon">Neon</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'photo_flow'"+')" id="photo_flow" name="ani_type_2" value="photo_flow" ><label for="photo_flow">Photo Flow</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'photo_rise'"+')" id="photo_rise" name="ani_type_2" value="photo_rise" ><label for="photo_rise">Photo Rise</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'photo_zoom'"+')" id="photo_zoom" name="ani_type_2" value="photo_zoom" ><label for="photo_zoom">Photo Zoom</label></div>');
      
      
      
      
      
      
    }

    if( ani_type_acf == 'cartes' )
    {
      jQuery('#radio_for_choose_ani').append('<div id="radio_for_choose_ani_3" class="amimation_duration_style" > </div>')
      jQuery('#radio_for_choose_ani_3').append('<h3 class="animation_heading_text_type">Style d’animation</h3>');
      jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope'"+')" id="ani_envelope" name="ani_type_3" value="" checked > <label for="ani_envelope"> Envelope </label> </div>');
      jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope_fast'"+')" id="ani_envelope_fast" name="ani_type_3" value="" > <label for="ani_envelope_fast"> Envelope Fast </label> </div>');
      jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope_rectangle_horizontal'"+')" id="ani_envelope_rectangle_horizontal" name="ani_type_3" value="" > <label for="ani_envelope_rectangle_horizontal"> Envelope Rectangle Horizontal </label> </div>');
      jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope_reverse_flip'"+')" id="ani_envelope_reverse_flip" name="ani_type_3" value="" > <label for="ani_envelope_reverse_flip"> Envelope Reverse Flip </label> </div>');
      jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope_rolling_card'"+')" id="ani_envelope_rolling_card" name="ani_type_3" value="" > <label for="ani_envelope_rolling_card"> Envelope Rolling Card </label> </div>');
    }


    

  }

  //  animation part end 




  



  else if(cityName=='carte')
  {

    
    // jQuery('.fpd-action-btn.fpd-tooltip.fpd-primary-text-color.save_item').trigger('click');

    $('#radio_for_choose_ani').hide();
    $('#details_shop_address_main_div_id').hide();

    // json_canvas_full_data = json2array(fpdProductsJSON[0][0]);

    jQuery('body').removeClass('enveloppe_cover_enveloppe');
    jQuery('body').removeClass('enveloppe_datails');
    jQuery('body').removeClass('enveloppe_music');


    jQuery('#main_div_details_part_id').hide();
    jQuery('#details_shop_address_main_div_id').hide();

    jQuery('body').removeClass("enveloppe_animation");
    jQuery('.my').hide();
    for_clear_animation_timeout();
    reset_and_hide_music_functionalities();
    
    
    // refresh_animation_for_userClick();
    
    // for doing animation have to change this for re-enter in animation tab start 
    // clearTimeout(window.setTimeout());
    
    // document.getElementById("animation_div").style.right="-155%";
    // document.getElementById("animation_div").style.transform = "rotateY(0deg)";
    // for doing animation have to change this for re-enter in animation tab end 




    // jQuery('.fpd-product-stage').show();//show all canvas
    jQuery('.fpd-view-stage').show();//show all canvas
    jQuery('.my_custom_img_tag_for_animation').hide(); // hide img of canvas
    jQuery('.fpd-pos-top').show();// magnify glass and undu redu functionallity




    // if background is already set then do it as before start
    if(localStorage.getItem("custom_background_type_or_value"))
    {
      var myArray = localStorage.getItem("custom_background_type_or_value").split("$%^&$");
      
      if(myArray[0] == "image")
      {
        jQuery('.fpd-main-wrapper').css({'cssText':'background-image: url("'+myArray[1]+'") !important;background-position: center center !important;background-size: contain !important;background-repeat: no-repeat !important;'});
      }
      else if(myArray[0] == "color")
      {
        jQuery('.fpd-main-wrapper').css({'cssText':'background-color:'+myArray[1]+' !important'});
      }
    }

    // if background is already set then do it as before end

    
    
    
    // elements of duration and heading of animation
    jQuery('.my-custom-duration-line').hide();

    jQuery('.fpd-actions-heading').show(); // for elements heading (Elements)

    jQuery('.fpd-list').show(); // for elements

    

    // for left side options ex :- uploads 
    jQuery('.fpd-navigation').show();

    jQuery('.fpd-module').show();

    jQuery('.fpd-module .fpd-active .fpd-categories-active').removeClass('fpd-active');


    // jQuery('.fpd-module .fpd-designs-active .fpd-head-visible').removeClass('fpd-active');
    jQuery('.category-filter-main').show();





    jQuery('body').removeClass('disable_back');
    jQuery('.manage_corner_enable').show();
    jQuery('.envelop_right').hide();
    jQuery('.carte_right').show();
    jQuery('.show').hide();
    jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(1)').show();
    jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(2)').show();
    jQuery('.filter-item-cover .fpd-views-selection .fpd-item:nth-child(1)').click();
  
    // details page elements show start 
    jQuery('.fpd-mainbar').show(); //left side menu bar
    // details page elements show end 

  
    // // console.log(json_canvas_full_data);
    // // console.log(all_element_arr);

    const e2 = document.getElementById("radio_for_choose_ani");
    if(!(e2 == null))
    e2.remove();
    
    $('#animation_div').hide();




    // $('.fpd-cell-1').on('keydown', 'textarea', function(e) {
		// 	$(this).css('height', 'auto');
		// 	$(this).height(this.scrollHeight);
		// });
		// $('.fpd-cell-1').find('textarea').keydown();

    $('.fdgdfgdfgdfgdfgfd').hide();

  }
  jQuery('.fpd-actions-wrapper .fpd-action-btn[data-action="manage-layers"]').click();
}


// onclick function end


// for create custom html of card through json object start
function custom_html_card_bkp(json_obj)
{
  // // console.log("jSONOBJECT");
  // // console.log(json_obj);
  if( ani_style_val_2 == 'ani_envelope_reverse_flip' )
    var html = '<div class="animation_html" id="animation_html" style=" transform:rotateY(-180deg); width:440px;height:650px;position:relative;overflow: hidden;">';
  else
    var html = '<div class="animation_html" id="animation_html" style=" transform:rotateY(180deg); width:440px;height:650px;position:relative;overflow: hidden;">';

  let i =0;
  let temp = 0;
  let dp = 1;
  $.each(json_obj, function(idx, obj) {
    // console.log(i);
    // console.log(obj);


    if( i == 1 )
		{
			// html += '<div id="card_outer_items" >';
		}
    var width = obj['parameters']['width']*obj['parameters']['scaleX'];
		var height = obj['parameters']['height']*obj['parameters']['scaleY'];

    // if (i == 0 ) 
    if (dp == 0 ) 
		{
			// // console.log("yesYES");
      // i++;
		}
    else
    {
      if( obj['type'] == 'image' )
      {
        if( temp == 0 )
        {
          html += '<div id="card_outer_items" >';
          temp = 1;
        }
        if( i == 1 )
        {
          back_card_height = height+'px';
          back_card_width = width+'px';
        }
        if( obj['parameters']['angle'] > 0 )
        {
          if( i != 1 )
            html += '<div class="html_dif_img" style="transform:rotate('+obj['parameters']['angle']+'deg); transform-origin: left top;width:'+width+'px;height:'+height+'px;opacity: 0;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
          else
            html += ' <div class="html_dif_img" style="transform:rotate('+obj['parameters']['angle']+'deg); transform-origin: left top;width:'+width+'px;height:'+height+'px;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
        }
        else
        {
          if( i != 1 )
            html += '<div class="html_dif_img" style="width:'+width+'px;height:'+height+'px;opacity: 0;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
          else
            html += ' <div class="html_dif_img" style="width:'+width+'px;height:'+height+'px;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
        }
          
        // jQuery('.htm_contain_'+i).addClass('html_dif_img');
        // // console.log(obj);
        html+='<img src="'+obj['source']+'" style="width:'+width+'px;height:'+height+'px;" >';
      }
      else if( obj['type'] == 'text' )
      {
        if( obj['parameters']['angle'] > 0 )
          html += '<div class="html_dif_txt" style=" transform:rotate('+obj['parameters']['angle']+'deg); transform-origin: left top; opacity: 0;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
        else
          html += '<div class="html_dif_txt" style="opacity: 0;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
        
        // jQuery('.htm_contain_'+i).addClass('html_dif_txt');
        // html += '<p style="letter-spacing: 0px; font-style: normal; font-family: Raleway;color: #000000;text-align:left;font-size:12px;">AT THE LINFORD ESTATE, BEDFORDSHIRE</p>';
        html += '<p style="letter-spacing: '+obj['parameters']['letterSpacing']+'px; font-style: '+obj['parameters']['fontStyle']+'; font-family: '+obj['parameters']['fontFamily']+';color: '+obj['parameters']['fill']+';text-align:'+obj['parameters']['textAlign']+';font-size:'+obj['parameters']['fontSize']+'px;">'+obj['parameters']['text'].replace(/\n/g, "<br>");  +'</p>';
        // // console.log(obj);
      }

      html += '</div>';


      i++;

      if( temp == 1 )
      {
        html += "</div>";
        html += '<div id="card_inner_html" style="" > ';
        temp = 2;
      }
      if( i==2)
      {
        
        // html += "</div>";
        // html += '<div id="card_inner_html" style="" > ';
      }
    }

    

    

  });
  html += "</div>";

  html+= '</div>';
  // jQuery('.fpd-product-stage').append(html);
  return html;
}
// for create custom html of card through json object end

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




// jQuery(document).on('click','.fpd-content div[data-module="images"] .close-icon',function(e){
//     jQuery(".fpd-icon-close").trigger("click");
//     jQuery('.fpd-content div[data-module="images"]').removeClass('fpd-active');
//     jQuery('.fpd-navigation div[data-module="images"]').removeClass('fpd-active');
// });


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


jQuery(document).on('click','.fpd-pos-right .fpd-views-selection .fpd-shadow-1',function(e){ //// console.log('svfhgds');
    var child=jQuery(this).index()+1;

    jQuery('.fpd-pos-right .fpd-views-selection .fpd-shadow-1').removeClass('fpd-view-active');
    jQuery(this).addClass('fpd-view-active');
    jQuery('.fpd-main-wrapper > .fpd-views-wrapper .fpd-views-selection .fpd-shadow-1:nth-child('+child+')').click();
    jQuery('.fpd-actions-wrapper .fpd-action-btn[data-action="manage-layers"]').click();
});


jQuery(document).on('click','.product-popup[data-module="images"] .fpd-item',function(e){
  
  jQuery('.popup-cover-main.product-popup').removeClass('fpd-active');
});

// jQuery(document).on('click','.fpd-grid_cat .fpd-category',function(e){ // console.log('sdjfsdhfsd');
//   // alert("called");
//   var search=jQuery(this).attr('data-search');
//   jQuery('.fpd-grid_cat .fpd-category').removeClass('active');
//   jQuery(this).addClass('active');
//   if(jQuery('.fpd-back.fpd-btn').length>0){
//     jQuery('.fpd-back.fpd-btn').click();
//   }
//   if(search=='couleurs'){
//     // alert("colors called");
//     jQuery('.fpd-secondary-module').addClass('color-active');
//     jQuery('.fpd-secondary-module').removeClass('text-active');
//   }
//   else{
//      jQuery('.fpd-secondary-module').removeClass('color-active');
//     jQuery('.fpd-secondary-module').addClass('text-active');
//   }
//   jQuery('.fpd-secondary-module .fpd-categories-active .fpd-grid .fpd-category[data-search="'+search+'"]')[0].click();

//   jQuery('.fpd-element-toolbar-smart .fpd-color-palette.fpd-grid').clone().prependTo(jQuery(".fpd-secondary-module .fpd-color-wrapper .fpd-scroll-area"));
      
//     if(search=='couleurs'){
//     jQuery('.fpd-secondary-module.color-active .fpd-grid.fpd-grid-contain').prepend('<span class="bold_red">Motifs spéciaux</span>');
//   }  
//   //jQuery('.fpd-secondary-module .fpd-categories-active .fpd-grid .fpd-category[data-search="couleurs"]').click();
//   // jQuery('.fpd-categories-active .fpd-grid .fpd-category[data-search="'+search+'"]').click();
// });

jQuery(document).on('click','.fpd-navigation .fpd-tooltip[data-module="designs"]',function(e){
  jQuery('.fpd-content > .fpd-categories-active').hide();
  jQuery('.fpd-list .fpd-list-row:first').click();
  jQuery('#carte #mCSB_6_container .fpd-category[data-search="couleurs"]').click();
});
jQuery(document).on('click','.image_open_button',function(e){
    jQuery('.fpd-secondary-module .popup-cover-main.product-popup').addClass('fpd-active');
    jQuery('.fpd-navigation .fpd-tooltip').removeClass('fpd-active');
    jQuery('.fpd-navigation .fpd-tooltip[data-module="images"]').addClass('fpd-active');
    jQuery('.fpd-secondary-module .fpd-designs-active').removeClass('fpd-active'); 
});

jQuery(document).on('click','.product_top_menu li.child_menu',function(e){ 
// debugger
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

jQuery(document).on('click','.fpd-shadow-1.fpd-item.fpd-tooltip.fpd-view-active:nth-child(3)',function(e){ 

  jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-cheat"]').hide();
  jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-timbre"]').hide();

 });
    
jQuery(document).on('click','.fpd-shadow-1.fpd-item.fpd-tooltip.fpd-view-active:nth-child(4)',function(e){ 

  jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-cheat"]').show();
  jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="text"]').show();
  envelope_cap_text = jQuery('.fpd-list-row').find('textarea').val();
  // alert(envelope_cap_text);


});
jQuery(document).on('click','.fpd-shadow-1.fpd-item.fpd-tooltip.fpd-view-active:nth-child(5)',function(e){ 

        jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-timbre"]').show();
        jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-cheat"]').hide();
 });

jQuery(document).on('click','.fpd-secondary-module .fpd-color-wrapper .fpd-item',function(e){ // // console.log('color');
    var child=jQuery(this).index()+1;
    // // console.log(child);

    // on click color dots
    // alert("child = "+child);
    // jQuery('.fpd-element-toolbar-smart .fpd-color-wrapper.fpd-color-picker .fpd-item:nth-child('+child+')').click();
});

jQuery(document).on('click','.top_button',function(e){ 

     // var next=jQuery('.child_menu.active').next('.child_menu');jQuery(next)[0].click();
  if( jQuery('#choose_card_envelope_option').hasClass('active') )
    jQuery('#choose_card_envelope_option').removeClass('active');
  else
    jQuery('#choose_card_envelope_option').addClass('active');

  var canvas = document.getElementsByClassName("lower-canvas");
  var dataURL = canvas[0].toDataURL({ pixelRatio: 30000 });


  document.getElementById('card_image_choose').src = dataURL;
  document.getElementById('card_image_2_choose').src = dataURL;

  dataURL = canvas[2].toDataURL({ pixelRatio: 30000 });

  document.getElementById('envelope_image_choose').src = dataURL;
    
});

jQuery('body').append('<div class="popup_choose_envelope" id="choose_card_envelope_option"> <div id="inner_choose_envelope_option" > <div onclick="select_type_main('+"'clips'"+')" id="choose_enve_no" > <img src="" id="card_image_choose" /> </div> <div onclick="select_type_main('+"'cartes'"+')" id="choose_enve_yes" > <img src="" id="envelope_image_choose" /> <img src="" id="card_image_2_choose" /> </div> </div> </div>');

// envois function start 

var guests_count_for_number_before_textbox = 1;
var for_sent_status_row_number = 0;
var for_sent_status_row_count = 0;
var email_for_update_guests_details = "";
var total_select_emails = [];

var product_main_price = "";





$("body").on('click', ".popup-opener", function(e){
  e.preventDefault();
  var $parents = $(this).attr('data-popup-id');
  var $customPop = $(this).attr('data-overlay');
  $("div[data-popup='" + $parents + "']").addClass("active");
  if($customPop == "true"){$('.overlay').addClass("active");}
  $("div[data-popup='" + $parents + "']").siblings(".cs-popup").removeClass("active");
  $(".close-icon").addClass("active");
  $(this).addClass("active");
  $("body").addClass("popup-active");
});

$("body").on('click', ".close-icon", function(e){
  e.preventDefault();
  var $parents = $('.active').attr('data-popup');
  $(".cs-popup").removeClass("active");
  $('.overlay').removeClass("active");
  $('.popup-opener').removeClass("active");
  $('.close-icon').removeClass("active");
  $('body').removeClass("popup-active");
});

$("body").on('click', ".overlay", function(e){
  e.preventDefault();
  var $parents = $('.active').attr('data-popup');
  $('.cs-popup').removeClass('active');
  $('.overlay').removeClass("active");
  $('.popup-opener').removeClass("active");
  $('.close-icon').removeClass("active");
  $('body').removeClass("popup-active");
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    $(".cs-popup").removeClass("active");
    $('.overlay').removeClass("active");
    $('.popup-opener').removeClass("active");
    $('.close-icon').removeClass("active");
    $('body').removeClass("popup-active");
  }
});





// for additional guest details in insert form start
function insert_additional_guest_detals_in_insert_data_popup()
{
  if(document.getElementById('ajouter-oui').checked == true)
  {
    guests_count_for_number_before_textbox=1;
    jQuery('#additional_guest_details_insert_form_id').remove();
    jQuery('.div_insert_details_form').append('<div id="additional_guest_details_insert_form_id" class="ajouter-contact-cover"></div>');
    jQuery('#additional_guest_details_insert_form_id').append('<div class="invites-main"><div id="add_guests_information_1" class="invites-cover"><label class="input-lable" style="display: flex;" ><div id="number_of_guests_1">1</div>.</label><div id="guests_names" style="display: flex; align-items: center; "><div class="form-group"><input type="text" placeholder="Nom" id="name_1" class="form-input"></div><div class="form-group"><input type="text" placeholder="Prénom" id="first_name_1" class="form-input"></div></div></div></div><div class="add-btn"><a onclick="add_another_guest_click()" class="theme-btn">add btn</a></div>');
  }
  else if(document.getElementById('ajouter-non').checked == true )
  {
    guests_count_for_number_before_textbox=1;
    jQuery('#additional_guest_details_insert_form_id').remove();
  }
}



// for additional guest details in insert form end




function envois_email_submit_clk()
{
  // var additional_guest=[];
  if(document.getElementById('ajouter-oui').checked==true)
  {
    // var additional_guest=new Array('yes' : new Array()); //["yes" , "[prenom , nom]"]
    
    // additional_guest = ['yes'] , 'fname$%^$name'];
    
    additional_guest = ['yes'];
    for(let i=0;i<guests_count_for_number_before_textbox;i++)
    {
      additional_guest.push(document.getElementById('first_name_'+(i+1)).value+"$%^$"+document.getElementById('name_'+(i+1)).value );
    }
  }
  else if(document.getElementById('ajouter-non').checked==true)
  {
    additional_guest = ['no'];
  }
  
  jQuery('body').addClass('ajax_loader');
  jQuery.ajax({
    url: my_ajax_object_for_invois_email_insert.ajax_url,

    cache: false,
    type: 'POST',
    
    data: {
      'action':'display_custom_invois_email_insert_action',
      'user_email':document.getElementById('user_email').value,
      'user_name':document.getElementById('user_name').value,
      'user_first_name':document.getElementById('user_first_name').value,
      'user_telephone':document.getElementById('user_telephone').value,
      'additional_guest':additional_guest,
    },
    success: function(result){
      result = result.slice(0, -1);
      // guests_count_for_number_before_textbox = 1;
      // // console.log(result);
      document.getElementById('user_email').value = "";
      document.getElementById('user_name').value = "";
      document.getElementById('user_first_name').value = "";
      document.getElementById('user_telephone').value = "";
      document.getElementById('ajouter-non').checked = false;
      document.getElementById('ajouter-oui').checked = false;
      jQuery('#additional_guest_details_insert_form_id').remove();
      // table.ajax.reload();
      // datatable_update();
      // document.getElementById('invois_table_body_contain').innerHTML = result;
      document.getElementsByClassName('close-icon')[0].click();
     jQuery('#user_email_details_table_container').DataTable().destroy();
      jQuery('#user_email_details_table_container').find('tbody').html(result);
      update_table();
      jQuery('body').removeClass('ajax_loader');
    }
  });
  return false;
}

function reset_guest_number()
{
  guests_count_for_number_before_textbox = 1;
  jQuery('#additional_guest_details_insert_form_id').remove();
  document.getElementById('user_email').value = "";
  document.getElementById('user_name').value = "";
  document.getElementById('user_first_name').value = "";
  document.getElementById('user_telephone').value = "";
  document.getElementById('ajouter-non').checked = false;
  document.getElementById('ajouter-oui').checked = false;
}


function update_guests_details_outside_btn_clk()
{
  // // console.log("this is my session = "+"<%=Session['UserName'] %>");

  additional_guest = ['yes'];
  for(let i=0;i<guests_count_for_number_before_textbox;i++)
  {
    try
    {
      additional_guest.push(document.getElementById('first_name_'+(i+1)).value+"$%^$"+document.getElementById('name_'+(i+1)).value );
    }
    catch(err)
    {

    }
  }
  
  
  jQuery('body').addClass('ajax_loader');
  jQuery.ajax({
    url: my_ajax_object_for_invois_email_insert.ajax_url,

    cache: false,
    type: 'POST',
    
    data: {
      'action':'display_custom_invois_email_insert_action',
      'email_for_change_guest_details':email_for_update_guests_details,
      'guests_details':additional_guest,
    },
    success: function(result){
      result = result.slice(0, -1);
      email_for_update_guests_details = "";
      // document.getElementById('invois_table_body_contain').innerHTML = result;

      document.getElementsByClassName('close-icon')[0].click();
      jQuery('#user_email_details_table_container').DataTable().destroy();
      jQuery('#user_email_details_table_container').find('tbody').html(result);
      update_table();
      // $('#order_tracking_table_container').DataTable().destroy();
      // $('#order_tracking_table_container').find('tbody').html(result);
      // update_table_order_tracking();
      jQuery('body').removeClass('ajax_loader');
    }
  });

  
}


function popup_open_for_guests_details(arr,email)
{
  email_for_update_guests_details = email;
  arr = arr.split('$%^&*$');
  guests_count_for_number_before_textbox = 1;
  jQuery('.popup_contain_outside_additional_guest').remove();
  jQuery('.invites-table').addClass('active');
  jQuery('.popup_menu_for_add_addtional_guest_outside').append('<div class="popup_contain_outside_additional_guest">  </div>');
  jQuery('.popup_contain_outside_additional_guest').append('<div class="invites-main"><div id="add_guests_information_1" class="invites-cover"><label class="input-lable" style="display: flex;" ><div id="number_of_guests_1">1</div>.</label><div id="guests_names" style="display: flex; align-items: center; "><div class="form-group"><input type="text" placeholder="Nom" id="name_1" class="form-input"></div><div class="form-group"><input type="text" placeholder="Prénom" id="first_name_1" class="form-input"></div></div></div></div><div class="add-btn"><a onclick="add_another_guest_click()" class="theme-btn">add btn</a></div>');
  if(arr != "no")
  {
    let t = 0;
    // // console.log(":: = "+arr);
    for(let i=1;i<(arr.length/2);i++)
    {
      add_another_guest_click();
      // // console.log("first name = "+arr);
      t++;
    }
    t=0;
    for(let i=0;i<arr.length;i=i+2)
    {
      document.getElementById('first_name_'+(t+1)).value = arr[i].split("$%$")[1];
      t++;
    }
    t=0;
    for(let i=1;i<arr.length;i=i+2)
    {
      // alert('name_'+(t+1)+" = "+arr[i].split("$%$")[1]);
      document.getElementById('name_'+(t+1)).value = arr[i].split("$%$")[1];
      t++;
    }

  }
}

function popup_close_for_guests_details()
{
  guests_count_for_number_before_textbox=1;
  jQuery('.popup_contain_outside_additional_guest').remove();
  // for(let i=1;i<guests_count_for_number_before_textbox;i++)
  // {
  //   jQuery('#add_guests_information_'+(i+1)).remove();
  // }
  jQuery('.invites-table').removeClass('active');
}




function add_another_guest_click()
{
  guests_count_for_number_before_textbox++;
  
  jQuery('.invites-main').append('<div id="add_guests_information_'+guests_count_for_number_before_textbox+'" class="invites-cover"><label class="input-lable" style="display: flex;" ><div id="number_of_guests_'+guests_count_for_number_before_textbox+'">'+guests_count_for_number_before_textbox+'</div>.</label><div id="guests_names" style="display: flex; align-items: center;"><div class="form-group"><input type="text" placeholder="Nom" id="name_'+guests_count_for_number_before_textbox+'" class="form-input"></div><div class="form-group"><input type="text" placeholder="Prénom" id="first_name_'+guests_count_for_number_before_textbox+'" class="form-input"></div><span onclick="remove_another_guest_click('+"'"+guests_count_for_number_before_textbox+"'"+')" id="'+guests_count_for_number_before_textbox+'" class="invites-remove">remove</span></div></div>');

}

function remove_another_guest_click(number)
{
  if(number == guests_count_for_number_before_textbox)
    guests_count_for_number_before_textbox--;
  jQuery('#add_guests_information_'+number).remove();
}

function mail_sent_btn_clk_in_popup()
{
  jQuery('.shipping-price-link').click();
  // jQuery('body').addClass('ajax_loader');
  // jQuery.ajax({
  //   url: my_ajax_object_for_update_invoice_table.ajax_url,
  
  //   cache: false,
  //   type: 'POST',
  //   data: {
  //     'action':'for_update_invoice_table_action',
  //     'row_number':for_sent_status_row_number,
  //   },
  //   success: function(result){
  //     result = result.slice(0, -1);
  //     // console.log(result);
      
      
  //     // document.getElementById('invois_to_send_btn_'+for_sent_status_row_count).innerHTML = "RELANCER";
  //     document.getElementById('invois_table_body_contain').innerHTML = result;
  //     document.getElementById('invois_sent_option_close_btn').click();
  //     jQuery('body').removeClass('ajax_loader');
  //   }
  // });
}


function popup_after_click_to_send_btn(number , count)
{
  for_sent_status_row_number = number;
  for_sent_status_row_count = count;
}


function invois_record_delete_from_table(email)
{

  jQuery('body').addClass('ajax_loader');
  jQuery.ajax({
    url: my_ajax_object_for_invois_email_insert.ajax_url,

    cache: false,
    type: 'POST',
    
    data: {
      'action':'display_custom_invois_email_insert_action',
      'delete_record':email,
    },
    success: function(result){
      result = result.slice(0, -1);
      
      

      // document.getElementById('invois_table_body_contain').innerHTML = result;
      jQuery('#user_email_details_table_container').DataTable().destroy();
      jQuery('#user_email_details_table_container').find('tbody').html(result);
      update_table();
      jQuery('body').removeClass('ajax_loader');
    }
  });

}










// var importNonce = localizedData.import_nonce;

//     jQuery('#btn_upload_1').on('click', function( event ) {
//       debugger
//         event.stopPropagation(); // Stop stuff happening
//         event.preventDefault(); // Totally stop stuff happening
//         var formData = new FormData();
//         var importFiles = jQuery('#file_import')[0].files;
//         // console.log(importFiles);

//         // For EACH file, append to formData.
//         // NOTE: Just appending all of importFiles doesn't transition well to PHP.
//         jQuery.each( importFiles, function( index, value ) {
//             var name = 'file_' + index;
//             formData.append( name, value )
//         });

//       });














jQuery("#btn_upload_1").on('click',function(event){
    // debugger
    // event.stopPropagation(); // Stop stuff happening
    // event.preventDefault(); // Totally stop stuff happening
    // var formData = new FormData();
    // var importFiles = jQuery('#file_import')[0].files;
    // jQuery.ajax({
    //   url: my_ajax_object_for_change_product_details_in_invois.ajax_url,
    //   cache: false,
    //   type: 'POST',
    //   data: {
    //     'action':'for_user_email_data_import_action',
    //   },
    //   success: function(result){
    //     // console.log(result);
    //   }
    // });

});

// function tracking_change_product_from_dropdown(selected_product_id)
// {
//   // alert(selected_product_id);
//   jQuery('body').addClass('ajax_loader');
//   jQuery.ajax({
//     url: my_ajax_object_for_change_product_details_in_invois.ajax_url,
//     cache: false,
//     type: 'POST',
//     data: {
//       'action':'for_change_product_details_in_invois_action',
//       'selected_product_id':selected_product_id,
//     },
//     success: function(result){
//       result = result.slice(0, -1);
//       jQuery('.invois_select_main').html(result.split('$%^&*$$%^&*$')[0]);
//       document.getElementById('invois_table_body_contain').innerHTML = result.split('$%^&*$$%^&*$')[1];
//       document.getElementById('number-count_id').innerHTML = "0";
//       document.getElementById('selectall').checked = false;
//       document.getElementById('invois_product_description_tag').innerHTML = result.split('$%^&*$$%^&*$')[2];
//       jQuery('body').removeClass('ajax_loader');
//       // console.log(selected_product_id);
//     }
//   });
  
// }

function open_drop_down_for_products()
{
  jQuery('#invois_show_all_products_drop_down_id').slideToggle();
}


function persionalize_product_btn_clk()
{
  jQuery('body').addClass('ajax_loader');
  jQuery.ajax({
    url: my_ajax_object_for_go_personalize_product_page.ajax_url,
  
    cache: false,
    type: 'POST',
    data: {
      'action':'for_go_personalize_product_page_action',
      
    },
    success: function(result){
      result = result.slice(0, -1);
      jQuery('body').removeClass('ajax_loader');
      window.location.replace(result);
    }
  });
}



// update_table();
// function update_table()
// {

// // $(document).ready(function() {
//   jQuery('#user_email_details_table_container').DataTable( {
//       columnDefs: [ {
//           orderable: false,
//           targets:   0
//       } ],
//       order: [[ 1, 'asc' ]],
//       "oLanguage": {
//         "sInfo" : '<p id="page-list-id" class="page-list"> _START_ - _END_ sur _TOTAL_ </p>', 
//       },
//       searching: false, 
//       "lengthChange": false,
//       pagingType: 'simple',
//       pageLength: 5,
//       language: {
//         oPaginate: {
//           sNext: '<div onclick="table_pagination_net_btn_clk()" class="table-bottom-btn"><a class="slick-btn next">next</a></div>',
//           sPrevious: '<div onclick="table_pagination_net_btn_clk()" class="table-bottom-btn"><a class="slick-btn previous">previous</a></div>',
          
//         }
//       }  

//   });
// // } );

// }








// envois function end 












jQuery(document).on("click", ".custom_color.fpd-tool-color.fpd-tooltip.tooltipstered", function(){ 
 jQuery("#colorPicker").trigger("click");
});

jQuery(document).on("change", "#colorPicker", function(){ 
  var background_color =  jQuery(this).val();
  jQuery('.custom_color .tool_color_name').html(jQuery(this).val());
  jQuery('.custom_color .tool_color').attr('style', 'background-color: '+background_color+' !important');
  jQuery('.fpd-product-designer-wrapper .fpd-views-inside-left .fpd-main-wrapper').attr('style', 'background-color: '+background_color+' !important');
 
});

jQuery( document ).ready(function() {
   // alert("Hello....");
  
  jQuery('.fpd-draggable-dialog.fpd-container.fpd-shadow-2.fpd-grid-columns-2.ui-draggable').removeClass('fpd-active');
  setTimeout(function(){
     //jQuery('.fpd-actions-container').append('<span class="fpd-filter-icon"></span>');
     //jQuery('.my_custom_remove_class').prepend('<span class="fpd-filter-icon"></span>');
     jQuery(".my_custom_remove_class div:nth-child(6)").after('<span class="fpd-filter-icon">Plus d’options</span>');
     jQuery('.fpd-draggable-dialog.fpd-container').removeClass('fpd-active');
     
     //jQuery('.fpd-container.fpd-views-inside-left').addClass('fpd-sidebar');
   jQuery(".fpd-navigation.fpd-primary-bg-color").append('<div data-module="designs_color" class="fpd-tooltip tooltipstered"><span class="fpd-nav-icon fpd-icon-design-library"></span><span class="fpd-label">MODIFIER COULEURS</span></div>');
  // jQuery(".fpd-navigation.fpd-primary-bg-color").append('<div data-module="modifier_cachet" class="fpd-tooltip tooltipstered"><span class="fpd-nav-icon fpd-icon-design-library"></span><span class="fpd-label">MODIFIER CACHET</span></div>');  
   jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="designs_color"]').hide();
  // jQuery('.fpd-navigation.fpd-primary-bg-color div[data-module="modifier_cachet"]').hide();
   jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-cheat"]').hide();
  jQuery('.fpd-navigation.fpd-primary-bg-color div[data-dynamic-designs-id="modifier-timbre"]').hide();




//   jQuery(".fpd-primary-bg-color .fpd-tooltip:nth-child(4)").click(function(){
//     jQuery('.fpd-module.fpd-categories-active[data-dynamic-designs-id="modifier-cheat"]').addClass("left-465");
//     jQuery('.fpd-designs-active.fpd-head-visible[data-dynamic-designs-id="modifier-cheat"]').addClass("left-465");
//     jQuery(".fpd-module.fpd-categories-active[data-dynamic-designs-id='modifier-cheat'] .mCustomScrollBox .mCSB_container .fpd-category:first").click();
//     // var color_container = jQuery("#mCSB_13_container").html();
//     // console.log("testing"+color_container);
//     // jQuery(".fpd-module.left-465.fpd-designs-active.fpd-head-visible .fpd-grid_cat.fpd-grid-contain.fpd-padding").append(jQuery("#mCSB_13_container").html());
// });

// jQuery(".fpd-primary-bg-color .fpd-tooltip:nth-child(3)").click(function(){
//   // jQuery('.fpd-module.fpd-categories-active[data-dynamic-designs-id="modifier-cheat"]').removeClass("left-465");
//   jQuery('.fpd-designs-active.fpd-head-visible[data-dynamic-designs-id="modifier-cheat"]').removeClass("left-465");
//   jQuery(".fpd-categories-active.fpd-module").removeClass("fpd-active");
// });

// jQuery(".fpd-primary-bg-color .fpd-tooltip:nth-child(2)").click(function(){
//   // jQuery('.fpd-module.fpd-categories-active[data-dynamic-designs-id="modifier-cheat"]').removeClass("left-465");
//   jQuery('.fpd-designs-active.fpd-head-visible[data-dynamic-designs-id="modifier-cheat"]').removeClass("left-465");
//   jQuery(".fpd-categories-active.fpd-module").removeClass("fpd-active");
// });

  }, 2000);




});

jQuery(document).on("click", ".fpd-list-row.fpd-add-layer.fdgdfgdfgd:nth-child(2)", function(){ 
 jQuery('.fpd-module.fpd-categories-active[data-dynamic-designs-id="modifier-cheat"]').addClass('fpd-module fpd-active fpd-designs-active fpd-head-visible');
 open_design_color('No');
 setTimeout(function(){
      jQuery('.fpd-category.fpd-item[data-search="modifier timbre"]').addClass('active');
      jQuery('.fpd-category.fpd-item[data-search="modifier timbre"]')[0].click();
      jQuery('.fpd-navigation .fpd-tooltip[data-dynamic-designs-id="modifier-timbre"]').addClass('fpd-active');
      jQuery('.fpd-draggable-dialog.fpd-container').removeClass('fpd-active');
      jQuery('.fpd-list-row.fpd-add-layer.fdgdfgdfgd:nth-child(2)').trigger("click");

  }, 100);
});


jQuery(document).on("click", ".fpd-list-row.fpd-add-layer.fdgdfgdfgd:nth-child(3)", function(){ 
  
jQuery('.fpd-module.fpd-categories-active[data-dynamic-designs-id="modifier-cheat"]').addClass('fpd-module fpd-active fpd-designs-active fpd-head-visible');
 open_design_color('No');
 setTimeout(function(){
      // jQuery('.fpd-category.fpd-item[data-search="musique"]').addClass('active');
      // jQuery('.fpd-category.fpd-item[data-search="musique"]')[0].click();
      jQuery('.fpd-navigation .fpd-tooltip[data-dynamic-designs-id="modifier-cheat"]').addClass('fpd-active');
      jQuery('.fpd-draggable-dialog.fpd-container').removeClass('fpd-active');
      jQuery('.fpd-list-row.fpd-add-layer.fdgdfgdfgd:nth-child(3)').trigger("click");
  }, 100);
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

jQuery(document).on('click','.fpd-color-wrapper.fpd-color-picker .fpd-color-palette.fpd-grid .fpd-item.fpd-tooltip',function(e){ 
    var background_color =  jQuery(this).attr('title');
    background_color_ani = background_color;




    jQuery.ajax({
    url: my_ajax_object_for_shop_details.ajax_url,

    cache: false,
    type: 'POST',
    
    data: {
      'action':'save_envelop_preview_color',
      'product_id':result_v,
      'enveloppe_color':background_color_ani,
      
    },
    // success: function(result){
    //   shop_details = result.slice(0, -1);
    // }
  });
});


jQuery(document).on("click", "[data-dynamic-designs-id='modifier-cheat'] picture", function(){ 

  var stemp_img_val =  jQuery(this).attr('data-img');
  stemp_img = stemp_img_val;
  // alert(stemp_img);
});


jQuery(document).on("change", "#myonoffswitch_carte", function(){ 
 
  if (jQuery(this).prop('checked')==true){ 
        var canvas = document.getElementsByClassName("lower-canvas");
        jQuery(canvas[0]).css("border-radius", "45px");
    }
    else
    {
      var canvas = document.getElementsByClassName("lower-canvas");
      jQuery(canvas[0]).css("border-radius", "0px");
    }    
});







jQuery(".order_no_filter").keyup(function(){
  jQuery(".comm-box").hide();
  jQuery(".comm-box").each(function(){
      var filter_val = jQuery(".order_no_filter").val();
      var order_no = jQuery(this).data("order-id");
      if(filter_val==order_no){
          jQuery(this).show();
      }
      if(filter_val==""){
          jQuery(".comm-box").show();
      }
  });
});

// jQuery(document).ready( function () {
//   // jQuery('#tracking_table_body_contain').DataTable();

//   $('#tracking_table_body_contain').DataTable( {
//     columnDefs: [ {
//         orderable: false,
//         targets:   0
//     } ],
//     select: {
//         selector: 'td:first-child'
//     },
//     order: [[ 1, 'asc' ]],

//     "oLanguage": {
//       "sInfo" : '<p id="page-list-id" class="page-list"> _START_ - _END_ sur _TOTAL_ </p>',// 
//     },
//     searching: false, 
//     "lengthChange": false,
//     pagingType: 'simple',
//     pageLength: 10,
//     language: {
//       oPaginate: {
//         sNext: '<div class="table-bottom-btn"><a class="slick-btn next">next</a></div>',
//         sPrevious: '<div class="table-bottom-btn"><a class="slick-btn previous">previous</a></div>',
//         // sFirst: '<span class="page-list-start">  </span>',
//         // sLast: '<span class="page-list-end">  </span>'
//       }
//     }  

// });
// } );











// order tracking start 

// update_table_order_tracking();
// function update_table_order_tracking()
// {

// // $(document).ready(function() {
//   $('#order_tracking_table_container').DataTable( {
//       columnDefs: [ {
//           orderable: false,
//           targets:   0
//       } ],
//       order: [[ 1, 'asc' ]],

//       "oLanguage": {
//         "sInfo" : '<p id="page-list-id" class="page-list"> _START_ - _END_ sur _TOTAL_ </p>',
//       },
//       searching: false, 
//       "lengthChange": false,
//       pagingType: 'simple',
//       pageLength: 10,
//       language: {
//         oPaginate: {
//           sNext: '<div class="table-bottom-btn"><a class="slick-btn next">next</a></div>',
//           sPrevious: '<div class="table-bottom-btn"><a class="slick-btn previous">previous</a></div>',
//           // sFirst: '<span class="page-list-start">  </span>',
//           // sLast: '<span class="page-list-end">  </span>'
//         }
//       }  

//   });
// // } );

// }






// change product from  dropdown
function change_product_from_dropdown_for_tracking(selected_product_id)
{
  // jQuery('body').addClass('ajax_loader');
  jQuery.ajax({
    url: my_ajax_object_for_change_product_details_in_invois.ajax_url,
    cache: false,
    type: 'POST',
    data: {
      'action':'for_change_product_details_in_invois_action',
      'page' : 'tracking',
      'selected_product_id':selected_product_id,
    },
    success: function(result){
      result = result.slice(0, -1);
      jQuery('#tracking_select_for_product').html(result.split('$%^&*$$%^&*$')[0]);
      // document.getElementById('tracking_order_body_contain').innerHTML = result.split('$%^&*$$%^&*$')[1];
      // document.getElementById('number-count_id').innerHTML = "0";
      document.getElementById('selectall').checked = false;
      // document.getElementById('invois_product_description_tag').innerHTML = result.split('$%^&*$$%^&*$')[2];
      document.getElementsByClassName('close-icon')[0].click();
      $('#order_tracking_table_container').DataTable().destroy();
      $('#order_tracking_table_container').find('tbody').html(result.split('$%^&*$$%^&*$')[1]);
      update_table_order_tracking();
      jQuery('body').removeClass('ajax_loader');
      
    }
  });
}

// order tracking end 

jQuery(".theme-btn-secound .tabble-btn-toutes").click(function(){
  jQuery(".address_book_popup").show(); 
});

jQuery(".dashboard-nav-list").each(function(){
  jQuery(this).click(function(){
  jQuery(this).addClass('active');
}) ;
});

jQuery(".my_account_menu_item").each(function(){
  jQuery(this).find('a').addClass("menu-list-title");
  if(jQuery(this).hasClass("form-checkout")){
     jQuery(this).find('a').addClass("payment-card-icon");     
  }
  if(jQuery(this).hasClass("orders")){
     jQuery(this).find('a').addClass("commandes-icon");     
  }
  if(jQuery(this).hasClass("edit-address")){
     jQuery(this).find('a').addClass("address-icon");     
  }
  if(jQuery(this).hasClass("downloads")){
     jQuery(this).find('a').addClass("setting-icon");     
  }
  if(jQuery(this).hasClass("invois_main_html")){
     jQuery(this).find('a').addClass("sending-icon");     
  }
  if(jQuery(this).hasClass("edit-account")){
     jQuery(this).find('a').addClass("profile-icon");     
  }
  if(jQuery(this).hasClass("tracking_and_return")){
     jQuery(this).find('a').addClass("returns-icon");     
  }

});
jQuery(".account-btn .user_img").hover(function(){
   jQuery(".bottom-head .menu_items.user-dropdown").css("display", "flex");   
});
jQuery(document).click(function (e) {
  if(jQuery('.menu_items').is(':visible')&&!$(e.target).closest('.menu_items').length){
     jQuery('.menu_items').hide();
  }
});


jQuery(document).on("click", ".music_play_icon", function(){ 
 var musics_urls = jQuery(this).attr('musics_urls');
 refresh_animation_for_userClick(musics_urls);
});



jQuery(document).on("click", "#fpd-start-customizing-button", function(){ 
  jQuery(".show_popup_single_product_page").show();
  });

jQuery(document).on("click", ".my_custome_class_close .fpd-icon-close", function(){ 
  jQuery(".show_popup_single_product_page").hide();
});

jQuery(document).on("click", "#header_close_popup", function(){ 
   jQuery(".my_custome_class_close .fpd-icon-close").trigger("click");
});



function custom_html_card__(json_obj)
{
  // // console.log("jSONOBJECT");
  // // console.log(json_obj);
  // if( ani_style_val_2 == 'ani_envelope_reverse_flip' )
  //   var html = '<div class="animation_html" id="animation_html" style=" transform:rotateY(-180deg); width:440px;height:650px;position:relative;overflow: hidden;">';
  // else
  //   var html = '<div class="animation_html" id="animation_html" style=" transform:rotateY(180deg); width:440px;height:650px;position:relative;overflow: hidden;">';



  if( ani_style_val_2 == 'ani_envelope_reverse_flip' )
    var html = '<div class="animation_html" id="animation_html" style=" width:440px;height:650px;position:relative;overflow: hidden;">';
  else
    var html = '<div class="animation_html" id="animation_html" style=" width:440px;height:650px;position:relative;overflow: hidden;">';

  let i =0;
  $.each(json_obj, function(idx, obj) {
    // console.log(i);
    // console.log(obj);


    if( i == 1 )
		{
			html += '<div id="card_outer_items" >';
		}
    var width = obj['parameters']['width']*obj['parameters']['scaleX'];
		var height = obj['parameters']['height']*obj['parameters']['scaleY'];

    if (i == 0 ) 
		{
			// // console.log("yesYES");
      i++;
		}
    else
    {
      if( obj['type'] == 'image' )
      {
        if( i == 1 )
        {
          back_card_height = height+'px';
          back_card_width = width+'px';
        }
        if( obj['parameters']['angle'] > 0 )
        {
          if( i != 1 )
            html += '<div class="html_dif_img" style="transform:rotate('+obj['parameters']['angle']+'deg); transform-origin: left top;width:'+width+'px;height:'+height+'px;opacity: 0;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
          else
            html += ' <div class="html_dif_img" style="transform:rotate('+obj['parameters']['angle']+'deg); transform-origin: left top;width:'+width+'px;height:'+height+'px;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
        }
        else
        {
          if( i != 1 )
            html += '<div class="html_dif_img" style="width:'+width+'px;height:'+height+'px;opacity: 0;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
          else
            html += ' <div class="html_dif_img" style="width:'+width+'px;height:'+height+'px;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
        }
          
      // jQuery('.htm_contain_'+i).addClass('html_dif_img');
        // // console.log(obj);
        html+='<img src="'+obj['source']+'" style="width:'+width+'px;height:'+height+'px;" >';
      }
      else if( obj['type'] == 'text' )
      {
        if( obj['parameters']['angle'] > 0 )
          html += '<div class="html_dif_txt" style=" transform:rotate('+obj['parameters']['angle']+'deg); transform-origin: left top; opacity: 0;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
        else
          html += '<div class="html_dif_txt" style="opacity: 0;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
        
      // jQuery('.htm_contain_'+i).addClass('html_dif_txt');
        // html += '<p style="letter-spacing: 0px; font-style: normal; font-family: Raleway;color: #000000;text-align:left;font-size:12px;">AT THE LINFORD ESTATE, BEDFORDSHIRE</p>';
        html += '<p style="letter-spacing: '+obj['parameters']['letterSpacing']+'px; font-style: '+obj['parameters']['fontStyle']+'; font-family: '+obj['parameters']['fontFamily']+';color: '+obj['parameters']['fill']+';text-align:'+obj['parameters']['textAlign']+';font-size:'+obj['parameters']['fontSize']+'px;">'+obj['parameters']['text'].replace(/\n/g, "<br>");  +'</p>';
        // // console.log(obj);
      }

      html += '</div>';


      i++;

      if( i==2)
      {
        html += "</div>";
        html += '<div id="card_inner_html" style="" > ';
      }
    }

    

    

  });
  html += "</div>";

  html+= '</div>';
  // jQuery('.fpd-product-stage').append(html);
  return html;
}

if(jQuery(".enveloppe_menu").hasClass("active")){
  jQuery("#animation_div").hide();
}


function select_type_main( type )
{
  // debugger
  ani_type_acf = type;

  if( type == 'clips' )
  {
    jQuery('#animation_header_envelope').hide();
  }
  else if( type == 'cartes' )
  {
    jQuery('#animation_header_envelope').show();
  }

  if( jQuery('#animation_header_animation').hasClass('active') )
    start_animations_main_function();

  if( type == "clips" )
  {
    // if( jQuery('#animation_header_envelope').hasClass('active') )
    document.getElementById('animation_header_animation').click();
  }
  else if( type == "cartes" )
  {
    document.getElementById('animation_header_envelope').click();
  }

  jQuery('#choose_card_envelope_option').removeClass('active');
  
}


function start_animations_main_function()
{
  if( ani_type_acf == 'clips' )
  {
    jQuery('#animation_header_envelope').hide();

    document.getElementById("vol").max = "6";
    document.getElementById("vol").min = "2";
    document.getElementById("vol").value = "4";

    move();
    
    const e1 = document.getElementById("animation_div");
    if(!(e1 == null))
      e1.remove();


    const e2 = document.getElementById("radio_for_choose_ani");
    if(!(e2 == null))
    e2.remove();

    const e3 = document.getElementById("animation_clips_main");
    if(!(e3 == null))
    e3.remove();
    
    jQuery('.fpd-product-stage').prepend('<div id="animation_clips_main" >  </div>');

    var html_id = $(".post_main_container").attr("id").split('-')[1];
    var html = custom_html_card(JSON.parse(window.localStorage.getItem('fancy-product-designer-'+html_id))[JSON.parse(window.localStorage.getItem('fancy-product-designer-'+html_id)).length - 1]['product'][0]['elements']);

    jQuery('#animation_clips_main').append(html);

    jQuery('.fpd-pos-right').append('<div id="radio_for_choose_ani" class="amimation_product_main" ><div id="radio_for_choose_ani_2" class="amimation_duration_style" > </div></div>');
    if( ani_type_acf == 'clips' )
    {
      jQuery('#radio_for_choose_ani_2').append('<h3 class="animation_heading_text_type">Style d’animation</h3>');
      jQuery('#radio_for_choose_ani_2').append('<div id="ani_scroll_main" ></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'slide_up'"+')" id="slide_up" name="ani_type_2" value="" checked > <label for="slide_up"> Slide Up </label> </div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'rise_text'"+')" id="rise_text" name="ani_type_2" value="rise_text" ><label for="rise_text">Rise + Text</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'zoomout_text'"+')" id="zoomout_text" name="ani_type_2" value="zoomout_text" ><label for="zoomout_text">Zoomout + Text</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'ani_pan'"+')" id="ani_pan" name="ani_type_2" value="ani_pan" ><label for="ani_pan">Pan</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'ani_pop'"+')" id="ani_pop" name="ani_type_2" value="ani_pop" ><label for="ani_pop">Pop</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'tectonic'"+')" id="tectonic" name="ani_type_2" value="tectonic" ><label for="tectonic">Tectonic</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'baseline'"+')" id="baseline" name="ani_type_2" value="baseline" ><label for="baseline">Baseline</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'tumble'"+')" id="tumble" name="ani_type_2" value="tumble" ><label for="tumble">Tumble</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'neon'"+')" id="neon" name="ani_type_2" value="neon" ><label for="neon">Neon</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'photo_flow'"+')" id="photo_flow" name="ani_type_2" value="photo_flow" ><label for="photo_flow">Photo Flow</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'photo_rise'"+')" id="photo_rise" name="ani_type_2" value="photo_rise" ><label for="photo_rise">Photo Rise</label></div>');
      jQuery('#ani_scroll_main').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'photo_zoom'"+')" id="photo_zoom" name="ani_type_2" value="photo_zoom" ><label for="photo_zoom">Photo Zoom</label></div>');
    }

    // if( ani_type_acf == 'cartes' )
    // {
    //   jQuery('#radio_for_choose_ani').append('<div id="radio_for_choose_ani_3" class="amimation_duration_style" > </div>')
    //   jQuery('#radio_for_choose_ani_3').append('<h3 class="animation_heading_text_type">Style d’animation</h3>');
    //   jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope'"+')" id="ani_envelope" name="ani_type_3" value="" checked > <label for="ani_envelope"> Envelope </label> </div>');
    //   jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope_fast'"+')" id="ani_envelope_fast" name="ani_type_3" value="" > <label for="ani_envelope_fast"> Envelope Fast </label> </div>');
    //   jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope_rectangle_horizontal'"+')" id="ani_envelope_rectangle_horizontal" name="ani_type_3" value="" > <label for="ani_envelope_rectangle_horizontal"> Envelope Rectangle Horizontal </label> </div>');
    //   jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope_reverse_flip'"+')" id="ani_envelope_reverse_flip" name="ani_type_3" value="" > <label for="ani_envelope_reverse_flip"> Envelope Reverse Flip </label> </div>');
    //   jQuery('#radio_for_choose_ani_3').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type_2('+"'ani_envelope_rolling_card'"+')" id="ani_envelope_rolling_card" name="ani_type_3" value="" > <label for="ani_envelope_rolling_card"> Envelope Rolling Card </label> </div>');
    // }

    // document.getElementById(ani_type_acf).checked = true;
    document.getElementById(ani_style_val).checked = true;

    showLetterDetails();


  } 
  else if( ani_type_acf == 'cartes' )
  {
    jQuery('#animation_header_envelope').show();
    document.getElementById("vol").max = "20";
    document.getElementById("vol").min = "10";
    document.getElementById("vol").value = "15";

    move();
    animation_time = "15";
    set_animation_time(animation_time);
  }
}