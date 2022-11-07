<?php session_start();

/**
 * Template Name: Invoise
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/invois_main_html.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */


 // for invois section start






// $_SESSION['cart_product_ids'] = array();
// $cart_products_ids = array();
// foreach( WC()->cart->get_cart() as $cart_item_key => $cart_item )
// {
// 	$cart_products_ids['product_id'][$cart_item['product_id']] = array();
// 	// for display products dropdown set product ids
// 	$_SESSION['cart_product_ids'][] = $cart_item['product_id'];
	
// }


// if(!get_user_meta($_SESSION['current_user_main']->ID , "user_email_details"))
// {
// 	$cart_products_ids['emails'] = array();
// 	add_user_meta($_SESSION['current_user_main']->ID , "user_email_details" , $cart_products_ids );
// }
// else
// {
// 	$arr = get_user_meta($_SESSION['current_user_main']->ID , "user_email_details");	
// }

// $_SESSION['current_user'] = $_SESSION['current_user_main'];
// $_SESSION['invois_product_id'] = $_SESSION['cart_product_ids'][0];






$_SESSION['current_user_main'] =  wp_get_current_user();
$_SESSION['cart_product_ids'] = array();
$cart_products_ids = array();

// $cart_products_ids['order_generated'] = array();

foreach( WC()->cart->get_cart() as $cart_item_key => $cart_item )
{
	$cart_products_ids['product_id'][ $cart_item['product_id']."(*)".$_SESSION['unique_product_number'] ] = array();
	// $cart_products_ids['product_id'][ $cart_item['product_id'] ] = array();
	
    // for display products dropdown set product ids
	$_SESSION['cart_product_ids'][] = $cart_item['product_id'];
	
}

echo "<pre>";
print_r($cart_products_ids['product_id']);
echo "</pre>";

echo "<br>===========<br>";


// add product details if it is not available in database start
if(!get_user_meta($_SESSION['current_user_main']->ID , "user_email_details"))
{
	$cart_products_ids['emails'] = array();
    
	add_user_meta($_SESSION['current_user_main']->ID , "user_email_details" , $cart_products_ids );
}
else
{
	$arr = get_user_meta($_SESSION['current_user_main']->ID , "user_email_details");	
}

$_SESSION['current_user'] = $_SESSION['current_user_main'];
if(isset( $_SESSION['cart_product_ids'][0] ))
    $_SESSION['invois_product_id'] = $_SESSION['cart_product_ids'][0];



echo "<pre>";
print_r($arr[0]);
echo "</pre>";

// die();






if( isset($arr) )
{
    if( count($arr) > 0 )
    {
        if( isset( $_SESSION['invois_product_id'] ) )
        {
            if( ! array_key_exists( $_SESSION['invois_product_id'] . "(*)". $_SESSION['unique_product_number'] , $arr[0]['product_id'] ) )
            {
                $arr = $arr[0];
                foreach ($arr['emails'] as $key => $value)
                {
                    $arr['product_id'][ $_SESSION['invois_product_id'] . "(*)". $_SESSION['unique_product_number'] ][ $key ]['status'] = "no";
                }
                update_user_meta( $_SESSION['current_user_main']->ID , "user_email_details" , $arr  );
                
                // echo "<pre>";
                // print_r($arr);
                // echo "</pre>";
            }
        }
    }
}
// add product details if it is not available in database end






// print_r(get_coupon_codes());
?>
<?php
                    // require get_template_directory() . '/woocommerce/myaccount/my_account_navigation.php';
                  ?>
