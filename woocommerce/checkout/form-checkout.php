<?php
/**
 * Checkout Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-checkout.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

do_action( 'woocommerce_before_checkout_form', $checkout );

// If checkout registration is disabled and not logged in, the user cannot checkout.
if ( ! $checkout->is_registration_enabled() && $checkout->is_registration_required() && ! is_user_logged_in() ) {
	echo esc_html( apply_filters( 'woocommerce_checkout_must_be_logged_in_message', __( 'You must be logged in to checkout.', 'woocommerce' ) ) );
	return;
}

?>
<form name="checkout" method="post" class="checkout woocommerce-checkout green_custom_checkout_form" action="<?php echo esc_url( wc_get_checkout_url() ); ?>" enctype="multipart/form-data">
	<div class="green_checkout_and_payment">
		<div class="green_checkout_section">
			<h1>Facturation</h1>
			<p>Editer vos informations de facturation</p>
			<?php if ( $checkout->get_checkout_fields() ) : ?>

				<?php do_action( 'woocommerce_checkout_before_customer_details' ); ?>

				<div class="col-set" id="customer_details">
					<div class="col">
						<?php do_action( 'woocommerce_checkout_billing' ); ?>
					</div>
				</div>

				<?php do_action( 'woocommerce_checkout_after_customer_details' ); ?>

			<?php endif; ?>
		</div>
			
		<div class="green_payment_section">
			<h1>Paiement</h1>
			<p>Ajouter ou modifier un moyen de paiement</p>
			<?php do_action( 'woocommerce_checkout_before_order_review_heading' ); ?>
			
			<h3 id="order_review_heading"><?php esc_html_e( 'Your order', 'woocommerce' ); ?></h3>
			
			<?php do_action( 'woocommerce_checkout_before_order_review' ); ?>

			<div id="order_review" class="woocommerce-checkout-review-order">
				<?php do_action( 'woocommerce_checkout_order_review' ); ?>
			</div>
			<div class="peyment-link">
				<!-- button success add class success -->
				<a href="" class="theme-btn-secound" title="Ajouter une Carte De Paiement">Ajouter une Carte De Paiement</a>
				<p class="peyment-text">ou</p>
				<!-- button disable add class disable -->
				<!-- button success add class success -->
				<a href="#" class="theme-btn-secound" title="ajouter un contact">EDITER / SUPPRIMER UNE CARTE DE PAIMENT</a>
			</div>

			<?php do_action( 'woocommerce_checkout_after_order_review' ); ?>
		</div>
	</div>
	<div id="order_review" class="woocommerce-checkout-review-order custom_order_place_btn">
		<?php do_action( 'woocommerce_checkout_order_review' ); ?>
	</div>
		</form>
		<script>
			jQuery(document).ready(function(){
				jQuery(".form-row").each(function(){
					jQuery(this).find(".optional").hide(); 
				});
				jQuery("#billing_address_2_field label").removeClass("screen-reader-text");
			});
		</script>

<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>
