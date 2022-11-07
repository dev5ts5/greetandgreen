<?php
add_action('wp_ajax_my_custom_add_to_cart', 'my_custom_add_to_cart');
add_action('wp_ajax_nopriv_my_custom_add_to_cart', 'my_custom_add_to_cart');




function my_custom_add_to_cart() {
    
    //    print_r($_POST['json_obj_for_save_product']);

    //    die();

        $user_id = $_POST['iframe_user'];
        $random = date('Y').rand(0000,9999).date('d');
        global $wpdb;
        $wpdb->update('gragr_envelop_preview', array(
                    'Rnd_no' => $random,
                    'details_event_name' => $_POST['details_event_name'],
                    'myonoffswitch_details' => $_POST['myonoffswitch_details'],
                    'details_place_name' => $_POST['details_place_name'],
                    'details_link' => $_POST['details_link'],
                    'details_start_date' => $_POST['details_start_date'],
                    'details_start_time' => $_POST['details_start_time'],
                    'details_end_date_optional' => $_POST['details_end_date_optional'],
                    'details_end_time_optional' => $_POST['details_end_time_optional'],
                    'details_other_information' => $_POST['details_other_information'],
                    'product_price_post_id' => $_POST['product_id'],
                    'status' => '1',

                    'product_saved_details_fpd' => json_encode( $_POST['json_obj_for_save_product']),

            ), array('Post_Id'=>$_POST['product_id'], 'User_Id'=>$user_id, 'Rnd_no'=>'0'));


        $wpdb->update('gragr_envelop_preview', array(
                    'product_saved_details_fpd' => json_encode( $_POST['json_obj_for_save_product']),
            ), array('Id'=>'211'));


    $product_id = $_POST['product_id'];
    WC()->cart->add_to_cart($product_id);
    header('Location: '.site_url().'/mon-compte/invois_main_html/');
    die();
}

function example_callback( $params ) {
    echo "Gfsdgdfg";exit;
    global $post;
    // Redirect the French language to the home page if the current page ID is 123
    if ( $post->ID === 123 ) {
        $params['pageLanguage'] = 'fr';
        $params['languageUrls'] = [ 'en' => 'https://dev.greetandgreen.com/administrationAcDRdcf/en/' ];
    }
    return $params;
}

add_filter('wpml_browser_redirect_language_params', 'example_callback');
add_action('wp_ajax_get_saved_card_fancy_product_designer', 'get_saved_card_fancy_product_designer');
add_action('wp_ajax_nopriv_get_saved_card_fancy_product_designer', 'get_saved_card_fancy_product_designer');

function get_saved_card_fancy_product_designer() 
{


    // $id = $_POST['id'];
    
    // $sql = "SELECT views FROM products WHERE ID=$id";
    // $query = mysql_query($sql) or die('Product could not be selected.');
        include_once($_SERVER['DOCUMENT_ROOT'] . "/config/connection.php");
        $get_proId = $conn->prepare("select product_saved_details_fpd from gragr_envelop_preview where Id = '211'");
        $get_proId->execute();
        $pro_id = $get_proId->fetch();
        $product_saved_details_fpd = $pro_id['product_saved_details_fpd'];
        

    
    // $result = mysql_result($query,0,"views");

    header('Content-Type: application/json');
    
    echo json_encode(stripslashes(json_decode($product_saved_details_fpd)));
    // echo json_encode($product_saved_details_fpd);

exit;

}