<div class="green_account_user_envois_container" > 
    <div class="green_dashboard_shipping">
        <div class="shipping_left">
            <!-- <form class="shipping-form"> -->
            <div class="shipping-form">
                <div class="form-group">
                <label class="input-lable">OBJET DE L’E-MAIL</label>
                <input type="email" placeholder="Votre objet" value="You were invited in best ENVENT!!" class="form-input" required >
                </div>
                <div class="shipping-group">
                <div class="form-group">
                    <label class="input-lable">NOM(S) À AFFICHER</label>
                    <input type="email" value="ABCD" placeholder="Nom complet" class="form-input" required >
                </div>
                <div class="form-group">
                    <label class="input-lable">E-MAIL ÉMETTEUR <i>L’adresse e-mail utilisée pour les réponses</i></label>
                    <input type="email" value="<?php echo $_SESSION['current_user']->user_email; ?>" placeholder="E-mail" class="form-input" required >
                </div>
                </div>
                <div class="form-contacts">
                <label class="input-lable">CONTACTS</label>
                <div class="form-contacts-cover">
                    <a class="theme-btn popup-opener" data-popup-id="ajoutercontact" data-overlay="true" title="ajouter un contact">AJOUTER UN CONTACT</a>
                    <div class="importer-plusieurs-cover">
                        <a class="importer-plusieurs" onclick="document.getElementById('files').click()" title="OU importer plusieurs contacts">OU importer plusieurs contacts</a>
                        <!-- <input onchange="import_files_for_emails_data()" type="file" id="files" name="files" accept=".csv , .xlsx , .txt" multiple> -->
                        
                            <input type="file" id="files" name="files" accept=".csv , .xlsx , .txt" enctype="multipart/form-data" >
                        
                        
                        <span class="importer-label">fichiers .txt, .csv ou .xls</span>
                    </div>
                </div>
                </div>
            </div>
            <!-- </form> -->
            <div class="dashboard-table-main">
                <div class="dashboard-table">
                <div class="dashboard-table-header popup-header">
                    <h2 class="popup-title user-icon">LISTE DES CONTACTS - NOM DU PROJET</h2>
                </div>
                <div class="dashboard-table-contain table-main">
                    <form class="dashboard-table-cover filter-formes">
                        <div class="dashboard-table-form">
                            <div class="form-group">
                            <select class="projet-select">
                                <option value="Action sur la sélection">Action sur la sélection</option>
                                <option value="Envoyer">Envoyer</option>
                                <option value="Supprimer">Supprimer</option>
                                <option value="Modifier">Modifier</option>
                            </select>
                            </div>
                            <a href="#" class="theme-btn-secound">APPLIQUER</a>
                        </div>
                        <div class="filter-main-cover">
                            <h3 class="category-filter-lable">FILTRER PAR :</h3>
                            <div class="filter-item-cover">
                            <div class="filter-form-row" onclick="filter_product_chkbox()">
                                <input type="checkbox" id="fil-tout" class="filter-checkbox">
                                <label for="fil-tout" class="filter-lable">TOUT</label>
                            </div>
                            <div class="filter-form-row" onclick="filter_product_chkbox()">
                                <input type="checkbox" id="fil-envoye" class="filter-checkbox">
                                <label for="fil-envoye" class="filter-lable">
                                    ENVOYÉ
                                </label>
                            </div>
                            <div class="filter-form-row" onclick="filter_product_chkbox()">
                                <input type="checkbox" id="fil-non-envoye" class="filter-checkbox">
                                <label for="fil-non-envoye" class="filter-lable">
                                    NON ENVOYÉ
                                </label>
                            </div>
                            </div>
                            <span class="table-line">180 lignes</span>
                        </div>
                    </form>
                    <form class="table-form table-invites">
                        <table id="user_email_details_table_container" class="table table-main">
                            <thead class="table-thead">
                            <tr>
                                <th class="table-checkbox">
                                    <div class="table-checkbox-cover">
                                        <input type="checkbox" onclick="invois_checked_all_users()" id="selectall">
                                    </div>
                                </th>
                                <th class="table-maile">E-MAIL</th>
                                <th class="table-prenom">PRÉNOM</th>
                                <th class="table-nom">NOM</th>
                                <th class="table-number">TÉLÉPHONE</th>
                                <th class="table-invites">INVITÉS SUPP.</th>
                                <th class="table-status">STATUT</th>
                                <th class="table-action">ACTION</th>
                                <th class="table-tag">TAGS</th>
                                <th class="table-delete-icon"></th>
                            </tr>
                            </thead>
                            <tbody id="invois_table_body_contain" class="table-tbody">
                                <?php
                                if($_SESSION['invois_product_id'] != "")
                                {
                                    if( count( get_user_meta($_SESSION['current_user']->ID , "user_email_details")) > 0 )
                                    {
                                        get_template_part('template-parts/content' , 'update-invois-table');
   
                                    }  
                                }
                                ?>

                                <!-- popup window add guests start  -->

                                <div class="popup-cover-main invites-table" >
                                    <div class="popup-header">
                                        <h2 class="popup-title user-icon">
                                            INVITÉS SUPPLÉMENTAIRES
                                        </h2>
                                        <span onclick="popup_close_for_guests_details()" class="close-icon">close-icon</span>
                                    </div>
                                    <div class="popup-contain">
                                        <h3 class="popup-title-main">
                                            {{PRÉNOM}} {{NOM}} <br>
                                            A {{NOMBRE}} INVITÉS SUPPLÉMENTAIRES
                                        </h3>
                                        <div class="popup_menu_for_add_addtional_guest_outside">
                                        
                                        </div>
                                    </div>
                                    <div class="popup-footer">
                                        <a onclick="update_guests_details_outside_btn_clk()" class="theme-btn">ENREGISTRER</a>
                                    </div>
                                </div>

                                <!-- popup window add guests end  -->


                                <!-- popup window after click on to send btn start  -->

                                <div class="popup-cover-main envoyer-model cs-popup" data-popup="envoyermodel">
                                    <div class="popup-header">
                                        <h2 class="popup-title sending-icon">
                                            POUR ENVOYER VOTRE CARTE, PROCÉDEZ AU PAIEMENT
                                        </h2>
                                        <span class="close-icon" id="invois_sent_option_close_btn" >close-icon</span>
                                    </div>
                                    <div class="popup-contain">
                                        <h3 class="main-title">Vous y êtes presque !</h3>
                                        <p class="sub-title">Votre projet est prêt à partir ? <br>
                                            Il ne vous reste plus qu’à procéder au paiement de <br>
                                            <strong> 49,99€ TTC </strong> pour envoyer à vos <strong> 10 invités.</strong></p>
                                        <div class="envoyer-package-btn">
                                            <a onclick="mail_sent_btn_clk_in_popup()" class="theme-btn">C’EST PARTI !</a>
                                        </div>
                                        <a href="client-shipping.html" class="not-immediately">Non, pas tout de suite</a>
                                    </div>
                                </div>
                                <!-- popup window after click on to send btn end  -->
                            </tbody>
                        </table>
                    </form>
                </div>
                <div class="dashboard-table-footer">
                    <div class="table-footer-cover">
                        <a href="client-address-book.html" class="theme-btn-secound">
                            <span class="tabble-btn-toutes">GÉRER TOUTES LES LISTES DE CONTACTS </span>
                            <span class="tabble-btn-ger-tous">GÉRER TOUS LES CONTACTS</span>
                        </a>
                        <div class="table-footer-icon">
                            <a href="#" class="download-icon">download</a>
                            <a href="#" class="print-icon">print</a>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        <div class="shipping_right">
            <div class="shipping-drop-icon">drop btn</div>
            <form class="shipping-right-model">
                <label class="input-lable">MODÈLE</label>
                <?php /*?>
                    <div class="invois_select_main">    

                        <?php
                        global $wpdb;
                        $user_id = wp_get_current_user();
                        $post_id = $wpdb->get_results("SELECT * FROM `gragr_envelop_preview` WHERE `User_Id` = '".$user_id->id."'");
                        $meta_value_get = json_decode($post_id[0]->Meta_Value);
                        $_SESSION['unique_product_number'] = $post_id[0]->Rnd_no;
                        ?>
                        <div onclick="open_drop_down_for_products()" id="invois_select_for_product_38" class="invois_select_for_product">
                                <div class="invois_select_image_display">
                                    <img src="<?php echo $meta_value_get->dataURL_1; ?>" alt="invois_product_image">
                                </div>
                                <div class="invois_select_name">
                                    <span> test - <?php echo $post_id[0]->Id; ?> </span>
                                </div>
                                <span id="invois_select_for_product_arraw_id" class="invois_select_for_product_arraw">
                                                            
                                </span>
                        </div>
                        <div id="invois_show_all_products_drop_down_id" class="invois_show_all_products_drop_down">
                        <?php

                        $i=0;
                        foreach ($post_id as $value) 
                        {
                            
                            $meta_value = json_decode($value->Meta_Value);
                           
                           if ($i != '0') 
                           {
                              ?>
                              <div onclick="change_product_from_dropdown('<?php echo $value->Id; ?>')" class="invois_select_for_product" id="invois_select_for_product_<?php echo $value->Id; ?>">
                                            
                                    
                                        <div class="invois_select_image_display">
                                            <img src="<?php echo $meta_value->dataURL_1; ?>" alt="invois_product_image">
                                        </div>
                                        <div class="invois_select_name">
                                            <span> Test - <?php echo $value->Id; ?> </span>
                                        </div>
                                    </div>
                              
                              <?php 
                           }
                           
                           $i++;
                        }
                        ?>
                        

                        </div>
                    

                </div>

<?php */?>

                <!-- dropdown for products start -->
                <div class="invois_select_main" >
                <?php
                    global $wpdb;
                    $user_id = wp_get_current_user();
                    $post_id = $wpdb->get_results("SELECT * FROM `gragr_envelop_preview` WHERE `User_Id` = '".$user_id->id."'");
                    $meta_value_get = json_decode($post_id[0]->Meta_Value);
                    $_SESSION['unique_product_number'] = $post_id[0]->Rnd_no;


                    $temparr = array();
                    $temparr2 = array();
                    $i = 0;
                    foreach ($post_id as $value) 
                    {
                        $meta_value = json_decode($value->Meta_Value);
                        if($i == '0')
                        {
                            $_SESSION['invois_product_id'] = $value->Post_Id;
                            $temparr[] = array(
                                'id' => $value->Id,
                                'name' => "Test-".$value->Id,
                                'url' => $meta_value->dataURL_1,
                            );
                        }
                        else
                        {
                            $temparr2[] = array(
                                'id' => $value->Id,
                                'name' => "Test-".$value->Id,
                                'url' => $meta_value->dataURL_1,
                            );
                        }
                       $i++; 
                    }
                    

                    // echo "temparr<pre>";
                    // print_r($temparr);
                    // echo "</pre><br>";

                    // echo "temparr2<pre>";
                    // print_r($temparr2);
                    // echo "</pre>";

                    if($_SESSION['invois_product_id'] != "")
                    {
                        get_template_part('template-parts/content' , 'update-all-products-drop-down-menu' , array(
                            'main_product' => $temparr[0],
                            'inner_products' => $temparr2,
                        ));
                    }
                ?>

                </div>
                <!-- dropdown for products end -->

                
                <a class="theme-btn-secound persionalize_product_btn" onclick="persionalize_product_btn_clk()" title="PERSONNALISER">PERSONNALISER</a>
            </form>
            <div class="shipping-right-rates">
                <h2 class="main-title">Tarif</h2>
                <div class="price-list price-model-con">
                <h3 class="price-list-title">MODÈLE</h3>
                <p class="price-model-number">
                    CA12345 
                    <br>
                    <div id="invois_product_description_tag" > 
                    <?php
                    // echo $_SESSION['invois_product_id'];
                    if(isset($_SESSION['invois_product_id']))
                    {
                        echo get_post($_SESSION['invois_product_id'])->post_content;
                    }
                        
                    ?>
                    </div>
                </p>
                </div>
                <div class="price-list price-number-con">
                <h3 class="price-list-title">NOMBRE DE CONTACTS</h3>
                <p class="number-count" id="number-count_id" >0</p>
                <a class="shipping-price-link popup-opener" id="package_popup_open" data-popup-id="choisir-package" data-overlay="true">Choisir un package</a>
                </div>
                <form class="price-list code-promo">
                <label class="price-list-title">CODE PROMO</label>
                <input type="text" id="promo_code_tb" placeholder="Inscrivez le code" class="form-input">
                <a onclick="apply_promo_code()" class="apply-btn">Appliquer</a>
                </form>
                <div class="price-list prix-total">
                <div class="prix-total-cover">
                    <h3 class="price-list-title">PRIX TOTAL TTC</h3>
                    <p class="total-price" id="product_price_email_template">
                        <?php
                            $product = wc_get_product( $_SESSION['invois_product_id'] );

                            
                            $arr = get_option("package_details" );

                            $p_type = get_field( "product_type", $_SESSION['invois_product_id'] );
                            
                            if($p_type == "CARTES")
                                echo (int)$product->price+(int)$arr['body']['0-10']['cartes'];
                            if($p_type == "VIDÉOS")
                                echo (int)$product->price+(int)$arr['body']['0-10']['videos'];
                            if($p_type == "CLIPS")
                                echo (int)$product->price+(int)$arr['body']['0-10']['clips'];
                            // echo "100";
                        ?>
                
                    </p>
                </div>
                <div class="prix-total-cover">
                    <a class="shipping-price-link popup-opener" data-popup-id="choisir-package" data-overlay="true">Détail de la tarification</a>
                    <a onclick="go_to_checkout_page()" class="theme-btn">PASSER AU PAIEMENT</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ajouter contact model popup -->
    <div class="popup-cover-main ajouter-contact cs-popup" data-popup="ajoutercontact">
        <div class="popup-header">
            <h2 class="popup-title users-icon">
            AJOUTER UN CONTACT
            </h2>
            <span onclick="reset_guest_number()" class="close-icon">close-icon</span>
        </div>
        <div class="popup-contain">
            <form onsubmit="return envois_email_submit_clk()" >
                <div class="ajouter-contact-form">
                    <div class="form-group ajouter-select">
                        <select class="projet-select existants-checkbox" multiple="multiple">
                            <!-- <option value="Action sur la sélection">Contacts existants</option> -->
                            <option value="n1">Nom Prénom #1</option>
                            <option value="n2">Nom Prénom #2</option>
                            <option value="n3">Nom Prénom #3</option>
                            <option value="n4">Nom Prénom #4</option>
                            <option value="n5">Nom Prénom #5</option>
                            <option value="n6">Nom Prénom #6</option>
                        </select>
                    </div>
                    <div class="div_insert_details_form">
                        <div class="form-group">
                            <input type="email" placeholder="E-mail" id="user_email" class="form-input" required >
                        </div>
                        <div class="ajouter-contact-cover">
                            <div class="form-group">
                                <input type="text" placeholder="Nom" id="user_name" class="form-input" required >
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Prénom" id="user_first_name" class="form-input" required >
                            </div>
                        </div>
                        <div class="ajouter-contact-cover">
                            <div class="form-group">
                                <input type="text" placeholder="Téléphone" id="user_telephone" class="form-input" required >
                            </div>
                            <div class="form-group invites-radio">
                                <label class="input-lable">INVITÉS SUPPLÉMENTAIRES</label>
                                <div class="ajouter-radio-cover">
                                    <!-- <input onclick="insert_additional_guest_detals_in_insert_data_popup()" type="radio" class="radio-input" id="invois_dd_additional_guests_yes" name="ajouter-radio" required > -->
                                    <input onclick="insert_additional_guest_detals_in_insert_data_popup()" type="radio" class="radio-input" id="ajouter-oui" name="ajouter-radio" required >
                                    <label class="input-lable" for="ajouter-oui">Oui</label>
                                </div>
                                <div class="ajouter-radio-cover">
                                    <!-- <input onclick="insert_additional_guest_detals_in_insert_data_popup()" type="radio" class="radio-input" id="invois_dd_additional_guests_no" name="ajouter-radio" required > -->
                                    <input onclick="insert_additional_guest_detals_in_insert_data_popup()" type="radio" class="radio-input" id="ajouter-non" name="ajouter-radio" required >
                                    <label class="input-lable" for="ajouter-non">Non</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="envoyer-package-btn">
                        <button type="submit" class="theme-btn" >ENREGISTRER ET FERMER</button>
                    </div>
                </div>
            </form>
            
            <a href="client-shipping.html" class="not-immediately">Enregistrer et ajouter</a>
        </div>
    </div>
    <!-- ajouter contact model popup -->










































				


</div>








<!-- choisir package model popup -->
<div class="popup-cover-main our-prices cs-popup" data-popup="choisir-package">
					<div class="popup-header">
						<h2 class="popup-title tag-icon">
							<span class="title-des">NOS TARIFS - NOM DU MODÈLE</span>
							<span class="title-mob">NOS FORFAITS</span>
						</h2>
						<span class="close-icon">close-icon</span>
					</div>
					<div class="popup-contain">
						<table class="table choisir-package-table">
                            <?php
                            get_template_part('template-parts/content' , 'packages-prices');
                            ?>
							
							
						</table>
						<div class="choisir-package-btn">
							<a href="#" class="theme-btn">CHOISIR CE FORFAIT</a>
						</div>
					</div>
				</div>
				<!-- choisir package model popup -->























