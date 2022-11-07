// home page start 

$(document).ready(function(){
  

  setTimeout(function() {
    // jQuery(".fpd-action-btn.fpd-tooltip.fpd-primary-text-color.save_item").append("<button class='demobtn'>Modified</button>");
  }, 2000);
    // choose my model
    $('.choose-main-image').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      asNavFor: '.choose-secound-image',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            autoplay: true,
            autoplaySpeed: 5000
          }
        }
      ]
    });
    $('.choose-secound-image').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.choose-main-image',
      arrows: false,
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });
  
    // call to action
    $('.call-action-row').slick({
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick"
        },
        {
          breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
        },
        {
          breakpoint: 501,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
        }
      ]
    });
  
    // testimonials
    $('.testimonials-row').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    // Our best-sellers
    $('.best-sellers-row').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 5000
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 5000
          }
        }
      ]
    });
  
    // product page main
    $('.product-left-cover').slick({
      slidesToShow: 1,
      arrows: true,
      dots: false,
      prevArrow: '<button class="prev-arrow theme-btn-secound">< MODÈLE PRÉCÉDENT</button>',
      nextArrow: '<button class="next-arrow theme-btn-secound">MODÈLE SUIVANT ></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
          }
        }
      ]
    });
  });
// home page end





var discount_by_promocode = 0;
var selected_package_price = 0;
var selected_package = [0,10];
var product_price_woocommerce = 0;



function change_product_from_dropdown(selected_product_id)
{
  // alert(selected_product_id);
  jQuery('body').addClass('ajax_loader');
  jQuery.ajax({
    url: my_ajax_object_for_change_product_details_in_invois.ajax_url,
    cache: false,
    type: 'POST',
    data: {
      'action':'for_change_product_details_in_invois_action',
      'selected_product_id':selected_product_id,

    //   'saved_product_id' : document.getElementsByClassName('invois_select_for_product')[0].id.split("_")[ document.getElementsByClassName('invois_select_for_product')[0].id.split("_").length - 1 ],
    //   'total_select_emails' : total_select_emails,
    //   'uppdates_price' : parseFloat( document.getElementById( 'product_price_email_template' ).innerHTML ).toString(),
    },
    success: function(result){
      result = result.slice(0, -1);
      console.log(result);
      jQuery('.invois_select_main').html(result.split('$%^&*$$%^&*$')[0]);
      document.getElementById('invois_table_body_contain').innerHTML = result.split('$%^&*$$%^&*$')[1];
      document.getElementById('number-count_id').innerHTML = "0";
      document.getElementById('selectall').checked = false;
      document.getElementById('invois_product_description_tag').innerHTML = result.split('$%^&*$$%^&*$')[2];
      document.getElementById('product_price_email_template').innerHTML = parseFloat( result.split('$%^&*$$%^&*$')[3]) + parseFloat( result.split('$%^&*$$%^&*$')[4] );
      product_price_woocommerce = result.split('$%^&*$$%^&*$')[3];
      // product_main_price = result.split('$%^&*$$%^&*$')[3];
      document.getElementById('promo_code_tb').value = "";
      discount_by_promocode = 0;
      // console.log("DETAILS = "+result.split('$%^&*$$%^&*$')[3]);

      jQuery('body').removeClass('ajax_loader');
      
    }
  });
  
}


// for get first package price start
jQuery('body').addClass('ajax_loader');
jQuery.ajax({
    url: my_ajax_object_for_main_filter_invoise_table.ajax_url,

    cache: false,
    type: 'POST',
    data: {
        'action': 'for_main_filter_invoise_table_action',
        'get_package_price':'yes',
        

    },
    success: function(result) {
        result = result.slice(0, -1);
        console.log("test : ");
        console.log(result);
        // return;
        selected_package_price = result.split('$%^&*$')[0];
        product_price_woocommerce = result.split('$%^&*$')[1];
        jQuery('body').removeClass('ajax_loader');
    }
});
// for get first package price end



function filter_product_chkbox() {
    var filter_value = [];
    if (document.getElementById('fil-tout').checked == true)
        filter_value.push("all");
    if (document.getElementById('fil-envoye').checked == true)
        filter_value.push("sent");
    if (document.getElementById('fil-non-envoye').checked == true)
        filter_value.push("notsent");

    jQuery('body').addClass('ajax_loader');
    jQuery.ajax({
        url: my_ajax_object_for_main_filter_invoise_table.ajax_url,

        cache: false,
        type: 'POST',
        data: 
        {
            'action': 'for_main_filter_invoise_table_action',
            'filter': filter_value,

        },
        success: function(result) 
        {
            result = result.slice(0, -1);
            console.log(result);
            $('#user_email_details_table_container').DataTable().destroy();
            $('#user_email_details_table_container').find('tbody').html(result);
            update_table();
            jQuery('body').removeClass('ajax_loader');
        }
    });

}

