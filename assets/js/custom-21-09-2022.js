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


  // console.log(env_back);
  // console.log(env_front);

  env_back.style.transition = "all "+temp_for_time+"s";
  env_back.style.transformStyle = "preserve-3d";
  // env_back.style.transform = "translate(154px, -95px) scaleX(-1.1) scaleY(0.9) rotateY(-0deg)";
  env_back.style.transform = "translate(-154px, 95px) rotateY(180deg)";

  env_front.style.transition = "all "+temp_for_time+"s";
  env_front.style.transformStyle = "preserve-3d";
  if( ani_style_val_2 == 'ani_envelope_reverse_flip' || ani_style_val_2 == 'ani_envelope_rolling_card' )
    env_front.style.transform = "rotateX(0deg)";
  else
    env_front.style.transform = "rotateX(0deg)";

  temp_for_time = (animation_time != 15) ? ((2500*animation_time)/15) : 2500;

  // my_animation = setTimeout(pushBackLetter, temp_for_time);


}
// global variable for animation start


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

var ani_type_acf = "";
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
      // console.log(" DEKH DETAILS = ");
      // console.log(result);
      result = result.slice(0, -1);
      input_feilds_html = result.split('$%^&*$%^$')[1];
      ani_type_acf = result.split('$%^&*$%^$')[0];
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
      // console.log(" DEKH DETAILS = ");
      // console.log(result);
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

  // console.log("hello = ");
  

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
        
        // console.log(result.split("$%^&*$")[0]);
        if(result.split("$%^&*$")[0] == "success")
        {
          user_unique_folderName = result.split("$%^&*$")[1].slice(0, -1);
          //console.log("hello 1 == "+user_unique_folderName);
          var cuustom_music_url = (window.location.origin+"/"+window.location.pathname.split( '/' )[1])+"/wp-content/"+(user_unique_folderName.split("wp-content")[1]);
          //console.log("hello 2 == "+cuustom_music_url);
          localStorage.setItem("custom_music_base_names" , (localStorage.getItem("custom_music_base_names")+baseName(cuustom_music_url)+"."+ (cuustom_music_url.split("/")[cuustom_music_url.split("/").length-1]).split(".")[1] +"$%^&*$" ));
          custom_music_main_url = ((window.location.origin+"/"+window.location.pathname.split( '/' )[1]) + "/wp-content/" + (user_unique_folderName.split("wp-content")[1])).split("/");
          custom_music_main_url.pop();
          custom_music_main_url = custom_music_main_url.join("/");

          document.getElementById("all").checked = true;
          set_music_by_types("all"); // for display musics
          
        }


        // console.log("REUSLT OF AJAX FILE UPLOAD BY URL = "+result);
  
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
      
     
      // console.log(result.split("$%^&*$")[0]);
      if(result.split("$%^&*$")[0] == "success")
      {
        user_unique_folderName = result.split("$%^&*$")[1].slice(0, -1);
        //console.log("hello 1 == "+user_unique_folderName);
        var cuustom_music_url = (window.location.origin+"/"+window.location.pathname.split( '/' )[1])+"/wp-content/"+(user_unique_folderName.split("wp-content")[1]);
        //console.log("hello 2 == "+cuustom_music_url);
        localStorage.setItem("custom_music_base_names" , (localStorage.getItem("custom_music_base_names")+baseName(cuustom_music_url)+"."+ (cuustom_music_url.split("/")[cuustom_music_url.split("/").length-1]).split(".")[1] +"$%^&*$" ));
        custom_music_main_url = ((window.location.origin+"/"+window.location.pathname.split( '/' )[1]) + "/wp-content/" + (user_unique_folderName.split("wp-content")[1])).split("/");
        custom_music_main_url.pop();
        custom_music_main_url = custom_music_main_url.join("/");

        document.getElementById("all").checked = true;
        set_music_by_types("all"); // for display musics
        
      }

      // console.log("REUSLT OF AJAX FILE UPLOAD BY LOCAL STORAGE = "+result);

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
    jQuery('#radio_for_choose_ani_2').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'slide_up'"+')" id="slide_up" name="ani_type_2" value="" checked > <label for="slide_up"> Slide Up </label> </div>');
    jQuery('#radio_for_choose_ani_2').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'rise_text'"+')" id="rise_text" name="ani_type_2" value="rise_text" ><label for="rise_text">Rise + Text</label></div>');
    jQuery('#radio_for_choose_ani_2').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'zoomout_text'"+')" id="zoomout_text" name="ani_type_2" value="zoomout_text" ><label for="zoomout_text">Zoomout + Text</label></div>');
    jQuery('#radio_for_choose_ani_2').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'ani_pan'"+')" id="ani_pan" name="ani_type_2" value="ani_pan" ><label for="ani_pan">Pan</label></div>');
    jQuery('#radio_for_choose_ani_2').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'ani_pop'"+')" id="ani_pop" name="ani_type_2" value="ani_pop" ><label for="ani_pop">Pop</label></div>');
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
  // console.log(dataURL_back_cc);

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
  var dataURL_back = canvas[4].toDataURL({ pixelRatio: 30000 });
  dataURL_back_cc = canvas[3].toDataURL({ pixelRatio: 30000 });


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
    console.log("YA YA YA");
  

    
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
    jQuery('#for_flip_card_main').prepend('<div style="position: absolute; left: 0; height: 397.5px;width: 720px;" id="animation_card_back_before"> <div style="top: 0px;left: 0;right: 0;width: 720.1969px;height: 397.500475px;background: #fff;font-size: 0;" id="animation_card_back" > <h1>DEEp</h1> </div></div>');
    jQuery('#for_flip_card_main').prepend('<div id="animation_card_image" style="position: relative;transform-origin: center; transform: translate(154px, -95px) scaleX(1.1) scaleY(0.90);z-index: 0;transform-style: preserve-3d;transition: transform 0.6s;" > <div id="temp_for_left"> <img style=" perspective: 1000px; position: absolute;transform: rotateY(180deg) rotate(-90deg);transform-style: preserve-3d;transition: transform 0.6s ease 0s; " class="myy" id="img_for_animation" src="'+dataURL+'" />    </div> </div>');

    // jQuery('#img_for_animation').prepend('<img src="'+dataURL+'" />');
    // }
  }

  if( ani_type_acf == 'clips' )
  {
    jQuery('.animation_envelope_front_side').prepend('<div style="perspective: 1000px;position: absolute;" id="for_flip_card_main" >  </div>');
    jQuery('#for_flip_card_main').prepend('<div style="position: absolute; left: 0; height: 397.5px;width: 720px;" id="animation_card_back_before"> <div style="top: 0px;left: 0;right: 0;width: 720.1969px;height: 397.500475px;background: #fff;font-size: 0;" id="animation_card_back" > <h1>DEEp</h1> </div></div>');
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

  if( ani_style_val_2 != 'ani_envelope_rectangle_horizontal' )
  {
    whole_envelope.style.transition = "transform "+temp_for_time+"s";
    whole_envelope.style.transformStyle = "preserve-3d";
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
  card_back_before.style.height = back_card_width;
  card_back_before.style.width = back_card_height;




  image.style.minHeight = back_card_height;
  image.style.minWidth = back_card_width;
  image.style.maxHeight = back_card_height;
  image.style.maxWidth = back_card_width;
  

  if( ani_style_val_2 != 'ani_envelope_rectangle_horizontal' )
  {
    card_back_before.style.left = "220px";
    image.style.left = "220px";
    image.style.transform = "rotateX(180deg) rotate(-90deg) scale(0.9)";
  }
  else
  {
    card_back_before.style.top = "320px";
    card_back_before.style.left = "13px";
    image.style.top = "220px";
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
  
  

  main_div.style.transition = "all "+temp_for_time+"s";
  main_div.style.transformStyle = "preserve-3d";
  main_div.style.width = document.getElementById('card_outer_items').children[0].style.width;
  main_div.style.height = document.getElementById('card_outer_items').children[0].style.height;
  main_div.style.top = "-290px";
  main_div.style.left = "110px";
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
    cardBackBefore.style.transform = "translate(-44px, 47px) rotate(270deg)";
  else
    cardBackBefore.style.transform = "translate(-44px, 47px) rotate(90deg)";
  cardBackBefore.style.left = "45px";


  cardBackBefore.style.top = "0px";
  cardBackBefore.style.left = "0px";
  cardBackBefore.style.bottom = "0px";
  cardBackBefore.style.right = "0px";


  const main_div_card = document.getElementById('animation_html');
  main_div_card.style.transform += "translate(-154px, 95px)";


  // cardBackBefore.style.width = "650px";
  // cardBackBefore.style.height = "470px";

  letter.style.transition = "all "+temp_for_time+"s";
  letter.style.transformStyle = "preserve-3d";
  letter.style.top = for_store_top_c_front;


  image.style.transition = "transform "+temp_for_time+"s";
  image.style.transformStyle = "preserve-3d";
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
    enve_state.style.transform = "rotate(-15deg)";
  if( ani_type_acf == 'cartes' )
    enve_state.style.transform = "rotate(75deg) scale(1.1)";

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

  const letter = document.getElementById("animation_card_image");



  letter.style.transition = "all "+temp_for_time+"s";
  letter.style.transformStyle = "preserve-3d";
  letter.style.transform = "translate(154px, -95px) scaleX(-1) scaleY(1) rotateY(-180deg)";

  card.style.transition = "all "+temp_for_time+"s";
  card.style.transformStyle = "preserve-3d";
  card.style.scale = "1.2";

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


  // console.log(env_back);
  // console.log(env_front);

  // env_back.style.transition = "all "+temp_for_time+"s cubic-bezier(1, 1.99, 0.26, -0.74)";
  env_back.style.transition = "all "+temp_for_time+"s";
  env_back.style.transformStyle = "preserve-3d";
  // env_back.style.transform = "translate(154px, -95px) scaleX(-1.1) scaleY(0.9) rotateY(-0deg)";
  env_back.style.transform = "translate(-154px, 95px) rotateY(0deg)";

  // env_front.style.transition = "all "+temp_for_time+"s cubic-bezier(1, 1.99, 0.26, -0.74)";
  env_front.style.transition = "all "+temp_for_time+"s";
  env_front.style.transformStyle = "preserve-3d";
  if( ani_style_val_2 == 'ani_envelope_reverse_flip' || ani_style_val_2 == 'ani_envelope_rolling_card' )
    env_front.style.transform = "rotateX(180deg)";
  else
    env_front.style.transform = "rotateX(-180deg)";

  temp_for_time = (animation_time != 15) ? ((2500*animation_time)/15) : 2500;

  // my_animation = setTimeout(pushBackLetter, temp_for_time);


}

function pushBackLetter()
{
  temp_for_time = (animation_time != 15) ? ((1.5*animation_time)/15) : 1.5;
  const card = document.getElementById('for_flip_card_main');
  

  card.style.transition = "all "+temp_for_time+"s";
  card.style.transformStyle = "preserve-3d";
  card.style.scale = "1";

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
      // console.log("CALLS");
      // ani_style_val_2 = "ani_envelope";
      document.getElementById('vol').value = document.getElementById('vol').min;
      move();
      animation_slider_range();
      // console.log( document.getElementById('vol').min );
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

  do_animation_envelope(animation_type_global);
}

var ele_tra_img = [];

function showLetterDetails()
{
  // console.log("hello");
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
  
  temp_for_time = (animation_time != 15) ? ((400*animation_time)/15) : 400;


  img_left_ani = [];
  txt_left_ani = [];
  top_img = [];
  top_txt = [];

  if( ani_style_val == "slide_up" )
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
    // console.log("YES");
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
        // img_html[i].style.opacity = "0";
      }
        
    }

    for( let i = 0; i<txt_html.length ; i++ )
    {
      
      txt_html[i].style.scale = "0.5";
      // txt_html[i].style.opacity = "0";
    }
    my_animation = setTimeout(display_inner_contains_pop , temp_for_time);

  }
 


}


