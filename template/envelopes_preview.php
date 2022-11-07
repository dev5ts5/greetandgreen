<?php 
/* Template Name: Envelope Preview */ 

?>
<?php 
global $wpdb;
$post_id = $wpdb->get_results("SELECT * FROM `gragr_envelop_preview` WHERE `Rnd_no` = '".$_GET['template_id']."'");
$meta_value_get = json_decode($post_id[0]->Meta_Value);
//print_r($meta_value_get);exit;

get_header(); 


?>

<audio controls autoplay style="display:none;">
  <source src="<?php echo $meta_value_get->musics_urls; ?>"  type="audio/mp3">
</audio>
<div class="envelop_preview">
   <div class="fpd-product-stage" style="width: 720px;">

   </div>
</div>

 
<?php
get_footer();
?>

<script type="text/javascript">
var animation_images_location = 'https://dev.greetandgreen.com/administrationAcDRdcf/wp-content/uploads/fpd_animation_image/' ;
var my_animation = "";
var id = "";
// var animation_time = "<?php echo $meta_value_get->envelop_range; ?>";
// var temp_for_time = "";
// var animation_type_global = "<?php echo $meta_value_get->animation; ?>";
// var background_color_ani = '<?php echo $meta_value_get->enveloppe_color; ?>';
// var stemp_img = 'http://192.168.0.121/wordpress/greet-and-green/wp-content/uploads/2022/03/Ellipse-113-2.png';
// var card_custom_text = 'http://192.168.0.121/wordpress/greet-and-green/wp-content/uploads/2022/03/Ellipse-113-2.png';
// var envelope_cap_text = 'custom text';
// var dataURL_back_cc = "";



var animation_time = "15";
var temp_for_time = "";
var animation_type_global = "fadein";
var background_color_ani = '#0a6351';
var stemp_img = 'http://192.168.0.121/wordpress/greet-and-green/wp-content/uploads/2022/03/Ellipse-113-2.png';
var card_custom_text = 'http://192.168.0.121/wordpress/greet-and-green/wp-content/uploads/2022/03/Ellipse-113-2.png';
var envelope_cap_text = 'custom text';
var dataURL_back_cc = "";

// global variable for animation end


// global variable for music start
var music_array = [];
var user_unique_folderName = "";
var custom_music_main_url ="";
var customer_selected_music_link = ""; 
var customer_select_music_or_not = "";
var temp_random = "";
do_animation_envelope(animation_type_global);
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
  
  
  do_animation_envelope(type);

}

function change_envelope_color(color=background_color_ani)
{
  document.getElementById("envelope_back_image").style.backgroundColor = color;
  document.getElementById("animation_image_tag_envelope_cap_front_side").style.backgroundColor = color;
  document.getElementById("animation_image_tag_envelope_body_front").style.backgroundColor = color;
  jQuery('#animation_image_tag_envelope_cap_back_side').css({'cssText':'background-image:url("'+dataURL_back_cc+'") !important;'});
  //console.log(dataURL_back_cc);

}

function for_clear_animation_timeout()
{

  
  clearTimeout(my_animation);
  clearInterval(id);
  const e1 = document.getElementById("animation_div_01");
  if(!(e1 == null))
    e1.remove();
}