function select_package(key, price) 
{
    
    
    if( parseFloat(document.getElementById('number-count_id').innerHTML) > parseFloat( key.split('-')[1] ) )
    {
        return;
    }
    selected_package = [ key.split('-')[0] , key.split('-')[1] ];
    selected_package_price = price;
    // if(product_main_price == "")
    // {
    //     product_main_price = document.getElementById('product_price_email_template').innerHTML;
    // }
    
    jQuery('.table-cho-tr').removeClass('active');
    jQuery('#table_tr_id---' + key).addClass('active');
    document.getElementById('product_price_email_template').innerHTML = ( parseFloat(product_price_woocommerce) + parseFloat(price) ) - parseFloat(discount_by_promocode);
    
   

}

function table_pagination_net_btn_clk()
{
    document.getElementById('selectall').checked = false;
}

function apply_promo_code()
{
    var set = "";
    if( product_main_price == "" )
    {
        set="no";
    }
    else
    {
        set="yes";
    }
    
    jQuery('body').addClass('ajax_loader');
    jQuery.ajax({
        url: my_ajax_object_for_main_filter_invoise_table.ajax_url,

        cache: false,
        type: 'POST',
        data: {
            'action': 'for_main_filter_invoise_table_action',
            'promo_code': document.getElementById('promo_code_tb').value,
            'price_set': set,

        },
        success: function(result) {
            result = result.slice(0, -1);



            
            if(set == "no")
                product_main_price = result.split('$%^&*$')[1];
            document.getElementById('product_price_email_template').innerHTML = (parseFloat(product_main_price) + parseFloat(selected_package_price) ) - parseFloat(result.split('$%^&*$')[0]);

            discount_by_promocode = result.split('$%^&*$')[0];

            console.log("product_main_price = "+product_main_price);
            console.log("discount_by_promocode = "+discount_by_promocode);
            
            jQuery('body').removeClass('ajax_loader');
        }
    });
    
}

function email_details_checkbox_clk(email,chkboxid)
{
    document.getElementById('selectall').checked = false;
    if(document.getElementById(chkboxid).checked == true)
        jQuery('#number-count_id').html( parseInt(jQuery('#number-count_id').html())+1 );
    else
        jQuery('#number-count_id').html( parseInt(jQuery('#number-count_id').html())-1 );
    
    // if( ( parseFloat(document.getElementById('number-count_id').innerHTML) > selected_package[0] ) && parseFloat(document.getElementById('number-count_id').innerHTML) <= parseFloat(selected_package[1]) )
    if( parseFloat(document.getElementById('number-count_id').innerHTML) <= parseFloat(selected_package[1]) )
    {

        
        
        if (document.getElementById(chkboxid).checked == true) 
        {
            total_select_emails.push(email);
        } 
        else 
        {
            total_select_emails.splice(total_select_emails.indexOf(email), 1);
        }


        

        var temp_for_chkbox = 0;
        document.getElementsByName('invois_table_user_details_chkbox').forEach(element => {
            if(element.checked != true)
            temp_for_chkbox = 1;
        });
        if(temp_for_chkbox == 0)
            document.getElementById('selectall').checked = true;

    
    }
    else
    {
        document.getElementById(chkboxid).checked=false;
        jQuery('#number-count_id').html( parseInt(jQuery('#number-count_id').html())-1 );
        document.getElementById('package_popup_open').click();
    }
    console.log(total_select_emails);

}



function invois_checked_all_users()
{
    if(document.getElementById('selectall').checked == true)
    {
        document.getElementsByName('invois_table_user_details_chkbox').forEach(element => {
            
            if(element.type == "checkbox")
            {
                if(element.checked != true)
                {
                    element.click();
                }
                
            }
        });
    }
    else if(document.getElementById('selectall').checked == false)
    {
        document.getElementsByName('invois_table_user_details_chkbox').forEach(element => {
            
            if(element.type == "checkbox")
            {
                if(element.checked != false)
                {
                    element.click();
                }
                
            }
        });
    }
}




