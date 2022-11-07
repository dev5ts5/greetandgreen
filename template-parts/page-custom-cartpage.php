<?php 
/* Template Name: Custom Account Cart */ 

?>
<?php get_header(); ?>


  <body class="client_progress_projects">

    <!-- if script not working -->
     <noscript>
        <div class="no-script-msg">Javascript is disabled in your browser. Some functionalities will not work properly. Please enable it.</div>
    </noscript>
     <!-- Main -->
     <main class="main-cover">
      <!-- client progress projects -->
         <section class="client-area-main">
            <div class="container">
               <div class="green_dashboard_navigation">
                  <ul class="dashboard-nav">
                     <li class="dashboard-nav-list wishlist-icon">
                        <a href="https://tekskydemo.com/wp/greet-and-green/mon-compte-wishlist/" class="dashboard-nav-title">Wishlist</a>
                     </li>
                     <li class="dashboard-nav-list projects-icon rrr active">
                        <a href="https://tekskydemo.com/wp/greet-and-green/project-in-course/" class="dashboard-nav-title">Projets en Cours</a>
                     </li>
                     <li class="dashboard-nav-list sending-icon">
                        <a href="client-shipping.html" class="dashboard-nav-title">Envois</a>
                     </li>
                     <li class="dashboard-nav-list returns-icon">
                        <a href="client-tracking-returns.html" class="dashboard-nav-title">Suivi et Retours</a>
                     </li>
                  </ul>
               </div>
               <div class="green_dashboard_wishlist">
                  <div class="product-row">
                  <?php
                    global $woocommerce;
                    $items = $woocommerce->cart->get_cart();
                        foreach($items as $item => $values) { 
                            $_product =  wc_get_product( $values['data']->get_id() );
                            //product image
                            $getProductDetail = wc_get_product( $values['product_id'] );
                            ?>
                            <div class="product-main-cover">
                                <div class="product-cover">
                                <div class="product-imgage-cover">
                                    <a href="#" class="product-image theme-img">
                                        <?php echo $getProductDetail->get_image(); // accepts 2 arguments ( size, attr ) ?>
                                    </a>
                                    <div class="product-name">
                                        <h3 class="product-name-title"><a href="#" class="product-name-a"><?php echo $_product->get_title(); ?></a></h3>
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
                                        <a href="#" class="theme-btn-secound" title="Continuer le Design">Continuer le Design</a>
                                    </div>
                                </div>
                                </div>
                            </div>   
                            <?php
                        }
                    ?>
                     <!-- end main_cover -->
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

  </body>
</html>
<?php
get_footer();
?>