function refresh_animation_for_userClick(my_value="")
{

  // alert(background_color_ani);
  clearTimeout(my_animation);
  clearInterval(id);
  var canvas = document.getElementsByClassName("lower-canvas");
  // var dataURL = canvas[0].toDataURL("image/svg", 1.0);
  var dataURL = '<?php echo $meta_value_get->dataURL_1; ?>';
  var dataURL_back = '<?php echo $meta_value_get->dataURL_2; ?>';
  dataURL_back_cc = '<?php echo $meta_value_get->dataURL_3; ?>';
  const e1 = document.getElementById("animation_div_01");
  if(!(e1 == null))
    e1.remove();

  //jQuery('.fpd-product-stage').prepend('<div class="enveloppe_min" style="display: block;width: 100%;"><div id="animation_div" style="transform: rotateX(0deg);position: absolute;top: 56%; transform-style: preserve-3d;" class="my_custom_img_tag_for_animation remove_class_animation"></div></div>');

  jQuery('.fpd-product-stage').prepend('<div id="animation_div_01" style="transform: rotateX(0deg);position: absolute;top: 56%; transform-style: preserve-3d;" class="my_custom_img_tag_for_animation remove_class_animation"></div>');
  jQuery('.my_custom_img_tag_for_animation').prepend('<div style="backface-visibility: hidden; transform: rotateY(180deg);" id="animation_full_envelope_front" class="animation_envelope_front_side" ></div>');
  jQuery('.my_custom_img_tag_for_animation').prepend('<div style="position: absolute; backface-visibility: hidden;" class="animation_envelope_back_side" ></div>');
  jQuery('.animation_envelope_back_side').prepend(' <img id="envelope_back_image" src="'+dataURL_back+'" />');

  if (jQuery('#myonoffswitch_carte').prop('checked')==true)
  { 
    jQuery('.animation_envelope_front_side').prepend('<div id="animation_card_image" style="position: relative;transform-origin: center; transform: translate(154px, -95px) scaleX(1.1) scaleY(0.90);z-index: 0;transform-style: preserve-3d;transition: transform 0.6s;" > <div id="temp_for_left"> <img style="border-radius: 45px;position: absolute;transform: rotate(-90deg);transform-style: preserve-3d;transition: transform 0.6s ease 0s;" class="myy" id="img_for_animation" src="'+dataURL+'" /></div> </div>');
  }
  else
  {
    jQuery('.animation_envelope_front_side').prepend('<div id="animation_card_image" style="position: relative;transform-origin: center; transform: translate(154px, -95px) scaleX(1.1) scaleY(0.90);z-index: 0;transform-style: preserve-3d;transition: transform 0.6s;" > <div id="temp_for_left"> <img style="position: absolute;transform: rotate(-90deg);transform-style: preserve-3d;transition: transform 0.6s ease 0s;" class="myy" id="img_for_animation" src="'+dataURL+'" /></div> </div>');
  }
  
  jQuery('.animation_envelope_front_side').prepend('<div style="z-index:20" id="animation_Envelope_cap_close" > <img style="background-color: '+background_color_ani+';" id="animation_image_tag_envelope_cap_back_side" src="'+animation_images_location+'cap.png" />  <img style="background-color: '+background_color_ani+';" id="animation_image_tag_envelope_cap_front_side" src="'+animation_images_location+'cap_open.png" />  <img src="'+stemp_img+'" id="animation_envelope_stemp_img" alt="" />  </div>');
    

  // add envelope body
  jQuery('.animation_envelope_front_side').append('<div style="z-index:10;" id="animation_Envelpoe_body_front" > <img style="position: relative;background-color: '+background_color_ani+';" id="animation_image_tag_envelope_body_front" src="'+animation_images_location+'4.png" /> </div>  <div style="position: absolute;z-index: -1;top: 0;" class="animation_envelope_background_img" > <img id="animation_img_tag_envelope_background" src="'+animation_images_location+'fixed_cover.png" /></div>  ');
    
  change_envelope_color(); // change envelope color
  

  
}



