<?php
/**
 * Template Name: Cart Product
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/cart-product.php.
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
// include 'yourtheme/woocommerce/myaccount/my-account-custom-navigation.php';
// include 'woocommerce/myaccount/my-account-custom-navigation.php';
global $woocommerce;
$items = $woocommerce->cart->get_cart();

?>
<main class="main-cover">
      <!-- client progress projects -->
         <section class="client-area-main">
            <div class="container">
                <!-- <div class="green_dashboard_navigation">
                <?php
                    require get_template_directory() . '/woocommerce/myaccount/my_account_navigation.php';
                  ?>
                </div> -->
               <div class="green_dashboard_wishlist">
                  <div class="product-row">
                      <?php
                        foreach($items as $item => $values) { 
                            $_product =  wc_get_product( $values['data']->get_id());
                            $pro_id = $values['product_id'];
                            $product_name =  $_product->get_title();
                            $pro_url = get_permalink($pro_id);
                            
                      ?>
                     <div class="product-main-cover">
                        <div class="product-cover">
                           <div class="product-imgage-cover">
                              <a href="<?php echo $pro_url; ?>" class="product-image theme-img">
                                 <?php echo wp_kses_post( $_product->get_image() ); ?>
                              </a>
                              <div class="product-name">
                                 <h3 class="product-name-title"><a href="<?php echo $pro_url; ?>" class="product-name-a"><?php echo $product_name; ?></a></h3>
                                 <div class="product-social">
                                    <a href="#" class="product-play">play</a>
                                    <a href="#" class="product-share">share</a>
                                    <a href="#" class="product-wishlist favorite">wishlist</a>
                                 </div>
                              </div>
                           </div>
                           <div class="product-bottom">
                              <span class="product-tag cours-design">EN COURS DE DESIGN</span>
                              <div class="product-btn">
                                 <a href="<?php echo $pro_url; ?>" class="theme-btn-secound" title="Continuer le Design">Continuer le Design</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <?php } ?>

                  </div>
               </div>
            </div>
         </section>
      <!-- client progress projects -->
     </main>

      <!-- overlay -->
      <div class="overlay">overlay</div>

     <!-- Optional JavaScript -->
     <script src="assets/js/jquery-2.2.4.min.js"></script>
     <script src="assets/js/slick.js"></script>
     <script src="assets/js/custom.js"></script>


