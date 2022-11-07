function edit_user_details( u_id , mob , email , b_date , u_image , u_name )
{
    document.getElementById('admin_user_name').value = u_name;
    document.getElementById('admin_show_user_image').src = u_image;
    document.getElementById('admin_user_birthdate').value = b_date;
    document.getElementById('admin_user_mail').value = email;
    document.getElementById('admin_user_phone').value = mob;
    document.getElementById('admin_edit_user_id').value = u_id;
}




function update_servies( array_index , title , icon , content )
{
    document.getElementById('admin_servies_title').value = title;
    document.getElementById('admin_servies_content').value = content;
    document.getElementById('admin_servies_icon_show').src = icon;
    document.getElementById('admin_servies_index').value = array_index;
}

function update_ratting( comment , stars , date , name , index , img )
{
    document.getElementById('ratting_edit_image').src = img;
    document.getElementById('ratting_edit_name').value = name;
    document.getElementById('ratting_edit_date').value = date;
    document.getElementById('ratting_edit_comment').value = comment;
    document.getElementById('ratting_edit_index_number').value = index;
    document.getElementById('ratting_edit_stars_'+stars).checked = true;
}

function update_coupon(title , amount , date , id)
{
    
    document.getElementById('post_coupon_id').value = id;
    document.getElementById('code').value = title;
    document.getElementById('val').value = amount;
    document.getElementById('e_date').value = date.split('/')[date.split('/').length - 1]+"-"+date.split('/')[date.split('/').length - 3]+"-"+date.split('/')[date.split('/').length - 2];
}
function update_video_music_category(title , slug , id)
{
   
    document.getElementById('post_video_music_id').value = id;
    document.getElementById('music-category-name').value = title;
    document.getElementById('music-category-slug').value = slug;
}

function edit_main_menu_item( id , title , link )
{
    document.getElementById('item_id').value = id;
    document.getElementById('title').value = title;
    document.getElementById('link').value = link;
}
function set_menu_parent(id)
{
    document.getElementById('menu_parent').value = id;
}

function edit_sub_menu_item( id , title , link , img , pos )
{
    document.getElementById('edit_sub_menu_parent').value = id;
    document.getElementById('edit_sub_menu_title').value = title;
    document.getElementById('edit_sub_menu_link').value = link;
    document.getElementById('edit_sub_menu_logo').src = document.location.origin+"/"+img;
    document.getElementById('edit_sub_menu_parent_line').value = pos;
}

function sub_menu_options_add(parent_id)
{
    document.getElementById('add_sub_menu_options_parent_id').value = parent_id;
}

function edit_submenu_options(id , name , link )
{
    document.getElementById('edit_sub_menu_options_id').value = id;
    document.getElementById('edit_sub_menu_options_title').value = name;
    document.getElementById('edit_sub_menu_options_link').value = link;
}

function update_footer_menu_option( id , title , link )
{
    document.getElementById('edit_fm_id').value = id;
    document.getElementById('edit_fm_title').value = title;
    document.getElementById('edit_fm_link').value = link;
}