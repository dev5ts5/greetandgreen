    <?php session_start();
    include get_template_directory() . '/functions_2.php'; // if it's inside inc directory



    function bsimple_scripts()
    {
        wp_enqueue_style('grng-style', get_stylesheet_uri());

        wp_enqueue_script('slick', get_template_directory_uri() . '/assets/js/slick.js', array(), '1.0.0', true);
        wp_enqueue_script('custom', get_template_directory_uri() . '/assets/js/custom.js', array(), '1.0.0', true);
        wp_enqueue_script('custom1', get_template_directory_uri() . '/assets/js/temp.js', array(), '1.0.0', true);
    }

    add_action('wp_enqueue_scripts', 'bsimple_scripts');

    // hp_log Add Birthdate field and user phonenumber - my account 25052022

    function action_woocommerce_edit_account_form()
    {
        woocommerce_form_field('birthday_field', array(
            'type'        => 'date',
            'label'       => __('DATE DE NAISSANCE', 'woocommerce'),
            'placeholder' => __('Date of Birth', 'woocommerce'),
            'required'    => true,
        ), get_user_meta(get_current_user_id(), 'birthday_field', true));

        woocommerce_form_field('user_phone', array(
            'type'        => 'text',
            'label'       => __('TELEPHONE PORTABLE', 'woocommerce'),
            'required'    => true,
        ), get_user_meta(get_current_user_id(), 'user_phone', true));
    }
    // add_action('woocommerce_edit_account_form', 'action_woocommerce_edit_account_form');

    // Validate - my account
    function action_woocommerce_save_account_details_errors($args)
    {
        if (isset($_POST['birthday_field']) && empty($_POST['birthday_field'])) {
            $args->add('error', __('Please provide a birth date', 'woocommerce'));
        }

        if (isset($_POST['user_phone']) && empty($_POST['user_phone'])) {
            $args->add('error', __('Please provide a Phone number', 'woocommerce'));
        }

        if (isset($_POST['image']) && empty($_POST['image'])) {
            $args->add('image_error', __('Please provide a valid image', 'woocommerce'));
        }
    }
    add_action('woocommerce_save_account_details_errors', 'action_woocommerce_save_account_details_errors', 10, 1);


    // // Validate - my account
    // function action_woocommerce_save_account_details_errors( $args ){
    //     if ( isset( $_POST['birthday_field'] ) && empty( $_POST['birthday_field'] ) ) {
    //         $args->add( 'error', __( 'Please provide a birth date', 'woocommerce' ) );
    //     }
    // }
    // add_action( 'woocommerce_save_account_details_errors','action_woocommerce_save_account_details_errors', 10, 1 );

    // // Save - my account
    // function action_woocommerce_save_account_details( $user_id ) {  
    //     if( isset( $_POST['birthday_field'] ) && ! empty( $_POST['birthday_field'] ) ) {
    //         update_user_meta( $user_id, 'birthday_field', sanitize_text_field( $_POST['birthday_field'] ) );
    //     }
    // }
    // add_action( 'woocommerce_save_account_details', 'action_woocommerce_save_account_details', 10, 1 );


    // Save - my account
    function action_woocommerce_save_account_details($user_id)
    {
        if (isset($_POST['birthday_field']) && !empty($_POST['birthday_field'])) {
            update_user_meta($user_id, 'birthday_field', sanitize_text_field($_POST['birthday_field']));
        }

        if (isset($_POST['user_phone']) && !empty($_POST['user_phone'])) {
            update_user_meta($user_id, 'user_phone', sanitize_text_field($_POST['user_phone']));
        }

        if (isset($_FILES['image'])) {
            require_once(ABSPATH . 'wp-admin/includes/image.php');
            require_once(ABSPATH . 'wp-admin/includes/file.php');
            require_once(ABSPATH . 'wp-admin/includes/media.php');

            $attachment_id = media_handle_upload('image', 0);


            if (is_wp_error($attachment_id)) {
                update_user_meta($user_id, 'image', $_FILES['image'] . ": " . $attachment_id->get_error_message());
            } else {
                update_user_meta($user_id, 'image', $attachment_id);
            }
        }
    }
    add_action('woocommerce_save_account_details', 'action_woocommerce_save_account_details', 10, 1);

    // Add field - admin
    function add_user_extra_field($user)
    {
        $user_id = get_current_user_id();

        // Get attachment id
        $attachment_id = get_user_meta($user_id, 'image', true);

        // True
        $original_image_url = wp_get_attachment_url($attachment_id);
    ?>
        <h3><?php _e('Champ supplémentaire utilisateur', 'woocommerce'); ?></h3>
        <table class="form-table">
            <tr>
                <th><label for="profile_pic"><?php _e('Profile Image', 'woocommerce'); ?></label></th>
                <td><img src="<?php echo $original_image_url; ?>" alt='' height="200px" width="250px"></td>
            </tr>
            <tr>
                <th><label for="birthday_field"><?php _e('Date of Birth', 'woocommerce'); ?></label></th>
                <td><input type="date" name="birthday_field" value="<?php echo esc_attr(get_the_author_meta('birthday_field', $user->ID)); ?>" class="regular-text" /></td>
            </tr>
            <tr>
                <th><label for="user_phone"><?php _e('Phone', 'woocommerce'); ?></label></th>
                <td><input type="phone" name="user_phone" value="<?php echo esc_attr(get_the_author_meta('user_phone', $user->ID)); ?>" class="regular-text" /></td>
            </tr>
        </table>
        <br />
        <?php
    }
    add_action('show_user_profile', 'add_user_extra_field', 10, 1);
    add_action('edit_user_profile', 'add_user_extra_field', 10, 1);

    // Save field - admin
    function save_user_extra_field($user_id)
    {
        if (!empty($_POST['birthday_field'])) {
            update_user_meta($user_id, 'birthday_field', sanitize_text_field($_POST['birthday_field']));
        }
        if (!empty($_POST['user_phone'])) {
            update_user_meta($user_id, 'user_phone', sanitize_text_field($_POST['user_phone']));
        }
    }
    add_action('personal_options_update', 'save_user_extra_field', 10, 1);
    add_action('edit_user_profile_update', 'save_user_extra_field', 10, 1);

    /**
     * Remove related products output
     */
    remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20);



    // Display User profile image
    function action_woocommerce_edit_account_userimage()
    {
        // Get current user id
        $user_id = get_current_user_id();

        // Get attachment id
        $attachment_id = get_user_meta($user_id, 'image', true);
        // True

        if ($attachment_id) {
            $original_image_url = wp_get_attachment_url($attachment_id);
            // Display Image instead of URL
            echo "<div class='client-pro-user'><div class='user_img theme-img'>";
            echo wp_get_attachment_image($attachment_id, 'full');
            echo "</div><div class='client-pro-link'>
            <a href='#' class='profile-link woocommerce-Input' name='image' accept='image/x-png,image/gif,image/jpeg' title='Modifier l’image'>Modifier l’image</a>
            </div></div>";
        } else {
            $original_image_url = site_url() . '/wp-content/uploads/login/guest-user.jpg';
            // Display Image instead of URL
            echo "<div class='client-pro-user'><div class='user_img theme-img'>";
        ?>
            <img src="<?php echo site_url() . '/wp-content/uploads/login/guest-user.jpg'; ?>" alt="">
        <?php
            echo "</div><div class='client-pro-link'>
            <a href='#' class='profile-link woocommerce-Input' name='image' accept='image/x-png,image/gif,image/jpeg' title='Modifier l’image'>Modifier l’image</a>
            </div></div>";
        }

        ?>
        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <input type="file" class="woocommerce-Input custom_user_image" name="image" accept="image/x-png,image/gif,image/jpeg" style="display: none;">
        </p>
    <?php
    }
    add_action('woocommerce_edit_account_form_start', 'action_woocommerce_edit_account_userimage');



    // Add enctype to form to allow image upload
    function action_woocommerce_edit_account_form_tag()
    {
        echo 'enctype="multipart/form-data"';
    }
    add_action('woocommerce_edit_account_form_tag', 'action_woocommerce_edit_account_form_tag');


    // hp_log my_order
    function woocommerce_orders()
    {
        $user_id = get_current_user_id();
        if ($user_id == 0) {
            return do_shortcode('[woocommerce_my_account]');
        } else {
            ob_start();
            wc_get_template('myaccount/my-orders.php', array(
                'current_user'  => get_user_by('id', $user_id),
                'order_count'   => $order_count
            ));
            return ob_get_clean();
        }
    }


    add_filter('woocommerce_save_account_details_required_fields', 'green_myaccount_required_fields');

    function green_myaccount_required_fields($account_fields)
    {

        // unset( $account_fields['display_name'] );

        // unset( $account_fields['account_first_name'] ); // First name
        unset($account_fields['account_display_name']); // Display name

        return $required_fields;
    }
    add_shortcode('woocommerce_orders', 'woocommerce_orders');

    function get_cart_products()
    {

        $bag_products = '<ul>';

        foreach (WC()->cart->get_cart() as $cart_item) {
            $product = wc_get_product($cart_item['product_id']);
            $bag_products .= '<li>' . $product->get_image() . '<a href="' . $product->get_permalink() . '">' . $product->get_title() . '</a></li>';
        }

        $bag_products .= '</ul>';

        return $bag_products;
    }

    add_shortcode('bag_products', 'get_cart_products');


    // ajax for music upload start 
    add_action('wp_ajax_upload_custom_music_by_local_files', 'upload_music_local_function');
    add_action('wp_ajax_nopriv_upload_custom_music_by_local_files', 'upload_music_local_function');
    function upload_music_local_function()
    {
        if (isset($_POST['url'])) {
            // print_r($_FILES);
            // echo $_POST['url'];
            $filename = basename($_POST['url']);
            $filename = explode(".", $filename)[0] . $_POST['random_for_file_name'] . "." . explode(".", $filename)[1];
            $location = wp_upload_dir()['path'] . "/music/custom/" . $_POST['random_for_folder_name'];
            if (!file_exists($location) && !is_dir($location)) {
                mkdir($location, 0777, true);
            }

            $location = wp_upload_dir()['path'] . "/music/custom/" . $_POST['random_for_folder_name'] . "/" . $filename;

            $music = file_get_contents($_POST['url']);

            if (file_put_contents($location, $music)) {
                echo "success$%^&*$" . $location;
            } else {
                echo "failure";
            }
            return 0;
        }
        $filename = $_FILES['file']['name'];
        $filename = explode(".", $filename)[0] . $_POST['random_for_file_name'] . "." . explode(".", $filename)[1];
        $location = wp_upload_dir()['path'] . "/music/custom/" . $_POST['random_for_folder_name'];
        // echo $location."\n";
        if (!file_exists($location) && !is_dir($location)) {
            mkdir($location, 0777, true);
        }
        $location = wp_upload_dir()['path'] . "/music/custom/" . $_POST['random_for_folder_name'] . "/" . $filename;
        // echo "\nDarshan2234234 = ".$location."\n";
        if (move_uploaded_file($_FILES['file']['tmp_name'], $location)) {
            echo "success$%^&*$" . $location;
        } else {
            echo "failure";
        }
        // print_r($_FILES['file']);
        return "";
    }
    // ajax for music upload end 
    // ajax for custom input feilds wc product in details tab start 
    add_action('wp_ajax_display_custom_input_feilds_wcproduct_action', 'display_custom_input_feilds_wcproduct_function');
    add_action('wp_ajax_nopriv_display_custom_input_feilds_wcproduct_action', 'display_custom_input_feilds_wcproduct_function');
    function display_custom_input_feilds_wcproduct_function()
    {
        // for get product acf type start 

        include_once($_SERVER['DOCUMENT_ROOT'] . "/config/connection.php");
        $pro_id = $_SESSION['selected_customize_pro_id'];
        // $pro_id = 142;


        $get_proId = $conn->prepare(" select Post_Id from gragr_envelop_preview where Id = " . $pro_id);
        $get_proId->execute();
        $pro_id = $get_proId->fetch();
        $pro_id = $pro_id['Post_Id'];

        if ($pro_id == "")
            $pro_id = $_SESSION['selected_customize_pro_id'];

        echo get_field("product_type", $pro_id);

        // for get product acf type end 



        echo "$%^&*$%^$";




        // echo "called";
        $value_event_name = isset($_POST['details_event_name']) ? sanitize_text_field($_POST['details_event_name']) : '';
        $value_location_type = isset($_POST['details_location_type']) ? sanitize_text_field($_POST['details_location_type']) : '';
        $value_place_name = isset($_POST['details_place_name']) ? sanitize_text_field($_POST['details_place_name']) : '';
        $value_address = isset($_POST['details_address']) ? sanitize_text_field($_POST['details_address']) : '';
        $value_start_date = isset($_POST['details_start_date']) ? sanitize_text_field($_POST['details_start_date']) : '';
        $value_start_time = isset($_POST['details_start_time']) ? sanitize_text_field($_POST['details_start_time']) : '';
        $value_end_date_optional = isset($_POST['details_end_date_optional']) ? sanitize_text_field($_POST['details_end_date_optional']) : '';
        $value_end_time_optional = isset($_POST['details_end_time_optional']) ? sanitize_text_field($_POST['details_end_time_optional']) : '';
        $value_other_information = isset($_POST['details_other_information']) ? sanitize_text_field($_POST['details_other_information']) : '';
        $value_link = isset($_POST['details_link']) ? sanitize_text_field($_POST['details_link']) : '';
    ?>
        <div class="filter-photo details_custom_feilds_container" id="details_custom_feilds_container_id">
            <label>Nom de l’événement </label>
            <p><input type="text" id="details_event_name" name="details_event_name" value="<?php echo $value_event_name; ?>"></p>
            <label>Type de Lieu </label>
            <p>
                <input type="text" id="details_location_type" name="details_location_type" value="<?php echo $value_location_type; ?>">
            <div class="onoffswitch">
                <input type="checkbox" onclick="details_location_type_click()" name="myonoffswitch_carte" class="onoffswitch-checkbox" id="myonoffswitch_details" checked>
                <label class="onoffswitch-label" for="myonoffswitch_details">
                    <div class="onoffswitch-inner"></div>
                    <div class="onoffswitch-switch"></div>
                </label>
                <label class="non-lable" for="myonoffswitch_carte">Virtuel</label>
                <label class="oui-lable" for="myonoffswitch_carte">Physique</label>
            </div>
            </p>
            <label>Nom du lieu </label>
            <p><input type="text" id="details_place_name" name="details_place_name" value="<?php echo $value_place_name; ?>"></p>
            <label id="details_lbl_link">Lien </label>
            <p id="details_p_link"> <input type="text" id="details_link" name="details_link" value="<?php echo $value_link; ?>"> </p>
            <label id="details_lbl_address">Adresse </label>
            <p id="details_p_address"> <textarea placeholder="Adresse complète" id="details_address" name="details_address" cols="20"><?php echo $value_address; ?></textarea></p>







            <div class="details_cover">
                <div class="details_cover_date">
                    <label>Date de début </label>
                    <p>
                        <input type="date" id="details_start_date" name="details_start_date" value="<?php echo $value_start_date; ?>">
                    </p>
                </div>
                <div class="details_cover_time">
                    <label>Heure de début </label>
                    <p>
                        <input type="time" id="details_start_time" name="details_start_time" value="<?php echo $value_start_time; ?>">
                    </p>
                </div>
                <div class="details_cover_date">
                    <label>Date de fin <span class="details_optional"> (facultatif) </span> </label>
                    <p>
                        <input type="date" id="details_end_date_optional" name="details_end_date_optional" value="<?php echo $value_end_date_optional; ?>">
                    </p>
                </div>
                <div class="details_cover_time">
                    <label>Heure de fin <span class="details_optional"> (facultatif) </span> </label>
                    <p>
                        <input type="time" id="details_end_time_optional" name="details_end_time_optional" value="<?php echo $value_end_time_optional; ?>">
                    </p>
                </div>
            </div>




            <label>Autres informations </label>
            <p><textarea id="details_other_information" name="details_other_information" cols="20"><?php echo $value_other_information; ?></textarea></p>
        </div>
    <?php
        echo "\n";
        return 0;
    }



    add_action('wp_ajax_display_shop_details_action', 'display_shop_details_function');
    add_action('wp_ajax_nopriv_display_shop_details_action', 'display_shop_details_function');
    function display_shop_details_function()
    {

        $arr = get_option('shope_details_core');
        $arr = json_decode($arr, true);



        // $location = get_option('woocommerce_store_address') . "," . get_option('woocommerce_store_address_2') . "," . get_option('woocommerce_store_city') . "," . get_option('woocommerce_store_postcode');
        $location = $arr['address_1'] . "," . $arr['address_2'] . "," . $arr['city'] . "," . $arr['post_code'];
        ?>
        <div class="details_shop_info_main_div">
            <h1 class="details_main_title">Détails</h1>
            <div class="details_part-cover">
                <p class="details_sub_title">
                    <b> <?php echo $arr['address_1']; ?> </b>
                    <?php echo $arr['address_2']; ?>
                </p>
                <a target='_blank' href="https://maps.google.com/?q=<?php echo $location; ?>">voir le plan</a>
            </div>
            <p class="details_sub_title"> <b> <?php echo $arr['established_date']; ?> </b> <?php echo $arr['established_time']; ?> </p>

            <!-- <button class="details_button_top">
                JE SERAI PRÉSENT !
            </button> -->
            <!-- <a class="details_button_top add_to_cart" href="?add-to-cart=<?php //echo $_POST['product_id']; 
                                                                                ?>&quantity=1">JE SERAI PRÉSENT !</a> -->
            <a href="#" class="details_button_top add_to_cart" product_id="<?php echo $_POST['product_id']; ?>">JE SERAI PRÉSENT !</a>
            <button class="details_button_bottom">
                JE NE PARTICIPE PAS
            </button>

        </div>
        <?php

        echo "$%^&*$";

        echo get_field( "change_bg", $_POST['product_id'] )['url'];

    }
    // ajax for custom input feilds wc product in details tab end


    function greet_and_green_scripts()
    {

        wp_enqueue_style('h-css1', 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/css/intlTelInput.min.css', array(), '1.0');
        wp_enqueue_script('h-js1', 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.min.js', array(), '1.0');
        wp_enqueue_script('h-js2', 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/intlTelInput.min.js', array(), '1.0');


        wp_enqueue_style('greet-and-green-block-style', get_theme_file_uri() . "/assets/css/style.css", array(), '1.0');
        wp_enqueue_style('greet-and-green-animation-envelope-css', get_theme_file_uri() . "/assets/css/animation_envelope.css", array(), '1.0');
        // ajax link
        wp_enqueue_script('ajax-script', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', array('jquery'));
        // for upload music start 
        wp_localize_script('ajax-script', 'my_ajax_object', array('ajax_url' => admin_url('admin-ajax.php')));
        // for upload music end
        // for details tab start 
        wp_localize_script('ajax-script', 'my_ajax_object_for_custom_input_feilds', array('ajax_url' => admin_url('admin-ajax.php')));
        wp_localize_script('ajax-script', 'my_ajax_object_for_shop_details', array('ajax_url' => admin_url('admin-ajax.php')));
        // for details tab end 

        // for datatable start
        wp_enqueue_script('js-datatable1', 'https://cdn.datatables.net/1.12.0/js/jquery.dataTables.min.js', array(), '1.0');
        wp_enqueue_script('js-datatable2', 'https://cdn.datatables.net/select/1.4.0/js/dataTables.select.min.js', array(), '1.0');
        wp_enqueue_style('css-datatable1', 'https://cdn.datatables.net/select/1.4.0/css/select.dataTables.min.css', array(), '1.0');
        wp_enqueue_style('css-datatable2', 'https://cdn.datatables.net/1.12.0/css/jquery.dataTables.min.css', array(), '1.0');
        // for datatable end




        // for invois insert email ajax start 
        wp_localize_script('ajax-script', 'my_ajax_object_for_invois_email_insert', array('ajax_url' => admin_url('admin-ajax.php')));
        // for invois insert email ajax end 

        // for invois update table start 
        // wp_localize_script( 'ajax-script', 'my_ajax_object_for_update_invoice_table', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
        // for invois update table end

        // for change product details in invois part start 
        wp_localize_script('ajax-script', 'my_ajax_object_for_change_product_details_in_invois', array('ajax_url' => admin_url('admin-ajax.php')));
        // for change product details in invois part end 

        // for import user meta part start
        wp_localize_script('ajax-script', 'my_ajax_object_for_import_user_meta', array('ajax_url' => admin_url('admin-ajax.php')));
        // for import user meta part end 

        // for redirect to personalize product start 
        wp_localize_script('ajax-script', 'my_ajax_object_for_go_personalize_product_page', array('ajax_url' => admin_url('admin-ajax.php')));
        // for redirect to personalize product end


        // for main filter update invoise table start
        wp_localize_script('ajax-script', 'my_ajax_object_for_main_filter_invoise_table', array('ajax_url' => admin_url('admin-ajax.php')));
        // for main filter update invoise table end


        // for export email data in tracking and return file start 
        wp_localize_script('ajax-script', 'my_ajax_object_for_export_tacking_and_return_emails_data', array('ajax_url' => admin_url('admin-ajax.php')));
        // for export email data in tracking and return file end



        // for sending mail on selected emails start
        wp_localize_script('ajax-script', 'my_ajax_object_for_sending_mail_product', array('ajax_url' => admin_url('admin-ajax.php')));
        // for sending mail on selected emails end

        // for registration new user start
        wp_localize_script('ajax-script', 'my_ajax_object_for_registration_new_user', array('ajax_url' => admin_url('admin-ajax.php')));
        // for registration new user end

    }
    add_action('wp_enqueue_scripts', 'greet_and_green_scripts');



    add_filter('woocommerce_my_account_my_orders_query', 'my_account_orders_query_change_sorting');
    function my_account_orders_query_change_sorting($args)
    {
        $order_sort = $_POST['order_sorting'];
        $args['order'] = 'ASC'; // Default is 'DESC'
        return $args;
    }


    // hp_log add checkout in my account woocommerce 20052021
    add_filter('woocommerce_account_menu_items', 'my_account_menu_add_link', 40);
    function my_account_menu_add_link($menu_links)
    {
        $menu_links = array_slice($menu_links, 0, 1, true)
            + array('form-checkout' => 'Facturation & Paiements')
            + array_slice($menu_links, 1, NULL, true);
        $menu_links = array_slice($menu_links, 0, 1, true)
            + array('invois_main_html' => 'Invoise')
            + array_slice($menu_links, 1, NULL, true);
        $menu_links = array_slice($menu_links, 0, 1, true)
            + array('tracking_and_return' => 'Tracking & Return')
            + array_slice($menu_links, 1, NULL, true);

        $menu_links = array(
            'edit-account'    => __('Profil & Sécurité', 'woocommerce'),
            'form-checkout'          => __('Facturation & Paiements', 'woocommerce'),
            'orders'             => __('Commandes & Factures', 'woocommerce'),
            'edit-address'       => __('Carnet d’adresses', 'woocommerce'),
            'downloads'       => __('Réglages & Notifications', 'woocommerce'),
            'invois_main_html'       => __('Invoise', 'woocommerce'),
            'tracking_and_return'       => __('Tracking & Return', 'woocommerce'),
            'customer-logout'    => __('Logout', 'woocommerce'),
        );
        return $menu_links;
    }
    /*
    * Step 2. Register Permalink Endpoint
    */
    add_action('init', 'my_account_register_menu_link');
    function my_account_register_menu_link()
    {
        // WP_Rewrite is my Achilles' heel, so please do not ask me for detailed explanation
        add_rewrite_endpoint('form-checkout', EP_PAGES);
        add_rewrite_endpoint('invois_main_html', EP_PAGES);
        add_rewrite_endpoint('tracking_and_return', EP_PAGES);
        add_rewrite_endpoint('cart-product', EP_ROOT | EP_PAGES);
    }
    /*
    * Step 3. Content for the new page in My Account, woocommerce_account_{ENDPOINT NAME}_endpoint
    */
    add_action('woocommerce_account_form-checkout_endpoint', 'checkout_my_account_endpoint_content');
    function checkout_my_account_endpoint_content()
    {
        // of course you can print dynamic content here, one of the most useful functions here is get_current_user_id()
        include 'woocommerce/myaccount/form-checkout.php';
    }
    add_action('woocommerce_account_invois_main_html_endpoint', 'invois_my_account_endpoint_content');
    function invois_my_account_endpoint_content()
    {
        // of course you can print dynamic content here, one of the most useful functions here is get_current_user_id()
        include 'woocommerce/myaccount/invois_main_html.php';
    }
    add_action('woocommerce_account_tracking_and_return_endpoint', 'tracking_and_return_endpoint_content');
    function tracking_and_return_endpoint_content()
    {
        // of course you can print dynamic content here, one of the most useful functions here is get_current_user_id()
        include 'woocommerce/myaccount/tracking_and_return.php';
    }

    /*
    * Step 4
    */
    // Go to Settings > Permalinks and just push "Save Changes" button.

    // hp_log add cart_product in my account woocommerce
    add_filter('query_vars', 'custom_query_vars', 0);
    function custom_query_vars($vars)
    {
        $vars[] = 'cart-product';
        return $vars;
    }

    add_action('after_switch_theme', 'custom_flush_rewrite_rules');
    function custom_flush_rewrite_rules()
    {
        flush_rewrite_rules();
    }

    // The custom template location
    add_action('woocommerce_account_cart-product_endpoint', 'custom_endpoint_content');
    function custom_endpoint_content()
    {
        include 'woocommerce/myaccount/cart-product.php';
    }


    add_filter('woocommerce_checkout_fields', 'quadlayers_remove_checkout_fields');

    function quadlayers_remove_checkout_fields($fields)
    {
        unset($fields['billing']['billing_state']);
        unset($fields['billing']['billing_email']);
        unset($fields['billing']['billing_phone']);


        $fields['billing']['billing_first_name']['priority'] = 1;
        $fields['billing']['billing_last_name']['priority'] = 2;
        $fields['billing']['billing_company']['priority'] = 3;
        $fields['billing']['billing_address_1']['priority'] = 4;
        $fields['billing']['billing_address_2']['priority'] = 5;
        $fields['billing']['billing_postcode']['priority'] = 6;
        $fields['billing']['billing_city']['priority'] = 7;
        $fields['billing']['billing_country']['priority'] = 8;
        $fields['billing']['billing_address_1']['label'] = 'ADRESSE 1';
        $fields['billing']['billing_address_2']['label'] = 'ADRESSE 2';
        $fields['billing']['billing_postcode']['label'] = 'CP';
        $fields['billing']['billing_country']['label'] = 'PAYS';
        $fields['billing']['billing_company']['label'] = 'SOCIÉTÉ';


        return $fields;
    }




    // user invois section start 
    add_action('wp_ajax_display_custom_invois_email_insert_action', 'display_custom_invois_email_insert_function');
    add_action('wp_ajax_nopriv_display_custom_invois_email_insert_action', 'display_custom_invois_email_insert_function');

    function display_custom_invois_email_insert_function()
    {
        print_r($_SESSION['current_user']->ID);
        $tmeparr = array();
        if (isset($_POST['email_for_change_guest_details'])) {
            if (get_user_meta($_SESSION['current_user']->ID, "user_email_details")) {
                $arr = get_user_meta($_SESSION['current_user']->ID, "user_email_details")[0];
                foreach ($_POST['guests_details'] as $value) {
                    if ($value != "yes") {
                        $tmeparr['yes'][] = array(
                            "fname" => explode("$%^$", $value)[0],
                            "name" => explode("$%^$", $value)[1]
                        );
                    }
                }

                $arr['emails'][$_POST['email_for_change_guest_details']]['additional_guest'] = $tmeparr;

                update_user_meta($_SESSION['current_user']->ID, "user_email_details", $arr);
            }
        } else {


            if (isset($_POST['delete_record'])) {
                if (get_user_meta($_SESSION['current_user']->ID, "user_email_details")) {
                    $arr = get_user_meta($_SESSION['current_user']->ID, "user_email_details")[0];


                    foreach ($arr['product_id'] as $key => $value) {
                        unset($arr['product_id'][$key][$_POST['delete_record']]);
                    }

                    unset($arr['emails'][$_POST['delete_record']]);



                    update_user_meta($_SESSION['current_user']->ID, "user_email_details", $arr);
                }
            } else {
                // print_r($_POST);


                if ($_POST['additional_guest'][0] == "yes") {

                    foreach ($_POST['additional_guest'] as $value) {
                        if ($value != "yes") {
                            $tmeparr['yes'][] = array(
                                "fname" => explode("$%^$", $value)[0],
                                "name" => explode("$%^$", $value)[1]
                            );
                        }
                    }
                } else {
                    $tmeparr['no'] = array();
                }


                if (get_user_meta($_SESSION['current_user']->ID, "user_email_details")) {
                    $arr = get_user_meta($_SESSION['current_user']->ID, "user_email_details")[0];


                    $post_content = array(
                        'user_email' => $_POST['user_email'],
                        'user_name' => $_POST['user_name'],
                        'user_first_name' => $_POST['user_first_name'],
                        'user_telephone' => $_POST['user_telephone'],
                        'additional_guest' => $tmeparr,
                        'SOCIETE' => 'Entreprise',
                        'ADRESSE1' => '31, Ceci est un numé....',
                        'ADRESSE2' => 'Ceci est un numéro d’appt',
                        'CP' => '33300',
                        'VILLE' => 'BORDEAUX',
                        'PAYS' => 'ROYAUME-UNI',
                    );
                    $arr['emails'][$_POST['user_email']] = $post_content;



                    foreach ($arr['product_id'] as $key => $value) {
                        $arr['product_id'][$key][$_POST['user_email']] = array(

                            'status' => 'no',
                            // 'tags'=>'family,friend'

                        );
                    }

                    // print_r($arr);

                    update_user_meta($_SESSION['current_user']->ID, "user_email_details", $arr);
                }
            }
        }
        if (count(get_user_meta($_SESSION['current_user']->ID, "user_email_details")) > 0) {
            get_template_part('template-parts/content', 'update-invois-table');
        }
    }



    // update invois table ajax start 

    // add_action( 'wp_ajax_for_update_invoice_table_action', 'for_update_invoice_table_function' );
    // add_action( 'wp_ajax_nopriv_for_update_invoice_table_action', 'for_update_invoice_table_function' );

    function for_update_invoice_table_function($row_number)
    {


        $arr = get_user_meta($_SESSION['current_user']->ID, "user_email_details")[0];




        $arr['product_id'][$_SESSION['invois_product_id'] . "(*)" . $_SESSION['unique_product_number']][$row_number]['status'] = "yes";






        update_user_meta($_SESSION['current_user']->ID, "user_email_details", $arr);




        // $arr = get_user_meta($_SESSION['current_user']->ID , "user_email_details")[0];
        // $arr['product_id'][$_SESSION['invois_product_id']][$_POST['row_number']]['status'] = "yes";
        // update_user_meta($_SESSION['current_user']->ID , "user_email_details" , $arr);
        // if( count( get_user_meta($_SESSION['current_user']->ID , "user_email_details")) > 0 )
        // {
        //     get_template_part('template-parts/content' , 'update-invois-table');                                        
        // }


    }


    // update invois table ajax start 


    // for change product details in invois part start 

    add_action('wp_ajax_for_change_product_details_in_invois_action', 'for_change_product_details_in_invois_function');
    add_action('wp_ajax_nopriv_for_change_product_details_in_invois_action', 'for_change_product_details_in_invois_function');

    function for_change_product_details_in_invois_function()
    {
        // print_r($_POST);
        // print_r($_SESSION['cart_product_ids']);
        $temparr = array();
        $temparr2 = array();

        global $wpdb;
        $user_id = wp_get_current_user();
        $post_id = $wpdb->get_results("SELECT * FROM `gragr_envelop_preview` WHERE `User_Id` = '" . $user_id->id . "'");
        $meta_value_get = json_decode($post_id[0]->Meta_Value);
        $selected_product_id = "";

        foreach ($post_id as $value) {
            $meta_value = json_decode($value->Meta_Value);
            if ($value->Id == $_POST['selected_product_id']) {
                session_start();
                $_SESSION['unique_product_number'] = $value->Rnd_no;
                $selected_product_id = $value->Post_Id;
                $temparr[] = array(
                    'id' => $value->Id,
                    'name' => "Test-" . $value->Id,
                    'url' => $meta_value->dataURL_1,
                );
            } else {
                $temparr2[] = array(
                    'id' => $value->Id,
                    'name' => "Test-" . $value->Id,
                    'url' => $meta_value->dataURL_1,
                );
            }
        }
        // print_r($temparr2);

        if (isset($_POST['page'])) {
            get_template_part('template-parts/content', 'update-all-products-drop-down-menu', array(
                'main_product' => $temparr[0],
                'inner_products' => $temparr2,
                'page' => 'tracking',
            ));
        } else {
            get_template_part('template-parts/content', 'update-all-products-drop-down-menu', array(
                'main_product' => $temparr[0],
                'inner_products' => $temparr2,
            ));
        }

        echo "$%^&*$$%^&*$";

        $_SESSION['invois_product_id'] = $selected_product_id;

        if (count(get_user_meta($_SESSION['current_user']->ID, "user_email_details")) > 0) {
            if ($_POST['page'] == "tracking") {
                get_template_part('template-parts/content', 'update-tracking-and-return-table');
            } else {
                get_template_part('template-parts/content', 'update-invois-table');
            }
        }

        echo "$%^&*$$%^&*$";

        echo get_post($_SESSION['invois_product_id'])->post_content;

        echo "$%^&*$$%^&*$";

        $product = wc_get_product($_SESSION['invois_product_id']);

        echo $product->price;

        echo "$%^&*$$%^&*$";

        $arr = get_option("package_details");
        // $terms = get_the_terms ( $_SESSION['invois_product_id'], 'product_cat' )[0];

        // if($terms->name == "CARTES")
        //     print_r($arr['body']['0-10']['cartes']);
        // if($terms->name == "VIDÉOS")
        //     print_r($arr['body']['0-10']['videos']);
        // if($terms->name == "CLIPS")
        //     print_r($arr['body']['0-10']['clips']);

        $p_type = get_field("product_type", $_SESSION['invois_product_id']);

        if ($p_type == "CARTES")
            print_r($arr['body']['0-10']['cartes']);
        if ($p_type == "VIDÉOS")
            print_r($arr['body']['0-10']['videos']);
        if ($p_type == "CLIPS")
            print_r($arr['body']['0-10']['clips']);
    }

    // for change product details in invois part end



    // for redirect to personalize product start 

    add_action('wp_ajax_for_go_personalize_product_page_action', 'for_go_personalize_product_page_function');
    add_action('wp_ajax_nopriv_for_go_personalize_product_page_action', 'for_go_personalize_product_page_function');

    function for_go_personalize_product_page_function()
    {
        echo get_permalink($_SESSION['invois_product_id']);
    }

    // for redirect to personalize product end


    // for main filter update invoise table start
    add_action('wp_ajax_for_main_filter_invoise_table_action', 'for_main_filter_invoise_table_function');
    add_action('wp_ajax_nopriv_for_main_filter_invoise_table_action', 'for_main_filter_invoise_table_function');
    function for_main_filter_invoise_table_function()
    {
        if (isset($_POST['get_package_price'])) {
            $arr = get_option("package_details");
            // $terms = get_the_terms ( $_SESSION['invois_product_id'], 'product_cat' )[0];

            // if($terms->name == "CARTES")
            //     print_r($arr['body']['0-10']['cartes']);
            // if($terms->name == "VIDÉOS")
            //     print_r($arr['body']['0-10']['videos']);
            // if($terms->name == "CLIPS")
            //     print_r($arr['body']['0-10']['clips']);

            $p_type = get_field("product_type", $_SESSION['invois_product_id']);

            if ($p_type == "CARTES")
                print_r($arr['body']['0-10']['cartes']);
            if ($p_type == "VIDÉOS")
                print_r($arr['body']['0-10']['videos']);
            if ($p_type == "CLIPS")
                print_r($arr['body']['0-10']['clips']);


            echo "$%^&*$";

            $product = wc_get_product($_SESSION['invois_product_id']);


            echo $product->price;

            return 0;
        }

        if (isset($_POST['promo_code'])) {




            global $woocommerce;
            $c = new WC_Coupon($_POST['promo_code']);
            echo $c->amount; //Get Discount amount

            echo "$%^&*$";

            if ($_POST['price_set'] == "no") {
                $product = wc_get_product($_SESSION['invois_product_id']);

                echo $product->price;
            }

            return 0;
        }
        $arr = get_user_meta($_SESSION['current_user']->ID, "user_email_details")[0];
        // print_r($arr);
        $filtered_emails = array();

        if (in_array("all", $_POST['filter']) || (in_array("sent", $_POST['filter']) && in_array("notsent", $_POST['filter'])) || count($_POST['filter']) == 0) {
            // echo $_SESSION['invois_product_id'];
            foreach ($arr['product_id'][$_SESSION['invois_product_id']] as $key => $value) {
                $filtered_emails[] = $key;
            }
        } else if (in_array("sent", $_POST['filter']) && !in_array("notsent", $_POST['filter'])) {
            foreach ($arr['product_id'][$_SESSION['invois_product_id']] as $key => $value) {
                if ($value['status'] == "yes")
                    $filtered_emails[] = $key;
            }
        } else if (!in_array("sent", $_POST['filter']) && in_array("notsent", $_POST['filter'])) {
            foreach ($arr['product_id'][$_SESSION['invois_product_id']] as $key => $value) {
                if ($value['status'] == "no")
                    $filtered_emails[] = $key;
            }
        }

        get_template_part('template-parts/content', 'update-invois-table', array(
            'filtered_emails' => $filtered_emails,
        ));
    }
    // for main filter update invoise table end



    // add menu option for input packages rates start



    /*

add_action( 'admin_menu', 'greet_and_green_menu_page_for_packages_input' );

function greet_and_green_menu_page_for_packages_input() 
{

    add_menu_page(
        'Packages Details', // page <title>Title</title>
        'Packages Details', // menu link text
        'manage_options', // capability to access the page
        'packages-slug', // page URL slug
        'package_input_details', // callback function /w content
        'dashicons-star-half', // menu icon
        5 // priority
    );

}


function package_input_details()
{
    if(isset($_POST))
    {
        if(count($_POST)>0)
        {
            $arr = array();
            foreach ($_POST as $key => $value) {
                $arr[explode("---",$key)[0]][explode("---",$key)[1]] = $value;
            }
            $arr_value = array( 
                "heading" => array(
                    "DESTINATAIRES" => array(
                        "CARTES" , 
                        "VIDÉOS" , 
                        "CLIPS"
                    )
                ), 
                "body" => $arr,
            );
            if(update_option("package_details" , json_encode( $arr_value) ))
            {
                echo "<p class='packages_update_success_msg'> Your value is added successfully!! </p>";
            }
            
    
        }
    }

    // echo 'What is up?'.get_current_user_id();
    $arr = get_option("package_details" );

    $arr = json_decode( $arr , true );

   

    $arr_value = array();
    $arr_value = array( 
        "heading" => array(
            "DESTINATAIRES" => array(
                "CARTES" , 
                "VIDÉOS" , 
                "CLIPS"
            )
        ),
        "body" => array(
            "0-10" => array(
                "cartes" => "19",
                "videos" => "39",
                "clips" => "39"
            ),
            "10-20" => array(
                "cartes" => "39",
                "videos" => "59",
                "clips" => "59"
            ),
            "20-40" => array(
                "cartes" => "59",
                "videos" => "79",
                "clips" => "79"
            ),
            "40-60" => array(
                "cartes" => "69",
                "videos" => "99",
                "clips" => "99"
            ),
            "60-80" => array(
                "cartes" => "89",
                "videos" => "119",
                "clips" => "119"
            ),
            "80-100" => array(
                "cartes" => "109",
                "videos" => "139",
                "clips" => "139"
            ),
            "100-120" => array(
                "cartes" => "129",
                "videos" => "149",
                "clips" => "149"
            ),
            "120-150" => array(
                "cartes" => "149",
                "videos" => "179",
                "clips" => "179"
            ),
            "150-180" => array(
                "cartes" => "169",
                "videos" => "199",
                "clips" => "199"
            ),
            "180-250" => array(
                "cartes" => "219",
                "videos" => "249",
                "clips" => "249"
            ),
            "250-350" => array(
                "cartes" => "299",
                "videos" => "339",
                "clips" => "339"
            ),
            "350-500" => array(
                "cartes" => "419",
                "videos" => "459",
                "clips" => "459"
            ),
            
        ),
    );


    if( count($arr) > 0 )
        $arr_value = $arr;
    else
        add_option("package_details" , $arr_value );

    // echo "<pre>";
    // print_r($arr_value);
    // echo "</pre>";
    ?>
    <div class="popup-contain">
        <form method="post" >
            <table class="table choisir-package-table">
                <thead class="table-thead">
                <tr>
                    <th class="memberships">DESTINATAIRES</th>

                    <?php
                        foreach ($arr_value['heading']['DESTINATAIRES'] as $value) {
                            ?>
                                <th class="<?php echo $value; ?>"><?php echo $value; ?></th>
                            <?php
                        }
                    ?>
                </tr>
                </thead>
                <tbody class="table-tbody">
                    <?php
                        foreach ($arr_value['body'] as $key => $value) {
                            ?>
                                <tr class="table-cho-tr">
                                    <td class="memberships"><?php echo $key; ?></td>
                                    <td class="cards"> <input type="text" name="<?php echo $key."---".array_keys($value)[0]; ?>" value="<?php echo $value['cartes']; ?>" /> </td>
                                    <td class="video"> <input type="text" name="<?php echo $key."---".array_keys($value)[1]; ?>" value="<?php echo $value['videos']; ?>" /> </td>
                                    <td class="video-clips"> <input type="text" name="<?php echo $key."---".array_keys($value)[2]; ?>" value="<?php echo $value['clips']; ?>" /> </td>
                                </tr>            
                            <?php
                        }
                    ?>
                
                
                </tbody>
            </table>
            <button type="submit">SUBMIT</button>
        </form>
    </div>

    
    <?php

}
*/


    // add menu option for input packages rates end








    // user invois section end 
    add_action('wp_ajax_for_user_meta_import_action', 'for_user_meta_import_action_function');
    add_action('wp_ajax_nopriv_for_user_meta_import_action', 'for_user_meta_import_action_function');

    function for_user_meta_import_action_function()
    {
        $fileName = $_FILES["file"]["name"];
        $fileSize = $_FILES["file"]["size"] / 1024;
        $fileType = $_FILES["file"]["type"];
        $fileTmpName = $_FILES["file"]["tmp_name"];

        $linecount = 0;
        $handle = fopen($fileTmpName, "r");
        while (!feof($handle)) {
            $line = fgets($handle);
            $linecount++;
        }

        fclose($handle);
        $final_count = $linecount - 2;
        //end count the cell

        $complete_data = array();
        $k = 1;
        if (($handle = fopen($_FILES['file']['tmp_name'], "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                if ($k > 1) {
                    $complete_data[] = $data;
                }
                $k++;
            }
        }
        fclose($handle);

        $list = glob("csv/temp/*.txt");
        foreach ($list as $file) {
            unlink($file);
        }
        unset($complete_data[0]);

        $final_aray = array_chunk($complete_data, count($complete_data));
        $total_data = array();
        $file_list_count = array();
        $file_data_count = 0;

        foreach ($final_aray as $chunk) {
            $file = 'csv/temp/file' . substr(md5(rand()), 0, 7) . '.txt';
            $myfile = fopen($file, "w");
            fwrite($myfile, json_encode($chunk));
            $my_array = array("file" => $file, 'count' => count($chunk));
            $file_data_count += count($chunk);
            array_push($file_list_count, $my_array);
        }

        $total_data = array($file_list_count, $file_data_count);
        echo json_encode($total_data);
        die;



        delete_post($dbh);
        $after_uoload_list = glob("csv/temp/*.txt");
        $total = 0;
        foreach ($after_uoload_list as $text_file) {

            $raw_data = file_get_contents($text_file);
            $data = json_decode($raw_data);
            add_post($dbh, $data);
            sleep(5);
        }
    }

    function add_post($dbh, $data)
    {

        global $wpdb;
        $custom_field_array = array(
            '_Property_1_Left', '_Property_2_Left', '_Property_3_Left', '_Property_4_Left', '_Property_5_Left', '_Property_6_Left', '_Property_7_Left', '_Property_8_Left', '_Property_9_Left', '_Property_10_Left', '_Property_1_Right', '_Property_2_Right', '_Property_3_Right', '_Property_4_Right', '_Property_5_Right', '_Property_6_Right', '_Property_7_Right', '_Property_8_Right', '_Property_9_Right', '_Property_10_Right', '_Partner_1_Left', '_Partner_2_Left', '_Partner_3_Left', '_Partner_4_Left', '_Partner_5_Left', '_Partner_6_Left', '_Partner_7_Left', '_Partner_8_Left', '_Partner_9_Left', '_Partner_10_Left', '_Partner_1_Right', '_Partner_2_Right', '_Partner_3_Right', '_Partner_4_Right', '_Partner_5_Right', '_Partner_6_Right', '_Partner_7_Right', '_Partner_8_Right', '_Partner_9_Right', '_Partner_10_Right', '_Region_1_Left', '_Region_2_Left', '_Region_3_Left', '_Region_4_Left', '_Region_5_Left', '_Region_6_Left', '_Region_7_Left', '_Region_8_Left', '_Region_9_Left', '_Region_10_Left', '_Region_1_Right', '_Region_2_Right', '_Region_3_Right', '_Region_4_Right', '_Region_5_Right', '_Region_6_Right', '_Region_7_Right', '_Region_8_Right', '_Region_9_Right', '_Region_10_Right'
        );

        foreach ($data as $row) {
            $sth1 = $dbh->prepare("INSERT INTO `wpprefix_posts` (
                    `post_author`
                    ,`post_title`
                    ,`post_type`
                    ,`post_date`
                    ,`post_date_gmt`
                    ,`post_modified`
                    ,`post_modified_gmt`
                    ,`post_excerpt`
                    ,`post_content`
                    ,`to_ping`
                    ,`pinged`
                    ,`post_content_filtered`
                    )
                VALUES (
                    1
                    ,'" . $row[0] . "'
                    ,'villa'
                    ,now()
                    ,now()
                    ,now()
                    ,now()
                    ,''
                    ,''
                    ,''
                    ,''
                    ,''
                    )");
            $sth1->execute();
            $post_id = $dbh->lastInsertId();

            $sth2 = $dbh->prepare("UPDATE wpprefix_postsset
                    SET post_name = CONCAT (
                            REPLACE(lower(post_title), ' ', '-')
                            ,'-'
                            ,id
                            )
                        ,guid = CONCAT (
                            'server_url'
                            ,lower(post_title)
                            ,'-'
                            ,id
                            )
                    FROM
                    WHERE id =" . $post_id);
            $sth2->execute();
            unset($row[0]);

            $sql = "INSERT INTO " . $wpdb->prefix . "postmeta (`post_id`, `meta_key`, `meta_value`) VALUES ";
            $final_array = array_combine($custom_field_array, $row);
            foreach ($final_array as $key => $value) {

                $sql .= "(" . wp_strip_all_tags($post_id) . ",'" . wp_strip_all_tags($key) . "','" . wp_strip_all_tags($value) . "'),";
            }

            $sql = rtrim($sql, ',');
            $sth3 = $dbh->prepare($sql);
            $sth3->execute();
        }
    }

    function save_image($base64_img, $title)
    {

        // Upload dir.
        $upload_dir  = wp_upload_dir();
        $upload_path = str_replace('/', DIRECTORY_SEPARATOR, $upload_dir['path']) . DIRECTORY_SEPARATOR;

        $img             = str_replace('data:image/png;base64,', '', $base64_img);
        $img             = str_replace(' ', '+', $img);
        $decoded         = base64_decode($img);
        $filename        = $title . '.png';
        $file_type       = 'image/png';
        $hashed_filename = md5($filename . microtime()) . '_' . $filename;

        // Save the image in the uploads directory.
        $upload_file = file_put_contents($upload_path . $hashed_filename, $decoded);

        $attachment = array(
            'post_mime_type' => $file_type,
            'post_title'     => preg_replace('/\.[^.]+$/', '', basename($hashed_filename)),
            'post_content'   => '',
            'post_status'    => 'inherit',
            'guid'           => $upload_dir['url'] . '/' . basename($hashed_filename)
        );

        $attach_id = wp_insert_attachment($attachment, $upload_dir['path'] . '/' . $hashed_filename);

        return $attach_id;
    }


    add_action('wp_ajax_save_envelop_preview', 'save_envelop_preview');
    add_action('wp_ajax_nopriv_save_envelop_preview', 'save_envelop_preview');
    function save_envelop_preview()
    {

        $title = date('Y') . rand(0000, 9999) . date('d');
        $base64_img = $_POST['dataURL_1'];
        // wp_delete_attachment( $attachment->ID );
        // $attach_id = "0";
        // $attach_id = save_image($base64_img, $title);

        $user_id = $_POST['iframe_user'];
        $envelope_array = array();
        $save_envelop_preview_all = array();
        $envelope_array = $_POST;

        global $wpdb;
        $post_id = $wpdb->get_var("SELECT COUNT(*) FROM `gragr_envelop_preview` WHERE `Post_Id` = '" . $_POST['product_id'] . "' AND `User_Id` = '" . $user_id . "' AND `Rnd_no` = '0'");

        if ($post_id > 0) {
            $wpdb->update('gragr_envelop_preview', array(
                'Post_Id' => $_POST['product_id'],
                'User_Id' => $user_id,
                'Meta_Value' => json_encode($envelope_array), // ... and so on
                'Rnd_no' => '0',
                'image_link' => '6439',
                'Color' => $_POST['enveloppe_color'],
            ), array('Post_Id' => $_POST['product_id'], 'User_Id' => $user_id, 'Rnd_no' => '0'));

            echo "string";
        } else {
            global $wpdb;
            $wpdb->insert('gragr_envelop_preview', array(
                'Post_Id' => $_POST['product_id'],
                'User_Id' => $user_id,
                'Meta_Value' => json_encode($envelope_array), // ... and so on
                'Rnd_no' => '0',
                'image_link' => $attach_id,
                'Color' => $_POST['enveloppe_color'],
            ));
        }
        exit;

        // $save_envelop_preview_all = get_post_meta( $_POST['product_id'], '_save_envelop_preview_all', true );
        // $array_merge = array_merge($envelope_array,$save_envelop_preview_all);
        // update_post_meta($_POST['product_id'], '_save_envelop_preview_all', array_unique($array_merge));
        // update_post_meta($_POST['product_id'], '_save_envelop_preview_1', $_POST['dataURL_1']);
        // update_post_meta($_POST['product_id'], '_save_envelop_preview_2', $_POST['dataURL_2']);
        // update_post_meta($_POST['product_id'], '_save_envelop_preview_3', $_POST['dataURL_3']);
    }

    add_action('wp_ajax_save_envelop_preview_color', 'save_envelop_preview_color');
    add_action('wp_ajax_nopriv_save_envelop_preview_color', 'save_envelop_preview_color');
    function save_envelop_preview_color()
    {
        update_post_meta($_POST['product_id'], '_save_envelop_preview_color', $_POST['enveloppe_color']);
    }


    // for export email data in tracking and return file start 
    add_action('wp_ajax_for_export_tacking_and_return_emails_data_action', 'for_export_tacking_and_return_emails_data_function');
    add_action('wp_ajax_nopriv_for_export_tacking_and_return_emails_data_action', 'for_export_tacking_and_return_emails_data_function');
    function for_export_tacking_and_return_emails_data_function()
    {
    }
    // for export email data in tracking and return file end 


    add_action('woocommerce_add_to_cart', 'custome_add_to_cart');
    function custome_add_to_cart()
    {
        $user_id = $_POST['iframe_user'];
        $random = date('Y') . rand(0000, 9999) . date('d');
        global $wpdb;
        $wpdb->update('gragr_envelop_preview', array(
            'Rnd_no' => $random,
        ), array('Post_Id' => $_GET['add-to-cart'], 'User_Id' => $user_id, 'Rnd_no' => '0'));

        //header('Location: '.site_url().'/mon-compte/invois_main_html/');
    }
    add_filter('woocommerce_add_to_cart_redirect', 'bbloomer_redirect_checkout_add_cart');

    function bbloomer_redirect_checkout_add_cart()
    {
        return 'https://dev.greetandgreen.com/mon-compte/invois_main_html/';
    }






    // for sending after checkout completion mail start


    add_action('wp_ajax_for_sending_mail_product_action', 'for_sending_mail_product_function');
    add_action('wp_ajax_nopriv_for_sending_mail_product_action', 'for_sending_mail_product_function');

    function for_sending_mail_product_function()
    {
        echo wc_get_checkout_url();
        $_SESSION['selected_product_details'] = array();
        // $_SESSION['selected_product_details'] = get_user_meta($_SESSION['current_user']->ID , 'store_user_products_for_checkout')[0];

        global $wpdb;
        $user_id = wp_get_current_user();
        $post_id = $wpdb->get_results("SELECT * FROM `gragr_envelop_preview` WHERE `Rnd_no` = '" . $_SESSION['unique_product_number'] . "'");



        $_SESSION['selected_product_details'][$post_id[0]->Post_Id . "(*)" . $_SESSION['unique_product_number']] = array(
            'price' => $_POST['uppdates_price'],
            'total_select_emails' => $_POST['total_select_emails'],
        );



        WC()->cart->empty_cart();
        WC()->cart->add_to_cart(explode("(*)", array_keys($_SESSION['selected_product_details'])[0])[0]);

        $_SESSION['set_price'] = array(
            'product_id' => explode("(*)", array_keys($_SESSION['selected_product_details'])[0])[0],
            'product_price' => $_SESSION['selected_product_details'][array_keys($_SESSION['selected_product_details'])[0]]['price'],
        );

        return;
    }

    // for update cart item and price start
    add_action('woocommerce_before_calculate_totals', 'update_cart_by_user_customise_product');

    function update_cart_by_user_customise_product()
    {
        if (!isset($_SESSION['set_price']))
            return;
        foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) {
            if (array_key_exists($cart_item['product_id'] . "(*)" . $_SESSION['unique_product_number'], $_SESSION['selected_product_details'])) {
                $cart_item['data']->set_price((int) $_SESSION['set_price']['product_price']);
            }
        }
        return;
    }

    // for update cart item and price end



    // for destroy sessions and send product in selected emails after payment success start
    add_filter('woocommerce_thankyou_order_received_text', 'session_destroy_after_completion_of_user_order', 20, 2);

    function session_destroy_after_completion_of_user_order($thank_you_title, $order)
    {
        $arr_main = get_user_meta(get_current_user_id(), "user_email_details");
        if (!count($arr_main) > 0)
            return;
        $arr_main = $arr_main[0];


        // foreach ($_SESSION['selected_product_details'][ $_SESSION['invois_product_id'] . "(*)" . $_SESSION['unique_product_number'] ]['total_select_emails']  as $value) 
        foreach ($_SESSION['selected_product_details'][$_SESSION['invois_product_id'] . "(*)" . $_SESSION['unique_product_number']]['total_select_emails']  as $to) {
            if (is_array($_SESSION['selected_product_details'][$_SESSION['invois_product_id'] . "(*)" . $_SESSION['unique_product_number']]['total_select_emails'])) {

                $subject = 'The subject';
                $body = "<a href='" . site_url() . "/envelopes_preview/?is_open=no&send_email=" . $to . "&from_user_id=" . hash('gost', sha1(get_current_user_id())) . "&rnadom_p=" . $_SESSION['unique_product_number'] . "&template_id='" . $_SESSION['unique_product_number'] . "'' > OPEN </a>";
                $headers = array('Content-Type: text/html; charset=UTF-8');
                if (wp_mail($to, $subject, $body, $headers))
                    for_update_invoice_table_function($to);
            }
        }



        session_destroy();
        return;
    }

    // for destroy sessions and send product in selected emails after payment success end



    // for sending after checkout completion mail end


    // for adding new user start
    add_action('wp_ajax_for_registration_new_user_action', 'for_registration_new_user_function');
    add_action('wp_ajax_nopriv_for_registration_new_user_action', 'for_registration_new_user_function');

    function for_registration_new_user_function()
    {
        if (isset($_POST['user_google_login'])) {
            echo "asd";
            return;
        }

        if (isset($_POST['user_login'])) {
            // print_r($_POST);
            $user = get_user_by('email', $_POST['email']);
            // print_r($user);

            if (wp_check_password($_POST['password'], $user->data->user_pass, $user->data->ID)) {
                if (is_user_logged_in())
                    wp_logout();
                clean_user_cache($user->data->ID);
                wp_clear_auth_cookie();
                wp_set_current_user($user->data->ID);
                wp_set_auth_cookie($user->data->ID, true, false);
                update_user_caches($user);
                echo site_url();
            } else {
                echo "$#no$#";
            }
            return;
        }
        // print_r($_POST);


        $user_id = wc_create_new_customer($_POST['email'], $_POST['email'], $_POST['password']);
        // echo $user_id;
        if (is_numeric($user_id)) {
            update_user_meta($user_id, "first_name", $_POST['fname']);
            update_user_meta($user_id, "last_name", $_POST['lname']);

            if (is_user_logged_in())
                wp_logout();

            clean_user_cache($user_id);
            wp_clear_auth_cookie();
            wp_set_current_user($user_id);
            wp_set_auth_cookie($user_id, true, false);

            $user = get_user_by('id', $user_id);
            update_user_caches($user);
            echo site_url();
        } else
            echo "$#no$#";
    }




    // for adding new user end




    add_filter('avatar_defaults', 'set_user_default_avatar_image');
    function set_user_default_avatar_image($avatar_defaults)
    {
        $myavatar = site_url() . '/wp-content/uploads/login/guest-user.jpg';
        $avatar_defaults[$myavatar] = "Default Gravatar";
        return $avatar_defaults;
    }



    // for change login success url start 


    add_filter('woocommerce_login_redirect', 'login_redirect');

    function login_redirect($redirect_to)
    {
        return site_url() . '/liste-de-souhaits/';
    }





    function wpdocs_theme_slug_widgets_init()
    {
        register_sidebar(array(
            'name'          => __('Footer Menu 1', 'textdomain'),
            'id'            => 'footer_menu1',
            'description'   => __('Widgets in this area will be shown on all posts and pages.', 'textdomain'),
            'before_widget' => '<li id="%1$s" class="widget %2$s">',
            'after_widget'  => '</li>',
            'before_title'  => '<h2 class="widgettitle">',
            'after_title'   => '</h2>',
        ));
        register_sidebar(array(
            'name'          => __('Footer Menu 2', 'textdomain'),
            'id'            => 'footer_menu2',
            'description'   => __('Widgets in this area will be shown on all posts and pages.', 'textdomain'),
            'before_widget' => '<li id="%1$s" class="widget %2$s">',
            'after_widget'  => '</li>',
            'before_title'  => '<h2 class="widgettitle">',
            'after_title'   => '</h2>',
        ));
        register_sidebar(array(
            'name'          => __('Footer Menu 3', 'textdomain'),
            'id'            => 'footer_menu3',
            'description'   => __('Widgets in this area will be shown on all posts and pages.', 'textdomain'),
            'before_widget' => '<li id="%1$s" class="widget %2$s">',
            'after_widget'  => '</li>',
            'before_title'  => '<h2 class="widgettitle">',
            'after_title'   => '</h2>',
        ));
        register_sidebar(array(
            'name'          => __('Footer Menu 4', 'textdomain'),
            'id'            => 'footer_menu4',
            'description'   => __('Widgets in this area will be shown on all posts and pages.', 'textdomain'),
            'before_widget' => '<li id="%1$s" class="widget %2$s">',
            'after_widget'  => '</li>',
            'before_title'  => '<h2 class="widgettitle">',
            'after_title'   => '</h2>',
        ));
        register_sidebar(array(
            'name'          => __('Copyright', 'textdomain'),
            'id'            => 'copyright',
            'description'   => __('Widgets in this area will be shown on all posts and pages.', 'textdomain'),
            'before_widget' => '<li id="%1$s" class="widget %2$s">',
            'after_widget'  => '</li>',
            'before_title'  => '<h2 class="widgettitle">',
            'after_title'   => '</h2>',
        ));
        register_sidebar(array(
            'name'          => __('Sidebar Filter', 'textdomain'),
            'id'            => 'sidebar',
            'description'   => __('Widgets in this area will be shown on all posts and pages.', 'textdomain'),
            'before_widget' => '<li id="%1$s" class="widget %2$s">',
            'after_widget'  => '</li>',
            'before_title'  => '<h2 class="widgettitle">',
            'after_title'   => '</h2>',
        ));
    }
    add_action('widgets_init', 'wpdocs_theme_slug_widgets_init');





    function custom_menu_page_removing()
    {
        // if ( get_currentuserinfo()->user_email != 'shaun@seedcreativity.co.uk' )
        remove_menu_page('plugins.php');
        remove_menu_page('index.php');
        remove_menu_page('edit.php');
        // remove_menu_page( 'upload.php' );
        remove_menu_page('edit.php?post_type=page');
        remove_menu_page('edit-comments.php');
        remove_menu_page('admin.php?page=wc-admin');
        remove_menu_page('themes.php');
        remove_menu_page('users.php');
        remove_menu_page('tools.php');
        remove_menu_page('options-general.php');
        remove_menu_page('edit.php?post_type=acf-field-group');
        remove_menu_page('admin.php?page=wc-admin&path=/analytics/overview');
    }
    add_action('admin_menu', 'custom_menu_page_removing');


    $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $pp = explode("?", (explode("/", $actual_link)[count(explode("/", $actual_link)) - 1]))[0];
    $p = explode("/", $actual_link)[count(explode("/", $actual_link)) - 1];



    if (
        in_array(
            $p,
            array(
                'index.php',
                'update-core.php',
                'edit.php',
                // 'post-new.php',
                'edit-tags.php?taxonomy=category',
                'edit-tags.php?taxonomy=post_tag',
                // 'upload.php',
                // 'media-new.php',
                'post-new.php?post_type=page',
                'edit.php?post_type=page',
                'edit-comments.php',
                'admin.php?page=getwooplugins-settings',
                'admin.php?page=wc-admin',
                'edit.php?post_type=shop_order',
                'admin.php?page=wc-reports',
                'admin.php?page=wc-settings',
                'admin.php?page=wc-status',
                'admin.php?page=wc-addons',
                'admin.php?page=wc-admin&path=%2Fcustomers',
                'edit.php?post_type=shop_coupon',
                'themes.php',
                'widgets.php',
                'nav-menus.php',
                'theme-editor.php',
                'plugins.php',
                'plugin-install.php',
                'plugin-editor.php',
                'user-new.php',
                'profile.php',
                'users.php',
                'tools.php',
                'import.php',
                'export.php',
                'site-health.php',
                'export-personal-data.php',
                'erase-personal-data.php',
                'options-general.php',
                'options-writing.php',
                'options-reading.php',
                'options-discussion.php',
                'options-media.php',
                'options-permalink.php',
                'options-privacy.php',
                'edit.php?post_type=acf-field-group',
                'edit.php?post_type=acf-field-group&page=acf-tools',
                'edit.php?post_type=acf-field-group&page=acf-settings-updates',

            )
        )
        || in_array($pp, array(
            // 'admin.php',
            'customize.php',
            'tools.php',
            // 'post-new.php',

        ))
    ) {
        wp_redirect("/");
        die;
    }

add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts()
{
    echo '<style>
        li#toplevel_page_getwooplugins {
            display: none;
        }

        li#toplevel_page_woocommerce {
            display: none;
        }

        li#toplevel_page_wc-admin-path--analytics-overview {
            display: none;
        }

        li#toplevel_page_woocommerce-marketing {
            display: none;
        } 
    </style>';
}