// for import files for email data start 




// for import files for email data end 



// for tracking and return page start 

function export_table_details()
{
    jQuery('body').addClass('ajax_loader');
    jQuery.ajax({
        url: my_ajax_object_for_export_tacking_and_return_emails_data.ajax_url,

        cache: false,
        type: 'POST',
        data: {
            'action': 'for_export_tacking_and_return_emails_data_action',
        },
        success: function(result) {
            result = result.slice(0, -1);
            console.log(result);
            jQuery('body').removeClass('ajax_loader');
        }
    });
}

function open_product_status_dropdown(div_id)
{
    if(document.getElementById(div_id).classList.contains('active'))
        jQuery('#'+div_id).removeClass('active');
    else
        jQuery('#'+div_id).addClass('active');
    // jQuery('#'+div_id).hide();
}

function tracking_and_return_checked_all_users()
{

}
// for tracking and return page end












// for sending after checkout completion mail start


function go_to_checkout_page( )
{

    
  
        jQuery('body').addClass('ajax_loader');
        jQuery.ajax({
        url: my_ajax_object_for_sending_mail_product.ajax_url,

        cache: false,
        type: 'POST',
        data: 
        {
            'action': 'for_sending_mail_product_action',
            'saved_product_id' : document.getElementsByClassName('invois_select_for_product')[0].id.split("_")[ document.getElementsByClassName('invois_select_for_product')[0].id.split("_").length - 1 ],
            'total_select_emails' : total_select_emails,
            'uppdates_price' : parseFloat( document.getElementById( 'product_price_email_template' ).innerHTML ).toString(),

        },
        success: function(result) 
        {
            result = result.slice(0, -1);
            console.log("test = ");
            console.log(result);
            jQuery('body').removeClass('ajax_loader');
            window.location = result;
        }
    });
}

// for sending after checkout completion mail end




// for login and registration through all start 

$('.choixreview-list').slick({
  dots: true,
  arrows: false,
  autoplay: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 1,
});

function login_entered_email()
{

  // console.log(/^[a-zA-Z0-9\.]{6,15}@.+\..+$/.test(document.getElementById('login_entered_email_tb_id').value));
  
  if( /^[a-zA-Z0-9\.]{6,15}@.+\..+$/.test(document.getElementById('login_entered_email_tb_id').value) ) 
  {
    jQuery('#login_password_popup').addClass('active');
  }
  else
    alert('y');
  // if()
  // {
  //   alert('okokokokok');
  // }
}

function login_entered_email_tb()
{

  if( /^[a-zA-Z0-9\.]{6,15}@.+\..+$/.test(document.getElementById('login_entered_email_tb_id').value) ) 
    jQuery('#login_entered_email_not_valid').hide();
  else
    jQuery('#login_entered_email_not_valid').show();

  if(document.getElementById('login_entered_email_tb_id').value != '')
  jQuery('#login_entered_email_btn').removeClass('disable');

  else
  jQuery('#login_entered_email_btn').addClass('disable');
  
}
function entered_email_form_action()
{
  alert('okl');
  return;
}

function login_pass_enter()
{
  if( /^.{8,}$/.test(document.getElementById('login_pass_enter_id').value) ) 
  {
    // jQuery('#login_minimum_char_id').hide();
    document.getElementById('count_pass_char').innerHTML = document.getElementById('login_pass_enter_id').value.length+"/8";
    jQuery('#login_minimum_char_id').addClass('success');
    jQuery('#count_pass_char').addClass('success');



    if( /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test( document.getElementById('login_pass_enter_id').value ) )
    {
      document.getElementById('login_minimum_char_id').innerHTML = 'Fort';
      jQuery('#login_minimum_char_id').removeClass('strong-orange');  
      jQuery('#login_minimum_char_id').addClass('success');  
    }
    else
    {
      document.getElementById('login_minimum_char_id').innerHTML = 'Moyen';
      jQuery('#login_minimum_char_id').addClass('strong-orange');
      jQuery('#login_minimum_char_id').removeClass('success');
    }
    
  }
  else
  {
    // jQuery('#login_minimum_char_id').show();
    jQuery('#login_minimum_char_id').removeClass('strong-orange');
    jQuery('#login_minimum_char_id').removeClass('success');
    
    document.getElementById('count_pass_char').innerHTML = document.getElementById('login_pass_enter_id').value.length+"/8";
    jQuery('#count_pass_char').removeClass('success');
    document.getElementById('login_minimum_char_id').innerHTML = '8 caractères minimum';

  }
}

