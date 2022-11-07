<?php
/**
 * Edit account form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-edit-account.php.
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

defined( 'ABSPATH' ) || exit;

do_action( 'woocommerce_before_edit_account_form' ); 

     $user_id = get_current_user_id(); 
     $birthdate = 'birthday_field'; 
     $user_phone = 'user_phone'; 
     $single = true; 
     $user_last = get_user_meta( $user_id, $birthdate, $single ); 
     $user_phone_no = get_user_meta( $user_id, $user_phone, $single ); 
    //  echo $user_last." ".$user_phone_no; 
    //  echo $user_phone_no; 

?>
<section class="client-edit-profile">
               <div class="dashboard_container container">
  <div class="client-heading">
                     <h2 class="main-title">Editer le profil</h2>
    </div>  
<form class="woocommerce-EditAccountForm edit-account client-edit-form" action="" method="post" <?php do_action( 'woocommerce_edit_account_form_tag' ); ?> >
<div class="edit-profile-form">
	<?php do_action( 'woocommerce_edit_account_form_start' ); ?>

	
	<div class="client-edit-group">
		<div class="form-group">
			<label class="input-lable" for="account_first_name"><?php esc_html_e( 'PRÉNOM', 'woocommerce' ); ?><span class="required">*</span></label>
			<input type="text" placeholder="PRÉNOM" class="form-input woocommerce-Input woocommerce-Input--text input-text" name="account_first_name" id="account_first_name" autocomplete="given-name" value="<?php echo esc_attr( $user->first_name ); ?>">
		</div>
		<div class="form-group">
			<label class="input-lable" for="account_last_name"><?php esc_html_e( 'NOM', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
			<input type="text" placeholder="NOMS" class="form-input woocommerce-Input woocommerce-Input--text input-text" name="account_last_name" id="account_last_name" autocomplete="family-name" value="<?php echo esc_attr( $user->last_name ); ?>">
		</div>
	</div>
	
	<div class="form-group woocommerce-form-row woocommerce-form-row--wide form-row-wide">
		<label class="input-lable"><?php esc_html_e( 'E-MAIL', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
		<input type="email" placeholder="E-mail" class="form-input woocommerce-Input woocommerce-Input--email input-text" name="account_email" id="account_email" autocomplete="email" value="<?php echo esc_attr( $user->user_email ); ?>">
	</div>


	<div class="form-group woocommerce-form-row woocommerce-form-row--wide form-row1 form-row-wide">
		<label class="input-lable" for="account_birthday"><?php esc_html_e( 'DATE DE NAISSANCE', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
		<input type="date" class="woocommerce-Input woocommerce-Input--text input-text" name="birthday_field" id="birthday_field" value="<?php echo get_user_meta( get_current_user_id(), 'birthday_field', true ); ?>"/>
	</div>

	<div class="form-group woocommerce-form-row woocommerce-form-row--wide form-row1 form-row-wide">
		<label class="input-lable" for="user_phone"><?php esc_html_e( 'TELEPHONE PORTABLE', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
		<input type="text" class="woocommerce-Input woocommerce-Input--text input-text form-input" placeholder="06 72 40 02 07" name="user_phone" id="user_phone" value="<?php echo get_user_meta( get_current_user_id(), 'user_phone', true ); ?>"/>
	</div>

	<div class="form-group password-icon">
		<label class="input-lable" for="password_1"><?php esc_html_e( 'MOT DE PASSE', 'woocommerce' ); ?></label>
		<input type="password" placeholder="MOT DE PASSE" class="form-input woocommerce-Input woocommerce-Input--password input-text" name="password_1" id="password_1" autocomplete="off">
	</div>

	<?php do_action( 'woocommerce_edit_account_form' ); ?>

	<div class="from-link custom_profile_section">
		<?php wp_nonce_field( 'save_account_details', 'save-account-details-nonce' ); ?>		
		<button type="submit" class="woocommerce-Button button theme-btn popup-opener1" title="ajouter un contact" data-popup-id="form-save" data-overlay="true" name="save_account_details" value="<?php esc_attr_e( 'Save changes', 'woocommerce' ); ?>">ENREGISTRER LES CHANGEMENTS</button>
		<input type="hidden" name="action" value="save_account_details" />

</div>
	<?php do_action( 'woocommerce_edit_account_form_end' ); ?>
</div>

</form>
			   </div>
</section>
<!--client edite profile popup  -->
<div class="popup-cover-main client-edit-popup cs-popup" data-popup="form-save">
      <div class="popup-header">
         <h2 class="main-title">Changements enregistrés</h2>
      </div>
     </div>
     <!--client edite profile popup  -->

      <!-- overlay -->
      <div class="overlay">overlay</div>
<script>
	jQuery(document).ready(function(){
		jQuery(".profile-link").on('click',function(){
			jQuery(".custom_user_image").click();
		});
		jQuery(".profile_save_btn").on('click',function(){
			jQuery(".custom_profile_section button").click();
		});

		// mobile number with country flag
		var input = document.querySelector("#user_phone");
		intlTelInput(input, {
			initialCountry: "auto",
			geoIpLookup: function (success, failure) {
				$.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
					var countryCode = (resp && resp.country) ? resp.country : "us";
					success(countryCode);
				});
			},
		});
	});
	
</script>

<?php do_action( 'woocommerce_after_edit_account_form' ); ?>