function display_inner_contains_pop()
{
  temp_for_time = (animation_time != 15) ? ((1.3*animation_time)/15) : 1.3;

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
  var temp_for_time_temp = (animation_time != 15) ? ((0.4*animation_time)/15) : 0.4;
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

        } , 50 );
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

          } , 50 );
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
  }, 300);

}

var img_left_ani = [];
var txt_left_ani = [];

function display_inner_contains_pan()
{
  temp_for_time = (animation_time != 15) ? ((1.3*animation_time)/15) : 1.3;

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


  var temp_for_time_temp = (animation_time != 15) ? ((1*animation_time)/15) : 1;
  for( let i = 0; i<img_html.length ; i++ )
  {
    if( i != 0 )
    {
      // console.log(img_html[i].style.left);
      img_html[i].style.transition = "all "+temp_for_time_temp+"s";
      img_html[i].style.left = img_left_ani[i]+"px";
      img_html[i].style.opacity = "1";
    }
    

  }


  let i = 0;
  const txt_htmll = document.getElementsByClassName('html_dif_txt');

  var myInterval = setInterval( function(){
    // console.log(i);
    
      if( i == txt_html.length )
      {
        clearInterval(myInterval);
      }
      else
      {

        // console.log(txt_htmll[i]);

        // console.log(temp_for_time_temp);

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
  temp_for_time = (animation_time != 15) ? ((2*animation_time)/15) : 2;


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

  var temp_for_time_temp = (animation_time != 15) ? ((1.2*animation_time)/15) : 1.2;

  for( let i = 0; i<img_html.length ; i++ )
  {
    img_html[i].style.transition = "all "+temp_for_time_temp+"s";
    img_html[i].style.transform = ele_tra_img[i]+" scale(1)";
  }

  const txt_htmll = document.getElementsByClassName('html_dif_txt');

  var myInterval = setInterval( function(){
    // console.log(i);
    
      if( i == txt_html.length )
      {
        clearInterval(myInterval);
      }
      else
      {

        // console.log(txt_htmll[i]);

        // console.log(temp_for_time_temp);

        txt_htmll[i].style.transition = "all "+temp_for_time_temp+"s";
      
        // txt_html[i].style.top = top_txt[i]+"px";

        txt_html[i].style.cssText += "clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);";

        i++;
      }
  }, 150);


}

function display_inner_contains_rise_text()
{
  temp_for_time = (animation_time != 15) ? ((2*animation_time)/15) : 2;


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

  var temp_for_time_temp = (animation_time != 15) ? ((1.2*animation_time)/15) : 1.2;

  const txt_htmll = document.getElementsByClassName('html_dif_txt');

  var myInterval = setInterval( function(){
    // console.log(i);
    
      if( i == txt_html.length )
      {
        clearInterval(myInterval);
      }
      else
      {

        // console.log(txt_htmll[i]);

        // console.log(temp_for_time_temp);

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
  temp_for_time = (animation_time != 15) ? ((2*animation_time)/15) : 2;

  

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

  var temp_for_time_temp = (animation_time != 15) ? ((2*animation_time)/15) : 2;

  const txt_htmll = document.getElementsByClassName('html_dif_txt');

  var myInterval = setInterval( function(){
    // console.log(i);
    
      if( i == txt_html.length )
      {
        clearInterval(myInterval);
      }
      else
      {

        // console.log(txt_htmll[i]);

        // console.log(temp_for_time_temp);

        txt_htmll[i].style.transition = "all "+temp_for_time_temp+"s";
      
        txt_html[i].style.top = top_txt[i]+"px";

        txt_htmll[i].style.opacity = "1";


        i++;
      }
  }, 150);

  temp_for_time = (animation_time != 15) ? ((2200*animation_time)/15) : 2200;

  // my_animation = setTimeout(display_inner_contains(top_img) , temp_for_time);
}




// stop cover animation





function zoomImage()
{
  

  temp_for_time = (animation_time != 15) ? ((1.5*animation_time)/15) : 1.5;

  
  const temp = document.getElementById('temp_for_left');
  const full_envelope = document.getElementById("animation_div");
  const image = document.getElementById("img_for_animation");



  const card_back_before = document.getElementById('for_flip_card_main');

  card_back_before.style.transition = "all "+temp_for_time+"s";
  card_back_before.style.transformStyle = "preserve-3d";
  if( ani_style_val_2 != 'ani_envelope_rectangle_horizontal' )
  {
    card_back_before.style.transform = "rotate(90deg) scale(1.1)";
    image.style.transition = "unset";
    image.style.transformStyle = "preserve-3d";
    // image.style.transform = "rotateX(180deg) rotate(-90deg) scale(0.9)";
    if( ani_style_val_2 == 'ani_envelope_reverse_flip' )
      image.style.transform = "rotateX(-180deg) rotate(-90deg) translate(-8px, -39px) scaleX(1.12) scaleY(0.91)";
    else
      image.style.transform = "rotateX(180deg) rotate(-90deg) translate(-8px, -39px) scaleX(1.12) scaleY(0.91)";
  }
  else
  {
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
    card_front.style.transform = "rotateX(0deg) rotate(-90deg) translate(-8px, -39px) scaleX(1.12) scaleY(0.91)";
  }
  else
  {
    // card_front.style.transform = "rotateX(0deg) rotate(-90deg) scale(0.91) translate(160px, -7px) scaleX(-1.22)";
    card_front.style.transform = "rotateX(0deg) rotate(-90deg) scale(0.91) translate(-161px, -7px) scaleX(1.22)";
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
  full_envelope.style.transform = "rotate(75deg) scale(1)";

  

}

// animation functions end



// on click function start

function opennext_tab(evt, cityName) {



 
  if(evt != "")
  {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    // tabcontent[i].style.display = "none";
    
    }
    tablinks = document.getElementsByClassName("child_menu");
    
    for (i = 0; i < tablinks.length; i++) {
      // console.log(i + " :- "+ tablinks[i].className + " = " + tablinks[i].className.replace(" active", ""));
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // console.log("end");

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    jQuery('.filter-item-cover .fpd-views-selection .fpd-item').hide();
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
        // console.log("its image");
        jQuery('.fpd-main-wrapper').css({'cssText':'background-image: url("'+myArray[1]+'") !important;background-position: center center !important;background-size: contain !important;background-repeat: no-repeat !important;'});
      }
      else if(myArray[0] == "color")
      {
        // console.log("its color");
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

    


    set_animation_time(animation_time,animation_type_global);
    

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

  }



  //  animation part start 

  else if(cityName=='animation')
  {
    


    $('#details_shop_address_main_div_id').hide();

    // $('#radio_for_choose_ani').hide();


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
      do_animation_envelope(animation_type_global);
    } , 0);
    // animation of envelope end
    
    jQuery('.fpd-product-stage').css({'cssText':'width: 720px;'});
    







    console.log("GEPJDOG");
    ani_type_acf = ani_type_acf.trim();
    console.log(" ani_type_acf = "+ani_type_acf);

    const e2 = document.getElementById("radio_for_choose_ani");
    if(!(e2 == null))
    e2.remove();

    jQuery('.fpd-pos-right').append('<div id="radio_for_choose_ani" class="amimation_product_main" ><div id="radio_for_choose_ani_2" class="amimation_duration_style" > </div></div>');
    if( ani_type_acf == 'clips' )
    {
      jQuery('#radio_for_choose_ani_2').append('<h3 class="animation_heading_text_type">Style d’animation</h3>');
      jQuery('#radio_for_choose_ani_2').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'slide_up'"+')" id="slide_up" name="ani_type_2" value="" checked > <label for="slide_up"> Slide Up </label> </div>');
      jQuery('#radio_for_choose_ani_2').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'rise_text'"+')" id="rise_text" name="ani_type_2" value="rise_text" ><label for="rise_text">Rise + Text</label></div>');
      jQuery('#radio_for_choose_ani_2').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'zoomout_text'"+')" id="zoomout_text" name="ani_type_2" value="zoomout_text" ><label for="zoomout_text">Zoomout + Text</label></div>');
      jQuery('#radio_for_choose_ani_2').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'ani_pan'"+')" id="ani_pan" name="ani_type_2" value="ani_pan" ><label for="ani_pan">Pan</label></div>');
      jQuery('#radio_for_choose_ani_2').append('<div class="ami_input_duration"><input type="radio" onclick="select_ani_type('+"'ani_pop'"+')" id="ani_pop" name="ani_type_2" value="ani_pop" ><label for="ani_pop">Pop</label></div>');
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

  
    // console.log(json_canvas_full_data);
    // console.log(all_element_arr);

    const e2 = document.getElementById("radio_for_choose_ani");
    if(!(e2 == null))
    e2.remove();
    
  }
  jQuery('.fpd-actions-wrapper .fpd-action-btn[data-action="manage-layers"]').click();
}


// onclick function end


// for create custom html of card through json object start
function custom_html_card(json_obj)
{
  // console.log("jSONOBJECT");
  // console.log(json_obj);
  if( ani_style_val_2 == 'ani_envelope_reverse_flip' )
    var html = '<div class="animation_html" id="animation_html" style=" transform:rotateY(-180deg); width:440px;height:650px;position:relative;overflow: hidden;">';
  else
    var html = '<div class="animation_html" id="animation_html" style=" transform:rotateY(180deg); width:440px;height:650px;position:relative;overflow: hidden;">';

  let i =0;
  $.each(json_obj, function(idx, obj) {
    console.log(obj);


    if( i == 1 )
		{
			html += '<div id="card_outer_items" >';
		}
    var width = obj['parameters']['width']*obj['parameters']['scaleX'];
		var height = obj['parameters']['height']*obj['parameters']['scaleY'];

    if (i == 0 ) 
		{
			// console.log("yesYES");
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
        // console.log(obj);
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
        // console.log(obj);
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


jQuery(document).on('click','.fpd-pos-right .fpd-views-selection .fpd-shadow-1',function(e){ //console.log('svfhgds');
    var child=jQuery(this).index()+1;

    jQuery('.fpd-pos-right .fpd-views-selection .fpd-shadow-1').removeClass('fpd-view-active');
    jQuery(this).addClass('fpd-view-active');
    jQuery('.fpd-main-wrapper > .fpd-views-wrapper .fpd-views-selection .fpd-shadow-1:nth-child('+child+')').click();
    jQuery('.fpd-actions-wrapper .fpd-action-btn[data-action="manage-layers"]').click();
});


jQuery(document).on('click','.product-popup[data-module="images"] .fpd-item',function(e){
  
  jQuery('.popup-cover-main.product-popup').removeClass('fpd-active');
});

// jQuery(document).on('click','.fpd-grid_cat .fpd-category',function(e){ console.log('sdjfsdhfsd');
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

jQuery(document).on('click','.fpd-secondary-module .fpd-color-wrapper .fpd-item',function(e){ // console.log('color');
    var child=jQuery(this).index()+1;
    // console.log(child);

    // on click color dots
    // alert("child = "+child);
    // jQuery('.fpd-element-toolbar-smart .fpd-color-wrapper.fpd-color-picker .fpd-item:nth-child('+child+')').click();
});

jQuery(document).on('click','.top_button',function(e){ 
    var next=jQuery('.child_menu.active').next('.child_menu');jQuery(next)[0].click();
});



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
      // console.log(result);
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
      $('#user_email_details_table_container').DataTable().destroy();
      $('#user_email_details_table_container').find('tbody').html(result);
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
  // console.log("this is my session = "+"<%=Session['UserName'] %>");

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
      $('#user_email_details_table_container').DataTable().destroy();
      $('#user_email_details_table_container').find('tbody').html(result);
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
    // console.log(":: = "+arr);
    for(let i=1;i<(arr.length/2);i++)
    {
      add_another_guest_click();
      // console.log("first name = "+arr);
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
  //     console.log(result);
      
      
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
      $('#user_email_details_table_container').DataTable().destroy();
      $('#user_email_details_table_container').find('tbody').html(result);
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
//         console.log(importFiles);

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
    //     console.log(result);
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
//       console.log(selected_product_id);
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



update_table();
function update_table()
{

// $(document).ready(function() {
  $('#user_email_details_table_container').DataTable( {
      columnDefs: [ {
          orderable: false,
          targets:   0
      } ],
      order: [[ 1, 'asc' ]],
      "oLanguage": {
        "sInfo" : '<p id="page-list-id" class="page-list"> _START_ - _END_ sur _TOTAL_ </p>', 
      },
      searching: false, 
      "lengthChange": false,
      pagingType: 'simple',
      pageLength: 5,
      language: {
        oPaginate: {
          sNext: '<div onclick="table_pagination_net_btn_clk()" class="table-bottom-btn"><a class="slick-btn next">next</a></div>',
          sPrevious: '<div onclick="table_pagination_net_btn_clk()" class="table-bottom-btn"><a class="slick-btn previous">previous</a></div>',
          
        }
      }  

  });
// } );

}








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


jQuery(document).on("click", "#myonoffswitch_carte", function(){ 

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

update_table_order_tracking();
function update_table_order_tracking()
{

// $(document).ready(function() {
  $('#order_tracking_table_container').DataTable( {
      columnDefs: [ {
          orderable: false,
          targets:   0
      } ],
      order: [[ 1, 'asc' ]],

      "oLanguage": {
        "sInfo" : '<p id="page-list-id" class="page-list"> _START_ - _END_ sur _TOTAL_ </p>',
      },
      searching: false, 
      "lengthChange": false,
      pagingType: 'simple',
      pageLength: 10,
      language: {
        oPaginate: {
          sNext: '<div class="table-bottom-btn"><a class="slick-btn next">next</a></div>',
          sPrevious: '<div class="table-bottom-btn"><a class="slick-btn previous">previous</a></div>',
          // sFirst: '<span class="page-list-start">  </span>',
          // sLast: '<span class="page-list-end">  </span>'
        }
      }  

  });
// } );

}






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