function login_cpass()
{
  if(document.getElementById('login_cpass_id').value == "")
  {
    jQuery('#login_pass_not_match').hide();
  }
  else
  {
    jQuery('#login_pass_not_match').show();
  }

  if( document.getElementById('login_cpass_id').value == document.getElementById('login_pass_enter_id').value ) 
  {
    document.getElementById('login_pass_not_match').innerHTML='OK !';
    jQuery('#login_pass_not_match').addClass('success');
  }
  else
  {
    jQuery('#login_pass_not_match').removeClass('success');
    document.getElementById('login_pass_not_match').innerHTML='Les mots de passe ne correspondent pas';
  }
  
}

function login_pass_show_hide()
{
  if( document.getElementById('login_pass_enter_id').type == 'password' )
  {
    document.getElementById('login_pass_enter_id').type = 'text';
    jQuery('#login_pass_show_hide_id').addClass('show-pass');
  }
  else
  {
    document.getElementById('login_pass_enter_id').type = 'password';
    jQuery('#login_pass_show_hide_id').removeClass('show-pass');
  }
}

function login_cpass_show_hide()
{
  if( document.getElementById('login_cpass_id').type == 'password' )
  {
    document.getElementById('login_cpass_id').type = 'text';
    jQuery('#login_cpass_show_hide_id').addClass('show-pass');
  }
  else
  {
    document.getElementById('login_cpass_id').type = 'password';
    jQuery('#login_cpass_show_hide_id').removeClass('show-pass');
  }
}

function login_pass_enter_complete()
{
  if( document.getElementById('login_cpass_id').value != '' && document.getElementById('login_cpass_id').value == document.getElementById('login_pass_enter_id').value )
  {
    document.getElementsByClassName('close-icon')[0].click();
    jQuery('#login_confirm_popup_container').addClass('active');
  }
}

function login_confirm_btn()
{
  jQuery('#login_fname_lname_popup').addClass('active');
}

function login_flname_input()
{
  if( /^[a-zA-Z]+$/.test(document.getElementById('login_name').value) && /^[a-zA-Z]+$/.test(document.getElementById('login_fname').value) )
  {
    jQuery('#login_flname_sub').removeClass('disable');
  }
  else
    jQuery('#login_flname_sub').addClass('disable');

}
function login_flname_sub_clk()
{ 
  jQuery('body').addClass('ajax_loader');
  jQuery.ajax({
      url: my_ajax_object_for_registration_new_user.ajax_url,

      cache: false,
      type: 'POST',
      data: {
          'action': 'for_registration_new_user_action',
          'email' : document.getElementById('login_entered_email_tb_id').value,
          'password' : document.getElementById('login_pass_enter_id').value,
          'lname' : document.getElementById('login_name').value,
          'fname' : document.getElementById('login_fname').value,
      },
      success: function(result) {
          result = result.slice(0, -1);          
          if( ! result.includes('$#no$#') )
          {
            document.getElementsByClassName('close-icon')[0].click();
            window.location = result+'/liste-de-souhaits/';
          }
          jQuery('body').removeClass('ajax_loader');
      }
  });
}

function login_email_popup()
{
  document.getElementsByClassName('close-icon')[0].click();
  jQuery('#login_wrong_pass_email').hide();
  jQuery('#login_email_main_container').addClass('active');
}
function login_email_pass_show_hide()
{
  if( document.getElementById('login_email_pass_enter_id').type == 'password' )
  {
    document.getElementById('login_email_pass_enter_id').type = 'text';
    jQuery('#login_email_pass_show_hide_id').addClass('show-pass');
  }
  else
  {
    document.getElementById('login_email_pass_enter_id').type = 'password';
    jQuery('#login_email_pass_show_hide_id').removeClass('show-pass');
  }
}

function login_email_pass_enter()
{
  if( /^[a-zA-Z0-9\.]{6,15}@.+\..+$/.test(document.getElementById('login_email_id').value) && /^.{8,}$/.test(document.getElementById('login_email_pass_enter_id').value) )
    jQuery('#login_email_entered_submit_id').removeClass('disable');
  else
    jQuery('#login_email_entered_submit_id').addClass('disable');

}

