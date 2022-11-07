<?php
/**
 * My Account navigation
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/navigation.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 2.6.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

do_action( 'woocommerce_before_account_navigation' );
?>



<div class="user-dropdown">
                         <nav class="main-menu">
                            <ul class="menu-top">



<div class="user-dropdown">
<nav class="woocommerce-MyAccount-navigation my_account_custom_menu_view main-menu" style="display: none;">
	<ul class="woo_myaccount_menu my_account_main_menu_view menu-top">	
		<?php
		foreach ( wc_get_account_menu_items() as $endpoint => $label ) : ?>
			<li class="<?php echo wc_get_account_menu_item_classes( $endpoint ); ?> menu-list">
				<a href="<?php echo esc_url( wc_get_account_endpoint_url( $endpoint ) ); ?>" class="menu-list-title profile-icon"><?php echo esc_html( $label ); ?></a>
			</li>
		<?php endforeach; ?>
	</ul>
	<ul class="menu-top">
		<li class="menu-list">
			<a href="#" class="menu-list-title projects-icon">
				Designs en cours
			</a>
		</li>
		<li class="menu-list">
			<a href="#" class="menu-list-title wishlist-icon">
				Wishlist
			</a>
		</li>
		<li class="menu-list">
			<a href="#" class="menu-list-title sending-icon">
				Envois
			</a>
		</li>
		<li class="menu-list">
			<a href="#" class="menu-list-title returns-icon">
				Suivi des retours
			</a>
		</li>
	</ul>
</nav>
</div>

<?php do_action( 'woocommerce_after_account_navigation' ); ?>
