    <?php session_start();

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
             <a href='#'class='profile-link woocommerce-Input' name='image' accept='image/x-png,image/gif,image/jpeg' title='Modifier l’image'>Modifier l’image</a>
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
        $location = get_option('woocommerce_store_address') . "," . get_option('woocommerce_store_address_2') . "," . get_option('woocommerce_store_city') . "," . get_option('woocommerce_store_postcode');
    ?>
        <div class="details_shop_info_main_div">
            <h1 class="details_main_title">Détails</h1>
            <div class="details_part-cover" >
                <p class="details_sub_title">
                    <b> <?php echo get_option('woocommerce_store_address'); ?> </b>
                    <?php echo get_option('woocommerce_store_address_2'); ?>
                </p>
                <a target='_blank' href="https://maps.google.com/?q=<?php echo $location; ?>">voir le plan</a>
            </div>
            <p class="details_sub_title"> <b> Lundi 4 Janvier 2022 </b> 17h00 </p>

            <button class="details_button_top">
                JE SERAI PRÉSENT !
            </button>


            <button class="details_button_bottom">
                JE NE PARTICIPE PAS
            </button>

        </div>
    <?php
    }
    // ajax for custom input feilds wc product in details tab end


    function greet_and_green_scripts()
    {

        wp_enqueue_style('h-css1', 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/css/intlTelInput.min.css', array() , '1.0' );
        wp_enqueue_script('h-js1', 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.min.js', array() , '1.0' );
        wp_enqueue_script('h-js2', 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/intlTelInput.min.js', array() , '1.0' );


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
        wp_enqueue_script('js-datatable1', 'https://cdn.datatables.net/1.12.0/js/jquery.dataTables.min.js', array() , '1.0' );
        wp_enqueue_script('js-datatable2', 'https://cdn.datatables.net/select/1.4.0/js/dataTables.select.min.js', array() , '1.0');
        wp_enqueue_style('css-datatable1', 'https://cdn.datatables.net/select/1.4.0/css/select.dataTables.min.css', array() , '1.0');
        wp_enqueue_style('css-datatable2', 'https://cdn.datatables.net/1.12.0/css/jquery.dataTables.min.css', array() , '1.0');
        // for datatable end



        
        // for invois insert email ajax start 
        wp_localize_script( 'ajax-script', 'my_ajax_object_for_invois_email_insert', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
        // for invois insert email ajax end 
    
        // for invois update table start 
        wp_localize_script( 'ajax-script', 'my_ajax_object_for_update_invoice_table', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
        // for invois update table end

        // for change product details in invois part start 
        wp_localize_script( 'ajax-script', 'my_ajax_object_for_change_product_details_in_invois', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
        // for change product details in invois part end 

        // for redirect to personalize product start 
        wp_localize_script( 'ajax-script', 'my_ajax_object_for_go_personalize_product_page', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
        // for redirect to personalize product end


        // for main filter update invoise table start
        wp_localize_script( 'ajax-script', 'my_ajax_object_for_main_filter_invoise_table', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
        // for main filter update invoise table end
        

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
        include '/woocommerce/myaccount/invois_main_html.php';
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
add_action( 'wp_ajax_display_custom_invois_email_insert_action', 'display_custom_invois_email_insert_function' );
add_action( 'wp_ajax_nopriv_display_custom_invois_email_insert_action', 'display_custom_invois_email_insert_function' );

function display_custom_invois_email_insert_function()
{
    print_r($_SESSION['current_user']->ID);
    $tmeparr = array();
    if(isset($_POST['email_for_change_guest_details']))
    {
        if(get_user_meta($_SESSION['current_user']->ID , "user_email_details"))
        {
            $arr = get_user_meta($_SESSION['current_user']->ID , "user_email_details")[0];
            foreach ($_POST['guests_details'] as $value) 
            {
                if($value != "yes")
                {
                    $tmeparr['yes'][]=array(
                        "fname" => explode("$%^$" , $value)[0],
                        "name" => explode("$%^$" , $value)[1]
                    );
                }
            }

            $arr['emails'][$_POST['email_for_change_guest_details']]['additional_guest'] = $tmeparr;

            update_user_meta($_SESSION['current_user']->ID , "user_email_details" , $arr);
        }
    }
    else
    {

    
        if(isset($_POST['delete_record']))
        {
            if(get_user_meta($_SESSION['current_user']->ID , "user_email_details"))
            {
                $arr = get_user_meta($_SESSION['current_user']->ID , "user_email_details")[0];


                foreach($arr['product_id'] as $key => $value)
                {
                    unset($arr['product_id'][$key][$_POST['delete_record']]);

                    
                }
                
                unset($arr['emails'][$_POST['delete_record']]);



                update_user_meta($_SESSION['current_user']->ID , "user_email_details" , $arr);    
                

            }
        }
        else
        {
            // print_r($_POST);
            
        
            if($_POST['additional_guest'][0]=="yes")
            {
            
                foreach ($_POST['additional_guest'] as $value) 
                {
                    if($value != "yes")
                    {
                        $tmeparr['yes'][]=array(
                            "fname" => explode("$%^$" , $value)[0],
                            "name" => explode("$%^$" , $value)[1]
                        );
                    }
                }
            }
            else
            {
                $tmeparr['no']=array();
            }
            

            if(get_user_meta($_SESSION['current_user']->ID , "user_email_details"))
            {
                $arr = get_user_meta($_SESSION['current_user']->ID , "user_email_details")[0];
                
                
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
                $arr['emails'][$_POST['user_email']]=$post_content;



                foreach($arr['product_id'] as $key => $value)
                {
                    $arr['product_id'][$key][$_POST['user_email']] = array(
                        
                            'status'=>'no',
                            // 'tags'=>'family,friend'
                        
                    );
                }

                // print_r($arr);
                
                update_user_meta($_SESSION['current_user']->ID , "user_email_details" , $arr);    
            }
        
        }
    }
    if( count( get_user_meta($_SESSION['current_user']->ID , "user_email_details")) > 0 )
	{
		get_template_part('template-parts/content' , 'update-invois-table');		
	}
}



// update invois table ajax start 

add_action( 'wp_ajax_for_update_invoice_table_action', 'for_update_invoice_table_function' );
add_action( 'wp_ajax_nopriv_for_update_invoice_table_action', 'for_update_invoice_table_function' );

function for_update_invoice_table_function()
{
    
    $arr = get_user_meta($_SESSION['current_user']->ID , "user_email_details")[0];
    $arr['product_id'][$_SESSION['invois_product_id']][$_POST['row_number']]['status'] = "yes";
    update_user_meta($_SESSION['current_user']->ID , "user_email_details" , $arr);
    if( count( get_user_meta($_SESSION['current_user']->ID , "user_email_details")) > 0 )
    {
    	get_template_part('template-parts/content' , 'update-invois-table');										
    }
    

}


// update invois table ajax start 


// for change product details in invois part start 

add_action( 'wp_ajax_for_change_product_details_in_invois_action', 'for_change_product_details_in_invois_function' );
add_action( 'wp_ajax_nopriv_for_change_product_details_in_invois_action', 'for_change_product_details_in_invois_function' );

function for_change_product_details_in_invois_function()
{
    // print_r($_POST);
    // print_r($_SESSION['cart_product_ids']);
    $temparr = array();
    $temparr2 = array();
	foreach ($_SESSION['cart_product_ids'] as $value) 
	{

		if($value == $_POST['selected_product_id'])
        {
            $temparr[] = array(
                'id' => $value,
                'name' => get_the_title($value),
                'url' => get_the_post_thumbnail_url($value),
            );
        }
        else
        {
            $temparr2[] = array(
                'id' => $value,
                'name' => get_the_title($value),
                'url' => get_the_post_thumbnail_url($value),
            );
        }
		
	}
    // print_r($temparr2);
							
    if(isset( $_POST['page']))
    {
        get_template_part('template-parts/content' , 'update-all-products-drop-down-menu' , array(
            'main_product' => $temparr[0],
            'inner_products' => $temparr2,
            'page' => 'tracking',
        ));
    }
    else
    {
        get_template_part('template-parts/content' , 'update-all-products-drop-down-menu' , array(
            'main_product' => $temparr[0],
            'inner_products' => $temparr2,
        ));
    }

    echo "$%^&*$$%^&*$";

    $_SESSION['invois_product_id'] = $_POST['selected_product_id'];

    if( count( get_user_meta($_SESSION['current_user']->ID , "user_email_details")) > 0 )
    {
    	get_template_part('template-parts/content' , 'update-invois-table');										
    }

    echo "$%^&*$$%^&*$";

    echo get_post($_SESSION['invois_product_id'])->post_content;

    echo "$%^&*$$%^&*$";

    $product = wc_get_product( $_SESSION['invois_product_id'] );

    echo $product->price;


}

// for change product details in invois part end



// for redirect to personalize product start 

add_action( 'wp_ajax_for_go_personalize_product_page_action', 'for_go_personalize_product_page_function' );
add_action( 'wp_ajax_nopriv_for_go_personalize_product_page_action', 'for_go_personalize_product_page_function' );

function for_go_personalize_product_page_function()
{
    echo get_permalink($_SESSION['invois_product_id']);
}

// for redirect to personalize product end


// for main filter update invoise table start
add_action( 'wp_ajax_for_main_filter_invoise_table_action', 'for_main_filter_invoise_table_function' );
add_action( 'wp_ajax_nopriv_for_main_filter_invoise_table_action', 'for_main_filter_invoise_table_function' );
function for_main_filter_invoise_table_function()
{
    $arr=get_user_meta($_SESSION['current_user']->ID , "user_email_details")[0];
    // print_r($arr);
    $filtered_emails = array();
    
    if( in_array("all" , $_POST['filter']) || ( in_array("sent" , $_POST['filter']) && in_array("notsent" , $_POST['filter']) ) || count($_POST['filter'])==0 )
    {
        // echo $_SESSION['invois_product_id'];
        foreach ($arr['product_id'][$_SESSION['invois_product_id']] as $key => $value) {
            $filtered_emails[] = $key;
        }
    }
    else if( in_array("sent" , $_POST['filter']) && !in_array("notsent" , $_POST['filter']) )
    {
        foreach ($arr['product_id'][$_SESSION['invois_product_id']] as $key => $value) {
            if($value['status'] == "yes")
                $filtered_emails[] = $key;
        }
    }
    else if( !in_array("sent" , $_POST['filter']) && in_array("notsent" , $_POST['filter']) )
    {
        foreach ($arr['product_id'][$_SESSION['invois_product_id']] as $key => $value) {
            if($value['status'] == "no")
                $filtered_emails[] = $key;
        }
    }
    
    get_template_part('template-parts/content' , 'update-invois-table' , array(
        'filtered_emails' => $filtered_emails,
    ));
}
// for main filter update invoise table end



// add menu option for input packages rates start

add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts() {
  ?>
  <style>
      body{
          /* background-color : yellow; */
          
      }
  </style>
  <?php
}

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
            if(update_option("package_details" , $arr_value ))
            {
                echo "<p class='packages_update_success_msg'> Your value is added successfully!! </p>";
            }
            
    
        }
    }

	// echo 'What is up?'.get_current_user_id();
    $arr = get_option("package_details" );

   

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




// add menu option for input packages rates end




// user invois section end 





    ?>