function login_email_entered_submit()
{
  jQuery('body').addClass('ajax_loader');
  jQuery.ajax({
      url: my_ajax_object_for_registration_new_user.ajax_url,

      cache: false,
      type: 'POST',
      data: {
          'action': 'for_registration_new_user_action',
          'user_login' : 'yes',
          'email' : document.getElementById('login_email_id').value,
          'password' : document.getElementById('login_email_pass_enter_id').value,
      },
      success: function(result) {
          result = result.slice(0, -1);
          console.log(result);
          // document.getElementsByClassName('close-icon')[0].click();
          jQuery('body').removeClass('ajax_loader');
          if( ! result.includes('$#no$#') )
          {
            document.getElementsByClassName('close-icon')[0].click();
            window.location = result+'/liste-de-souhaits/';
          }
          else
          {
            jQuery('#login_wrong_pass_email').show();
          }
      }
  });
}
function back_to_ohter_choice()
{
  document.getElementsByClassName('close-icon')[0].click();
  jQuery('#choices_for_login_id').addClass('active');
  // alert('sdf');
}

// function login_main_container_open()
// {
//   jQuery('#choices_for_login_id').addClass('active');
// }
// for login and registration through all end 
















jQuery(document).on("click", "a.details_button_top.add_to_cart", function(){ 


    console.log(JSON.stringify(fancyProductDesigner.getProduct()));

  var iframe_user = jQuery('body').attr('user_ids');
  var v_id = jQuery('body').attr('v_id');
  var product_id = jQuery(this).attr('product_id');   
  var details_event_name = jQuery("#details_event_name").val();
  var myonoffswitch_details = jQuery("#myonoffswitch_details").val();
  var details_place_name = jQuery("#details_place_name").val();
  var details_address = jQuery("#details_address").val();
  var details_start_date = jQuery("#details_start_date").val();
  var details_start_time = jQuery("#details_start_time").val();
  var details_end_date_optional = jQuery("#details_end_date_optional").val();
  var details_end_time_optional = jQuery("#details_end_time_optional").val();
  var details_other_information = jQuery("#details_other_information").val();

  if (details_event_name == '') 
  {
     jQuery('#details_event_name').attr('style', 'border-color: #ff0000 !important');
  }
  else if (details_place_name == '') 
  {
     jQuery('#details_place_name').attr('style', 'border-color: #ff0000 !important');
  }
  else if (details_address == '') 
  {
     jQuery('#details_address').attr('style', 'border-color: #ff0000 !important');
  }
  else if (details_start_date == '') 
  {
     jQuery('#details_start_date').attr('style', 'border-color: #ff0000 !important');
  }
  else if (details_start_time == '') 
  {
     jQuery('#details_start_time').attr('style', 'border-color: #ff0000 !important');
  }
  else if (details_other_information == '') 
  {
     jQuery('#details_other_information').attr('style', 'border-color: #ff0000 !important');
  }
  else
  {
   // alert("sdfsdfssdf");
    var html_id = $(".post_main_container").attr("id").split('-')[1];

    //var saved_product = JSON.parse(window.localStorage.getItem('fancy-product-designer-'+html_id));

    // console.log(saved_product);

        jQuery.ajax({
        url: my_ajax_object_for_shop_details.ajax_url,
        cache: false,
        type: 'POST',
        
        data: {
          'action':'my_custom_add_to_cart',
          'product_id':product_id,
          'details_event_name':details_event_name,
          'myonoffswitch_details':myonoffswitch_details,
          'details_place_name':details_place_name,
          'details_link':details_address,
          'details_start_date':details_start_date,
          'details_start_time':details_start_time,
          'details_end_date_optional':details_end_date_optional,
          'details_end_time_optional':details_end_time_optional,
          'details_other_information':details_other_information,
          'iframe_user':iframe_user,
          'v_id':v_id,
           //  'json_obj_for_save_product' : JSON.parse(window.localStorage.getItem('fancy-product-designer-'+html_id))[JSON.parse(window.localStorage.getItem('fancy-product-designer-'+html_id)).length - 1]['product'][0]['elements'],
           //  'json_obj_for_save_product' : JSON.parse(window.localStorage.getItem('fancy-product-designer-'+html_id))[JSON.parse(window.localStorage.getItem('fancy-product-designer-'+html_id)).length - 1]['product'],
        
        'json_obj_for_save_product' : JSON.stringify(fancyProductDesigner.getProduct()),
        },
        success: function(result){
          // console.log(result);

          window.top.location.href = 'https://dev.greetandgreen.com/user/mon-compte/envois'; 
        }
    });
  }
  




});


