<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}


include_once($_SERVER['DOCUMENT_ROOT'] . "/config/connection.php");

$get_json_canvas_data = $conn->prepare("select * from gragr_fpd_views where ID = 47");
$get_json_canvas_data->execute();

// $canvas_arr = array();

if( $get_json_canvas_data->rowCount() == 1 )
{
	$canvas_data = $get_json_canvas_data->fetch();
	$canvas_options = json_decode($canvas_data['options'] , true);
	$canvas_arr = json_decode($canvas_data['elements'] , true);
	
	
	$html.='<div class="animation_html" id="animation_html" style="width:'.$canvas_options['stageWidth'].'px;height:'.$canvas_options['stageHeight'].'px;position:relative;">';
	$i=0;
	$source_html = str_replace("<br />","<br />+",$value['source']);
	echo $source_html;
	foreach ($canvas_arr as $key => $value) {

		// if( $i == 0 )
		// {
		// 	$html .= '<div id="card_outer_items" >';
		// }

		if ($i == 0 && $value['parameters']['scaleMode'] = 'cover') 
		{
			// code...
		}
		else
		{
		$width=$value['parameters']['width']*$value['parameters']['scaleX'];
		$height=$value['parameters']['height']*$value['parameters']['scaleY'];
		$html.='<div class="htm_contain" style="position:absolute;left:'.$value['parameters']['left'].'px;top:'.$value['parameters']['top'].'px;z-index:'.$value['parameters']['z'].';">';
		if($value['type']=='image'){
			$html.='<img src="'.$value['source'].'" style="width:'.$width.'px;height:'.$height.'px;">';
			// style="transform: scale('.$value['parameters']['scaleX'].','.$value['parameters']['scaleY'].');"
		}
		if($value['type']=='text'){
			$html.='<p style="letter-spacing: '.$value['parameters']['letterSpacing'].'px; font-style: '.$value['parameters']['fontStyle'].'; font-family: '.$value['parameters']['fontFamily'].';color: '.$value['parameters']['fill'].';text-align:'.$value['parameters']['textAlign'].';font-size:'.$value['parameters']['fontSize'].'px;">'.nl2br($value['source']).'</p>';
		}

		$html.='</div>';
		}

		$i++;

		// if( $i==2)
		// {
		// 	$html .= "</div>";
		// 	$html .= '<div id="card_inner_html" style="display:none;" > ';
		// }
	}
	//$html .= "</div>";


	$html.='</div>';
	

	// echo $html;


	// echo "<pre>";
	// print_r( $canvas_arr );
	// echo "</pre>";
	?>

<?php

	// echo "<pre>";
	// print_r($canvas_arr);
	// echo "</pre>";


}

?>

<script type="text/javascript">
	//alert("fsdf");
	// var canvas_arr_html = '<?php //echo $html; ?>';
	// 		jQuery('.my_custom_remove_class .fpd-product-stage').prepend(canvas_arr_html);
	// 		console.log(canvas_arr_html);


// 	alert("Hello");
// var fancyProductDesigner = jQuery('#test_html').data('instance');
// console.log(fancyProductDesigner);
// alert("123");
// jQuery('#16')
// .on('uiSet', function() { //wait until the ui is loaded
//   //get transalted UI module from FancyProductDesigner instance
//   var $moduleClone = fancyProductDesigner.translatedUI.find('.fpd-modules > [data-module="products"]').clone();

//   $moduleClone.appendTo($('#fhgfajdghasjddasdsadasdg')); //add module UI into custom HTML
//   new FPDProductsModule(fancyProductDesigner, $moduleClone); //init JS Module
// })
</script>
<?php
	// echo "darshan".$_SESSION['selected_customize_pro_id'];
?>
<div class="fhgfajdghasjddasdsadasdg" id="fhgfajdghasjddasdsadasdg"></div>
<div id="product-<?php the_ID(); ?>" <?php wc_product_class( '', $product ); ?>>
	<div class="product_top_bar">
		<div class="top_bar_first topbar_child">
			<div class="close_btn">
				<span class="close image_icon">close</span>
			</div>
			<div class="tootlip_btn">
				
			</div>
		</div>
		<div class="top_bar_second topbar_child">
			<ul class="product_top_menu">
				<li class="carte_menu child_menu active" onclick="opennext_tab(event, 'carte')" data-name="carte">
					<span class="carte image_icon">carte</span>
					<span class="menu_text">carte</span>
				</li>
				<li class="enveloppe_menu child_menu" onclick="opennext_tab(event, 'enveloppe')" data-name="enveloppe">
					<span class="enveloppe image_icon">enveloppe</span>
					<span class="menu_text">enveloppe</span>
				</li>
				<li class="animation_menu child_menu" onclick="opennext_tab(event, 'animation')" data-name="animation">
					<span class="animation image_icon">animation</span>
					<span class="menu_text">animation</span>
				</li>
				<li class="musique_menu child_menu" onclick="opennext_tab(event, 'musique')" data-name="musique">
					<span class="musique image_icon">musique</span>
					<span class="menu_text">musique</span>
				</li>
				<li class="details_menu child_menu" onclick="opennext_tab(event, 'details')" data-name="details">
					<span class="details image_icon">details</span>
					<span class="menu_text">details</span>
				</li>
			</ul>
		</div>
		<div class="top_bar_third topbar_child">
			<button class="top_button">suivant</button>
		</div>
	</div>	
	<div id="carte" class="tabcontent">
	<?php
	/**
	 * Hook: woocommerce_before_single_product_summary.
	 *
	 * @hooked woocommerce_show_product_sale_flash - 10
	 * @hooked woocommerce_show_product_images - 20
	 */
	do_action( 'woocommerce_before_single_product_summary' );
	?>

	<div class="summary entry-summary">
		<?php
		/**
		 * Hook: woocommerce_single_product_summary.
		 *
		 * @hooked woocommerce_template_single_title - 5
		 * @hooked woocommerce_template_single_rating - 10
		 * @hooked woocommerce_template_single_price - 10
		 * @hooked woocommerce_template_single_excerpt - 20
		 * @hooked woocommerce_template_single_add_to_cart - 30
		 * @hooked woocommerce_template_single_meta - 40
		 * @hooked woocommerce_template_single_sharing - 50
		 * @hooked WC_Structured_Data::generate_product_data() - 60
		 */
		do_action( 'woocommerce_single_product_summary' );
		?>
	</div>

	<?php
	/**
	 * Hook: woocommerce_after_single_product_summary.
	 *
	 * @hooked woocommerce_output_product_data_tabs - 10
	 * @hooked woocommerce_upsell_display - 15
	 * @hooked woocommerce_output_related_products - 20
	 */
	do_action( 'woocommerce_after_single_product_summary' );

	?></div>
	<div id="enveloppe" class="tabcontent">
	</div>
	<div id="animation" class="tabcontent">
	</div>
	<div id="musique" class="tabcontent">
	</div>
	<div id="details" class="tabcontent">
	</div>
</div>

<?php do_action( 'woocommerce_after_single_product' ); ?>