function do_animation_envelope(animation_type="fadein")
{
  jQuery('#animation_div_01').addClass('animation_shadow');
  animation_type_global = animation_type;
  
  if(animation_type == "fadein")
  {
    
    refresh_animation_for_userClick();
    const product_stage = document.getElementById("animation_div_01");
    product_stage.style.top = "30%";
    
    
    const image = document.getElementById("envelope_back_image");
    

    image.style.opacity = "0";

  }

  if(animation_type == "zoomin")
  {
    refresh_animation_for_userClick();
    const product_stage = document.getElementById("animation_div_01");
    product_stage.style.top = "30%";
    product_stage.style.transform = " rotateX(0deg) scale(0)";
  }

  if(animation_type == "slideinleft")
  {
    refresh_animation_for_userClick();
    const product_stage = document.getElementById("animation_div_01");
    product_stage.style.top = "30%";
    product_stage.style.left="-155%";

  }

  if(animation_type == "slideinup")
  {
    refresh_animation_for_userClick();
    const product_stage = document.getElementById("animation_div_01");
    product_stage.style.top = "-50%";
  }

  if(animation_type == "slideinright")
  {
    refresh_animation_for_userClick();
    const product_stage = document.getElementById("animation_div_01");
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
   
    const product_stage = document.getElementById("animation_div_01");

    product_stage.style.transition = "transform "+temp_for_time+"s";
    product_stage.style.transformStyle = "preserve-3d";
    product_stage.style.transform = "rotateX(0deg) scale(0.992)";
  }

  if(animation_type_global == "slideinleft")
  {
    const product_stage = document.getElementById("animation_div_01");

    product_stage.style.transition = "left "+temp_for_time+"s";
    product_stage.style.transformStyle = "preserve-3d";
    product_stage.style.left = "0%";

  }

  if(animation_type_global == "slideinup")
  {
    const product_stage = document.getElementById("animation_div_01");

    product_stage.style.transition = "top "+temp_for_time+"s";
    product_stage.style.transformStyle = "preserve-3d";
    product_stage.style.top = "30%";

  }

  if(animation_type_global == "slideinright")
  {
    const product_stage = document.getElementById("animation_div_01");

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

  const animation_div = document.getElementById("animation_div_01");
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
  const animation_div = document.getElementById("animation_div_01");
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

function letterUp()
{
  temp_for_time = (animation_time != 15) ? ((2.5*animation_time)/15) : 2.5;
  const letter = document.getElementById("animation_card_image");
  const letter1 = document.getElementById("img_for_animation");
  const envelope_cap = document.getElementById("animation_Envelope_cap_close");
  envelope_cap.style.zIndex="-1";
  letter.style.transition = "top "+temp_for_time+"s";
  letter.style.transformStyle = "preserve-3d";
  letter.style.top = "-396px";

  letter.style.left = "0px";

  temp_for_time = (animation_time != 15) ? ((2200*animation_time)/15) : 2200;

  my_animation = setTimeout(letterrotate, temp_for_time);

}

function letterrotate()
{
  temp_for_time = (animation_time != 15) ? ((1.5*animation_time)/15) : 1.5;
  const letter = document.getElementById("animation_card_image");
  const image = document.getElementById("img_for_animation");
  const envelope_body = document.getElementById("animation_Envelpoe_body_front");
  
  const temp = document.getElementById('temp_for_left');


  temp.style.transition = "transform "+temp_for_time+"s";
  temp.style.transformStyle = "preserve-3d";
  temp.style.transform = "translateX(140px)";

  envelope_body.style.zIndex = "-1";
  letter.style.zIndex = "10";

  letter.style.transition = "transform "+temp_for_time+"s";
  letter.style.transformStyle = "preserve-3d";
  letter.style.transform = "unset";
  
  image.style.transition = "transform "+temp_for_time+"s";
  image.style.transformStyle = "preserve-3d";
  image.style.transform = "rotate(0deg)";

  image.style.width = "440px";
  

  temp_for_time = (animation_time != 15) ? ((2200*animation_time)/15) : 2200;

  my_animation = setTimeout(zoomImage , temp_for_time);

}

function zoomImage()
{

  temp_for_time = (animation_time != 15) ? ((1.5*animation_time)/15) : 1.5;

  const temp = document.getElementById('temp_for_left');
  const full_envelope = document.getElementById("animation_div_01");
  const image = document.getElementById("img_for_animation");



  image.style.transition = "width "+temp_for_time+"s";
  image.style.transformStyle = "preserve-3d";
  image.style.width = "516px";

  full_envelope.style.transition = "transform "+temp_for_time+"s";
  full_envelope.style.transformStyle = "preserve-3d";
  full_envelope.style.transform = "rotateY(180deg) rotateZ(-7.98deg)";

  temp.style.transition = "transform "+temp_for_time+"s";
  temp.style.transformStyle = "preserve-3d";
  temp.style.transform = "rotate(-8deg)";



  temp_for_time = (animation_time != 15) ? ((1800*animation_time)/15) : 1800;

  my_animation = setTimeout(put_whole_envelope , temp_for_time);
  
}

function put_whole_envelope()
{
  jQuery('#animation_div_01').removeClass('animation_shadow');
  temp_for_time = (animation_time != 15) ? ((1.5*animation_time)/15) : 1.5;
  const full_envelope = document.getElementById("animation_div_01");

  full_envelope.style.transform = "rotateY(180deg) rotateZ(-7.98deg) scale(1)";

  full_envelope.style.transition = "transform "+temp_for_time+"s";
  full_envelope.style.transformStyle = "preserve-3d";
  full_envelope.style.transform = "rotateY(180deg) rotateZ(-7.98deg) scale(0.9)";

  

}

// animation functions end
</script>