function wporg_add_custom_box() {
    $screens = [ 'product'];
    foreach ( $screens as $screen ) {
        add_meta_box(
            'wporg_box_id',                 // Unique ID
            'Select Video Template',      // Box title
            'wporg_custom_box_html',  // Content callback, must be of type callable
            $screen                            // Post type
        );
    }
}
add_action( 'add_meta_boxes', 'wporg_add_custom_box' );

function wporg_custom_box_html( $post ) {

    $video_temp_curl = curl_init();

curl_setopt_array($video_temp_curl, array(
   CURLOPT_URL => 'https://tekskydemo.com/abc_2.php',
   CURLOPT_RETURNTRANSFER => true,
   CURLOPT_ENCODING => '',
   CURLOPT_MAXREDIRS => 10,
   CURLOPT_TIMEOUT => 0,
   CURLOPT_FOLLOWLOCATION => true,
   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
   CURLOPT_CUSTOMREQUEST => 'GET',
));

$video_curl_response = curl_exec($video_temp_curl);

curl_close($video_temp_curl);

$get_video_temp = json_decode($video_curl_response, true);

    $value = get_post_meta( $post->ID, 'set_my_video_template', true );
    ?>
    <select name="my_video_template" id="my_video_template" class="postbox">
        <option value="">Select something...</option>

        <?php
        foreach ($get_video_temp as $get_video_temp_value) {
            ?>
               <option value="<?php echo $get_video_temp_value['id']; ?>" <?php selected( $value, $get_video_temp_value['id'] ); ?> ><?php echo $get_video_temp_value['name']; ?></option>
            <?php
        }
        ?>


    </select>
    <?php
}


function wporg_save_postdata( $post_id ) {
    if ( array_key_exists( 'my_video_template', $_POST ) ) {
        update_post_meta(
            $post_id,
            'set_my_video_template',
            $_POST['my_video_template']
        );
    }
}
add_action( 'save_post', 'wporg_save_postdata' );

add_filter('woocommerce_sale_flash', 'lw_hide_sale_flash');
function lw_hide_sale_flash()
{
return false;
}
    ?>

