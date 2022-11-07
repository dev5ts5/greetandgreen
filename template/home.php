<?php 
/* Template Name: Home page */ 

get_header(); 

$site_url = get_site_url();

$featured_posts = get_field('product_select');
$call_to_options_page = get_field('page-link');
$call_option_first_icon = get_field('call_action_first_column-icon');
$call_option_first_heading = get_field('call_action_first_column_heading');
$call_option_first_content = get_field('call_action_first_column_content');
$call_option_second_icon = get_field('call_action_second_column-icon');
$call_option_second_heading = get_field('call_action_second_column_heading');
$call_option_second_content = get_field('call_action_second_column_content');
$call_option_third_icon = get_field('call_action_third_column-icon');
$call_option_third_heading = get_field('call_action_third_column_heading');
$call_option_third_content = get_field('call_action_third_column_content');
$call_option_fourth_icon = get_field('call_action_fourth_column-icon');
$call_option_fourth_heading = get_field('call_action_fourth_column_heading');
$call_option_fourth_content = get_field('call_action_fourth_column_content');

$product_vedio = get_field('video_group');
$product_category = get_field('product_category');


   foreach( $featured_posts as $featured_post ): 
         $product_id = $featured_post->ID;
   endforeach;

    $product = new WC_product($product_id);
    $attachment_ids = $product->get_gallery_image_ids();