// var abc = "";
// jQuery(document).on("click", ".fpd-action-btn.fpd-tooltip.fpd-primary-text-color.save_item1", function(){ 
jQuery(document).on("click", ".demobtn", function(){ 
    // alert("gsdfsdf");
    // e.preventDefault();
    console.log("hello123");
    var html_id = $(".post_main_container").attr("id").split('-')[1];
    if (html_id == '822') 
    {
        jQuery.ajax({
        url: my_ajax_object_for_shop_details.ajax_url,
        cache: false,
        type: 'POST',
        data: {
          'action':'get_saved_card_fancy_product_designer',
          'id':'71',
        },
        success: function(result){

          // console.log("TEST + = "+result);
          // abc = result;
          
          fancyProductDesigner.loadProduct(JSON.parse(result));

        }
    });
    }
});
// function custom_html_card_old(json_obj)
// {
//     console.log(json_obj);
//     alert("Fsdfdsfsdfsdf");
// }    

function custom_html_card(json_obj)
{
  console.log("jSONOBJECT");
  console.log(json_obj);
  var json_obj_old = custom_html_card_old()[0][0]['elements'];
  console.log(json_obj_old);
  console.log("hello");
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
     // console.log(json_obj_old[i]['title']);

    // if (obj['parameters']['replace'] == json_obj_old[i]['title']) 
    // {
    //     console.log(obj['source'])

    // }
    // else
    // {
    //     var replace_path = obj['source'];
    // }

    if( i == 1 )
		{
			html += '<div id="card_outer_items" >';
		}
    var width = obj['parameters']['width']*obj['parameters']['scaleX'];
		var height = obj['parameters']['height']*obj['parameters']['scaleY'];

    console.log(obj);

    if (i == 0 ) 
		{
      back_card_height = height+'px';
      back_card_width = width+'px';
			// // console.log("yesYES");
      i++;
		}
    else
    {
      
      if( obj['type'] == 'image' )
      {
        if( i == 1 )
        {
          // console.log("HEIGHT WIDTH CAPTURE HERE");
          // console.log(obj);
          // back_card_height = height+'px';
          // back_card_width = width+'px';
          // back_card_height = "552.633px";
          // back_card_width = "452.633px";
        }
        if( obj['parameters']['angle'] > 0 )
        {
          if( i != 1 )
            html += '<div class="html_dif_img" style="transform:rotate('+obj['parameters']['angle']+'deg); transform-origin: left top;width:'+width+'px;height:'+height+'px;opacity: 0;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
          else
            html += '<div class="html_dif_img" style="transform:rotate('+obj['parameters']['angle']+'deg); transform-origin: left top;width:'+width+'px;height:'+height+'px;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
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
          html += '<div class="html_dif_txt" style="line-height: 1;transform:rotate('+obj['parameters']['angle']+'deg); transform-origin: left top; opacity: 0;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
        else
          html += '<div class="html_dif_txt" style="line-height: 1;opacity: 0;position:absolute;left:'+obj['parameters']['left']+'px;top:'+obj['parameters']['top']+'px;z-index:'+obj['parameters']['z']+';">';
        
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

// hp_log 20102022
// jQuery(document).on('click','.fpd-tooltip.fpd-active[data-module="text"]',function(){
//   console.log("demotest hp");
//   jQuery(".fpd-module.fpd-active.fpd-categories-active").hide();
//   jQuery(this).addClass("Hello-hp");
// });

// jQuery(document).on('click','#animation_header_envelope',function(){
//   console.log("animation sdhdkjdhkdhdkjd");
//   jQuery("#mCSB_8").parent().parent().hide();
//   jQuery("#mCSB_9").parent().parent().hide();
//   jQuery(".fpd-module[data-dynamic-designs-id='modifier-timbre']").removeClass("left-465");
// });
// jQuery(document).on('click','#animation_header_carte',function(){
//   // jQuery("#mCSB_8").parent().parent().hide();
//   // jQuery("#mCSB_9").parent().parent().hide();
//   jQuery(".fpd-module[data-dynamic-designs-id='modifier-timbre']").removeClass("left-465");
// });
// jQuery(document).on('click','.fpd-tooltip[data-module="text"]',function(){
//   console.log("hp_text");
//   jQuery(".fpd-module.fpd-designs-active.fpd-head-visible.fpd-active").hide();
// });