// hp_log Video Music File Upload In admin 
function music_video_page()
{
    //display uplaod form
    if (empty($_POST)) { 
        ?>
        <div class="video_music_container">
            <ul class="video_music_tabs">
                <li class="video_music_tab_link video_music_current" data-tab="video_music_tab_1">Music</li>
                <li class="video_music_tab_link" data-tab="video_music_tab_2">Music Category</li>
            </ul>

            <div id="video_music_tab_1" class="video_music_tab_content video_music_current">
                
            
                <h2>Music Add</h2>
                    <div class="main_container_music_upload">

                        <form action="" method="post" enctype="multipart/form-data">
                        <table class="main_container_music_upload_table" style="width: 70%;">
                            <tr>
                                <td><label for="music-title">Music Title</label></td>
                                <td><input type="text" name="post_title" required></td>
                            </tr>
                            <tr>
                                <td><label for="music-category">Music category</label></td>
                                <td><select name="music-category" id="music-category">
                                    <?php
                                        $arg = new WP_Query( array( 'post_type' => 'video-music-category') ); 
                                        while ( $arg->have_posts() ) : $arg->the_post();
                                        ?>
                                            <option value="<?php echo the_title(); ?>"><?php echo the_title(); ?></option>
                                        <?php
                                        endwhile;
                                    ?>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label for="music_file">music file</label></td>
                                <td><input type="file" name="fileToUpload" id="fileToUpload" required></td>
                            </tr>
                            <tr>
                                <td colspan="2"><input type="submit" value="Upload" name="music_submit" style="margin-left: 20%;"></td>
                            </tr>
                        </table>
                        </form>
                    </div>


                <h2>Music List</h2>
                <table class="video-music-table" style="margin-top: 50px;">
                    <tr>
                        <th>Music Title</th>
                        <th>Music Category</th>
                        <th>Music file</th>
                        <th colspan="2">Action</th>
                    </tr>

                    <?php
                    $query = new WP_Query(array('post_type' => 'video-music'));
                    $posts = $query->posts;

                    foreach ($posts as $post) {
                        $music_id =$post->ID;
                        $music_url = $post->post_content;
                        $music_file_name = explode("/",$music_url);
                        $music_edit_title = $post->post_title;
                        $music_edit_category = $post->post_excerpt;

                        
                        ?>
                        <tr>
                            <td><?php echo $post->post_title; ?></td>
                            <td><?php echo $post->post_excerpt; ?></td>
                            <td><?php echo $music_file_name[8]; ?></td>
                            <td>
                                <button onclick="update_video_music('<?php echo $music_edit_title; ?>', '<?php echo $music_edit_category; ?>', '<?php echo $music_file_name[8]; ?>', '<?php echo $music_id; ?>')" type="button" class="btn btn-outline-secondary music-edit-btn"  data-bs-toggle="modal" data-bs-target="#expedit">Edit</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-outline-secondary music-delete-btn"  data-bs-toggle="modal" data-bs-target="#expdelete">Delete</button>
                            </td>
                        </tr>
                    <?php }
                    ?>

                </table>
            </div>

            <div id="video_music_tab_2" class="video_music_tab_content">

                <h2>Add Music Category</h2>
                <div class="main_container_music_upload">
                    <form action="" method="post" enctype="multipart/form-data">
                        <table>
                            <tr>
                                <td><label for="music-title">Music category Title</label></td>
                                <td><input type="text" name="post_category_title" class="post_category_title" required></td>
                            </tr>
                            <tr>
                                <td colspan="2" style="text-align: center;"><input type="submit" value="Add" name="music_category_submit"></td>
                            </tr>
                        </table>
                    </form>
                </div>

                <h2>Music Category List</h2>
                <form action="" method="POST">
                <table class="video-music-category-table" style="margin-top: 50px;">
                    <tr>
                        <th>Music Category</th>
                        <th colspan="2">Action</th>
                    </tr>

                    <?php
                    
                    $query = new WP_Query(array('post_type' => 'video-music-category'));
                    $posts = $query->posts;
                    
                    foreach ($posts as $post) { 
                        $cate_id = $post->ID;
                        $cate_name = $post->post_title;
                        ?>
                        <tr>
                            <td><?php echo $post->post_title; ?></td>
                            <td>
                                <button onclick="update_music_category( '<?php echo $post->post_title; ?>' , '<?php echo $post->ID; ?>' )" type="button" class="btn btn-outline-secondary video-music-edit-btn"  data-bs-toggle="modal" data-bs-target="#expedit">Edit</button>
                            </td>
                            <td>
                                <!-- <a href="music_video_page?delete=<?php //echo $post->ID; ?>" class="btn btn-outline-secondary deleterow">Delete</a> -->
                                <button type="submit" name="music_category_delete" id="<?php echo $post->ID; ?>" class="btn btn-primary">Delete</button>
                            </td>
                        </tr>
                    <?php }
                    ?>
                </table>
                </form>
            </div>

            <!-- Edit Music Container -->
            <div class="edit_music">
                <form action="" method="post" enctype="multipart/form-data" >
                    <div class="close_music_popup">X</div>
                    <h3 class="update_music_cate">Music Update</h3>
                    <table>
                        <tr class="edit_music_title">
                            <td><label for="music-title">Music Title</label></td>
                            <td>
                                <input type="hidden" name="video_music_edit_id" id="video_music_edit_id" >
                                <input type="text" name="post-title-edit" id="post-title-edit" required>
                            </td>
                        </tr>
                        <tr class="edit_music">
                            <td><label for="music">Music category</label></td>
                            <td>
                                <select name="music-edit" id="music-edit">
                                    <?php
                                        $arg = new WP_Query( array( 'post_type' => 'video-music-category') ); 
                                        while ( $arg->have_posts() ) : $arg->the_post();
                                        ?>
                                            <option value="<?php echo the_title(); ?>"><?php echo the_title(); ?></option>
                                            <?php
                                        endwhile;
                                    ?>
                                </select>
                            </td>    
                        </tr>
                        <tr class="edit_music_file">
                            <td><label for="music_file">music file</label></td>
                            <td><input type="file" name="fileToUpload_edit" id="fileToUpload_edit"></td>
                        </tr>
                        <tr class="edit_music_btn">
                            <td colspan='2' style="text-align: center;"><button type="button" class="btn btn-secondary video_music_close" data-bs-dismiss="modal">Fait</button>
                            <button type="submit" name="edit_music_submit" class="btn btn-primary">Ajouter</button></td>
                        </tr>
                    </table>
                </form>
            </div>

            <!-- Edit Music Category Container -->
            <div class="edit_music_cate">
                <form action="" method="post" >
                        <div class="close_cate_popup">X</div>
                    <h3 class="update_music_cate">Music Category Update</h3>
                    <div class="edit_music_cate_title">
                        <label for="music-title">Music Title</label>
                        <input type="hidden" name="video_music_cate_id" id="video_music_cate_id" >
                        <input type="text" name="video_music_cate_edit" id="video_music_cate_edit">
                    </div>
                    <div class="edit_music_cate_btn">
                        <!-- <input type="submit" value="Update" name="edit_music_category_submit"> -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary video_music_cate_close" data-bs-dismiss="modal">Fait</button>
                            <button type="submit" name="edit_music_category_submit" class="btn btn-primary">Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>

        </div><!-- video_music_container -->

        <style>
            .video_music_container {
                width: 800px;
                margin: 50px;
            }

            ul.video_music_tabs {
                margin: 0px;
                padding: 0px;
                list-style: none;
            }

            ul.video_music_tabs li {
                background: none;
                color: #222;
                display: inline-block;
                padding: 10px 15px;
                cursor: pointer;
                font-size: medium;
                font-weight: 700;
            }

            ul.video_music_tabs li.video_music_current {
                background: #ededed;
                color: #222;
            }

            .video_music_tab_content {
                display: none;
                background: #ededed;
                padding: 15px;
            }

            .video_music_tab_content.video_music_current {
                display: inherit;
            }

            .main_container_music_upload_table td,.video-music-table th,.video-music-table td{
                padding: 10px;
            }

            .main_container_music_upload input[type="submit"],.main_container_music_upload_table input[type="submit"] {
                padding: 2px 25px;
                font-size: 15px;
                font-weight: 700;
                margin-top: 15px;
            }
            .main_container_music_upload input[type="submit"]:hover,.main_container_music_upload_table input[type="submit"]:hover{
                background-color: grey;
            }
            .main_container_music_upload label,.main_container_music_upload_table label {
                font-size: medium;
                font-weight: 500;
            }
            .video_music_tabs li{
                margin-bottom:0px !important;
            }

            .edit_music_cate form,.edit_music form{
                padding: 0px;
                border: 1px solid grey;
                border-radius: 10px;
                width: 30%;
                margin-left: auto;
                margin-right: auto;
                position: absolute;
                top: 25%;
                left: 30%;
                background-color: #c5c2c2;
            }
            .edit_music form{
                padding: 0px;
                border: 1px solid grey;
                border-radius: 10px;
                width: 40%;
                margin-left: auto;
                margin-right: auto;
                position: absolute;
                top: 25%;
                left: 30%;
                background-color: #c5c2c2;
            }
            .edit_music form table{
                display: flex;
                justify-content: center;
            }
            
            .edit_music_cate_title,.update_music_cate{
                text-align: center;
                padding-top: 20px;
            }
            .edit_music_cate_btn{
                text-align: center;
                padding-top :20px;
                padding-bottom: 20px;
            }
            .edit_music_cate_btn button,.edit_music form button{
                margin: 10px;
                padding: 5px 25px;
                border-radius: 5px;
                font-size: 10pt;
                font-weight: 600;
            }
            .close_cate_popup,.close_music_popup
            {
                text-align: right;
                font-size: 15pt;
                border: 1px solid;
                display: inline-block;
                cursor: pointer;
            }
            table.video-music-category-table {
                width: 45%;
            }
            table.video-music-category-table td {
                padding: 10px;
            }
            .edit_music_cate,.edit_music{
                display: none;
            }
        </style>
        <script>
            jQuery(document).ready(function() {

                jQuery('ul.video_music_tabs li').click(function() {
                    var tab_id = jQuery(this).attr('data-tab');

                    jQuery('ul.video_music_tabs li').removeClass('video_music_current');
                    jQuery('.video_music_tab_content').removeClass('video_music_current');

                    jQuery(this).addClass('video_music_current');
                    jQuery("#" + tab_id).addClass('video_music_current');
                })

                // jQuery(".edit_music_cate").hide();
                // jQuery(".edit_music").hide();
                jQuery(".video_music_cate_close,.close_cate_popup").click(function(){
                    jQuery(".edit_music_cate").hide(); 
                });
                jQuery(".video_music_close,.close_music_popup").click(function(){
                    jQuery(".edit_music").hide();
                });

                jQuery(".video-music-edit-btn").click(function(){
                    jQuery(".edit_music_cate").show(); 
                })
                jQuery(".music-edit-btn").click(function(){
                    jQuery(".edit_music").show(); 
                })
            });

            function update_music_category(title , id)
            {    
                document.getElementById('video_music_cate_id').value = id;
                document.getElementById('video_music_cate_edit').value = title;  
            }

            function update_video_music(title, music, cate, id){
                document.getElementById('video_music_edit_id').value = id;
                document.getElementById('post-title-edit').value = title;
                document.getElementById('music-edit').value = music;
                document.getElementById('fileToUpload').value = cate;
            }
            

        </script>




<?php



    }

    if (!function_exists('wp_handle_upload')) require_once(ABSPATH . 'wp-admin/includes/file.php');

    if (!empty($_POST)) {
        global $wpdb;
        if(isset($_POST['music_submit'])){

        
                $uploadedfile = $_FILES['fileToUpload'];
                $upload_overrides = array('test_form' => false);
                $movefile = wp_handle_upload($uploadedfile, $upload_overrides);
                $wp_upload_dir = wp_upload_dir();
                $music_file = $wp_upload_dir['url']."/".$_FILES['fileToUpload']['name'];
                $music_title = $_POST['post_title'];
                $music_cate = $_POST['music-category'];
                if ($movefile) {
                    $uploaded_file = $movefile["file"];
                    //create a post with the custom post type video-music
                    $post_args = array(
                        'post_status'           => 'publish',
                        'post_type'             => 'video-music',
                        'post_title'            => $music_title,
                        'post_excerpt'            => $music_cate,
                        'post_content'          => $music_file //Store Music Url 
                    );
                    $parent_post_id = wp_insert_post($post_args);
                    $filetype = wp_check_filetype(basename($uploaded_file), null);
                    // Get the path to the upload directory.

                    // echo "testing url".$wp_upload_dir['url'];
                    // die();
                    // Prepare an array of post data for the attachment.
                    $attachment = array(
                        'guid'           => $wp_upload_dir['url'] . '/' . basename($uploaded_file),
                        'post_mime_type' => $filetype['type'],
                        'post_title'     => preg_replace('/\.[^.]+$/', '', basename($uploaded_file)),
                        'post_content'   => '',
                        'post_status'    => 'inherit'
                    );

                    // Insert the attachment to the post
                    $attach_id = wp_insert_attachment($attachment, $uploaded_file, $parent_post_id);

                    // Make sure that this file is included, as wp_generate_attachment_metadata() depends on it.
                    require_once(ABSPATH . 'wp-admin/includes/image.php');

                    // Generate the metadata for the attachment, and update the database record.
                    $attach_data = wp_generate_attachment_metadata($attach_id, $filename);

                    wp_update_attachment_metadata($attach_id, $attach_data);
                    wp_redirect('https://dev.greetandgreen.com/administrationAcDRdcf/wp-admin/admin.php?page=music_video_page', 301);
                } else {
                    echo "File upload failed";
                }
        }



        if(isset($_POST['music_category_submit'])){
            $category_name = $_POST['post_category_title'];
            $post_category_args = array(
                'post_status'           => 'publish',
                'post_type'             => 'video-music-category',
                'post_title'            => $category_name
            );

            if ( isset($_POST['post_category_title'])) {
                
                $exists = $wpdb->get_var( $wpdb->prepare("SELECT COUNT(*) FROM `gragr_posts` WHERE `post_name` = '%s'", $_POST['post_category_title']) );   
                
                if ( ! $exists || !empty($category_name)) {
                    wp_insert_post($post_category_args);
                    wp_redirect('https://dev.greetandgreen.com/administrationAcDRdcf/wp-admin/admin.php?page=music_video_page', 301);
                }else{
                    echo "This music category already exist";
                }                  
              }
        }

        // Music Category Managed edit and delete

        if(isset($_POST['edit_music_submit'])){
            $uploadedfile_music_edit = $_FILES['fileToUpload_edit'];
            $upload_overrides = array('test_form' => false);
            $movefile = wp_handle_upload($uploadedfile_music_edit, $upload_overrides);
            $wp_upload_dir_music = wp_upload_dir();
            $music_file = $wp_upload_dir_music['url']."/".$_FILES['fileToUpload_edit']['name'];
            $edit_music_id = $_POST['video_music_edit_id'];
            $edit_music_name = $_POST['post-title-edit'];
            $edit_music_cate = $_POST['music-edit'];
            // $edit_music_file = $_POST['fileToUpload_edit'];
            // echo "dshdsjkhsdj123    ".$uploadedfile_music_edit;
            // echo "UPDATE `gragr_posts` SET `post_title`='$edit_music_name',`post_excerpt` = '$edit_music_cate',`post_content` = '$music_file' WHERE ID=$edit_music_id";
            // die();

           $wpdb->query($wpdb->prepare("UPDATE `gragr_posts` SET `post_title`='$edit_music_name',`post_excerpt` = '$edit_music_cate',`post_content` = '$music_file' WHERE ID=$edit_music_id"));
           wp_redirect('https://dev.greetandgreen.com/administrationAcDRdcf/wp-admin/admin.php?page=music_video_page', 301);
           
        }
        if(isset($_POST['edit_music_category_submit'])){
            
            
            $edit_cate_id = $_POST['video_music_cate_id'];
            $edit_cate_name = $_POST['video_music_cate_edit'];

           $wpdb->query($wpdb->prepare("UPDATE `gragr_posts` SET `post_title`='$edit_cate_name' WHERE ID=$edit_cate_id"));
           wp_redirect('https://dev.greetandgreen.com/administrationAcDRdcf/wp-admin/admin.php?page=music_video_page', 301);
           
        }

        if(isset($_POST['music_category_delete']))
        {
            // $id = $_POST['']
            // wp_delete_post(5);
        }


    }
}

//create the menu item and the page for upload

function register_video_music_menu()
{

    add_menu_page('Music', 'Music', 'manage_options', 'music_video_page', 'music_video_page', 'dashicons-portfolio', 1.1);

    $submenu_pages = array(

        // Avoid duplicate pages. Add submenu page with same slug as parent slug.
        array(
            'parent_slug'   => 'music_video_page',
            'page_title'    => 'Upload',
            'menu_title'    => 'Upload',
            'capability'    => 'manage_options',
            'menu_slug'     => 'music_video_page',
            'function'      => 'music_video_page', // Uses the same callback function as parent menu. 
        )
    );

    // echo "<pre>";
    // print_r($submenu_pages);
    // echo "</pre>";
    // die();
    // Add each submenu item to custom admin menu.
    foreach ($submenu_pages as $submenu) {

        add_submenu_page(
            $submenu['parent_slug'],
            $submenu['page_title'],
            $submenu['menu_title'],
            $submenu['capability'],
            $submenu['menu_slug'],
            $submenu['function']
        );
    }
}
add_action('admin_menu', 'register_video_music_menu');




