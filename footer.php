<?php
/**
 * Footer template partial
 *
 * @package Botega_Scratch_Theme
 *
 */
$site_url = get_site_url();


?>
  <!-- Footer -->
  <div id="save_cards_details_html">
  </div>
  <footer class="footer">
        <div class="footer-top">
         <div class="container">
            <div class="footer-row">
               <div class="footer-col footer-link">
               <ul class="footer-cover">
                  <?php dynamic_sidebar('footer_menu1'); ?>
               </ul>
               <ul class="footer-cover">
                  <?php dynamic_sidebar('footer_menu2'); ?>
               </ul>
               
               </div>
               <div class="footer-col footer-logo">
                  <a href="" class="footer_logo" title="Greet & Green">
                        <?php dynamic_sidebar('footer_menu3'); ?>
                     <span class="font-none">Greet & Green</span>
                  </a>
               </div>
               <div class="footer-col newsletter-col">
                  <div class="footer-newsletter">
                     <form class="footer-form">
                        <label class="news-lable">INSCRIVEZ-VOUS À LA NEWSLETTER !</label>
                        <div class="footer-input">
                           <?php dynamic_sidebar('footer_menu4'); ?>
                        </div>
                     </form>
                  </div>
                  <div class="fooer-social">
                     <ul class="social-cover">
                        <li class="social-list"><a href="#" class="social-title facebook">facebook</a></li>
                        <li class="social-list"><a href="#" class="social-title instagram">instagram</a></li>
                        <li class="social-list"><a href="#" class="social-title pinterest">pinterest</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
        </div>
        <div class="footer-bottom">
            <p class="copyright-text"><?php dynamic_sidebar('copyright'); ?></p>
        </div>
     </footer>

     <script>
      jQuery(".tnp-email").attr("placeholder", "E-mail");
      jQuery(".footer-input .tnp-submit").attr("value", "INSCRIPTION");
      
     </script>

<?php wp_footer(); ?>

</body>
</html>