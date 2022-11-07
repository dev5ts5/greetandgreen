<?php session_start();
/**
 * My Account Dashboard
 *
 * Shows the first intro screen on the account dashboard.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/dashboard.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 4.4.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$allowed_html = array(
	'a' => array(
		'href' => array(),
	),
);
global $woocommerce;


$_SESSION['current_user_main'] = $current_user;

// for invois section end

?>
     <!-- Main -->
     <main class="main-cover">
     <!-- client-dashboard -->
     <section class="client-dashboard">
		 <div class="dashboard_container container">
			<div class="green_dashboard_navigation">
			<?php
			$user = wp_get_current_user();
			$user_id = $user->ID;
			$attachment_id = get_user_meta($user_id, 'image', true);
			$original_image_url = wp_get_attachment_url($attachment_id);
			$site_url =  get_site_url();
                    
                  ?>
			</div>
			<div class="dashboard_section">
				<div class="dashboard_details">
					<div class="user_img theme-img">
						<img src="<?php echo $original_image_url; ?>" alt="user-icon">
					</div>
					<div class="das_user_name">
						<h2 class="main-title"><?php echo $current_user->display_name;?></h2>
						<p class="user_line">Voici un résumé de vos projets sur Greet & Green</p>
					</div>
				</div>
				<div class="client-dashboard-card">
					<div class="dashboard_inner">
						<div class="dashborad_card">
							<div class="card_heading">
								<h2 class="card-title">WISHLIST</h2>
							</div>
							<div class="card_content">
								<div class="card_text wishlish-icon">
									<p class="card-des"><span><?php echo YITH_WCWL()->count_products(); ?></span>MODÈLES és à la wishlist</p>
								</div>
								<a href="<?php echo "http://" . $_SERVER['SERVER_NAME'] ."/liste-de-souhaits/";?>" class="theme-btn-secound" title="Consulter La wishlist">Consulter La wishlist</a>
							</div>
						</div>
					</div>
					<div class="dashboard_inner">
						<div class="dashborad_card">
							<div class="card_heading">
								<h2 class="card-title">PROJETS EN COURS</h2>
							</div>
							<div class="card_content">
								<div class="card_text projects-icon">
									<p class="card-des"><span><?php echo $woocommerce->cart->cart_contents_count;?></span>  PROJETS en cours de réalisation</p>
								</div>
								<a href="<?php echo $site_url."/mon-compte/cart-product/";?>" class="theme-btn-secound" title="Voir Les Projets En Cours">Voir Les Projets En Cours</a>

							</div>
						</div>
					</div>
					<div class="dashboard_inner">
						<div class="dashborad_card">
							<div class="card_heading">
								<h2 class="card-title">SUIVI</h2>
							</div>
							<div class="card_content">
								<div class="card_text sending-icon">
									<p class="card-des"><span>1 PROJET</span> en cours d’envoi</p>
								</div>
								<a href="" class="theme-btn-secound" title="Suivre Les Envois">Suivre Les Envois</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		 </div>
      </section>
		 <!-- client-dashboard -->
     </main>

     <!-- Optional JavaScript -->
     <script src="assets/js/jquery-2.2.4.min.js"></script>
     <script src="assets/js/slick.js"></script>
     <script src="assets/js/custom.js"></script>

  </body>
</html>

<?php	
		
	$bag_products = '<ul>';

    foreach( WC()->cart->get_cart() as $cart_item ){
        $product = wc_get_product( $cart_item['product_id'] );
        $bag_products .= '<li>'. $product->get_image() .'<a href="' . $product->get_permalink() . '">' . $product->get_title() . '</a></li>';
    }

    $bag_products .= '</ul>';
	echo $bag_product;

	/**
	 * My Account dashboard.
	 *
	 * @since 2.6.0
	 */
	do_action( 'woocommerce_account_dashboard' );

	/**
	 * Deprecated woocommerce_before_my_account action.
	 *
	 * @deprecated 2.6.0
	 */
	do_action( 'woocommerce_before_my_account' );

	/**
	 * Deprecated woocommerce_after_my_account action.
	 *
	 * @deprecated 2.6.0
	 */
	do_action( 'woocommerce_after_my_account' );

/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