?>
   <main class="main-cover">
         <!-- choose my model -->
         <section class="choose-section">
            <div class="container">
               <div class="choose-row">
                  <div class="choose-left">
                     <div class="choose-main-image">
                        <?php
                           foreach( $attachment_ids as $attachment_id ) 
                           {
                             // Display the image URL
                             $Original_image_url = wp_get_attachment_url( $attachment_id );
                             ?>
                              <div class="theme-img main-banner video-icon" title="Greet & Green">
                                 <img src="<?php echo $Original_image_url; ?>" alt="Greet & Green">
                              </div>
                             <?php
                           }
                        ?>
                     </div>
                     
                     <div class="choose-secound-image">
                     <?php
                           foreach( $attachment_ids as $attachment_id ) 
                           {
                             $Original_image_url = wp_get_attachment_url( $attachment_id );
                             ?>
                              <div class="theme-img secound-banner" title="Greet & Green">
                                 <img src="<?php echo $Original_image_url; ?>" alt="Greet & Green">
                              </div>
                             <?php
                           }
                        ?>
                     </div>
                  </div>
                  <div class="choose-right">
                     <div class="choose-right-cover">
                        <?php
                           if( $featured_posts ): ?>
                              <?php foreach( $featured_posts as $featured_post ): 
                                    $permalink = get_permalink( $featured_post->ID );
                                    $title = get_the_title( $featured_post->ID );
                                    $product_desc = get_the_content( $featured_post->ID );                             
                                 ?>
                                 <h1 class="choose-title"><?php echo $title; ?></h1>
                                 <p class="choose-dec"><?php echo $featured_post->post_content; ?></p>
                                 <a href="<?php echo $permalink; ?>" class="theme-btn choose-btn popup-opener" data-popup-id="choosepopup" data-overlay="true">JE CHOISIS MON MODÈLE</a>
                              <?php endforeach; ?>
                        <?php endif; ?>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- /choose my model -->

         <!-- call to action -->
         <section class="call-action-section">
            <div class="container">
               <div class="call-action-row">
                  <div class="call-action-col">
                     <div class="call-action-cover">
                        <div class="call-action-title acces">
                           <h2 class="action-title"><?php echo $call_option_first_heading;?></h2>
                        </div>
                        <p class="call-action-dec">
                        <?php echo $call_option_first_content;?>
                        </p>
                     </div>
                  </div>
                  <div class="call-action-col">
                     <div class="call-action-cover">
                        <div class="call-action-title technologie">
                           <h2 class="action-title"><?php echo $call_option_second_heading;?></h2>
                        </div>
                        <p class="call-action-dec">
                           <?php echo $call_option_second_content;?>
                        </p>
                     </div>
                  </div>
                  <div class="call-action-col">
                     <div class="call-action-cover">
                        <div class="call-action-title selection">
                           <h2 class="action-title"><?php echo $call_option_third_heading;?></h2>
                        </div>
                        <p class="call-action-dec">
                           <?php echo $call_option_third_content;?>
                        </p>
                     </div>
                  </div>
                  <div class="call-action-col">
                     <div class="call-action-cover">
                        <div class="call-action-title rapide">
                           <h2 class="action-title"><?php echo $call_option_fourth_heading;?></h2>
                        </div>
                        <p class="call-action-dec">
                           <?php echo $call_option_fourth_content;?>
                        </p>
                     </div>
                  </div>
               </div>
               <a href="<?php echo $call_to_options_page; ?>" class="theme-btn call-action-btn">CALL TO ACTION</a>
            </div>
         </section>
         <!-- /call to action -->

         <!-- discover our universes -->
         <section class="universes-section">
            <div class="container">
               <h2 class="main-title">Découvrez nos univers</h2>
               <ul class="universes-image">
                  <?php
                  if( $product_category ): ?>
                      
                      <?php foreach( $product_category as $term ): 

                        $term_slug    = $term->slug;
                        $taxonomy     = 'product_cat';
                        $term_id      = get_term_by( 'slug', $term_slug, $taxonomy )->term_id;
                        $thumbnail_id = get_woocommerce_term_meta( $term_id, 'thumbnail_id', true );
                        $image        = wp_get_attachment_url( $thumbnail_id );

                        ?>
                        <li class="universes-image-list">
                              <a href="<?php echo esc_url( get_term_link( $term ) ); ?>" class="theme-img">
                                 <img src="<?php echo $image; ?>" alt="mariage">
                                 <p class="universes-image-title"><?php echo $term->name;?></p>
                              </a>
                           </li>
                        
                      <?php endforeach; ?>
                  
                  <?php endif; ?>
               </ul>
            </div>
         </section>
         <!-- /discover our universes -->

         <!-- testimonials -->
         <section class="testimonials-section" id="testimonials">
            <div class="container">
               <h2 class="main-title">Témoignages</h2>
               <div class="testimonials-row">
                  <?php
                     $args = array(  
                      'post_type' => 'testimonials',
                      'post_status' => 'publish', 
                      'orderby' => 'title', 
                      'order' => 'ASC',
                  );
              
                  $loop = new WP_Query( $args ); 
                      
                  while ( $loop->have_posts() ) : $loop->the_post(); 
                  
                      $featured_img = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID));
                      ?>
                              <div class="testimonials-col">
                            <div class="testimonials-cover">
                               <div class="testimonials-contain">
                                  <div class="test-name-row">
                                     <div class="theme-img">
                                        <img src="<?= $featured_img['0']; ?>" alt="testimonials">
                                     </div>
                                     <div class="test-name-cover">
                                        <h3 class="test-name"><?= the_title(); ?></h3>
                                        <p class="test-time"><?= the_excerpt(); ?></p>
                                     </div>
                                  </div>
                                  <ul class="test-review-cover">
                                     <li class="test-review active">review</li>
                                     <li class="test-review active">review</li>
                                     <li class="test-review active">review</li>
                                     <li class="test-review active">review</li>
                                     <li class="test-review active">review</li>
                                  </ul>
                               </div>
                               <p class="testimonials-dec"><?= the_content(); ?></p>
                            </div>
                         </div>
                      <?php   
                  endwhile;
              
                  wp_reset_postdata(); 
       
                   ?>
                 
               </div>
            </div>
         </section>
         <!-- /testimonials -->

         <!-- Our best-sellers -->
         

         <section class="best-sellers-section">
            <div class="container">
               <h2 class="main-title">Nos best-sellers</h2>
               <div class="product-row best-sellers-row">
               <?php
                     $args = array(
                        'post_type' => 'product',
                        'meta_key' => 'total_sales',
                        'orderby' => 'meta_value_num',
                        'posts_per_page' => -1,
                     );
                     $loop = new WP_Query( $args );
                     while ( $loop->have_posts() ) : $loop->the_post(); 
                     global $product; ?>
                           <div class="product-main-cover best-sellers-col">
                              <div class="product-cover">
                                 <div class="product-imgage-cover">
                                    <a href="<?php the_permalink(); ?>" class="product-image theme-img">
                                       <!-- <img src="assets/images/product-1.png" alt="product"> -->
                                       <?php echo get_the_post_thumbnail($loop->post->ID, 'shop_catalog'); ?>
                                    </a>
                                    <div class="product-name">
                                       <h3 class="product-name-title"><a href="<?php the_permalink(); ?>" class="product-name-a"><?php the_title(); ?></a></h3>
                                       <div class="product-social">
                                          <div class="social-icon-cover">
                                             <a href="#" class="product-share">share</a>
                                             <div class="social_icon">
                                                <div class="jssocials-share jssocials-share-facebook"><a target="_blank" href="https://facebook.com/sharer/sharer.php?u=<?php the_permalink();?>" class="jssocials-share-link"><i class="fpd-icon-share-facebook jssocials-share-logo"></i></a><div class="jssocials-share-count-box jssocials-share-no-count"><span class="jssocials-share-count"></span></div></div>
                                                <div class="jssocials-share jssocials-share-twitter"><a target="_blank" href="https://twitter.com/share?url=<?php the_permalink();?>" class="jssocials-share-link"><i class="fpd-icon-share-twitter jssocials-share-logo"></i></a><div class="jssocials-share-count-box jssocials-share-no-count"><span class="jssocials-share-count"></span></div></div>
                                                <div class="jssocials-share jssocials-share-email"><a target="_self" href="mailto:?subject=Check%20out%20my%20design!&amp;body=<?php the_permalink();?>" class="jssocials-share-link"><i class="fpd-icon-share-mail jssocials-share-logo"></i></a><div class="jssocials-share-count-box jssocials-share-no-count"><span class="jssocials-share-count"></span></div></div>
                                             </div>
                                          </div>
                                          <a href="#" class="product-wishlist">wishlist</a>
                                       </div>
                                       
                                    </div>
                                 </div>
                                 <div class="product-bottom">
                                    <span class="product-tag call-action">call to action</span>
                                    <div class="product-btn">
                                       <a href="<?php the_permalink(); ?>" class="theme-btn-secound voir-btn" title="Voir">Voir</a>
                                       <a href="<?php the_permalink(); ?>" class="theme-btn-secound" title="Personnaliser">Personnaliser</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                     
                     <?php endwhile; ?>
                     <?php wp_reset_query(); ?>
                  
               </div>
            </div>
         </section>
         <!-- /Our best-sellers -->

         <!-- Concept & Engagement -->
         <?php
            $concept_eng_heading = get_field('concept_and_engagement');
            $concept_eng_first = get_field('concept_and_engagement_first');
            $concept_eng_second = get_field('concept_and_engagement_second');
            $concept_eng_third = get_field('concept_and_engagement_third');
            $concept_eng_fourth = get_field('concept_and_engagement_fourth');
            $gnsm_section_text = get_field('gnsm_section_text');
         ?>
         <section class="concept-section">
            <div class="container">
               <h2 class="main-title"><?php echo $concept_eng_heading; ?></h2>
               <div class="concept-top">
                  <div class="concept-cover">
                     <p class="concept-dec"><?php echo $concept_eng_first; ?></p>
                  </div>
                  <div class="concept-cover">
                     <p class="concept-dec"><?php echo $concept_eng_second; ?></p>
                  </div>
                  <div class="concept-cover">
                     <p class="concept-dec"><?php echo $concept_eng_third; ?></p>
                  </div>
                  <div class="concept-cover">
                     <p class="concept-dec"><?php echo $concept_eng_fourth; ?></p>
                  </div>
               </div>
               <div class="concept-bottom">
                  <span class="concept-trees">trees shape</span>
                  <div class="concept-contain">
                     <p class="concept-bottom-dec"><?php echo $gnsm_section_text; ?></p>
                     <img src="https://dev.greetandgreen.com/wp-content/uploads/2022/07/gnsa.png" alt="gnsa">
                  </div>
                  <div class="concept-trees-con">
                     <p class="trees-con-dec"><span>184</span>arbres préservés en <strong> 2022</strong></p>
                  </div>
               </div>
            </div>
         </section>
         <!-- /Concept & Engagement -->
     </main>
<?php

get_footer();

?>